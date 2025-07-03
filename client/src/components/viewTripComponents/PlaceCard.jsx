import React, { useEffect, useState } from "react";
import Dummy from "../componentsAssets/placeholder.jpg";
import { Button } from "../ui/button";
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GetPlaceDetails, PHOTO_REF_URL } from "../../config/GlobalAPI";

const PlaceCard = ({ place }) => {

    const [photoUrl,setPhotoUrl] = useState();
    const GetPlacePhoto = async () => {
      const data = {
        textQuery:   place?.placeName
      };
  
      try {
        const response = await GetPlaceDetails(data);
        console.log(response?.data?.places[0]?.photos[9]?.name); 
  
        const imageUrl = PHOTO_REF_URL.replace('{NAME}',response?.data?.places[0]?.photos[0]?.name);
        setPhotoUrl(imageUrl);
        
      } catch (error) {
        console.error("Error fetching place photo:", error.response?.data || error.message);
      }
    };
  
    useEffect(() => {
      if (place) {
        GetPlacePhoto();
      }
    }, [place]);
  

  return (
    <>
    
      
      
        <div className="border p-3 h-60 w-130 object-cover rounded-xl mt-2 gap-5 shadow-2xl shadow-gray-300  hover:shadow-xl hover:shadow-red-200 hover:scale-103 transition-all">
          <div>
        
            <h2 className="text-red-500 visible pb-2 text-sm font-semibold flex justify-around md:justify-start">
        {place?.bestTimeToVisit}
      </h2>
         </div>
         <div className="md:flex gap-5">
         <img
          src={photoUrl || Dummy}
          alt="place image"
          className="w-full h-[200px] md:w-[180px] md:h-[180px]  rounded-xl"
        />
        <div>
          <h2 className="text-red-500 hidden md:visible text-sm font-semibold ">
            {place?.bestTimeToVisit}
          </h2>

          <h2 className="font-bold text-lg">{place?.placeName}</h2>
          <p className="text-sm text-gray-600">{place?.placeDetails}</p>

          <div className="flex justify-between items-center ">
            <div className="mt-2">
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
        </div>
       </div>
      </div>
    </>
  );
};

export default PlaceCard;
