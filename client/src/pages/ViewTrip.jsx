import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { db } from "../config/firebaseConfig";
import InfoSection from "../components/viewTripComponents/InfoSection";

const ViewTrip = () => {
  // Destucturing header  to get trip id in view trip page
  const { tripId } = useParams();
  const [trip, setTrip] = useState();

  useEffect(() => {
    tripId && getTripData();
  }, [tripId]);

  // Used to get informetion from Firebase.

  const getTripData = async () => {
    const docRef = doc(db, "AITrip", tripId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setTrip(docSnap.data());
    } else {
      console.log("No such document!");
      toast.error("No trip Found");
    }
  };
  return
   <div>
    {/* Information Section */}
 <InfoSection trip={trip} />
    {/* Recommended Hotels */}

    {/* Daily Plan */}
  </div>;
};

export default ViewTrip;
