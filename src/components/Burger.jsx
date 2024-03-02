import React from "react";
import img from "../Asset/printed-summer-dress (4) 1 (1).png";
import img2 from "../Asset/unsplash_X5BWooeO4Cw.png";
import img3 from "../Asset/product-colors.png";
import img5 from "../Asset/Frame.png";





function Burger() {
  return (
<<<<<<< HEAD
    <div >
      {/* <div className="flex justify-end " >
        <div className="row  w-[80%] sm:h-[500px]  sm:mt-5 ">
=======
    <div className="w-[80%] mt-5">
      <div className="flex justify-end">
        <div className="row  w-[80%] h-[500px]  sm:mt-5 ">
>>>>>>> 24ec90e23ed3f3f4de2735e9ffcb8cbb42392485
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
            <img src={img2} className="sm:h-[500px] " alt="" />
          </div>
        </div>
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-12 md:h-[500px] mt-11 container w-[70%]">

        <div className="col-span-6  ">

        <h1 className="font-bold text-center mt-5">MOST POPULAR</h1>
           
              <p className=" font-light text-balance text-center p-3">
                We focus on ergonomics and meeting you where you work. It's only a
                keystroke away.
              </p>

           
          <div className="flex justify-center">  <img src={img} alt="" className="mt-3" /></div>
<div className="flex justify-center mt-2">
            <img src={img5} alt="" />
             <p className="font-semibold text-gray-500">15 Sales</p>

  
</div>            <h2 className="text-green-900 font-semibold mt-2 text-center">
              <span className="text-dark ">$16.48</span> $6.48
             <div className="flex justify-center mt-2"> <img src={img3} alt="" /></div>
            </h2>

          
        </div>

        <div className="col-span-6 mt-2">

        <img src={img2} className="sm:h-[500px] " alt="" />


        </div>

      </div>
    </div>
  );
}

export default Burger;
