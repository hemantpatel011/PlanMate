import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { GetPlaceDetails, PHOTO_REF_URL } from "../config/GlobalAPI";
import DummyImage from "../components/componentsAssets/placeholder.jpg";
import { Button } from "../components/ui/button";

const MyTrip = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const Navigate = useNavigate();
  const [tripPhotos, setTripPhotos] = useState([]);
  const [userTrips, setUserTrips] = useState([]);

  const getUserTrip = async () => {
    if (!user) {
      Navigate("/");
      return;
    }

    try {
      const q = query(
        collection(db, "AITrips"),
        where("userEmail", "==", user?.email)
      );
      setUserTrips([]);
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUserTrips((prevTrips) => [
          ...prevTrips,
          { id: doc.id, ...doc.data() }, // include doc ID
        ]);
      });
    } catch (error) {
      console.error("Error fetching user trips:", error);
    }
  };

  const GetPlacePhoto = async () => {
    const photos = [];

    for (const trip of userTrips) {
      const location = trip?.userSelection?.location;
      if (!location) continue;

      const data = { textQuery: location };

      try {
        const response = await GetPlaceDetails(data);
        const photoRef = response?.data?.places[0]?.photos[0]?.name;

        if (photoRef) {
          const imageUrl = PHOTO_REF_URL.replace("{NAME}", photoRef);
          photos.push({
            tripId: trip.id || location,
            photoUrl: imageUrl,
          });
        }
      } catch (error) {
        console.error(`Error fetching photo for ${location}:`, error.message);
      }
    }

    setTripPhotos(photos);
  };

  useEffect(() => {
    getUserTrip();
  }, []);

  useEffect(() => {
    if (userTrips.length > 0) {
      GetPlacePhoto();
    }
  }, [userTrips]);

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 pt-30 pb-5">
      <h1 className="font-bold text-4xl">My Trip</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-5">
        {userTrips.length > 0 ? (
          userTrips.map((trip, index) => {
            const tripPhoto = tripPhotos.find(
              (photo) =>
                photo.tripId === trip.id ||
                photo.tripId === trip?.userSelection?.location
            );

            return (
              <div
                key={index}
                className="bg-white border-2 border-white pb-2 p-2 rounded-2xl shadow-gray-300"
              >
                <img
                  src={tripPhoto?.photoUrl || DummyImage}
                  alt="Trip"
                  className="w-full rounded-xl shadow-md h-48 object-cover"
                />
                <p className="text-lg font-bold pl-3 mt-2">
                  {trip?.userSelection?.location}
                </p>
                <p className="text-sm text-gray-600 pl-3">
                  {trip?.userSelection?.noOfDays} Days Trip with{" "}
                  {trip?.userSelection?.budget} budget
                </p>
                <a href={`/view-trip/${trip.id}`}>
                  <Button variant="outline" className="mt-4 ml-3">
                    View Trip Details
                  </Button>
                </a>
              </div>
            );
          })
        ) : (
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
            <div
              key={index}
              className="bg-white border-2 border-white pb-2 p-2 rounded-2xl shadow-gray-300 animate-pulse"
            >
              <div className="w-full h-48 bg-gray-200 rounded-xl shadow-md mb-2"></div>
              <p className="text-lg font-bold pl-3 mt-2">Loading Trip...</p>
              <p className="text-sm text-gray-600 pl-3">Loading details...</p>
              <Button variant="outline" className="mt-4 ml-3">
                Loading...
              </Button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyTrip;
