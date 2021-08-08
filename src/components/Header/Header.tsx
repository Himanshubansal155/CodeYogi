import { FC, memo } from "react";
import { HiMenu } from "react-icons/hi";
import { sidebarActions } from "../../actions/sidebar.actions";
import Button from "../Button/Button";

interface Props {
  pageName: string;
  componentName:string;
}

const header: FC<Props> = (props) => {
  return (
    <div className="fixed top-12 bg-white w-full z-40 flex py-2 border-t-2 border-gray-900 mt-1 justify-between shadow-lg items-center">
      <div className="pl-10 flex items-center">
        <div className="hover:shadow-md p-1"
          onClick={() => {
            sidebarActions.sidebarToggle();
          }}
        >
          <HiMenu className="text-2xl text-gray-500" />
        </div>
        <span className="text-base ml-6 text-gray-500">{props.pageName} / {props.componentName}</span>
      </div>
      <div>
        <Button
          outline="outline"
          theme="Error"
          className="border-gray-200 border-2 border-opacity-50 hover:bg-opacity-40 focus:bg-opacity-40 mr-3 px-4"
        >
          Settings
        </Button>
      </div>
    </div>
  );
};

header.defaultProps = {};

export default memo(header);
