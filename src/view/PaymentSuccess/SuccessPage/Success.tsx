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
  where,
  query,
} from "firebase/firestore";
import app from "../../../config/firebase";
import { useParams } from "react-router-dom";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import JSZip from "jszip";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { fetchTickets } from "../../../redux/slice/success/successSlice";

const SuccessPage: React.FC = () => {
  const sliderRef = useRef<Slider>(null);
  // const [tickets, setTickets] = useState<DocumentData[]>([]);
  const { paymentId } = useParams();
  const qrCardsRef = useRef<HTMLDivElement>(null);

  const tickets = useSelector((state: RootState) => state.success.tickets);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (paymentId) {
      dispatch(fetchTickets(paymentId));
    }
  }, [dispatch, paymentId]);

  // useEffect(() => {
  //   const fetchTickets = async () => {
  //     try {
  //       const db = getFirestore(app);
  //       const ticketsRef = collection(db, "tickets");
  //       const q = query(ticketsRef, where("paymentId", "==", paymentId));
  //       const snapshot = await getDocs(q);
  //       const ticketData = snapshot.docs.map((doc) => doc.data());
  //       setTickets(ticketData);
  //     } catch (error) {
  //       console.error("Error fetching tickets: ", error);
  //     }
  //   };

  //   fetchTickets();
  // }, [paymentId]);

  const handleDownload = async () => {
    if (sliderRef.current && qrCardsRef.current) {
      const sliderElement = sliderRef.current;
      const qrCardsElement = qrCardsRef.current;

      const downloadedImages: any[] = [];

      for (let i = 0; i < tickets.length; i++) {
        sliderElement.slickGoTo(i);

        await new Promise((resolve) => setTimeout(resolve, 500));

        const qrCardElement = qrCardsElement.getElementsByClassName(
          "slick-current"
        )[0] as HTMLElement;
        const canvas = await html2canvas(qrCardElement);
        const blob = await new Promise((resolve) => {
          canvas.toBlob((blob) => resolve(blob));
        });

        if (blob) {
          downloadedImages.push(blob);
        }
      }

      if (downloadedImages.length > 0) {
        downloadAllImages(downloadedImages);
      }
    }
  };

  const downloadAllImages = (images: any) => {
    const zip = new JSZip();
    const folder = zip.folder("qr_cards");

    images.forEach((image: any, index: any) => {
      const fileName = `qr_card_${index + 1}.png`;
      folder!.file(fileName, image);
    });

    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, "qr_cards.zip");
    });
  };
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
    slidesToShow: Math.min(4, tickets.length),
    slidesToScroll: 4,
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
              <div className="paysuccess-card" ref={qrCardsRef}>
                <Slider ref={sliderRef} {...settings}>
                  {tickets.map((ticket) => (
                    <QRCard key={ticket.ticketId} ticket={ticket} />
                  ))}
                </Slider>
              </div>
              <button className="icon-button" onClick={next}>
                <CaretRightFilled className="icons" />
              </button>
            </div>
            <div className="paysuccess-main-bottom">
              <p className="paysuccess-text-start">
                Số lượng vé: {tickets.length}
              </p>
              <p className="paysuccess-text-end">Trang 1/3</p>
            </div>
          </div>
        </div>
        <div className="paysuccess-picture">
          <img src={Avatar4} alt="Avatar4" />
        </div>
      </div>
      <div className="paysuccess-bottom-box">
        <button
          type="submit"
          className="button-item paysuccess-button-wh ms"
          onClick={handleDownload}
        >
          Tải về
        </button>
        <button type="submit" className="button-item paysuccess-button-wh">
          Gửi Email
        </button>
      </div>
    </>
  );
};

export default SuccessPage;
