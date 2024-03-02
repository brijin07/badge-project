import React from "react";
import img from "../Asset/col-md-8.png";
import img2 from "../Asset/printed-summer-dress (4) 1.png";
import img3 from "../Asset/col-md-3.png";
import img4 from "../Asset/card horizental (1).png";
import img5 from "../Asset/col-md-3 (1).png";
import img6 from "../Asset/card horizental (2).png";

function Popular() {
  return (
<<<<<<< HEAD
    <div className="flex justify-center container ">
      <div className="row  w-[85%] md:h-[600px] mt-5  sm:mt-5 ">
=======
    <div className="flex justify-center">
      <div className="row  w-[60%] h-[500px] mt-[330%] sm:mt-5 ">
>>>>>>> 24ec90e23ed3f3f4de2735e9ffcb8cbb42392485
        <div className="col-sm-7">
          <img src={img} className=" sm:h-[500px]" alt="" />
        </div>
        <div className="col-sm-5 p-5 text-center">
          <h1 className="font-bold">MOST POPULAR</h1>
          <p className="mt-3 font-light">
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </p>

          <img src={img2} alt="" className="mt-3" />

          <h2 className="text-grey-900 font-semibold mt-5 ">
            English Department
          </h2>
          <h2 className="text-green-900 font-semibold mt-2">
            <span className="text-dark">$16.48</span> $6.48
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4  container">
          <div className="flex justify-center">
            <img src={img3} className="h-[100px] w-[200px]" alt="" />
          </div>
          <div className="flex justify-center">
            <img src={img4} className="h-[100px] w-[200px]" alt="" />
          </div>
          <div className="flex justify-center">
            <img src={img5} className="h-[100px] w-[200px]" alt="" />
          </div>
          <div className="flex justify-center">
            <img src={img6} className="h-[100px] w-[200px]" alt="" />
          </div>
        </div>
        <div className="col-md-12"></div>
      </div>
    </div>
  );
}

export default Popular;
