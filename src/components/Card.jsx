import { FaRegHeart } from "react-icons/fa6";
import { BsPeople, BsSpeedometer2 } from "react-icons/bs";
import { LuFuel } from "react-icons/lu";
import { PiSteeringWheelBold } from "react-icons/pi";

const Card = ({
  title,
  image,
  year,
  capacity,
  fuel_type,
  mileage,
  trans,
  price,
}) => {
  return (
    <div className="card">
      <div className="img-container">
        <img src={image} alt={title} />
      </div>
      <div className="detail-container">
        <p className="detail-name">{title}</p>
        <p className="detail-year">{year}</p>
      </div>
      <div className="rent-details">
        <span className="rent-detail">
          <BsPeople className="icon" />
          <p className="car-capacity">{capacity}</p>
        </span>
        <span className="rent-detail">
          <LuFuel className="icon" />
          <p className="car-type">{fuel_type}</p>
        </span>
        <span className="rent-detail">
          <BsSpeedometer2 className="icon" />
          <p className="car-mileage">{mileage} kmpl</p>
        </span>
        <span className="rent-detail">
          <PiSteeringWheelBold className="icon" />
          <p className="car-trans">{trans}</p>
        </span>
      </div>
      <div className="cta-container">
        <p className="rent">
          ₹{price}
          <span>/day</span>
        </p>
        <div className="btn-container">
          <button className="like-btn btn">
            <FaRegHeart />
          </button>
          <button className="cta-btn btn">Rent now</button>
        </div>
      </div>
    </div>
  );
};
export default Card;
