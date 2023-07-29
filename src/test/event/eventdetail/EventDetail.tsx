import React, { useEffect } from "react";
import "../eventdetail/eventdetail.css";
import { fetchEventDetail } from "../../../redux/slice/event/eventDetailSlice";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { images } from "../../../assets/images/images";

const EventDetail = () => {
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
      <div className="container">
        <div className="row text-center pt-5">
          <div className="text__title">Sự kiện không tồn tại!</div>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <img src={images[10].eventImg1} alt="Flag1" className="flag__img__1" />
      <div className="row text-center pt-5 pb-5">
        <div className="text__title">{event.title}</div>
      </div>
      <img src={images[11].eventImg2} alt="Flag2" className="flag__img__2" />
      <div className="row mt-5">
        <div className="event__box">
          <div className="event__border d-flex px-4 pt-5">
            <div className="box__1 me-3">
              <img src={event.img1} alt="" className="event__img__1" />
              <div className="d-flex align-items-center mt-3">
                <img src={event.img4} alt="" />
                <span className="event__date ms-1">
                  {event.startDate} - {event.endDate}
                </span>
              </div>
              <p className="event__location mt-3">{event.location}</p>
              <p className="event__price">{event.price} VNĐ</p>
            </div>
            <div className="box__2 me-3">
              <p className="event__text">
                <span>{event.descriptionTitle} </span>
                {event.description1}
              </p>
            </div>
            <div className="box__3 me-3">
              <img src={event.img3} alt="" className="rounded-3" />
              <p className="event__text mt-3">{event.description2}</p>
            </div>
            <div className="box__4">
              <p className="event__text mb-3">{event.description2}</p>
              <img src={event.img2} alt="" className="rounded-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
