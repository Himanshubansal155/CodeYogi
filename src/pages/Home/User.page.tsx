import { FC, memo, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { userFetchOne } from "../../actions/user.actions";
import HomeLayout from "../../components/HomeLayout";
import { SidebarSelector } from "../../selectors/sidebar.selectors";
import {
  selectedUserSelector,
  userLoadingOneSelector,
  userSelectedErrorSelector,
} from "../../selectors/users.selectors";
import { useAppSelector } from "../../store";

interface Props {}

const User: FC<Props> = () => {
  let userId = +useParams<{ userId: string }>().userId;
  const toggle = useAppSelector(SidebarSelector);
  const dispatch = useDispatch();
  const user = useAppSelector(selectedUserSelector);
  const error = useAppSelector(userSelectedErrorSelector);
  const loading = useAppSelector(userLoadingOneSelector);
  useEffect(() => {
    dispatch(userFetchOne(userId));
  }, [userId]); //eslint-disable-line
  return (
    <HomeLayout toggle={toggle.isSidebarOpen}>
      <>
        <h1 className="text-center mb-5">User</h1>

        <div className="h-96 w-72 bg-gray-600 rounded-2xl text-gray-200 mx-auto">
          {error && (
            <div className="text-white w-full flex h-full items-center">
              <p className="w-full text-center">{error}</p>
            </div>
          )}
          {user && (
            <>
              <img
                className="h-48 w-full rounded-t-2xl"
                src={user.profile_pic_url}
                onError={(e) => {
                  e.currentTarget.src =
                    "https://picsum.photos/200/300?random=" + user.id;
                }}
                alt=""
              />
              <div className="flex flex-col p-2 space-y-2">
                <h1 className="text-center">My Profile</h1>
                <span>
                  <span className="text-gray-400">Name: </span>
                  {user.first_name} {user.middle_name} {user.last_name}
                </span>
                <span>
                  <span className="text-gray-400">Email: </span>
                  {user.email}
                </span>
                <span>
                  <span className="text-gray-400">Bio: </span>
                  {user.bio}
                </span>
                <span>
                  <span className="text-gray-400">Phone: </span>
                  {user.phone_number}
                </span>
              </div>
            </>
          )}
        </div>
        <div>
          <div className="flex w-72 h-10 bg-gray-600 mx-auto mt-10 rounded-full justify-between">
            <Link
              to={"/user/" + (userId - 1)}
              className=" h-full p-1 bg-blue-600 rounded-l-full bg-opacity-25 px-5 text-white items-center flex"
            >
              Prev
            </Link>
            <Link
              to={"/user/" + (userId + 1)}
              className=" h-full p-1 bg-blue-600 rounded-r-full bg-opacity-25 px-5 text-white items-center flex"
            >
              Next
            </Link>
          </div>
        </div>
        {loading && (
          <div className="text-blue-600 text-center">
            Loading...
            <FaSpinner className="animate-spin h-5 w-5 mx-auto" />
          </div>
        )}
      </>
    </HomeLayout>
  );
};

User.defaultProps = {};

export default memo(User);
