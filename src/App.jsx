import { useState, useEffect } from "react";
import { data } from "./data";
import CardGallery from "./components/CardGallery.jsx";
import Navigation from "./components/Navigation";

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
        <CardGallery data={carsData} />
      </div>
    </>
  );
};
export default App;
