import React from 'react'
import Dummy from "../componentsAssets/placeholder.jpg"
import { Button } from '../ui/button'
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const PlaceCard = ({place}) => {
  return (
  <>
  
    <div className='border p-3 rounded-xl mt-2 md:flex gap-5 shadow-2xl shadow-gray-300  hover:shadow-xl hover:shadow-red-200 hover:scale-103 transition-all'>
        <img src={Dummy} alt="place image" className='w-full h-[210px] md:w-[180px] md:h-[180px] rounded-xl' />
      <div>
        
      <h2 className='text-red-500  text-sm font-semibold '>{place?.bestTimeToVisit}</h2>

      <h2 className='font-bold text-lg'>{place?.placeName}</h2>
      <p className='text-sm text-gray-600'>{place?.placeDetails}</p>
      

      <div className='flex justify-between items-center '>
       <div className='mt-2'>
         <p className=''>⏱️ {place?.timeToTravel}</p>
        <p className='mt-[-5px] text-orange-900'>💰 {place?.ticketPricing}</p>
       </div>
        <Link to ={`https://www.google.com/maps/search/?api=1&query=${place?.placeName}`} target="_blank">
      <Button size='sm' className="text-white cursor-pointer"><FaMapLocationDot /></Button>
       </Link>
        
       
      </div>
    
      
     
     </div>
    </div>
    </>
  
  )
}

export default PlaceCard
