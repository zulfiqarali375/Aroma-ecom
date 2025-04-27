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
      </Routes>

      {/* <Footer /> */}
    </>
  );
}

export default App;
