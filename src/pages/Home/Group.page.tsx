import { useEffect } from "react";
import { useState } from "react";
import { FC, memo } from "react";
import { fetchGroup, GROUP_SELECTED_TOKEN } from "../../api/groups";
import { Group as G } from "../../models/Group";
import { groupIdSelector } from "../../selectors/groups.selectors";
import { useAppSelector } from "../../store";

interface Props {}

const Group: FC<Props> = () => {
  let groupId = useAppSelector(groupIdSelector);
  const [groups, setGroups] = useState<G>();
  if (groupId === undefined) {
    groupId = (localStorage.getItem(GROUP_SELECTED_TOKEN) as unknown) as number;
    
  } else {
    localStorage.setItem(GROUP_SELECTED_TOKEN, groupId + "");
  }
  useEffect(() => {
    fetchGroup(groupId!).then((response) => {
      setGroups(response.data.data);
    });
  }, [groupId]);
  return (
    <div className="md:ml-60 pt-28 p-2 relative w-full mt-16 bg-blue-900 bg-opacity-10 min-h-screen">
      {groups && (
        <div className="w-96 mx-auto bg-white flex items-center p-4">
          <div className="flex-shrink-0 h-16 w-16">
            <img
              className="h-full w-full rounded-full"
              src={groups.group_image_url}
              alt=""
            />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
              {groups.id} {groups.name}
            </div>
            <div className="text-sm text-gray-500">{groups.description}</div>
          </div>
        </div>
      )}
    </div>
  );
};

Group.defaultProps = {};

export default memo(Group);
