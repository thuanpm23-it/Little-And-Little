import React from "react";
import PropTypes from "prop-types";
import Button from "../../components/button/button";
import { NavLink } from "react-router-dom";

const EventCard = ({ event }: { event: any }) => {
  return (
    <div className="card">
      <img src={event.img2} alt="Avatar" />
      <div className="container">
        <p className="card-text-1">{event.title}</p>
        <p className="card-text-2">{event.location}</p>

        <div className="card-row">
          <img src={event.img4} alt="Icon" />
          <p className="card-text-3">
            {" "}
            {event.startDate} - {event.endDate}
          </p>
        </div>
        <p className="card-text-4">{event.price} VNĐ</p>

        <div className="card-button">
          <NavLink to={`/event/${event.id}`}>
            <Button
              label="Xem chi tiết"
              width="200px"
              height="40px"
              fontSize="18px"
              fontFamily="iCiel Koni"
              fontWeight="900"
              lineHeight="normal"
              color="#fff"
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

EventCard.propTypes = {
  event: PropTypes.shape({
    img2: PropTypes.string,
    img4: PropTypes.string,
    title: PropTypes.string,
    startDate: PropTypes.string,
    enDate: PropTypes.string,
    location: PropTypes.string,
    price: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export default EventCard;
