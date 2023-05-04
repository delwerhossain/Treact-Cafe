import { useState } from "react";
import { DotLoader } from "react-spinners";

const Loading = () => {
  return (
    <div id="spinner" className="sweet-loading h-screen flex justify-center items-center">
      <DotLoader color="#600cfc" loading size={250} speedMultiplier={2} />
    </div>
  );
};

export default Loading;
