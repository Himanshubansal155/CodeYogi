import { FC, memo } from "react";

interface Props {}

const Dashboard: FC<Props> = () => {

  return (
    <div className="md:ml-60 pt-28 p-2 relative w-full mt-16 bg-blue-900 bg-opacity-10 text-center min-h-screen">
      This is Dashboard Page</div>
  );
};

Dashboard.defaultProps = {};

export default memo(Dashboard);
