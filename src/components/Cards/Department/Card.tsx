import React, { useState } from "react";
import cardiology from "../../../assets/healthcare-7192176.png";
import { useNavigate } from "react-router-dom";
function Card() {
const navigate = useNavigate();
const handleClick = () => {
  navigate("/view-department");
}
    const [card, setCard] = useState([1,2,3,4,5,6,]);
  return (
    <div>
      <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {/* <!--   ✅ Product card 1 - Starts Here 👇 --> */}
        {card.map(()=>{

         return <div className="w-auto bg-white shadow-2xl rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            {/* <img
              src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Product"
              className="h-80 w-72 object-cover rounded-t-xl"
            /> */}

            <div className="px-4 py-3 w-72">
              <div className="flex justify-between">

            <div className="w-20">
                <img src={cardiology} alt="" />
            </div>
              <p className="text-lg mt-6 font-bold text-black truncate block capitalize">
              Cardiology
              </p>
              </div>
              <div className="flex justify-end">
                
                <p onClick={handleClick} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-3 border border-blue-500 hover:border-transparent rounded">
               View
                </p>
                
              </div>
            </div>
          </a>
        </div>
        })}
        {/* <!--   🛑 Product card 1 - Ends Here  --> */}
        
      </section>
    </div>
  );
}

export default Card;
