import React, { useEffect, useState } from "react";
import DummyImage from "../componentsAssets/placeholder.jpg";
import {
  FcPlanner,
  FcMoneyTransfer,
  FcViewDetails,
  FcGlobe,
} from "react-icons/fc";
import { Button } from "../ui/button";
import { IoIosSend } from "react-icons/io";
import { GetPlaceDetails, PHOTO_REF_URL } from "../../config/GlobalAPI";
import { Link } from "react-router-dom";

const InfoSection = ({ trip }) => {
  const [photoUrl, setPhotoUrl] = useState();
  const [loading, setLoading] = useState(true);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: trip?.TripData?.itinerary[0]?.plan[0]?.placeName,
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
    if (trip) {
      GetPlacePhoto();
    }
  }, [trip]);

  return (
    <div>
      {loading ? (
        <div className="h-[26rem] w-full bg-gray-200 animate-pulse rounded-xl" />
      ) : (
        <img
          src={photoUrl || DummyImage}
          alt=""
          className="h-[26rem] w-full object-cover object-center rounded-xl border-white border-6 md:border-8 md:shadow-lg md:shadow-gray-400"
        />
      )}

      <div className="my-3 flex justify-between items-center gap-2">
        {loading ? (
          <div className="h-8 w-2/3 bg-gray-200 rounded animate-pulse" />
        ) : (
          <h2 className="font-bold text-2xl md:text-3xl">
            {trip?.userSelection?.location || "N/A"}
          </h2>
        )}
         <Link
                to={`https://www.google.com/maps/search/?api=1&query=${trip?.userSelection?.location }`}
                target="_blank"
              >
        <Button disabled={loading}>
          <IoIosSend />
        </Button>
        </Link>
      </div>

      <div className="flex">
        <div className="md:flex md:gap-5">
          {loading ? (
            <>
              <div className="w-28 h-8 bg-gray-200 rounded-full animate-pulse m-2" />
              <div className="w-36 h-8 bg-gray-200 rounded-full animate-pulse m-2" />
              <div className="w-40 h-8 bg-gray-200 rounded-full animate-pulse m-2" />
            </>
          ) : (
            <>
              <h2 className="px-3 m-2 flex bg-gray-200 rounded-full text-gray-800 text-xs md:text-lg">
                <FcPlanner className="m-1 mt-[6px]" />
                {trip?.userSelection?.noOfDays || "N/A"} Days
              </h2>
              <h2 className="px-3 m-2 flex bg-gray-200 rounded-full text-gray-800 text-xs md:text-lg">
                <FcMoneyTransfer className="mt-[6px] m-1" /> Budget:{" "}
                {trip?.userSelection?.budget || "N/A"}
              </h2>
              <h2 className="px-3 m-2 flex bg-gray-200 rounded-full text-gray-800 text-xs md:text-lg">
                <FcViewDetails className="mt-[6px] m-1" /> Traveler:{" "}
                {trip?.userSelection?.traveler || "N/A"}
              </h2>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
