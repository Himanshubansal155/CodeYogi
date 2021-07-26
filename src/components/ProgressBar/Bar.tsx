import { FC, memo } from "react";

interface Props {
  theme?: "primary" | "success" | "Error";
  className?: string;
  width: number;
}

const Bar: FC<Props> = ({ theme, width, className }) => {
    const themeColor = theme === "primary"? "bg-blue-600":(theme === "success"?"bg-green-600":"bg-gray-600 text-white");
  
  return (
    <div className="bg-gray-100 rounded-3xl">
      <div className={className+ " rounded-3xl text-center " + themeColor} style={{ width: `${width}%` }}>{width + "% "}</div>
    </div>
  );
};

Bar.defaultProps = {
  theme:"primary",
};

export default memo(Bar);
