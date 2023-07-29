import React, { useEffect, useRef, useState } from "react";
import "../success/success.css";
import Slider from "react-slick";
import { CaretLeftFilled, CaretRightFilled } from "@ant-design/icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import QRcard from "./QRcard";
import { fetchTickets } from "../../redux/slice/success/successSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useParams } from "react-router-dom";
import { Input, Modal } from "antd";
import axios from "axios";
import JSZip from "jszip";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import { images } from "../../assets/images/images";

const Success = () => {
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
    const downloadedImages: any[] = [];

    for (let i = 0; i < tickets.length; i++) {
      const qrCardElement = document.querySelector(
        `.slick-slide[data-index="${i}"]`
      ) as HTMLElement;

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
  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
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

  const [isEmailModalVisible, setIsEmailModalVisible] = useState(false);
  const [emailRecipient, setEmailRecipient] = useState("");

  const handleSendEmail = async () => {
    setIsEmailModalVisible(false);
    const sendMailImages: any[] = [];

    for (let i = 0; i < tickets.length; i++) {
      const qrCardElement = document.querySelector(
        `.slick-slide[data-index="${i}"]`
      ) as HTMLElement;

      const canvas = await html2canvas(qrCardElement);
      const blob = await new Promise((resolve) => {
        canvas.toBlob((blob) => resolve(blob));
      });

      if (blob) {
        sendMailImages.push(blob);
      }
    }

    if (sendMailImages.length > 0) {
      sendEmail(sendMailImages);
    }
  };

  const sendEmail = async (images: any) => {
    if (emailRecipient) {
      if (images.length > 0) {
        zip = new JSZip();
        folder = zip.folder("qr_cards");

        images.forEach((image: any, index: any) => {
          const fileName = `qr_card_${index + 1}.png`;
          folder!.file(fileName, image);
        });

        zip.generateAsync({ type: "blob" }).then(async (content) => {
          const formData = new FormData();
          formData.append("to", emailRecipient);
          formData.append("subject", "Gửi bạn danh sách vé");
          formData.append("text", "Hãy tải về để xem danh sách vé:");
          formData.append("attachment", content, "qr_cards.zip");

          try {
            const response = await axios.post(
              "http://localhost:8000/send-email",
              formData,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
            );

            const data = response.data;
            console.log(data.message);

            Modal.success({
              content: "Vé đã gửi qua email của bạn.",
            });
          } catch (error) {
            console.error("Đã xảy ra lỗi:", error);

            Modal.error({
              content: "Chưa gửi được vé! Hãy kiểm tra lại email.",
            });
          }
        });
      } else {
        console.log("Không có hình ảnh nào để gửi");
      }
      setEmailRecipient("");
    }
  };

  if (!tickets || !tickets.length) {
    return (
      <div className="container">
        <div className="row text-center pt-5">
          <div className="text__title">Không tìm thấy thanh toán!</div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row text-center pt-5">
        <div className="text__title">Thanh toán thành công</div>
      </div>
      <div className="success__box mt-5">
        <div className="success__border">
          <div className="mt-5 d-flex align-items-center justify-content-center">
            <button
              className="icon__box align-items-center justify-content-center d-flex"
              onClick={handlePrev}
              type="button"
            >
              <CaretLeftFilled className="icon__custom" />
            </button>

            <div className="success__main me-3" ref={qrCardsRef}>
              <Slider ref={sliderRef} {...settings}>
                {tickets.map((ticket) => (
                  <QRcard key={ticket.ticketId} ticket={ticket} />
                ))}
              </Slider>
            </div>
            <button
              className="icon__box align-items-center justify-content-center d-flex"
              onClick={handleNext}
              type="button"
            >
              <CaretRightFilled className="icon__custom" />
            </button>
          </div>
          <div className="d-flex justify-content-between mx-95 mt-4">
            <span className="qr__quantity">Số lượng vé: {tickets.length}</span>
            <span className="qr__number__page">
              Trang {currentPage}/{totalPages}
            </span>
          </div>
        </div>
      </div>

      <div className="success__button__box text-center mt-4">
        <button
          className="button__item success__button me-4"
          onClick={handleDownload}
        >
          Tải về
        </button>
        <button
          className="button__item success__button"
          onClick={() => setIsEmailModalVisible(true)}
        >
          Gửi Email
        </button>
      </div>
      <div>
        <img
          src={images[17].successImg1}
          alt="Avatar3"
          className="success__img"
        />
      </div>
      <Modal
        title="Nhập địa chỉ email người nhận:"
        open={isEmailModalVisible}
        onOk={handleSendEmail}
        onCancel={() => setIsEmailModalVisible(false)}
      >
        <Input
          type="email"
          value={emailRecipient}
          onChange={(e) => setEmailRecipient(e.target.value)}
          required
        />
      </Modal>
    </div>
  );
};

export default Success;
