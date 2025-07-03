import React, { useEffect, useState } from 'react'
import DummyImage from '../componentsAssets/placeholder.jpg'
import { FcPlanner , FcMoneyTransfer, FcViewDetails, FcGlobe } from "react-icons/fc";
import { Button } from '../ui/button';
import { IoIosSend } from "react-icons/io";
import { GetPlaceDetails, PHOTO_REF_URL } from '../../config/GlobalAPI';



const InfoSection = ({trip}) => {

  const [photoUrl,setPhotoUrl] = useState();
  const GetPlacePhoto = async () => {
    const data = {
      textQuery: trip?.TripData?.itinerary[0]?.plan[0]?.placeName
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
    if (trip) {
      GetPlacePhoto();
    }
  }, [trip]);

  return (
    <div>
      <img src={photoUrl} alt="" className=' h-[26rem] w-full object-cover object-center rounded-xl shadow-xl shadow-red-50' />
      
    
       <div className='my-3 flex justify-between items-center gap-2'>
        <h2 className='font-bold text-2xl md:text-3xl'> {trip?.userSelection?.location || "N/A"}</h2>
         <Button ><IoIosSend /></Button>
      </div>
      <div className='flex'>
       <div className=' md:flex  md:gap-5'>
        <h2 className=' px-3 m-2 flex bg-gray-200 rounded-full text-gray-800 text-xs md:text-lg'><FcPlanner  className=' m-1  mt-[6px]' />{trip?.userSelection?.noOfDays || "N/A"} Days</h2>
        <h2 className=' px-3 m-2 flex bg-gray-200 rounded-full text-gray-800 text-xs md:text-lg'><FcMoneyTransfer  className='mt-[6px] m-1 ' /> Budget: {trip?.userSelection?.budget || "N/A"} </h2>
        <h2 className=' px-3 m-2 flex bg-gray-200 rounded-full text-gray-800 text-xs md:text-lg'><FcViewDetails   className=' mt-[6px] m-1 ' /> Traveler: {trip?.userSelection?.traveler || "N/A"}</h2>
       </div>
      
     
     </div>
 
    </div>
  )
}

export default InfoSection
