import React from "react";
import {Button} from "../components/ui/button"
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <>
    {/* Hero Section */}
     <div className="flex flex-col min-w-full min-h-[1000px] bg-gray-200 items-center pt-60 pb-30 gap-10">
      <h1 className="flex flex-col font-extrabold text-[3.5rem] text-center ">
        <span className="text-red-600">Smart, AI-Powered Travel Begins Her</span>
        <span className="mt-[-20px]">Instant, Personalized Itineraries That Fit Your Style</span>
      </h1>
     
      <p className="text-2xl font-extralight text-center mx-20">Your intelligent travel companion handles all the planning — from destinations to daily schedules — giving you a fully customized travel experience with zero hassle.</p>
     
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
