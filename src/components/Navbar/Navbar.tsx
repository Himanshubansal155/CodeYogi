import { FC, memo, useState } from "react";
import logo from "../../images/logo.svg";
import { FiBell, FiMail, FiSearch } from "react-icons/fi";
import profile from "../../images/profile-12.jpeg";
import ca from "../../images/ca.png";
import DropDown from "./DropDown";

interface Props {}

const Navbar: FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed top-0 bg-gray-800 w-full z-10 text-white flex justify-between py-2">
      <div className="flex h-full items-center">
        <div className="flex pl-7 h-full mr-12">
          <img src={logo} alt="LOGO" className="h-9 pr-4"></img>
          <h1 className="text-2xl font-semibold text-gray-200 hidden md:block">
            CORK
          </h1>
        </div>
        <div className="bg-gray-700 rounded-md p-1 items-center hidden md:flex px-2">
          <FiSearch className="text-gray-400 text-xl" />
          <input
            type="text"
            name="price"
            id="price"
            className="outline-none w-72 focus:ring-0 border-0 pl-2 py-1 sm:text-sm bg-gray-700 text-gray-400"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="flex items-center pr-5 space-x-4">
      <div className="cursor-pointer" onClick={() => console.log("clicked")}>
          <img src={ca} alt="profile" className="h-5 rounded-md"></img>
        </div>
        <div className="cursor-pointer" onClick={() => console.log("clicked")}>
          <FiMail className="text-xl text-gray-200" />
        </div>
        <div
          className="cursor-pointer relative"
          onClick={() => console.log("clicked")}
        >
          <div className="absolute bg-green-500 rounded-full h-1.5 w-1.5 -right-0.5 -top-1"></div>
          <FiBell className="text-xl text-gray-200" />
        </div>
        <div className="cursor-pointer" onClick={() => setIsOpen((open) => !open)}>
          <img src={profile} alt="profile" className="h-7 rounded-md"></img>
          <DropDown open={isOpen} onClose={setIsOpen} />
        </div>
      </div>
    </div>
  );
};

Navbar.defaultProps = {};

export default memo(Navbar);
