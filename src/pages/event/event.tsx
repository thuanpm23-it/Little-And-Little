import React from "react";
import "../event/event.css";
import ImgEvent from "/selfLearning/InternReact/little-little/src/images/eventimg.png";
import IconEvent from "/selfLearning/InternReact/little-little/src/images/calendar.png";
import Button from "../../components/button/button";
import EventCard from "../../components/card/card";

const EventPage: React.FC = () => {
  return (
    <div className="event-main">
      <div className="event-main-top">
        <div className="event-text">
          <div className="event-text-one">Sự kiện nổi bật</div>
        </div>
      </div>
      <div className="event-main-container">
        <div className="event-main-col">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
    </div>
  );
};

export default EventPage;
