import React from "react";

function SadFaceAi() {
  return (
    <div>
      <div className="circle bg-yellow-500 text-yellow-300 w-96 h-96 rounded-full relative">
        {/* eyes */}
        <div className="absolute bg-black w-11 h-11 rounded-full top-28 left-20"></div>
        <div className="absolute bg-black w-11 h-11 rounded-full top-28 left-64"></div>
        {/* mouth */}
        <div className="left-16 sad absolute top-60 h-10 w-64"></div>
      </div>
      <div className="bg-black px-10 py-5 mt-10 text-white text-2xl text-center">
        You sadist!!
      </div>
    </div>
  );
}

export default SadFaceAi;
