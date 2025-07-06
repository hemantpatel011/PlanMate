import React, { useEffect, useState } from "react";
import DummyImage from "../componentsAssets/placeholder.jpg";
import { GetPlaceDetails, PHOTO_REF_URL } from "../../config/GlobalAPI";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { FaMapLocationDot } from "react-icons/fa6";

const HotelCardItem = ({ hotel }) => {
  const [photoUrl, setPhotoUrl] = useState();
  const [loading, setLoading] = useState(true);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: hotel?.hotelName,
    };

    try {
      const response = await GetPlaceDetails(data);
      const imageUrl = PHOTO_REF_URL.replace(
        "{NAME}",
        response?.data?.places[0]?.photos[1]?.name
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
    if (hotel) {
      GetPlacePhoto();
    }
  }, [hotel]);

  return (
    <div className="bg-gray-50 p-2 rounded-2xl shadow-gray-300 hover:shadow-xl hover:shadow-gray-400 hover:scale-103 transition-all cursor-pointer">
      {/* Image */}
      {loading ? (
        <div className="h-[220px] w-full bg-gray-200 animate-pulse rounded-xl" />
      ) : (
        <img
          src={photoUrl || DummyImage}
          className="h-[220px] w-full object-cover rounded-xl"
          alt="Hotel"
        />
      )}

      {/* Info Section */}
      <div className="my-2">
        {loading ? (
          <div className="space-y-2 px-2">
            <div className="h-5 bg-gray-200 rounded w-3/4 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
            <div className="flex justify-between mt-3">
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-20 animate-pulse" />
                <div className="h-4 bg-gray-200 rounded w-24 animate-pulse" />
              </div>
              <div className="h-9 w-9 bg-gray-200 rounded-full animate-pulse" />
            </div>
          </div>
        ) : (
          <>
            <h2 className="font-medium px-2 md:text-lg">🏢 {hotel?.hotelName}</h2>
            <h2 className="text-xs md:text-[14px] px-2 flex text-gray-800">
              {hotel?.description}
            </h2>

            <div className="flex justify-between items-center px-2 mt-2">
              <div className="px-1 py-3">
                <h2 className="text-xs md:text-[14px] text-black font-semibold">
                  💰 {hotel?.price}
                </h2>
                <h2 className="text-xs md:text-[14px] flex text-orange-600 font-semibold">
                  ⭐ {hotel?.rating} Stars
                </h2>
              </div>

              <Link
                to={`https://www.google.com/maps/search/?api=1&query=${hotel?.hotelName}`}
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
  );
};

export default HotelCardItem;
