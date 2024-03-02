import React from "react";
import img1 from "../Asset/fixed-height.png";
import img2 from "../Asset/card-cover-5.jpg";
import img3 from "../Asset/product-cover-5.png";
import img4 from "../Asset/product-cover-5 (2).png";






function Bestseller() {
  return (
    <div>
    {/* <div className='grid grid-cols-1 md:grid-cols-12 container w-[80%] gap-2 mt-3'>
         <div className='h-[600px] bg-slate-200 w-full col-span-4 ' >
          <img src={img} alt="" className='h-full w-full' />
         </div>
         <div className='h-[600px] bg-gray-600 w-full col-span-8 '>
            <img src={img2} alt="" className='bg-cover h-full w-full' />
         </div>
      </div> */}

<div className="grid grid-cols-1 md:grid-cols-12  container w-[80%] mt-16 gap-2  ">
        
        <div className="col-span-8  md:h-[600px]">
          <div className=" w-full h-[90px] md:h-[60px] p-3  flex flex-col  items-center  md:flex-row justify-around  ">
            <div>
              <h1 className="font-bold">BEST SELLER PRODUCT</h1>
            </div>
            <div>
            <ul className="flex gap-2 font-semibold	">
                  <li  className="hover:text-blue-700">Men</li>
  
               <li className="hover:text-blue-700">Women</li>
                <li className="hover:text-blue-700">Accessories</li>
              </ul>
            </div>
            <div className="ms-2  w-[130px]  flex justify-around ">
                <button
                  type="button"
                  class="btn btn-dark rounded-pill w-[45px] h-[45px] "
                >
                  <i className="fa-solid fa-less-than text-dark" />
                </button>
                <button
                  type="button"
                  class="btn btn-dark rounded-pill w-[45px] h-[45px]"
                >
                  <i className="fa-solid fa-greater-than text-dark" />
                </button>
              </div>
          </div>
          <div class="grid  grid-cols-1  md:grid-cols-12 gap-2 mt-2">
            <div class="col-span-4   text-center">
<div className="flex justify-center ">
                    <img src={img1} alt=""  />
    
</div>                <h1 className="font-bold mt-2">Graphic Design</h1>
              <h2 className="text-grey-900 font-semibold mt-2">
                English Department
              </h2>
              <h2 className="text-green-900 font-semibold mt-2">
                <span className="text-dark">$16.48</span> $6.48
              </h2>
            </div>
            <div class="col-span-4   text-center">
<div className="flex justify-center ">
                    <img src={img3} alt=""  />
    
</div>                <h1 className="font-bold mt-2">Graphic Design</h1>
              <h2 className="text-grey-900 font-semibold mt-2">
                English Department
              </h2>
              <h2 className="text-green-900 font-semibold mt-2">
                <span className="text-dark">$16.48</span> $6.48
              </h2>
            </div>

            <div class="col-span-4   text-center">
<div className="flex justify-center ">
                    <img src={img4} alt=""  />
    
</div>                <h1 className="font-bold mt-2">Graphic Design</h1>
              <h2 className="text-grey-900 font-semibold mt-2">
                English Department
              </h2>
              <h2 className="text-green-900 font-semibold mt-2">
                <span className="text-dark">$16.48</span> $6.48
              </h2>
            </div>
            <div class="col-span-4   text-center">
<div className="flex justify-center ">
                    <img src={img1} alt=""  />
    
</div>                <h1 className="font-bold mt-2">Graphic Design</h1>
              <h2 className="text-grey-900 font-semibold mt-2">
                English Department
              </h2>
              <h2 className="text-green-900 font-semibold mt-2">
                <span className="text-dark">$16.48</span> $6.48
              </h2>
            </div>
            <div class="col-span-4   text-center">
<div className="flex justify-center ">
                    <img src={img3} alt=""  />
    
</div>                <h1 className="font-bold mt-2">Graphic Design</h1>
              <h2 className="text-grey-900 font-semibold mt-2">
                English Department
              </h2>
              <h2 className="text-green-900 font-semibold mt-2">
                <span className="text-dark">$16.48</span> $6.48
              </h2>
            </div>
            <div class="col-span-4   text-center">
<div className="flex justify-center ">
                    <img src={img4} alt=""  />
    
</div>                <h1 className="font-bold mt-2">Graphic Design</h1>
              <h2 className="text-grey-900 font-semibold mt-2">
                English Department
              </h2>
              <h2 className="text-green-900 font-semibold mt-2">
                <span className="text-dark">$16.48</span> $6.48
              </h2>
            </div>
          </div>
        </div>

        <div className=" col-span-8  md:col-span-3  bg-slate-300  h-[600px] border-b-2 border-red-100">
          <img src={img2} alt="" className="h-full w-full" />
        </div>
      </div>
  </div>
  );
}

export default Bestseller;
