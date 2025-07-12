import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { db } from "../config/firebaseConfig";
import InfoSection from "../components/viewTripComponents/InfoSection";
import Hotels from "../components/viewTripComponents/Hotels";
import PlacesToVisit from "../components/viewTripComponents/PlacesToVisit";

const ViewTrip = () => {
  // Destucturing header  to get trip id in view trip page
  const { tripId } = useParams();
  const [trip, setTrip] = useState();

  useEffect(() => {
    if (tripId) {
      getTripData();
    }
  }, [tripId]);

  useEffect(() => {
    if (trip) {
      // console.log("trip:", trip); // ✅ This logs after trip is set
    }
  }, [trip]);

  // Used to get informetion from Firebase.

      const getTripData = async () => {
    try {
      const docRef = doc(db, "AITrips", tripId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        // console.log("Document data:", data);
        setTrip(data);
      } else {
        console.log("No such document!");
        toast.error("No trip Found");
      }
    } catch (error) {
      console.error("Error fetching trip:", error);
      toast.error("Something went wrong while fetching trip.");
    }
  };
  
  return (
      <div className="p-5 md:px-20 lg:px-44 xl:px-56 pt-22 bg-gray-100 ">

    {/* Information Section */}
      <InfoSection trip = {trip} />
      
    {/* Recommended Hotels */}
     <Hotels trip = {trip}/>

    {/* Places to Visit */}
    <PlacesToVisit trip = {trip}/>
  </div>
  )
};

export default ViewTrip;
