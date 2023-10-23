import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
const Hotel = () => {
  const hotelId = useParams();
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [hotelData, setHotelData] = useState("");
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/hotels/${hotelId.id}`
        );
        console.log(res.data); // check if the response is coming back as expected
        setHotelData(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProduct();
  }, [hotelId.id]);
  console.log(hotelData);

  const photos = [
    {
      src: "https://images.pexels.com/photos/529782/pexels-photo-529782.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      src: "https://images.pexels.com/photos/4577448/pexels-photo-4577448.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      src: "https://images.pexels.com/photos/4577455/pexels-photo-4577455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      src: "https://media.istockphoto.com/id/1426181263/photo/protective-suit-of-armor.jpg?b=1&s=612x612&w=0&k=20&c=IXmylWj7CLbHEK99vikF6QblPaAa8nDucOZ9nZgy0S4=",
    },
    {
      src: "https://tse3.mm.bing.net/th?id=OIP.oPACMGLG_HogX494xbOnKAHaFN&pid=Api&P=0",
    },
    {
      src: "https://tse1.mm.bing.net/th?id=OIP.M_GNGQJpDoMi0xI7JAcvWADyEB&pid=Api&P=0",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
        <div className="btnsVeh">
        <Link to={`/create/${hotelId.id}`}>
        <button>Reserve or Book Now!</button>
        </Link>
        <Link to={`/review`}>
        <button>
        Confused Regarding Purchase! Just Drop a message here
        </button>
        </Link>
        </div>
          <h1 className="hotelTitle">{hotelData.name}</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>
              {hotelData.street}, {hotelData.city}
            </span>
          </div>
          <span className="hotelDistance">
            Excellent location – 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over ₹{hotelData.pricing} at this property and get a
            free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Ride in the heart of the City</h1>
              <p className="hotelDesc">{hotelData.description}</p>
            </div>
            <div className="hotelDetailsPrice">
              <h2>
                <b>₹{hotelData.pricing}</b>
              </h2>
              <Link to={`/create/${hotelId.id}`}>
                <button>Reserve or Book Now!</button>
              </Link>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
