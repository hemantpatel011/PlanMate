import React from "react";
import {Button} from "../components/ui/button"
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <>
    {/* Hero Section */}
     <div className="flex flex-col min-w-full min-h-[600px] bg-gray-200 items-center pt-60 pb-30 gap-10">
      <h1 className="flex flex-col font-extrabold text-[3.5rem] text-center ">
        <span className="text-red-600">Discover Your Next Adventure with AI</span> 
        <span className="mt-[-20px]">Personalized Itineraries at Your Fingertips</span>
      </h1>
     
      <p className="text-2xl font-extralight text-center">Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.</p>
     
     <div className="pb-4">
     <Link to={"/create-trip"}>
      <Button>Get Started, It's Free</Button>
      </Link>
     </div>
     </div>
    </>
  );
};

export default LandingPage;
