import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/custom/Header";
import LandingPage from "./pages/LandingPage";
import CreateTrip from "./pages/CreateTrip";
import toast, { Toaster } from 'react-hot-toast';
import ViewTrip from "./pages/ViewTrip";
import Footer from "./components/custom/Footer";
import MyTrip from "./pages/MyTrip";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/next"


function App() {
  return (
    <>
    <Toaster/>
     

      <main className="bg-gray-100 min-h-screen">      
      <Router>
         <header>
         <Header />
      </header>
        <Routes>
          {/* Default Route */}
          <Route path="/" element={<LandingPage />} />

          <Route path="/create-trip" element={<CreateTrip />} />
          <Route path="/view-trip/:tripId" element={<ViewTrip />} />
          <Route path="/my-trip" element={<MyTrip/>} />
        </Routes>
      </Router>
    
      </main>
      <footer>
        <Footer/>
      </footer>

      <SpeedInsights/>
    <Analytics/>
    </>
  );
}

export default App;
