import React from "react";
import {Button} from "../components/ui/button"
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <>
    {/* Hero Section */}
     <div className="fixed top-0 flex flex-col min-w-full min-h-screen items-center pt-55  gap-8">
      <h1 className="flex flex-col font-extrabold text-2xl md:text-[3.5rem] text-center ">
        <span className="text-red-600">AI-Powered Trip Plan is Her</span>
        <span className=" mt-[-5px] md:mt-[-24px] md:mx-30">Your personalized itineraries in seconds</span>
      </h1>
     
      <p className=" text-lg md:text-2xl font-extralight text-black text-center mx-6 md:mx-20">PlanMate is your intelligent travel companion — an AI-powered platform that creates personalized itineraries for solo travelers, families, and groups in just seconds. From suggesting ideal destinations to crafting day-by-day schedules, PlanMate handles every detail, delivering a seamless, stress-free travel experience tailored to your needs.</p>
     
     <div className="pb-4 mt-8">
     <Link to={"/create-trip"}>
      <Button>Get Started, It's Free</Button>
      </Link>
     </div>
     </div>
    </>
  );
};

export default LandingPage;
