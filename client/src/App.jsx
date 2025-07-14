import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/custom/Header";
import LandingPage from "./pages/LandingPage";
import CreateTrip from "./pages/CreateTrip";
import toast, { Toaster } from "react-hot-toast";
import ViewTrip from "./pages/ViewTrip";
import Footer from "./components/custom/Footer";
import MyTrip from "./pages/MyTrip";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import BgImg from "./components/componentsAssets/tripmate-bg.jpg";

function App() {
  return (
    <>
      <Toaster />

      <img
        src={BgImg}
        alt=""
        className="fixed top-0 right-0 h-screen opacity-50 object-cover object-right bg-cover"
      />
      <main
        className={` relative bg-gradient-to-r from-yellow-500/15 via-blue-600/15 to-yellow-500/15 min-h-screen`}
      >
        <Router>
          <header><Header /></header>
          <Routes>
            {/* Default Route */}
            <Route path="/" element={<LandingPage />} />

            <Route path="/create-trip" element={<CreateTrip />} />
            <Route path="/view-trip/:tripId" element={<ViewTrip />} />
            <Route path="/my-trip" element={<MyTrip />} />
          </Routes>
        </Router>
      </main>

       <footer className="bg-gradient-to-r from-yellow-500/15 via-blue-600/15 to-yellow-500/15">
          <Footer />
        </footer>

      <SpeedInsights />
      <Analytics />
    </>
  );
}

export default App;
