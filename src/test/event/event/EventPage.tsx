import React, { useEffect, useRef } from "react";
import EventCard from "../eventcard/EventCard";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { AppDispatch, RootState } from "../../../redux/store";
import { fetchEvents } from "../../../redux/slice/event/eventSlice";
import { CaretLeftFilled, CaretRightFilled } from "@ant-design/icons";
import "../event/eventpage.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from "../../../assets/images/images";

const EventPage = () => {
  const sliderRef = useRef<Slider>(null);
  const events = useSelector((state: RootState) => state.events.events);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  const handlePev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
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
    <div className="container">
      <img src={images[10].eventImg1} alt="Flag1" className="flag__img__1" />
      <div className="row text-center pt-5 pb-5">
        <div className="text__title">Sự kiện nổi bật</div>
      </div>
      <img src={images[11].eventImg2} alt="Flag2" className="flag__img__2" />
      <div className="mt-5 d-flex align-items-center justify-content-center">
        <button
          className="icon__box align-items-center justify-content-center d-flex"
          onClick={handlePev}
          type="button"
        >
          <CaretLeftFilled className="icon__custom" />
        </button>

        <div className="card__main ms-2">
          <Slider ref={sliderRef} {...settings}>
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </Slider>
        </div>

        <button
          className="icon__box align-items-center justify-content-center d-flex"
          onClick={handleNext}
          type="button"
        >
          <CaretRightFilled className="icon__custom" />
        </button>
      </div>
    </div>
  );
};

export default EventPage;
