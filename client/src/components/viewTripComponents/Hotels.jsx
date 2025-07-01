import React from "react";
import DummyImage from "../componentsAssets/placeholder.jpg";
import { ImLocation2 } from "react-icons/im";
import { Link } from "react-router-dom";

const Hotels = ({ trip }) => {
  return (
    <div>
      <h2 className="font-bold text-xl mt-9 mb-7">Hotel Recommendation</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 ">
        {trip?.TripData?.hotels?.map((item, index) => (
        <Link to ={`https://www.google.com/maps/search/?api=1&query=${item?.hotelName}`} target="_blank">
          <div
            key={index}
            className="bg-gray-50 pb-0.5 p-2  rounded-2xl shadow-2xl shadow-gray-300  hover:shadow-xl hover:shadow-red-200 hover:scale-103 transition-all cursor-pointer"
          >
            <img
              src={DummyImage}
              className="h-[14rem] w-full object-cover rounded-xl"
              alt=""
            />
            <div className="my-2">
              <h2 className="font-medium px-2 md:text-lg ">
               🏢 {item?.hotelName}
              </h2>
              <h2 className="text-xs md:text-[14px] px-2 flex text-gray-800">
                {" "}
                {item?.description}
              </h2>
              {/* <h2 className='text-[12px] md:text-[14px] mt-3 flex text-gray-700 bg-gray-200 rounded px-3 py-1'>📍{item?.hotelAddress}</h2> */}

              <div className="px-1 py-3">
              
                <h2 className="text-xs md:text-[14px]  text-black font-semibold">
                  💰 {item?.price}
                </h2>
                  <h2 className="text-xs md:text-[14px] flex text-orange-600 font-semibold  ">
                  ⭐ {item?.rating} Stars
                </h2>
              </div>
            </div>
          </div>
        </Link>
        ))}
      </div>
    </div>
  );
};

export default Hotels;
