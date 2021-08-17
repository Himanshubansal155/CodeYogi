import { FC, memo, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { groupFetchOne } from "../../actions/group.actions";
import HomeLayout from "../../components/HomeLayout";
import {
  groupCreatorsSelector,
  groupInvitedMembersSelector,
  groupLoadingOneSelector,
  groupParticipantsSelector,
  groupSelectedErrorSelector,
  selectedGroupSelector,
} from "../../selectors/groups.selectors";
import { SidebarSelector } from "../../selectors/sidebar.selectors";
import { useAppSelector } from "../../store";

interface Props {}

const Group: FC<Props> = () => {
  const groupId = +useParams<{ groupId: string }>().groupId;
  const toggle = useAppSelector(SidebarSelector);
  const dispatch = useDispatch();
  const group = useAppSelector(selectedGroupSelector);
  const groupCreator = useAppSelector(groupCreatorsSelector);
  const groupParticipants = useAppSelector(groupParticipantsSelector);
  const groupinvitedMembers = useAppSelector(groupInvitedMembersSelector);
  const error = useAppSelector(groupSelectedErrorSelector);
  const loading = useAppSelector(groupLoadingOneSelector);
  useEffect(() => {
    dispatch(groupFetchOne(groupId));
  }, [groupId]); //eslint-disable-line
  return (
    <HomeLayout toggle={toggle.isSidebarOpen}>
      <>
        <h1 className="text-center mb-5">Group Page</h1>

        <div className="w-96 mx-auto bg-gray-600 flex items-center rounded-md h-36">
          {error && (
            <div className="text-center text-white w-full">{error}</div>
          )}
          {group && (
            <>
              <div className="flex-shrink-0 h-full w-28">
                <img
                  className="h-full w-full rounded-l-md"
                  src={
                    group.group_image_url === null
                      ? "https://picsum.photos/200/300?random=" + group.id
                      : group.group_image_url
                  }
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://picsum.photos/200/300?random=" + group.id;
                  }}
                  alt=""
                />
              </div>
              <div className="ml-4 p-2">
                <div className="text-sm font-medium text-gray-300">
                  Name: {group.name}
                </div>
                <div className="text-sm text-gray-300">
                  Description: {group.description}
                </div>
                <div className="text-sm text-gray-300">
                  Id of Creator:{" "}
                  {groupCreator[group.id] === null
                    ? "Creator Not Found"
                    : groupCreator[group.id]}
                </div>
                <div className="text-sm text-gray-300">
                  Id of Participants:{" "}
                  {groupParticipants[group.id] === undefined || groupParticipants[group.id].length === 0
                    ? "No Participants"
                    : groupParticipants[group.id].join(", ")}
                </div>
                <div className="text-sm text-gray-300">
                  Id of InvitedMembers:{" "}
                  {groupinvitedMembers[group.id] === undefined || groupinvitedMembers[group.id].length === 0
                    ? "No Invitation"
                    : groupinvitedMembers[group.id].join(", ")}
                </div>
              </div>
            </>
          )}
        </div>
        <div>
          <div className="flex w-96 h-10 bg-gray-600 mx-auto mt-10 rounded-full justify-between">
            <Link
              to={"/group/" + (groupId - 1)}
              className=" h-full p-1 bg-blue-600 rounded-l-full bg-opacity-25 px-5 text-white items-center flex"
            >
              Prev
            </Link>
            <Link
              to={"/group/" + (groupId + 1)}
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

Group.defaultProps = {};

export default memo(Group);
