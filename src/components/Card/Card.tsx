import profile from "../../images/profile-12.jpeg";
import { FC, memo } from "react";
import Avatar from "../Avatar/Avatar";
import Bar from "../ProgressBar/Bar";

interface Props {
  badges: number;
}

const Card: FC<Props> = ({ badges }) => {
  let left;
  const badgesArr = [profile, profile, profile, profile];
  if (badges <= 4) {
    left = 0;
  } else {
    left = badges - 4;
  }
  return (
    <div className="w-96 h-48 shadow-lg rounded-md border-2 border-gray-300 p-5">
      <h1>Placed Order</h1>
        <span className="text-blue-600 bg-blue-100 rounded-sm p-1 px-2 relative float-right -top-5 transform ease-linear duration-300 hover:-translate-y-3 text-sm uppercase">
          In Progress
        </span>
      <div className="h-20 mt-6">
        <Avatar
          src={badgesArr[0]}
          className="h-10 shadow-md border-2 border-white"
          online="offline"
          divClassName="inline-block"
        />
        {
          <Avatar
            src={badgesArr[1]}
            className="h-10 shadow-md border-2 border-white"
            online="offline"
            divClassName="inline-block -ml-2"
          />
        }
        {badges > 2 && (
          <Avatar
            src={badgesArr[2]}
            className="h-10 shadow-md border-2 border-white"
            online="offline"
            divClassName="inline-block -ml-2"
          />
        )}
        {badges > 3 && (
          <Avatar
            src={badgesArr[3]}
            className="h-10 shadow-md border-2 border-white"
            online="offline"
            divClassName="inline-block -ml-2"
          />
        )}
        {left > 0 && (
          <div className="inline-block shadow-lg bg-gray-50 text-blue-600 p-1 px-2 text-sm my-auto -ml-4 z-20 rounded-xl relative -top-3 transform ease-linear duration-300 hover:-translate-y-2">
            +{left} more
          </div>
        )}
      </div>
      <Bar width={badges * 10} className="h-5" theme="primary" />
    </div>
  );
};

Card.defaultProps = {
  badges: 3,
};

export default memo(Card);
