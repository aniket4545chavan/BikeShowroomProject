import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({hotel}) => {
  console.log(hotel._id)
  return (
    <div className="searchItem">
      <img
        src={hotel.images[0]}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
      <Link to={`/hotels/${hotel._id}`} >
      <h1 className="siTitle">{hotel.name}</h1>
      </Link>
        <span className="siDistance">{hotel.pricing / 10 }  CC Bikes</span>
        <span className="siTaxiOp">Fully Exhaust</span>
        <span className="siSubtitle">
          
        </span>
        <span className="siFeatures">
        Precise handling, featuring aerodynamic bodywork, powerful engines, and advanced suspension systems.
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
        High-performance motorcycles designed for speed
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">₹{hotel.pricing}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">
          <Link to={`/hotels/${hotel._id}`} >
          See availability
      </Link>
         </button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
