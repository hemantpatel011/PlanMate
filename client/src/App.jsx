import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/custom/Header";
import LandingPage from "./pages/LandingPage";
import CreateTrip from "./pages/CreateTrip";
import toast, { Toaster } from 'react-hot-toast';
import ViewTrip from "./pages/ViewTrip";


function App() {
  return (
    <>
    <Toaster/>
      <header>
         <Header />
      </header>

      <main>      
      <Router>
        <Routes>
          {/* Default Route */}
          <Route path="/" element={<LandingPage />} />

          <Route path="/create-trip" element={<CreateTrip />} />
          <Route path="/view-trip/:tripId" element={<ViewTrip />} />
        </Routes>
      </Router>
    
      </main>
    </>
  );
}

export default App;
