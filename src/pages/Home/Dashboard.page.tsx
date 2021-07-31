import { FC, memo, useEffect, useState } from "react";
import { fetchGroups } from "../../api/groups";
import { Group } from "../../models/Group";

interface Props {}

const Dashboard: FC<Props> = () => {
  const [people, setPeople] = useState<Group[]>();
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchGroups({ status: "all-groups", query }).then((groupDetails) => {
      let index = 0;
      let arr: Group[] = [];

      groupDetails.forEach((person) => {
        arr[index] = person;
        index++;
      });

      setPeople(arr);
    });
  }, [query]);


  return (
    <div className="ml-80 mt-12">
      This is Dashboard Page
      <div className="mt-1 relative rounded-md shadow-sm w-64 ml-28">
        <input
          type="text"
          name="price"
          id="price"
          className="focus:ring-indigo-500 focus:border-indigo-500 w-full px-5 py-1 sm:text-sm border-gray-300 rounded-md"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="flex flex-col md:mx-28 mt-10 w-full">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
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
                  {people &&
                    people.map((person) => (
                      <tr id={person.name}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-16 w-16">
                              <img
                                className="h-full w-full rounded-full"
                                src={person.group_image_url}
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {person.name}
                              </div>
                              <div className="text-sm text-gray-500">
                                {person.description}
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
        </div>
      </div>
    </div>
  );
};

Dashboard.defaultProps = {};

export default memo(Dashboard);
