import React from "react";
import HotelCardItem from "./HotelCardItem";

const Hotels = ({ trip }) => {
  return (
    <div>
      <h2 className="font-bold text-xl mt-9 mb-7">Hotel Recommendation</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 ">
        {trip?.TripData?.hotels?.map((hotel, index) => (
         <HotelCardItem hotel = {hotel}/>
        ))}
      </div>
    </div>
  );
};

export default Hotels;
