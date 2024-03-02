import React from "react";
import img1 from "../Asset/fixed-height.png";
import img2 from "../Asset/card-cover-5.jpg";
import img3 from "../Asset/product-cover-5.png";
import img4 from "../Asset/product-cover-5 (2).png";






function Bestseller() {
  return (
<<<<<<< HEAD
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
=======
    <div className="d-flex justify-center ">
      <div className="row p-2 md:p-5  w-[90%]  mt-[300%] sm:mt-[10%] ms-5">
        <div className="col-8  h-[500px]">
          <div className=" p-3 w-full h-20 flex justify-around   border-b border-black-900  ps-5  ">
            <h2 className="font-bold">BEST SELLER PRODUCTS</h2>
            <a href="#" className="text-black font-semibold hover:text-green">
              <p className="hover:text-blue-700">Men</p>
            </a>
            <a
              href="#"
              className="text-black font-semibold  hover:text-green-700"
            >
              <p className="hover:text-blue-700">Women</p>
            </a>
            <a
              href="#"
              className="text-black font-semibold  hover:text-blue-500"
            >
              <p className="hover:text-blue-700">Accessories</p>
            </a>
>>>>>>> 24ec90e23ed3f3f4de2735e9ffcb8cbb42392485
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
<<<<<<< HEAD

        <div className=" col-span-8  md:col-span-3  bg-slate-300  h-[600px] border-b-2 border-red-100">
          <img src={img2} alt="" className="h-full w-full" />
=======
        <div className="furuteimg2 col-sm-4 bg-success h-[700px] w-[300px] sm:w-[260px] mt-[390%]  md:mt-0 p-3">
          <h1 className="font-bold">Furniture</h1>
          <h2 className="font-semibold">5 items</h2>
>>>>>>> 24ec90e23ed3f3f4de2735e9ffcb8cbb42392485
        </div>
      </div>
  </div>
  );
}

export default Bestseller;
