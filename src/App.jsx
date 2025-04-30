import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Blogs from "./components/Blogs";
import ProductOverview from "./components/ProductOverview";
import LoadMore from "./components/LoadMore";
import Footer from "./components/Footer";
import Shop from "./components/Shop"; // <-- Import your Shop component
import BlogSection from "./components/BlogSection";
import About from "./components/About";
import Contact from "./components/Contact";
import Man from './components/Man';
import Woman from "./components/Woman";
import Accessories from "./components/Accessories";

function App() {
  return (
    <>
      <Topbar />
      <Navbar />


      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Blogs />
            <ProductOverview />
            <LoadMore />
      


          </>
        } />
        
        <Route path="/Shop" element={<Shop />} />
        <Route path="/BlogSection" element={<BlogSection />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Man" element={<Man />} />
        <Route path="/Woman" element={<Woman />} />
        <Route path="/Accessories" element={<Accessories />} />










      </Routes>

      <Footer />
    </>
  );
}

export default App;
