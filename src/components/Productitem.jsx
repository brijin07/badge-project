import React from "react";

function Productitem() {
  return (
    <div className="flex justify-center pe-[200px] md:pe-0 md:p-2">
      <div className="grid grid-cols-1 gap-3 w-[70%] md:w-[90%]  mt-5 md:grid-cols-3    	">
        <div className="productimg1 w-[300px] h-[300px] bg-cover  border-grey-200 border-2  rounded"></div>

        <div className="productimg2 w-[300px] h-[300px]  bg-slate-500 border-grey-200 border-2 bg-cover rounded"></div>

        <div className="productimg3 w-[300px] h-[300px]  bg-slate-500 border-grey-200 border-2 bg-cover rounded"></div>
      </div>
    </div>
  );
}

export default Productitem;
