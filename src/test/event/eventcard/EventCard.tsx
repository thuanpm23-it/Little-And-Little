import React from "react";
import "../eventcard/eventcard.css";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const EventCard = ({ event }: { event: any }) => {
  return (
    <div className="card card__custom rounded-4">
      <img src={event.img2} className="card-img-top rounded-top-4 " alt="..." />
      <div className="card-body ms-1">
        <h5 className="title__custom">{event.title}</h5>
        <p className="location__custom">{event.location}</p>
        <div className="date__custom d-flex align-items-center">
          <img src={event.img4} alt="Icon" />
          <span className="card__text ms-1">
            {event.startDate} - {event.endDate}
          </span>
        </div>
        <p className="price__custom">{event.price} VNĐ</p>
        <NavLink to={`/event/${event.id}`}>
          <button className="button__item card__button w-75 mb-3">
            Xem chi tiết
          </button>
        </NavLink>
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
