import React, { useEffect, useState } from "react";
import Dummy from "../componentsAssets/placeholder.jpg";
import { Button } from "../ui/button";
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GetPlaceDetails, PHOTO_REF_URL } from "../../config/GlobalAPI";

const PlaceCard = ({ place }) => {
  const [photoUrl, setPhotoUrl] = useState();
  const [loading, setLoading] = useState(true);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: place?.placeName,
    };

    try {
      const response = await GetPlaceDetails(data);
      const imageUrl = PHOTO_REF_URL.replace(
        "{NAME}",
        response?.data?.places[0]?.photos[0]?.name
      );
      setPhotoUrl(imageUrl);
    } catch (error) {
      console.error(
        "Error fetching place photo:",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (place) {
      GetPlacePhoto();
    }
  }, [place]);

  return (
    <div className="p-3 md:h-60 md:w-130 object-cover rounded-xl mt-2 gap-5 border-2 border-white bg-white hover:bg-gray-50 hover:scale-105 transition-all">
      {/* Best time (top) */}
      {loading ? (
        <div className="h-4 w-28 mb-2 bg-gray-200 rounded animate-pulse mx-auto md:mx-0" />
      ) : (
        <h2 className="text-red-500 visible pb-2 text-sm font-semibold flex justify-around md:justify-start">
          {place?.bestTimeToVisit}
        </h2>
      )}

      {/* Card Content */}
      <div className="md:flex gap-5">
        {/* Image */}
        {loading ? (
          <div className="w-full h-[200px] md:w-45 md:h-45 bg-gray-200 rounded-xl animate-pulse" />
        ) : (
          <img
            src={photoUrl || Dummy}
            alt="place"
            className="w-full h-[200px] md:w-45 md:h-45 rounded-xl"
          />
        )}

        {/* Text Content */}
        <div className="flex flex-col justify-between w-full">
          {loading ? (
            <div className="space-y-2 mt-2">
              <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
              <div className="h-5 w-48 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
              <div className="flex justify-between mt-4">
                <div className="space-y-2">
                  <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
                </div>
                <div className="h-9 w-9 bg-gray-200 rounded-full animate-pulse" />
              </div>
            </div>
          ) : (
            <>
              <h2 className="text-red-500 hidden md:visible text-sm font-semibold">
                {place?.bestTimeToVisit}
              </h2>
              <h2 className="font-bold text-lg">{place?.placeName}</h2>
              <p className="text-sm text-gray-600">{place?.placeDetails}</p>

              <div className="flex justify-between items-center">
                <div className="">
                  <p className="">⏱️ {place?.timeToTravel}</p>
                  <p className="mt-[-5px] text-orange-900">
                    💰 {place?.ticketPricing}
                  </p>
                </div>
                <Link
                  to={`https://www.google.com/maps/search/?api=1&query=${place?.placeName}`}
                  target="_blank"
                >
                  <Button size="sm" className="text-white cursor-pointer">
                    <FaMapLocationDot />
                  </Button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
