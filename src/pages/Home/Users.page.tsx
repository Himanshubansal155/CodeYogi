import { useEffect } from "react";
import { FC, memo } from "react";
import { FaSpinner } from "react-icons/fa";
import { HiCubeTransparent } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { userChangedAction } from "../../actions/user.actions";
import HomeLayout from "../../components/HomeLayout";
import { SidebarSelector } from "../../selectors/sidebar.selectors";
import {
  userLoadingStateSelector,
  userSelector,
} from "../../selectors/users.selectors";
import { useAppSelector } from "../../store";
import { useHistory } from "react-router-dom";

interface Props {}

const Users: FC<Props> = () => {
  const toggle = useAppSelector(SidebarSelector);
  const dispatch = useDispatch();
  const users = useAppSelector(userSelector);
  const loading = useAppSelector(userLoadingStateSelector);
  const history = useHistory();
  useEffect(() => {
    dispatch(userChangedAction());
  }, []); //eslint-disable-line

  return (
    <HomeLayout toggle={toggle.isSidebarOpen}>
      <>
        <h1 className="text-center">This is Users page</h1>
        <div className="h-5">
          {loading && <FaSpinner className="h-5 w-5 animate-spin mx-auto" />}
        </div>
        <div className="w-96 divide-y divide-gray-200 text-left mt-10 mx-auto table-auto rounded-t-md">
          <h1 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-100">
            Users
          </h1>
          {users &&
            users.map((user) => (
              <div
                className="w-96 mx-auto bg-white flex items-center p-4 cursor-pointer"
                key={user.id + ""}
                onClick={() => {
                  history.push("/user/" + user.id);
                }}
              >
                <div className="flex-shrink-0 h-16 w-16">
                  <img
                    className="h-full w-full rounded-full"
                    src={user.profile_pic_url}
                    onError={(e) => {
                      e.currentTarget.src = ("https://picsum.photos/200/300?random="+ user.id);
                    }}
                    alt=""
                  />
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900">
                    {user.first_name} {user.middle_name} {user.last_name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {user.bio} {user.phone_number}
                  </div>
                </div>
              </div>
            ))}
          {!loading && users.length === 0 && (
            <div className="text-center text-gray-500">
              <HiCubeTransparent className="text-4xl mx-auto" />
              !!!No data Found!!!
            </div>
          )}
        </div>
      </>
    </HomeLayout>
  );
};

Users.defaultProps = {};

export default memo(Users);
