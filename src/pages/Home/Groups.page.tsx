import { FC, memo, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { groupActions } from "../../actions/group.actions";
import { fetchGroups } from "../../api/groups";
import { groupQuerySelector, groupSelector } from "../../selectors/groups.selectors";
import { useAppSelector } from "../../store";

interface Props {}

const Groups: FC<Props> = () => {
  const history = useHistory();
  const query = useAppSelector(groupQuerySelector);
  const groups = useAppSelector(groupSelector);

  useEffect(() => {
    fetchGroups({ status: "all-groups", query }).then((groups) => {
      console.log(groups);
      
      groupActions.groupQueryCompleted(query, groups);
    });
  }, [query]);
  return (
    <div className="md:ml-60 pt-28 p-2 relative w-full mt-16 bg-blue-900 bg-opacity-10 text-center min-h-screen">
      This is Groups Page
      <div className="mt-1 relative rounded-md shadow-sm w-64 mx-auto">
        <input
          type="text"
          name="search"
          id="search"
          className="focus:ring-indigo-500 focus:border-indigo-500 w-full px-5 py-1 sm:text-sm border-gray-300 rounded-md"
          placeholder="Search"
          value={query}
          onChange={(e) => groupActions.groupQueryAction(e.target.value)}
        />
      </div>
      <div className="flex flex-col mt-10 w-96 mx-auto text-left">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Groups
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {groups &&
              groups.map((group) => (
                <tr key={"" + group.id} onClick={() => {
                  groupActions.groupSelectedIdAction(group.id);
                  history.push("/group");
                }
                }>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
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
                        <div className="text-sm text-gray-500">
                          {group.description}
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

Groups.defaultProps = {};

export default memo(Groups);
