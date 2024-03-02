import React from "react";
import img from '../Asset/card-item.png'
import img1 from '../Asset/col-5.png'
import img2 from '../Asset/col-md-4.png'



function Productitem() {
  return (
    <div className=" sm:h-[300px] w-[80%] gap-3  justify-center  items-center grid grid-cols-1 sm:grid-cols-3 container mt-2">
   
<div className="flex justify-center">
                <img src={img2} alt="" className="h-[200px] border-2 rounded" />

</div>          
<div className="flex justify-center">
  <img src={img} alt="" className="h-[200px] border-2  rounded" />
</div>            
<div className="flex justify-center">
    <img src={img1} alt="" className=" border-2 h-[200px] rounded" />

</div>
    </div>
  );
}

export default Productitem;
