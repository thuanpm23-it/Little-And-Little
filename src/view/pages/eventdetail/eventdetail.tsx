import React from "react";
import "../eventdetail/eventdetail.css";
import Detail1 from "/selfLearning/InternReact/little-little/src/images/detail2.png";
import Detail2 from "/selfLearning/InternReact/little-little/src/images/detail1.png";
import IconEvent from "/selfLearning/InternReact/little-little/src/images/calendar.png";
const EventDetailPage: React.FC = () => {
  return (
    <div className="eventdetail-main">
      <div className="eventdetail-main-top">
        <div className="eventdetail-text">
          <div className="eventdetail-text-one">Sự kiện 1</div>
        </div>
      </div>
      <div className="eventdetail-main-main">
        <div className="eventdetail-main-main-one">
          <div className="eventdetail-main-children-one">
            <div className="eventdetail-col-1">
              <img src={Detail1} alt="Detail1" className="img-main" />
              <div className="eventdetail-time">
                <img src={IconEvent} alt="Icon" />
                <p className="eventdetail-time-text">30/05/2021 - 01/06/2021</p>
              </div>
              <p className="eventdetail-address">Đầm sen Park</p>
              <p className="eventdetail-price">25.000 VNĐ</p>
            </div>
            <div className="eventdetail-col-2">
              <p className="eventdetail-text">
                <span>Lorem Ipsum</span> is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic sdsd typesetting, remaining cssa
                essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, of
                Lorem Ipsum.
              </p>
            </div>
            <div className="eventdetail-col-3">
              <img src={Detail2} alt="Detail2" className="img-support" />
              <p className="eventdetail-text">
                Lorem Ipsum is not simply random text. It has roots in a piece
                of classical Latin literature from 45 BC, making it over 2000
                years old. words, consectetur, from a Lorem Ipsum passage, and
                going through the cites of the word in classical literature,
              </p>
            </div>
            <div className="eventdetail-col-4">
              <p className="eventdetail-text">
                Lorem Ipsum is not simply random text. It has roots in a piece
                of classical Latin literature from 45 BC, making it over 2000
                years old. words, consectetur, from a Lorem Ipsum passage, and
                going through the cites of the word in classical literature,
              </p>
              <img src={Detail2} alt="Detail2" className="img-support" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;
