import { FC, memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { groupFetchedCompleted } from "../../actions/group.actions";
import HomeLayout from "../../components/HomeLayout";
import { groupFetchedSelector } from "../../selectors/groups.selectors";
import { SidebarSelector } from "../../selectors/sidebar.selectors";
import { useAppSelector } from "../../store";

interface Props {}

const Group: FC<Props> = () => {
  const groupId = +useParams<{ groupId: string }>().groupId;
  const toggle = useAppSelector(SidebarSelector);
  const dispatch = useDispatch();
  const group = useAppSelector(groupFetchedSelector);
  useEffect(()=> {
    dispatch(groupFetchedCompleted(groupId));
  }, []);//eslint-disable-line
  return (
    <HomeLayout toggle={toggle.isSidebarOpen}>
      <>
        {group && (
          <div className="w-96 mx-auto bg-white flex items-center p-4">
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
        )}
      </>
    </HomeLayout>
  );
};

Group.defaultProps = {};

export default memo(Group);
