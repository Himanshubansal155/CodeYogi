import { FC, memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { userFetchOne } from "../../actions/user.actions";
import Button from "../../components/Button/Button";
import HomeLayout from "../../components/HomeLayout";
import { SidebarSelector } from "../../selectors/sidebar.selectors";
import { userFetchedSelector } from "../../selectors/users.selectors";
import { useAppSelector } from "../../store";

interface Props {}

const User: FC<Props> = () => {
  let userId = +useParams<{ userId: string }>().userId;
  const toggle = useAppSelector(SidebarSelector);
  const dispatch = useDispatch();
  const user = useAppSelector(userFetchedSelector);
  useEffect(() => {
    dispatch(userFetchOne(userId));
  }, [userId]); //eslint-disable-line
  if (!user) {
    return <div className="bg-red-600"> Loading...</div>;
  }
  return (
    <HomeLayout toggle={toggle.isSidebarOpen}>
      <>
        <h1 className="text-center mb-5">Group Page</h1>
        {user && (
          <div className="h-96 w-72 bg-gray-600 rounded-2xl text-gray-200 mx-auto">
            <img
              className="h-48 w-full rounded-t-2xl"
              src={user.profile_pic_url}
              onError={(e) => {
                e.currentTarget.src =
                  "https://source.unsplash.com/user/erondu/480x480";
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
          </div>
        )}
        <div>
          <div className="flex w-72 h-10 bg-gray-600 mx-auto mt-10 rounded-full justify-between">
            <Button
              children="Prev"
              className="rounded-l-full bg-opacity-25 px-5"
              onClick={() => {}}
            />
            <Button
              children="Next"
              className="rounded-r-full bg-opacity-25 px-5"
            />
          </div>
        </div>
      </>
    </HomeLayout>
  );
};

User.defaultProps = {};

export default memo(User);
