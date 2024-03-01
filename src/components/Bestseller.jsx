import React from "react";
import img1 from "../Asset/fixed-height.png";
import img2 from "../Asset/product-cover-5.png";
import img3 from "../Asset/product-cover-5 (1).png";

function Bestseller() {
  return (
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

          <div className="row  w-full  mt-2  ps-5 ">
            <div className="col-sm-4 bg-succes h-[250px] sm:text-center   sm:mt-0  ">
              <img src={img1} alt="" />
              <h1 className="font-bold">Graphic Design</h1>
              <h2 className="text-grey-900 font-semibold mt-2">
                English Department
              </h2>
              <h2 className="text-green-900 font-semibold mt-2">
                <span className="text-dark">$16.48</span> $6.48
              </h2>
            </div>

            <div className="col-sm-4  h-[250px] md:text-center ">
              <img src={img2} alt="" />
              <h1 className="font-bold">Graphic Design</h1>
              <h2 className="text-grey-900 font-semibold mt-2">
                English Department
              </h2>
              <h2 className="text-green-900 font-semibold mt-2">
                <span className="text-dark">$16.48</span> $6.48
              </h2>
            </div>

            <div className="col-sm-4  h-[250px] md:text-center ">
              <img src={img3} alt="" />
              <h1 className="font-bold">Graphic Design</h1>
              <h2 className="text-grey-900 font-semibold mt-2">
                English Department
              </h2>
              <h2 className="text-green-900 font-semibold mt-2">
                <span className="text-dark">$16.48</span> $6.48
              </h2>
            </div>

            <div className="col-sm-4  h-[250px] md:text-center ">
              <img src={img1} alt="" />
              <h1 className="font-bold">Graphic Design</h1>
              <h2 className="text-grey-900 font-semibold mt-2">
                English Department
              </h2>
              <h2 className="text-green-900 font-semibold mt-2">
                <span className="text-dark">$16.48</span> $6.48
              </h2>
            </div>

            <div className="col-sm-4  h-[250px] md:text-center ">
              <img src={img2} alt="" />
              <h1 className="font-bold">Graphic Design</h1>
              <h2 className="text-grey-900 font-semibold mt-2">
                English Department
              </h2>
              <h2 className="text-green-900 font-semibold mt-2">
                <span className="text-dark">$16.48</span> $6.48
              </h2>
            </div>

            <div className="col-sm-4  h-[250px] md:text-center ">
              <img src={img3} alt="" />
              <h1 className="font-bold">Graphic Design</h1>
              <h2 className="text-grey-900 font-semibold mt-2">
                English Department
              </h2>
              <h2 className="text-green-900 font-semibold mt-2">
                <span className="text-dark">$16.48</span> $6.48
              </h2>
            </div>
          </div>
        </div>
        <div className="furuteimg2 col-sm-4 bg-success h-[700px] w-[300px] sm:w-[260px] mt-[330%]  md:mt-0 p-3">
          <h1 className="font-bold">Furniture</h1>
          <h2 className="font-semibold">5 items</h2>
        </div>
      </div>
    </div>
  );
}

export default Bestseller;
