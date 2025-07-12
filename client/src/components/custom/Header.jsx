import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useUser } from "@/context/UserContext";

import dummyProfilepic from "@/components/componentsAssets/dummyProfilepic.png"; 
import { useNavigate } from "react-router-dom";

const Header = () => {
 const [openDailog, setOpenDailog] = useState(false);
  const { user, setUser } = useUser(); // ✅ Access user from context
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
              Accept: "Application/json",
            },
          }
        );
        setUser(res.data); // ✅ Save user in context
        setOpenDailog(false);
      } catch (err) {
        console.error("Failed to fetch user info", err);
      }
    },
    onError: (errorResponse) => console.error("Login Failed", errorResponse),
    scope: "profile email",
  });

  const logout = () => {
    setUser(null); // ✅ clear user from context and session
    navigate("/"); // redirect to home page
    window.location.reload(); // optional: force refresh
  };

  return (
    <>
      <div className="Absolute fixed z-10 top-0 w-full flex justify-between items-center shadow-emerald-400 p-3 px-5 bg-gray-200">
        <a href="/">
          <h1 className="text-5xl">
            <span className="font-extrabold text-red-500">Trip</span>
            <span className=" font-extralight">Mate</span>
          </h1>
        </a>
        {user ? (
          <div className="flex items-center gap-8 md:mr-10">
            <div>
              <a href="/create-trip">
                <Button variant="outline" className="hidden md:block rounded-full me-[-10px]">
                  Create Trip
                </Button>
              </a>
            </div>
            <div>
              <a href="/my-trip">
                <Button variant="outline" className="hidden md:block rounded-full">
                  My Trip
                </Button>
              </a>
            </div>

            <Popover>
              <PopoverTrigger>
                <img
      src={ dummyProfilepic} 
      className="h-8 w-8 rounded-full cursor-pointer"
    />
              </PopoverTrigger>
              <PopoverContent>
                <div className="flex flex-col items-center justify-center gap-2">
                  <p className="text-sm text-gray-600 px-[-10px]">{user?.name}</p>
                   <a href="/create-trip"
                className="block md:hidden">
                  Create Trip
              </a>
                  <a href="/my-trip" className="block md:hidden">
                    My Trip
                  </a>
                  <h2 className="cursor-pointer" onClick={logout}>
                    Logout
                  </h2>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <div>
            <Button
              onClick={() => {
                setOpenDailog(true);
              }}
              className="cursor-pointer"
            >
              Sign In
            </Button>
            <Dialog open={openDailog}>
              <DialogContent>
                <DialogHeader>
                  <DialogDescription>
                    <h1 className="text-3xl flex ">
                      <span className="font-extrabold text-red-600">Trip</span>
                      <span className=" font-extralight text-black">Mate</span>
                    </h1>
                    <h1 className="font-bold text-black text-lg mt-10 mx-auto">
                      Sign In With Google
                    </h1>
                    <p>Sign in to the App with Google authentication securely</p>
                    <Button
                      onClick={login}
                      className="w-full mt-5 flex items-center cursor-pointer"
                    >
                      <FcGoogle /> Sign In With Google
                    </Button>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;

