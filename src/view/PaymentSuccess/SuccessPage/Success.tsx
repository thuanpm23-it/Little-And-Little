import React, { useEffect, useRef, useState } from "react";
import "../SuccessPage/success.css";
import QRCard from "./../QRCard/QRCard";
import { CaretLeftFilled, CaretRightFilled } from "@ant-design/icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from "react-router-dom";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import JSZip from "jszip";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { fetchTickets } from "../../../redux/slice/success/successSlice";
import { images } from "../../../images/images";
import emailjs from "emailjs-com";

const SuccessPage: React.FC = () => {
  const sliderRef = useRef<Slider>(null);
  const { paymentId } = useParams();
  const qrCardsRef = useRef<HTMLDivElement>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const tickets = useSelector((state: RootState) => state.success.tickets);
  const dispatch: AppDispatch = useDispatch();

  let folder: JSZip | null = new JSZip();
  let zip: JSZip | null = new JSZip();
  useEffect(() => {
    if (paymentId) {
      dispatch(fetchTickets(paymentId));
    }
  }, [dispatch, paymentId]);

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
    zip = new JSZip();
    folder = zip.folder("qr_cards");

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

  useEffect(() => {
    setTotalPages(Math.ceil(tickets.length / 4));
  }, [tickets]);

  const handleSlideChange = (currentSlide: number) => {
    setCurrentPage(Math.ceil(currentSlide / 4) + 1);
  };

  const getSlidesToShow = (page: number) => {
    if (page === totalPages) {
      return tickets.length % 4 || 4;
    }
    return 4;
  };

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 400,
    slidesToShow: getSlidesToShow(currentPage),
    slidesToScroll: 4,
    afterChange: handleSlideChange,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mthuannnn91@gmail.com",
      pass: "A0rdshcspct#",
    },
  });

  const sendEmail = async () => {
    try {
      const mailOptions = {
        from: "mthuannnn91@gmail.com",
        to: "dzai01294436023@gmail.com",
        subject: "Tiêu đề email",
        text: "Nội dung email",
        attachments: [
          {
            filename: "qr_cards.zip",
            path: "",
          },
        ],
      };

      const info = await transporter.sendMail(mailOptions);
      console.log("Email đã được gửi thành công:", info.response);
    } catch (error) {
      console.error("Gửi email lỗi:", error);
    }
  };

  if (!tickets || !tickets.length) {
    return (
      <div className="paysuccess-header-box">
        <div className="header-text-box">
          <div className="header-text">Không tìm thấy thanh toán!</div>
        </div>
      </div>
    );
  }

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
              <p className="paysuccess-text-end">
                Trang {currentPage}/{totalPages}
              </p>
            </div>
          </div>
        </div>
        <div className="paysuccess-picture">
          <img src={images[17].successImg1} alt="Avatar4" />
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
        <button
          type="submit"
          className="button-item paysuccess-button-wh"
          onClick={sendEmail}
        >
          Gửi Email
        </button>
      </div>
    </>
  );
};

export default SuccessPage;
