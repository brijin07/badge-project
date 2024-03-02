import React from "react";
import img1 from "../Asset/fixed-height (8).png";
import img2 from "../Asset/fixed-height (7).png";
import img3 from "../Asset/fixed-height (6).png";

function Feturepost() {
  return (
    <div className="text-center mt-5">
      <h2 className="text-blue-600">Practice Advice</h2>
      <h1 className="font-bold fs-1 ">Fetured Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 container mt-5 gap-5 w-[70%]">
        <div className="flex justify-center ">
          <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={img3} alt="Card image " />
            <div className="card-body">
              <ul className="flex justify-evenly">
                <li className="hover:text-blue-500 font-medium">Google</li>
                <li className="hover:text-blue-500 font-medium">Trending</li>
                <li className="hover:text-blue-500 font-medium">News</li>
              </ul>
              <br />
              <h5 className="card-title fw-bold">
                Loudest à la Madison #1 (L'integral)
              </h5>
              <p className="card-text text-justify text-sm">
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
              <br />

              <div className="w-full">
                <a href="#" className="btn  font-semibold ">
                  Learn More{" "}
                  <i className="fa-solid fa-greater-than  text-primary  fs-8 bg-slate-100" />
                </a>
             </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={img2} alt="Card image cap" />

            <div className="card-body">
              <ul className="flex justify-evenly">
              <li className="hover:text-blue-500 font-medium">Google</li>
                <li className="hover:text-blue-500 font-medium">Trending</li>
                <li className="hover:text-blue-500 font-medium">News</li>
              </ul>
              <br />
              <h5 className="card-title fw-bold ">
                Loudest à la Madison #1 (L'integral)
              </h5>
              <p className="card-text text-justify text-sm">
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
              <br />
              <div className="w-full">
                <a href="#" className="btn  font-semibold ">
                  Learn More{" "}
                  <i className="fa-solid fa-greater-than  text-primary  fs-8 bg-slate-100" />
                </a>
             </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={img1} alt="Card image cap" />
            <div className="card-body">
              <ul className="flex justify-evenly">
              <li className="hover:text-blue-500 font-medium">Google</li>
                <li className="hover:text-blue-500 font-medium">Trending</li>
                <li className="hover:text-blue-500 font-medium">News</li>
              </ul>
              <br />
              <h5 className="card-title fw-bold ">
                Loudest à la Madison #1 (L'integral)
              </h5>
              <p className="card-text text-justify text-sm			">
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
              <br />

             <div className="w-full">
                <a href="#" className="btn  font-semibold ">
                  Learn More{" "}
                  <i className="fa-solid fa-greater-than  text-primary  fs-8 bg-slate-100" />
                </a>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feturepost;
