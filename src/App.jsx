import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/LoginPage";
import Navbar from "./components/navbar";
import LegalAwarenessChatbot from "./components/chatbot";
import Casetracker from "./components/casetracking";
import Summarizer from "./components/summarizer";
import RightService1 from "./components/rightservice1";

function App() {
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    const fetchUserType = async () => {
      try {
        const userId = "67e1b0425761f8e998742ab3"; // Replace with the logged-in user's ID
        const response = await fetch(`http://localhost:5001/api/user-role/${userId}`);
        const data = await response.json();
        setUserType(data.userType);
      } catch (error) {
        console.error("Error fetching user type:", error);
      }
    };

    fetchUserType();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Navbar />} />
        <Route path="/legalbot" element={<LegalAwarenessChatbot />} />
        <Route path="/summarizer" element={<Summarizer />} />
        <Route path="/casetracker" element={<Casetracker />} />
        {/* Conditionally render RightService1 */}
        {userType === "judge" && (
          <Route path="/rightservice1" element={<RightService1 />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;