import React, { useEffect } from "react";
import "../../Event/EventDetail/eventdetail.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { fetchEventDetail } from "../../../redux/slice/event/eventDetailSlice";
import { images } from "../../../assets/images/images";

const EventDetailPage: React.FC = () => {
  const { id } = useParams();
  const event = useSelector((state: RootState) => state.eventdetail.event);
  const loading = useSelector((state: RootState) => state.eventdetail.loading);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchEventDetail(id));
    }
  }, [dispatch, id]);

  if (loading) {
    return <div></div>;
  }

  if (!event) {
    return (
      <div className="eventdetail-header-box">
        <div className="header-text-box">
          <div className="header-text">Sự kiện không tồn tại!</div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="eventdetail-header-box">
        <img src={images[10].eventImg1} alt="Flag1" className="flag1-img" />
        <div className="header-text-box">
          <div className="header-text">{event.title}</div>
        </div>
        <img src={images[11].eventImg2} alt="Flag2" className="flag2-img" />
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
