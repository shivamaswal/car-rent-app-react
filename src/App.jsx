import { useState, useEffect } from "react";
import { data } from "./data";
import CardGallery from "./components/CardGallery.jsx";
import Navigation from "./components/Navigation";
import NotFound from "./components/NotFound";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [carsData, setCarsData] = useState([]);

  useEffect(() => {
    setCarsData(data);
    console.log(carsData);
  }, []);

  return (
    <>
      <Navigation />
      <div className="container-wrapper">
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/page/1" element={<CardGallery data={carsData} />} />
        </Routes>
      </div>
    </>
  );
};
export default App;
