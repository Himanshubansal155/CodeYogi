import {FC, memo} from "react";

interface Props {}

const AuthFooter: FC<Props> = () => {
  return (
    <div className="mx-auto w-96 text-sm mt-10 font-semibold tracking-wider">
        <p className="text-center">
        © 2020 All Rights Reserved. <span className="text-blue-600 font-bold">CORK</span> is a product of Designreset. <span className="text-blue-600 font-bold">Cookie Preferences</span>, <span className="text-blue-600 font-bold">Privacy</span>, and <span className="text-blue-600 font-bold">Terms</span>.
        </p>
      </div>
  );
};

AuthFooter.defaultProps = {};

export default memo(AuthFooter);