import React, { useEffect, useState } from 'react'
import DummyImage from "../componentsAssets/placeholder.jpg";
import { GetPlaceDetails, PHOTO_REF_URL } from '../../config/GlobalAPI';

import { Link } from 'react-router-dom'

const HotelCardItem = ({hotel}) => {

    const [photoUrl,setPhotoUrl] = useState();
 const GetPlacePhoto = async () => {
    const data = {
      textQuery: hotel?.hotelName
    };

    try {
      const response = await GetPlaceDetails(data);
      console.log(response?.data?.places[0]?.photos[0]?.name); 

      const imageUrl = PHOTO_REF_URL.replace('{NAME}',response?.data?.places[0]?.photos[1]?.name);
      setPhotoUrl(imageUrl);
      
    } catch (error) {
      console.error("Error fetching place photo:", error.response?.data || error.message);
    }
  };

    useEffect(() => {
      if (hotel) {
        GetPlacePhoto();
      }
    }, [hotel]);

  return (
    <div>
         <Link to ={`https://www.google.com/maps/search/?api=1&query=${hotel?.hotelName}`} target="_blank">
          <div
            className="bg-gray-50 pb-0.5 p-2  rounded-2xl shadow-2xl shadow-gray-300  hover:shadow-xl hover:shadow-red-200 hover:scale-103 transition-all cursor-pointer"
          >
            <img
              src={photoUrl}
              className="h-[220px] w-full object-cover rounded-xl"
              alt=""
            />
            <div className="my-2">
              <h2 className="font-medium px-2 md:text-lg ">
               🏢 {hotel?.hotelName}
              </h2>
              <h2 className="text-xs md:text-[14px] px-2 flex text-gray-800">
                {" "}
                {hotel?.description}
              </h2>
              {/* <h2 className='text-[12px] md:text-[14px] mt-3 flex text-gray-700 bg-gray-200 rounded px-3 py-1'>📍{item?.hotelAddress}</h2> */}

              <div className="px-1 py-3">
              
                <h2 className="text-xs md:text-[14px]  text-black font-semibold">
                  💰 {hotel?.price}
                </h2>
                  <h2 className="text-xs md:text-[14px] flex text-orange-600 font-semibold  ">
                  ⭐ {hotel?.rating} Stars
                </h2>
              </div>
            </div>
          </div>
        </Link>
    </div>
  )
}

export default HotelCardItem
