import React from "react";
import {Button} from "../components/ui/button"
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <>
    {/* Hero Section */}
     <div className="flex flex-col min-w-full min-h-[1000px] items-center pt-60 pb-30 gap-8">
      <h1 className="flex flex-col font-extrabold text-2xl md:text-[3.5rem] text-center ">
        <span className="text-red-600">AI-Powered Travel Plan is Her</span>
        <span className="mt-[0px]">Instant, Personalized Itineraries That Fit Your Style</span>
      </h1>
     
      <p className=" text-lg md:text-2xl font-extralight text-center mx-6 md:mx-20">Your intelligent travel companion handles all the planning — from destinations to daily schedules — giving you a fully customized travel experience with zero hassle.</p>
     
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
