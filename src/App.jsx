import { useState } from "react";
import companiesData from "./companies.json";
import technologiesData from "./technologies.json";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import "./App.css";

function App() {
  const [companies, setCompanies] = useState(companiesData);
  const [technologies, setTechnologies] = useState(technologiesData);
  return (
    <div className="App">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
