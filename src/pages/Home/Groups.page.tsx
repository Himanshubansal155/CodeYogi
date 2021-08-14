import { useEffect } from "react";
import { FC, memo } from "react";
import { FaSpinner } from "react-icons/fa";
import { HiCubeTransparent } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { groupChangedAction } from "../../actions/group.actions";
import HomeLayout from "../../components/HomeLayout";
import {
  groupLoadingSelector,
  groupQuerySelector,
  groupSelector,
} from "../../selectors/groups.selectors";
import { SidebarSelector } from "../../selectors/sidebar.selectors";
import { useAppSelector } from "../../store";

interface Props {}

const Groups: FC<Props> = () => {
  const history = useHistory();
  const query = useAppSelector(groupQuerySelector);
  const groups = useAppSelector(groupSelector);
  const toggle = useAppSelector(SidebarSelector);
  const loading = useAppSelector(groupLoadingSelector);
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(groupChangedAction(""));
  }, []);//eslint-disable-line
  return (
    <HomeLayout toggle={toggle.isSidebarOpen} className="text-center">
      <>
        This is Groups Page
        <div className="mt-1 relative rounded-md shadow-sm w-64 mx-auto">
          <input
            type="text"
            name="search"
            id="search"
            className="focus:ring-indigo-500 focus:border-indigo-500 w-full px-5 py-1 sm:text-sm border-gray-300 rounded-md"
            placeholder="Search"
            value={query}
            onChange={(e) => dispatch(groupChangedAction(e.target.value))}
          />
        </div>
        <div className="h-5">
          {loading && <FaSpinner className="h-5 w-5 animate-spin mx-auto" />}
        </div>
        <div className="w-96 divide-y divide-gray-200 text-left mt-10 mx-auto table-auto rounded-t-md">
          <h1 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-100 rounded-t-md">
            Groups
          </h1>
          {groups &&
            groups.map((group) => (
              <div
                className="w-96 mx-auto bg-white flex items-center p-4"
                key={group.id + ""}
                onClick={() => {
                  history.push("/group/" + group.id);
                }}
              >
                <div className="flex-shrink-0 h-16 w-16">
                  <img
                    className="h-full w-full rounded-full"
                    src={group.group_image_url}
                    onError={(e) => {
                      e.currentTarget.src = "https://source.unsplash.com/user/erondu/480x480";
                    }}
                    alt=""
                  />
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900">
                    {group.id} {group.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {group.description}
                  </div>
                </div>
              </div>
            ))}{" "}
          {!loading && groups.length === 0 && (
            <div className="text-center text-gray-500">
              <HiCubeTransparent className="text-4xl mx-auto" />
              !!!No data Found!!!
            </div>
          )}
          <div className="w-full h-5 bg-gray-100 rounded-b-md"></div>
        </div>
      </>
    </HomeLayout>
  );
};

Groups.defaultProps = {};

export default memo(Groups);
