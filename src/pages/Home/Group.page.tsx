import { FC, memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { groupFetchOne } from "../../actions/group.actions";
import Button from "../../components/Button/Button";
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
  useEffect(() => {
    dispatch(groupFetchOne(groupId));
  }, [groupId]); //eslint-disable-line
  if (!group) {
    return <div className="bg-red-600"> Loading...</div>;
  }
  return (
    <HomeLayout toggle={toggle.isSidebarOpen}>
      <>
        <h1 className="text-center mb-5">Group Page</h1>
        {group && (
          <div className="w-96 mx-auto bg-gray-600 flex items-center rounded-md h-28">
            <div className="flex-shrink-0 h-full w-28">
              <img
                className="h-full w-full rounded-l-md"
                src={group.group_image_url}
                onError={(e) => {
                  e.currentTarget.src = "https://source.unsplash.com/user/erondu/480x480";
                }}
                alt=""
              />
            </div>
            <div className="ml-4 p-3">
              <div className="text-sm font-medium text-gray-300">
                {group.name}
              </div>
              <div className="text-sm text-gray-300">{group.description}</div>
            </div>
          </div>
        )}
        <div>
          <div className="flex w-96 h-10 bg-gray-600 mx-auto mt-10 rounded-full justify-between">
            <Button
              children="Prev"
              className="rounded-l-full bg-opacity-25 px-5"
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

Group.defaultProps = {};

export default memo(Group);
