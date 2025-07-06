import React from "react";
import HotelCardItem from "./HotelCardItem";

const Hotels = ({ trip }) => {
  const hotels = trip?.TripData?.hotels;
  const isLoading = !hotels || hotels.length === 0;

  return (
    <div>
      <h2 className="font-bold text-xl mt-9 mb-7">Hotel Recommendation</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
        {isLoading
          ? [1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="h-52 w-full bg-gray-200 rounded-xl animate-pulse"
              />
            ))
          : hotels.map((hotel, index) => (
              <HotelCardItem key={index} hotel={hotel} />
            ))}
      </div>
    </div>
  );
};

export default Hotels;
