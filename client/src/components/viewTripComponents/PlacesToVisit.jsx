import React from "react";
import PlaceCard from "./PlaceCard";

const PlacesToVisit = ({ trip }) => {
  const itinerary = trip?.TripData?.itinerary;
  const isLoading = !itinerary || itinerary.length === 0;

  return (
    <div className="mt-5">
      <h2 className="font-bold text-xl mt-9 mb-7">Places to Visit</h2>

      {isLoading
        ? [1, 2].map((_, dayIndex) => (
            <div key={dayIndex}>
              <div className="h-5 w-40 bg-gray-200 rounded animate-pulse mb-4" />
              <div className="grid md:grid-cols-2 gap-5">
                {[1, 2].map((_, placeIndex) => (
                  <div
                    key={placeIndex}
                    className="h-40 w-full bg-gray-200 rounded-xl animate-pulse"
                  />
                ))}
              </div>
            </div>
          ))
        : itinerary.map((item, index) => (
            <div key={index}>
              <h2 className="font-bold text-lg text-red-500 mt-10 mb-4">
                {item?.day}
              </h2>

              <div className="grid md:grid-cols-2 gap-5">
                {item?.plan?.map((place, placeIndex) => (
                  <div key={placeIndex}>
                    <PlaceCard place={place} />
                  </div>
                ))}
              </div>
            </div>
          ))}
    </div>
  );
};

export default PlacesToVisit;
