import { FC, memo } from "react";
import { IconType } from "react-icons";

interface Props {
  StartIcon: IconType;
  EndIcon?: IconType;
  children: string;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}

const SideBarComponent: FC<Props> = ({
  StartIcon,
  EndIcon,
  children,
  onClick,
}) => {
  return (
    <div
      className="p-2 hover:animate-pulse hover:bg-opacity-25 cursor-pointer justify-between hover:bg-blue-900 text-gray-600 rounded-md flex items-center tracking-wider"
      onClick={onClick}
    >
      <div className="flex items-center">
        {<StartIcon className="inline-block mr-3 text-xl" />}
        <span>{children} </span>
      </div>
      {EndIcon && <EndIcon className="inline-block" />}
    </div>
  );
};

SideBarComponent.defaultProps = {};

export default memo(SideBarComponent);
