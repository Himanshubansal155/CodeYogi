import { FC, memo } from "react";
import { FaSpinner } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { groupActions } from "../../actions/group.actions";
import HomeLayout from "../../components/HomeLayout";
import { fetchLoadingGroups } from "../../middleware/groups.middleware";
import {
  groupLoadingStateSelector,
  groupQuerySelector,
  groupSelector,
} from "../../selectors/groups.selectors";
import { SidebarSelector } from "../../selectors/sidebar.selectors";
import { useAppSelector } from "../../store";

interface Props {}

const Recordings: FC<Props> = () => {
  const history = useHistory();
  const query = useAppSelector(groupQuerySelector);
  const groups = useAppSelector(groupSelector);
  const loading = useAppSelector(groupLoadingStateSelector);
  const toggle = useAppSelector(SidebarSelector);
  return (
    <HomeLayout toggle={toggle.isSidebarOpen}>
      <>
        <div className="mt-1 relative rounded-md shadow-sm w-64 mx-auto">
          <input
            type="text"
            name="search"
            id="search"
            className="focus:ring-indigo-500 focus:border-indigo-500 w-full px-5 py-1 sm:text-sm border-gray-300 rounded-md"
            placeholder="Search"
            value={query}
            onChange={(e) =>
              fetchLoadingGroups({
                query: e.target.value,
                status: "all-groups",
              })
            }
          />

        </div>
        <div className="h-5">
          {loading && <FaSpinner className="h-5 w-5 animate-spin mx-auto" />}
        </div>
        <div className="w-96 divide-y divide-gray-200 text-left mt-10 mx-auto table-auto rounded-t-md">
          <h1 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-100">
            Groups
          </h1>
          {groups.map((group) => (
            <div
              className="w-96 mx-auto bg-white flex items-center p-4"
              key={group.id + ""}
              onClick={() => {
                groupActions.groupSelectedIdAction(group.id);
                history.push("/group");
              }}
            >
              <div className="flex-shrink-0 h-16 w-16">
                <img
                  className="h-full w-full rounded-full"
                  src={group.group_image_url}
                  alt=""
                />
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">
                  {group.id} {group.name}
                </div>
                <div className="text-sm text-gray-500">{group.description}</div>
              </div>
            </div>
          ))}{" "}
          {!loading && groups.length === 0 && <div className="text-center"> No data Found</div>}
        </div>
      </>
    </HomeLayout>
  );
};

Recordings.defaultProps = {};

export default memo(Recordings);
