import {FC, memo} from "react";
import { HiMenu } from "react-icons/hi";
import Button from "../Button/Button";

interface Props {}

const header: FC<Props> = () => {
  return (
    <div className="fixed top-12 bg-white w-full z-10 flex py-2 border-t-2 border-gray-900 mt-1 justify-between shadow-lg items-center">
        <div className="pl-10 flex items-center">
        <HiMenu className="text-2xl text-gray-500"/>
        <span className="text-lg ml-6 text-gray-500">Dashboard / Sales</span>
        </div>
        <div>
            <Button outline="outline" className="border-gray-200 border-2 text-gray-900">Settings</Button>
        </div>
    </div>
  );
};

header.defaultProps = {};

export default memo(header);