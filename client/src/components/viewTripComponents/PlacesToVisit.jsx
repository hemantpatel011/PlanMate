import React from 'react'
import PlaceCard from './PlaceCard'

const PlacesToVisit = ({trip}) => {
  return (
    <div className='mt-5'>
      <h2 className="font-bold text-xl mt-9 mb-7">Places to Visit</h2>
      
      <div className=''>
        {trip?.TripData?.itinerary?.map((item,index) =>(
          <div key={index} >
            <h2 className='font-bold text-lg text-red-500 mt-10 mb-4'>{item?.day}</h2>
            
          <div className='grid md:grid-cols-2 gap-5'>
          {item?.plan?.map((place,index) =>(
            <div className=''>
              
                <PlaceCard  place = {place} />
              
            </div>
          ))}
          </div>
          </div>

        ))}
      </div>
    </div>
  )
}

export default PlacesToVisit

