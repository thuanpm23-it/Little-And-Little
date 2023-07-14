import React, { useEffect, useState } from "react";
import "../../Event/EventDetail/eventdetail.css";
import { useParams } from "react-router-dom";
import { getFirestore, getDoc, doc, collection } from "firebase/firestore";
import app from "../../../config/firebase";

const EventDetailPage: React.FC = () => {
  const { id } = useParams();
  const [event, setEvent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      const db = getFirestore(app);
      const eventsCollectionRef = collection(db, "events");
      const eventRef = doc(eventsCollectionRef, id);
      const eventSnapshot = await getDoc(eventRef);
      if (eventSnapshot.exists()) {
        const eventData = eventSnapshot.data();
        setEvent(eventData);
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="eventdetail-header-box">
        <div className="header-text-box">
          <div className="header-text">{event.title}</div>
        </div>
      </div>
      <div className="eventdetail-main-box">
        <div className="eventdetail-main">
          <div className="eventdetail-main-border">
            <div className="eventdetail-col-1">
              <img src={event.img1} alt="Detail1" className="img-main" />
              <div className="eventdetail-time">
                <img src={event.img4} alt="Icon" />
                <p className="eventdetail-time-text">
                  {event.startDate} - {event.endDate}
                </p>
              </div>
              <p className="eventdetail-address">{event.location}</p>
              <p className="eventdetail-price">{event.price} VNĐ</p>
            </div>
            <div className="eventdetail-col-2">
              <p className="eventdetail-text">
                <span>{event.descriptionTitle} </span>
                {event.description1}
              </p>
            </div>
            <div className="eventdetail-col-3">
              <img src={event.img2} alt="Detail2" className="img-support" />
              <p className="eventdetail-text">{event.description2}</p>
            </div>
            <div className="eventdetail-col-4">
              <p className="eventdetail-text">{event.description3}</p>
              <img src={event.img3} alt="Detail2" className="img-support" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetailPage;
