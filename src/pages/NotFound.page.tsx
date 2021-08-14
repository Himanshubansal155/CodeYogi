import { FC, memo } from "react";

interface Props {}

const NotFound: FC<Props> = () => {
  return (
    <div className="text-center font-bold font-2xl mt-28">
      Wrong URL<br></br>
      Page Not Found
    </div>
  );
};

NotFound.defaultProps = {};

export default memo(NotFound);
