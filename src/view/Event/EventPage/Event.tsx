import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "../../Event/EventPage/event.css";
import EventCard from "../EventCard/EventCard";
import { CaretRightFilled, CaretLeftFilled } from "@ant-design/icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { fetchEvents } from "../../../redux/slice/event/eventSlice";
import { images } from "../../../images/images";

const EventPage: React.FC = () => {
  const sliderRef = useRef<Slider>(null);
  const events = useSelector((state: RootState) => state.events.events);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  const next = () => {
    sliderRef.current?.slickNext();
  };

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="event-header-box">
        <img src={images[10].eventImg1} alt="Flag1" className="flag1-img" />
        <div className="header-text-box">
          <div className="header-text">Sự kiện nổi bật</div>
        </div>
        <img src={images[11].eventImg2} alt="Flag2" className="flag2-img" />
      </div>
      <div className="event-main-box">
        <div className="event-main">
          <button className="icon-button button-previous" onClick={previous}>
            <CaretLeftFilled className="icons" />
          </button>
          <div className="card-main">
            <Slider ref={sliderRef} {...settings}>
              {events.map((event) => (
                <div key={event.id}>
                  <EventCard event={event} />
                </div>
              ))}
            </Slider>
          </div>
          <button className="icon-button" onClick={next}>
            <CaretRightFilled className="icons" />
          </button>
        </div>
      </div>
    </>
  );
};

export default EventPage;
