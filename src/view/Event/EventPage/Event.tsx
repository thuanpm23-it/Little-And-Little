import React, { useRef, useEffect, useState } from "react";
import "../../Event/EventPage/event.css";
import EventCard from "../../../components/card/card";
import { CaretRightFilled, CaretLeftFilled } from "@ant-design/icons";
import app from "../../../config/firebase";
import {
  getFirestore,
  collection,
  getDocs,
  DocumentData,
} from "firebase/firestore";

const EventPage: React.FC = () => {
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const [events, setEvents] = useState<DocumentData[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const db = getFirestore(app);
        const eventsRef = collection(db, "events");
        const snapshot = await getDocs(eventsRef);
        const eventData = snapshot.docs.map((doc) => doc.data());
        setEvents(eventData);
      } catch (error) {
        console.error("Error fetching events: ", error);
      }
    };

    fetchEvents();
  }, []);

  const handleScrollLeft = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollLeft -=
        cardContainerRef.current.offsetWidth * 4;
    }
  };

  const handleScrollRight = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollLeft +=
        cardContainerRef.current.offsetWidth * 4;
    }
  };

  return (
    <>
      <div className="event-header-box">
        <div className="header-text-box">
          <div className="header-text">Sự kiện nổi bật</div>
        </div>
      </div>
      <div className="event-main-box">
        <div className="event-main">
          <div className="care-left" onClick={handleScrollLeft}>
            <CaretLeftFilled />
          </div>
          <div className="card-main" ref={cardContainerRef}>
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          <div className="care-right" onClick={handleScrollRight}>
            <CaretRightFilled />
          </div>
        </div>
      </div>
    </>
  );
};

export default EventPage;
