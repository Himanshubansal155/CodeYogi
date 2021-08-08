import { FC, memo, ReactChild, ReactChildren } from "react";

interface Props {
  toggle: boolean;
  children: ReactChild | ReactChildren;
  className?: string;
}

const HomeLayout: FC<Props> = ({ toggle, children, className }) => {
  return (
    <div
      className={
        className +
        " pt-16 p-4 relative w-full mt-16 bg-blue-900 bg-opacity-10 ease-linear duration-1000 min-h-screen " +
        (toggle && " md:ml-60")
      }
    >
      {children}
    </div>
  );
};

HomeLayout.defaultProps = {};

export default memo(HomeLayout);
