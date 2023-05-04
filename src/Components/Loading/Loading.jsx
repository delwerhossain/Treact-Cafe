import { useState } from "react";
import { DotLoader } from "react-spinners";

const Loading = () => {
  return (
    <div id="spinner" className="sweet-loading">
      <DotLoader color="#36d7b7" loading size={200} speedMultiplier={2} />
    </div>
  );
};

export default Loading;
