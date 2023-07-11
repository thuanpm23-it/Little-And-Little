import React from "react";
import ImgEvent from "/selfLearning/InternReact/little-little/src/images/eventimg.png";
import IconEvent from "/selfLearning/InternReact/little-little/src/images/calendar.png";
import Button from "../../components/button/button";
import { NavLink } from "react-router-dom";

const EventCard: React.FC = () => {
  return (
    <div className="card">
      <img src={ImgEvent} alt="Avatar" />
      <div className="container">
        <p className="card-text-1">Sự kiện 1</p>
        <p className="card-text-2">Đầm sen Park</p>

        <div className="card-row">
          <img src={IconEvent} alt="Icon" />
          <p className="card-text-3">30/05/2021 - 01/06/2021</p>
        </div>
        <p className="card-text-4">25.000 VNĐ</p>

        <div className="card-button">
          <NavLink to="/event/1">
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

export default EventCard;
