import React, { useEffect, useState } from 'react';
import LocationSearch from '../components/custom/LocationSearch'; 
import { Input } from '../components/ui/input';
import { Button} from '../components/ui/button';
import { SelectBudgetOptions, SelectTravelList } from '../components/constants/options';
import toast from 'react-hot-toast';


const CreateTrip = () => {

const [errors, setErrors] = useState({});
const [formData, setFormData] = useState({
  location:"",
  noOfDays:"",
  budget:"",
  traveler:""
});
   
  const handlePlaceSelect = (place) => {
  setFormData((prev) => ({
    ...prev,
   location: place.address,

  }));
};

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

useEffect(()=>{
  console.log(formData);
},[formData]);

const validate = () => {
    let tempErrors = {};
    // Validat no. of days
       if(formData?.noOfDays>10 ||formData?.noOfDays<1 )
      tempErrors.noOfDays ="Please enter Number of trip days between 1-10.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

const onGenerateTrip = () =>{
  if(!validate()){
    toast.error(" Please enter Number of trip days between 1-10.")
    return;
  }
  if(!formData.noOfDays||!formData.location||!formData.budget||!formData.traveler){
    toast.error("Please fill all Details")
    return;
  }
}

  return (
    <>
     <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mask-t-from-100% mt-16">
        <h2 className="font-bold text-3xl">
          Tell us your travel preferences 🏕️🌴
        </h2>
        <p className="mt-3 text-gray-500 text-xl">
          Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.
        </p>

        <div className="mt-20 flex flex-col gap-10">
          <div>
            <h2 className="text-xl my-3 font-medium">
              What is your destination of choice?
            </h2>
             {/* Location Search component  */}
            <LocationSearch className="focus-visible:border-red-500" onPlaceSelect={handlePlaceSelect} />
          </div>


          <div>
            <h2 className="text-xl my-3 font-medium">
              How many days are you planning your trip?
            </h2>
          {/* Input component from shadcn */}
          <Input className={` ${errors.noOfDays ? "border-red-500" : "border-gray-300"}`} placeholder={"Ex.3"} type="number" name="noOfDays"  value={formData.noOfDays} onChange={handleInputChange}
            />
              {errors.noOfDays && (
              <p className="mt-1 text-sm text-red-500">{errors.noOfDays}</p>
            )}
          </div>

          <div>
            <h2 className='text-xl font-medium'>What is your Budget?</h2>
           <div className='grid grid-cols-3 gap-5 mt-5'>
             {SelectBudgetOptions.map((item,index)=>(
              <div key={index} onClick={() =>
  setFormData((prev) => ({
    ...prev,
    budget: item.title,
  }))
}
 className={`p-4 border cursor-pointer rounded-lg hover:border-red-500 hover:border-2 hover:border-b-12 ${formData?.budget === item.title && "border-red-500 border-2 border-b-12"} `}>
                <h1 className=' text-5xl'>{item.icon}</h1>
                <h1 className=' font-bold text-2xl pt-3'>{item.title}</h1>
                <h1 className='text-xl text-gray-500 '>{item.desc}</h1>
              </div>
             ))}
           </div>
          </div>

          <div>
            <h2 className='text-xl font-medium'>Who do you plan on traveling with on your next adventure?</h2>
           <div className='grid grid-cols-3 gap-3 mt-5'>
             {SelectTravelList.map((item,index)=>(
              <div key={index} onClick={() =>
  setFormData((prev) => ({
    ...prev,
    traveler: item.people,
  }))
}
 className={`p-4 border cursor-pointer rounded-lg hover:border-red-500 hover:border-2 hover:border-b-12 ${formData?.traveler === item.people && "border-red-500 border-2 border-b-12"} `}>
                <h1 className=' text-6xl'>{item.icon}</h1>
                <h1 className=' font-bold text-2xl pt-3'>{item.title}</h1>
                <h1 className='text-xl text-gray-500 '>{item.desc}</h1>
              </div>
             ))}
           </div>
          </div>

          <div className="mb-12 flex justify-end">
            <Button onClick={onGenerateTrip}>Generate Trip</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateTrip;
