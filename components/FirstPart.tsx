import { RefObject } from "react";
import P1FP from "./P1FP";

const FirstPart = ({ ref }: { ref: RefObject<HTMLDivElement | null>}) => {
  return (
    <div className="absolute min-h-screen min-w-screen bg-transparent text-white">
      <P1FP ref={ref} />
    </div>
  );
};

export default FirstPart;
