import React from "react";
const Slider = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={1}
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={2}
          aria-label="Slide 3"
        />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
<<<<<<< HEAD
          <div className="image h-[220px] md:h-[500px]  text-center pt-[30px] md:pt-[200px] ">
=======
          <div className="image h-[220px] md:h-[500px]  text-center pt-[35px] md:pt-[200px] ">
>>>>>>> 24ec90e23ed3f3f4de2735e9ffcb8cbb42392485
            <h1 className="text-white font-bold fs-3 md:fs-1 tracking-widest			 ">
              GROCERIES DELIVERY
            </h1>
            <p className="text-white md:fs-1">
              We know how large objects will act,
              <br /> but things on a small scale just do not act that way.
            </p>
            <button className="btn btn-primary mt-2 w-[150px]">
              Start Now
            </button>
          </div>
        </div>
        <div className="carousel-item">
<<<<<<< HEAD
          <div className="image h-[220px] md:h-[500px]  text-center pt-[30px] md:pt-[200px] ">
=======
          <div className="image h-[220px] md:h-[500px]  text-center pt-[35px] md:pt-[200px] ">
>>>>>>> 24ec90e23ed3f3f4de2735e9ffcb8cbb42392485
            <h1 className="text-white font-bold fs-3 md:fs-1  tracking-widest	">
              GROCERIES DELIVERY
            </h1>
            <p className="text-white fs-6 md:fs-1">
              We know how large objects will act,
              <br /> but things on a small scale just do not act that way.
            </p>
            <button className="btn btn-primary mt-2 w-[150px]">
              Start Now
            </button>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
