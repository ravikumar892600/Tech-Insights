import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import TechnicalSkills from "./components/TechnicalSkills/TechnicalSkills";
import Error404 from "./pages/Error404";
import WorkInProgress from "./pages/WorkInProgress";

import ContactPage from "./pages/ContactPage";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <TechnicalSkills />
      <Projects />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/contact" element={<ContactPage />} />

        <Route path="*" element={<Error404 />} />

        <Route path="/projects-coming-soon" element={<WorkInProgress />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
