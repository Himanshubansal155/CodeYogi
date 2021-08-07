import { Dialog, Transition } from "@headlessui/react";
import { FC, Fragment, memo } from "react";
import { FiInbox, FiLock, FiLogOut, FiUser } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { logout } from "../../api/Auth";
import Button from "../Button/Button";

interface Props {
  open: boolean;
  onClose: (open: false) => void;
}

const DropDown: FC<Props> = ({ open: isOpen, onClose: setIsOpen }) => {
  const history = useHistory();
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-50"
          entered="opacity-50"
          leave="transition-opacity duration-600"
          leaveFrom="opacity-50"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 z-0"></Dialog.Overlay>
        </Transition.Child>
        <div className="border-2 border-gray-400"></div>

        <Transition.Child
          as={Fragment}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed top-12 bg-white p-3 rounded shadow-md right-5 z-20 text-gray-500 text-left">
            <Button
              className="bg-opacity-0 hover:text-blue-500 px-2 p-2 shadow-none text-gray-600"
              onClick={() => history.push("/profile")}
            >
              <FiUser className="inline-block mr-2" /> Profile
            </Button>
            <hr></hr>
            <Button
              className="bg-opacity-0 hover:text-blue-500 px-2 p-2 shadow-none text-gray-600"
              onClick={() => history.push("/groups")}
            >
              <FiInbox className="inline-block mr-2" />
              Groups
            </Button>
            <hr></hr>
            <Button className="bg-opacity-0 hover:text-blue-500 px-2 p-2 shadow-none text-gray-600">
              <FiLock className="inline-block mr-2" />
              Lock Screen
            </Button>
            <hr />
            <Button
              className="bg-opacity-0 hover:text-blue-500 px-2 p-2 shadow-none text-gray-600"
              onClick={() => {
                logout();
                window.location.href = "/login";
              }}
            >
              <FiLogOut className="inline-block mr-2" />
              Sign Out
            </Button>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};

DropDown.defaultProps = {};

export default memo(DropDown);
