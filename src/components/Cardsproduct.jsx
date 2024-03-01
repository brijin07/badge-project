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
    <div className="mt-5 w-[100%]   d-flex flex-column align-items-center   pt-[150%] md:pt-0  ">
      <div className="border-b-2 border-black-800  p-2  w-[80%]  ">
        <h1 className="text-start font-bold">BEST SELLER PRODUCTS</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4  ps-5  w-[90%] mt-5 gap-5">
        <div className="flex-col justify-center w-[200px]  text-center">
          <img src={img} alt="" className="w-[200px] h-[200px]" />
          <h1 className="font-bold">Graphic Design</h1>
          <h2 className="text-grey-900 font-semibold mt-2">
            English Department
          </h2>
          <h2 className="text-green-900 font-semibold mt-2">
            <span className="text-dark">$16.48</span> $6.48
          </h2>
        </div>
        <div className="flex-col justify-center w-[200px]  text-center">
          <img src={img2} alt="" className="w-[200px] h-[200px]" />
          <h1 className="font-bold">Graphic Design</h1>
          <h2 className="text-grey-900 font-semibold mt-2">
            English Department
          </h2>
          <h2 className="text-green-900 font-semibold mt-2">
            <span className="text-dark">$16.48</span> $6.48
          </h2>
        </div>
        <div className="flex-col justify-center w-[200px]  text-center">
          <img src={img3} alt="" className="w-[200px] h-[200px]" />
          <h1 className="font-bold">Graphic Design</h1>
          <h2 className="text-grey-900 font-semibold mt-2">
            English Department
          </h2>
          <h2 className="text-green-900 font-semibold mt-2">
            <span className="text-dark">$16.48</span> $6.48
          </h2>
        </div>
        <div className="flex-col justify-center w-[200px]  text-center">
          <img src={img4} alt="" className="w-[200px] h-[200px]" />
          <h1 className="font-bold">Graphic Design</h1>
          <h2 className="text-grey-900 font-semibold mt-2">
            English Department
          </h2>
          <h2 className="text-green-900 font-semibold mt-2">
            <span className="text-dark">$16.48</span> $6.48
          </h2>
        </div>{" "}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-5 mt-5">
        <div>
          <img src={img11} alt="" className="w-[100px] h-[60px]" />
        </div>
        <div>
          <img src={img5} alt="" className="w-[100px] h-[60px]" />
        </div>
        <div>
          <img src={img6} alt="" className="w-[100px] h-[60px]" />
        </div>
        <div>
          <img src={img8} alt="" className="w-[100px] h-[60px]" />
        </div>
        <div>
          <img src={img9} alt="" className="w-[100px] h-[60px]" />
        </div>
        <div>
          <img src={img10} alt="" className="w-[100px] h-[60px]" />
        </div>
      </div>
    </div>
  );
}

export default Cardsproduct;
