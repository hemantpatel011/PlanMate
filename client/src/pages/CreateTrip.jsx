import React, { useEffect, useState } from "react";
import LocationSearch from "../components/custom/LocationSearch";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import {
  AI_PROMPT,
  SelectBudgetOptions,
  SelectTravelList,
} from "../components/constants/options";
import toast from "react-hot-toast";
import generateTravelPlan from "../config/AIModal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import axios from 'axios';
import { doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { Progress } from "@/components/ui/progress";



const CreateTrip = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({});
  const [result, setResult] = useState();
  const [openDailog, setOpenDailog] = useState(false);
  const [openPopover, setOpenPopover] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setUser } = useUser(); // ✅ Get setUser from context


  const navigate = useNavigate();

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

  useEffect(() => {
    // console.log(formData);
  }, [formData]);

  const validate = () => {
    let tempErrors = {};
    if (formData?.noOfDays > 10 || formData?.noOfDays < 1)
      tempErrors.noOfDays = "Please enter Number of trip days less than 10.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };
  
   const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
               Accept:'Application/json',
            },
          }
        );
        // console.log("Google User Info:", res.data);
        // Store user data in localStorage or sessionStorage
       sessionStorage.setItem("user", JSON.stringify(res.data));
      setUser(res.data); // ✅ this will update Header immediately
setOpenDailog(false);
onGenerateTrip();


      } catch (err) {
        console.error("Failed to fetch user info", err);
      }
    },
    onError: (errorResponse) => console.error("Login Failed", errorResponse),
    scope: "profile email",
  });

// Trip Generate
  const onGenerateTrip = async () => {
    
    const user = sessionStorage.getItem("user");

    if (!user) {
      setOpenDailog(true);
      return;
    }

    if (!validate()) {
      toast.error("Please enter Number of trip days less than 10.");
      return;
    }
    if (
      !formData.noOfDays ||
      !formData.location ||
      !formData.budget ||
      !formData.traveler
    ) {
      toast.error("Please fill all Details");
      return;
    }
    // console.log("Form Data:", formData);

    const FINAL_PROMPT = AI_PROMPT.replace("{location}", formData.location)
      .replace("{totalDays}", formData.noOfDays)
      .replace("{traveler}", formData.traveler)
      .replace("{budget}", formData.budget);

    // console.log(FINAL_PROMPT);

    // const result = await generateTravelPlan(FINAL_PROMPT);
    // console.log('Generated Result:', result);

    try {
      setLoading(true);
      setOpenPopover(true);
       toast.success("Generating Your Trip Plan!");
      const generatedData = await generateTravelPlan(FINAL_PROMPT);
      // console.log("Generated Data:", generatedData);
      setResult(generatedData);
      toast.success("Trip plan generated successfully!");
       SaveAiTrip(generatedData);
       
    } catch (error) {
      toast.error("Failed to generate trip plan.");
    } finally {
      setLoading(false);
      setOpenPopover(false);
    }
  };

  // Save AI Trip in firebase 
  const SaveAiTrip = async (TripData) => {
    setLoading(true);
    const user = JSON.parse(sessionStorage.getItem("user"));
    const docId = Date.now().toString();
    await setDoc(doc(db,"AITrips",docId),{
      userSelection:formData,
      TripData:TripData,
      userEmail: user.email,
      id:docId
    })
    setLoading(false);
    navigate("/view-trip/"+docId);
  }

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mask-t-from-100% pt-30">
      <h2 className="font-bold text-4xl ">
        Tell us your travel preferences 🏕️🌴
      </h2>
      <p className="mt-3 text-gray-500 text-xl">
        Just provide some basic information, and our trip planner will generate
        a customized itinerary based on your preferences.
      </p>

      <div className="mt-20 flex flex-col gap-10">
        <div>
          <h2 className="text-xl my-3 font-medium">
            What is your destination of choice?
          </h2>
          <LocationSearch
            className="focus-visible:border-red-500 "
            onPlaceSelect={handlePlaceSelect}
          />
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium">
            How many days are you planning your trip?
          </h2>
          <Input
            className={`${
              errors.noOfDays ? "border-red-500 shadow-xl" : "border-gray-300 bg-gray-50"
            }`}
            placeholder="Ex.3"
            type="number"
            name="noOfDays"
            value={formData.noOfDays}
            onChange={handleInputChange}
          />
          {/* showing error */}
          {errors.noOfDays && (
            <p className="mt-1 text-sm text-red-500">{errors.noOfDays}</p>
          )}
        </div>

        <div>
          <h2 className="text-xl font-medium">What is your Budget?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5">
            {SelectBudgetOptions.map((item, index) => (
              <div
                key={index}
                onClick={() =>
                  setFormData((prev) => ({ ...prev, budget: item.title }))
                }
                className={`p-4 border-2 shadow-xl cursor-pointer rounded-lg hover:border-red-500 bg-gray-50 ${
                  formData?.budget === item.title &&
                  "border-red-500 border-2 border-b-12"
                }`}
              >
                <h1 className="text-5xl">{item.icon}</h1>
                <h1 className="font-bold text-2xl pt-3">{item.title}</h1>
                <h1 className="text-xl text-gray-500">{item.desc}</h1>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-medium">
            Who do you plan on traveling with on your next adventure?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-5">
            {SelectTravelList.map((item, index) => (
              <div
                key={index}
                onClick={() =>
                  setFormData((prev) => ({ ...prev, traveler: item.people }))
                }
                className={`p-4 border-2 shadow-xl cursor-pointer rounded-lg hover:border-red-500 bg-gray-50 ${
                  formData?.traveler === item.people &&
                  "border-red-500 border-2 border-b-12"
                }`}
              >
                <h1 className="text-6xl">{item.icon}</h1>
                <h1 className="font-bold text-2xl pt-3">{item.title}</h1>
                <h1 className="text-xl text-gray-500">{item.desc}</h1>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12 flex justify-end cursor-pointer">
          <Button onClick={onGenerateTrip}>
            
            {loading ? <AiOutlineLoading3Quarters className="h-7 w-7 animate-spin" />
 : "Generate Trip"}
          </Button>
        </div>

        {/* {result && (
          <div className="bg-gray-100 p-4 rounded">
            <h3 className="text-xl font-semibold mb-2">
              Generated Travel Plan
            </h3>
            <pre className="overflow-x-auto whitespace-pre-wrap">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        )} */}
      </div>

      <Dialog open={openDailog} onOpenChange={setOpenDailog}>
        <DialogContent>
          <DialogHeader>
             <DialogTitle> <h1 className='text-3xl flex '><span className='font-extrabold text-red-600'>Trip</span><span className=' font-extralight text-black'>Mate</span></h1></DialogTitle>
            <DialogDescription>
             
              <h1 className="font-bold text-black text-lg mt-10 mx-auto">Sign In With Google</h1>
              <p>Sign in to the App with Google authentication securly</p>

              <Button
              onClick={login}
              className="w-full mt-5 flex items-center" > <FcGoogle /> Sign In With Google</Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>



{/* Popover */}
    <Dialog open={openPopover}  className="backdrop-blur-2xl" >
        <DialogContent>
          <DialogHeader>
             <DialogTitle> <h1 className='text-2xl flex justify-around items-center '>"Generating Trip..."</h1></DialogTitle>
            <DialogDescription>
             
              <h1 className="font-bold text-black text-5xl flex justify-around items-center mx-auto">{loading ? <Progress value={93} />
 : "Generate Trip"} </h1>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateTrip;
