import React from "react";
import img from "../Asset/product-cover-5 (3).png";
import img2 from "../Asset/fixed-height (1).png";
import img3 from "../Asset/product-cover-5 (4).png";
import img4 from "../Asset/fixed-height (4).png";
import img5 from "../Asset/col-md-2 (1).png";
import img6 from "../Asset/col-md-2 (2).png";
import img8 from "../Asset/col-md-2 (3).png";
import img9 from "../Asset/col-md-2 (4).png";
import img10 from "../Asset/col-md-2 (5).png";
import img11 from "../Asset/col-md-2.png";

function Cardsproduct() {
  return (
   <>
      

        <div className="grid grid-cols-1 md:grid-cols-4 mt-11 container ">
          <div className="">
<div className="flex justify-center ">
            <img src={img} alt="" className=" h-[200px]" />
</div>            <h1 className="font-bold text-center">Graphic Design</h1>
            <h2 className="text-grey-900 font-semibold mt-2 text-center">
              English Department
            </h2>
            <h2 className="text-green-900 font-semibold mt-2 text-center">
              <span className="text-dark text-center">$16.48</span> $6.48
            </h2>
          </div>
          <div>
          <div className="">
<div className="flex justify-center ">
            <img src={img2} alt="" className=" h-[200px]" />
</div>            <h1 className="font-bold text-center">Graphic Design</h1>
            <h2 className="text-grey-900 font-semibold mt-2 text-center">
              English Department
            </h2>
            <h2 className="text-green-900 font-semibold mt-2 text-center">
              <span className="text-dark text-center">$16.48</span> $6.48
            </h2>
          </div>
          </div>
          <div>
          <div className="">
<div className="flex justify-center ">
            <img src={img3} alt="" className=" h-[200px]" />
</div>            <h1 className="font-bold text-center">Graphic Design</h1>
            <h2 className="text-grey-900 font-semibold mt-2 text-center">
              English Department
            </h2>
            <h2 className="text-green-900 font-semibold mt-2 text-center">
              <span className="text-dark text-center">$16.48</span> $6.48
            </h2>
          </div>
          </div>
          <div>
          <div className="">
<div className="flex justify-center ">
            <img src={img4} alt="" className=" h-[200px]" />
</div>            <h1 className="font-bold text-center">Graphic Design</h1>
            <h2 className="text-grey-900 font-semibold mt-2 text-center">
              English Department
            </h2>
            <h2 className="text-green-900 font-semibold mt-2 text-center">
              <span className="text-dark text-center">$16.48</span> $6.48
            </h2>
          </div>
          </div>

        </div>

  
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-11 container">
          <div className="flex justify-center">
            <img src={img11} alt="" className="w-[100px] h-[60px]" />
          </div>
          <div className="flex justify-center">
            <img src={img5} alt="" className="w-[100px] h-[60px]" />
          </div>
          <div className="flex justify-center">
            <img src={img6} alt="" className="w-[100px] h-[60px]" />
          </div>
          <div className="flex justify-center">
            <img src={img8} alt="" className="w-[100px] h-[60px]" />
          </div>
          <div className="flex justify-center">
            <img src={img9} alt="" className="w-[100px] h-[60px]" />
          </div>
          <div className="flex justify-center">
            <img src={img10} alt="" className="w-[100px] h-[60px]" />
          </div>
        </div>
   </>
  );
}

export default Cardsproduct;
