import {FC, memo} from "react";
import { useParams } from "react-router-dom";

interface Props {}

const Lecture: FC<Props> = () => {
  const {lectureNumber, batchNumber} = useParams<any>();
  return (
    <div>
      This is a lecture page with Lecture number : {lectureNumber} of batch : {batchNumber}
    </div>
  );
};

Lecture.defaultProps = {};

export default memo(Lecture);