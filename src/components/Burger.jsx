import React from "react";
import img from "../Asset/printed-summer-dress (4) 1 (1).png";
import img2 from "../Asset/unsplash_X5BWooeO4Cw.png";

function Burger() {
  return (
    <div className="w-[80%] mt-5">
      <div className="flex justify-end">
        <div className="row  w-[80%] h-[500px]  sm:mt-5 ">
          <div className="col-sm-5 p-5 text-center">
            <h1 className="font-bold">MOST POPULAR</h1>
            <p className="mt-3 font-light">
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </p>

            <img src={img} alt="" className="mt-3" />
            <div className="w-[100px]"></div>
            <h2 className="text-grey-900 font-semibold mt-5 ">
              English Department
            </h2>
            <h2 className="text-green-900 font-semibold mt-2">
              <span className="text-dark">$16.48</span> $6.48
            </h2>
          </div>

          <div className="col-sm-7">
            <img src={img2} className="h-[500px] " alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Burger;
