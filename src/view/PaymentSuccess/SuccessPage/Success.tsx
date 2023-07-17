import React, { useEffect, useRef, useState } from "react";
import "../SuccessPage/success.css";
import Avatar4 from "../../../images/avatar4.png";
import QRCard from "./../QRCard/QRCard";
import { CaretLeftFilled, CaretRightFilled } from "@ant-design/icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  DocumentData,
  collection,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import app from "../../../config/firebase";

const SuccessPage: React.FC = () => {
  const sliderRef = useRef<Slider>(null);
  const [tickets, setTickets] = useState<DocumentData[]>([]);
  // useEffect(() => {
  //   const fetchTickets = async () => {
  //     try {
  //       const db = getFirestore(app);
  //       const ticketsRef = collection(db, "tickets");
  //       const querySnapshot = await getDocs(ticketsRef);
  //       const ticketData = querySnapshot.docs.map((doc) => doc.data());
  //       const latestPaymentId =
  //         payments.length > 0 ? payments[payments.length - 1].paymentId : null;
  //       const filteredTickets = ticketData.filter(
  //         (ticket) => ticket.paymentId === latestPaymentId
  //       );

  //       setTickets(filteredTickets);
  //     } catch (error) {
  //       console.error("Error fetching tickets: ", error);
  //     }
  //   };

  //   fetchTickets();
  // }, []);

  const numberOfTickets = tickets.length;

  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  const next = () => {
    sliderRef.current?.slickNext();
  };

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="paysuccess-header-box">
        <div className="header-text-box">
          <div className="header-text">Thanh toán thành công</div>
        </div>
      </div>
      <div className="paysuccess-main-box">
        <div className="paysuccess-tab-box">
          <div className="paysuccess-tab-box-border">
            <div className="paysuccess-tab-box-main">
              <button
                className="icon-button button-previous"
                onClick={previous}
              >
                <CaretLeftFilled className="icons" />
              </button>
              <div className="paysuccess-card">
                <Slider ref={sliderRef} {...settings}>
                  <QRCard />
                  <QRCard />
                  <QRCard />
                  <QRCard />
                  <QRCard />
                  <QRCard />
                  <QRCard />
                  <QRCard />
                </Slider>
              </div>
              <button className="icon-button" onClick={next}>
                <CaretRightFilled className="icons" />
              </button>
            </div>
            <div className="paysuccess-main-bottom">
              <p className="paysuccess-text-start">Số lượng vé: 12 vé</p>
              <p className="paysuccess-text-end">Trang 1/3</p>
            </div>
          </div>
        </div>
        <div className="paysuccess-picture">
          <img src={Avatar4} alt="Avatar4" />
        </div>
      </div>
      <div className="paysuccess-bottom-box">
        <button type="submit" className="button-item paysuccess-button-wh ms">
          Tải về
        </button>
        <button type="submit" className="button-item paysuccess-button-wh">
          Gửi qua mail
        </button>
      </div>
    </>
  );
};

export default SuccessPage;
