import React, { useRef } from "react";
import "../event/event.css";
import EventCard from "../../components/card/card";
import { CaretRightFilled, CaretLeftFilled } from "@ant-design/icons";

const EventPage: React.FC = () => {
  const cardContainerRef = useRef<HTMLDivElement>(null);

  const handleScrollLeft = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollLeft -=
        cardContainerRef.current.offsetWidth * 4; // Di chuyển với khoảng cách bằng 4 EventCard
    }
  };

  const handleScrollRight = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollLeft +=
        cardContainerRef.current.offsetWidth * 4; // Di chuyển với khoảng cách bằng 4 EventCard
    }
  };

  return (
    <div className="event-main">
      <div className="event-main-top">
        <div className="event-text">
          <div className="event-text-one">Sự kiện nổi bật</div>
        </div>
      </div>
      <div className="event-main-container">
        <div className="event-main-col">
          <div className="care-left" onClick={handleScrollLeft}>
            <CaretLeftFilled />
          </div>
          <div className="card-main" ref={cardContainerRef}>
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
          <div className="care-right" onClick={handleScrollRight}>
            <CaretRightFilled />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
