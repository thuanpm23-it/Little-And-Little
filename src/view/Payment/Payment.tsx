import React, { useEffect, useState } from "react";
import "../../view/Payment/payment.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { CalendarOutlined } from "@ant-design/icons";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import app from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import { fetchBanks } from "../../redux/slice/payment/banksSlice";
import { images } from "../../assets/images/images";
import {
  updateQuantity,
  updateDate,
  updateFullName,
  updateEmail,
  updatePhone,
} from "../../redux/slice/payment/bookingSlice";
import { Modal } from "antd";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

const PaymentPage: React.FC = () => {
  const bookingDetails = useSelector((state: RootState) => state.booking);
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");
  const banks = useSelector((state: RootState) => state.banks.banks);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const dispatch: AppDispatch = useDispatch();

  const totalPrice = () => {
    return bookingDetails.packageType === "Gia đình"
      ? 100000 * bookingDetails.quantity
      : 80000 * bookingDetails.quantity;
  };

  const formattedPrice = totalPrice().toLocaleString("vi-VN");

  const formatCardNumber = (input: any) => {
    const cleanedInput = input.replace(/\D/g, "");
    let formattedInput = "";
    for (let i = 0; i < cleanedInput.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedInput += " ";
      }
      formattedInput += cleanedInput[i];
    }
    return formattedInput;
  };

  const handleCardNumberChange = (e: any) => {
    const input = e.target.value;
    const formattedInput = formatCardNumber(input);
    setCardNumber(formattedInput);
    const matchingData = banks.find(
      (item) => item.cardNumber === formattedInput
    );
    setTimeout(() => {
      if (matchingData) {
        setCardName(matchingData.cardName);
      } else {
        setCardName("");
      }
    }, 1000);
  };

  const handleDateChange = (e: any) => {
    const inputValue = e.target.value;
    const sanitizedValue = inputValue.replace(/[^0-9/]/g, "");
    setExpirationDate(sanitizedValue);
  };

  useEffect(() => {
    dispatch(fetchBanks());
  }, [dispatch]);

  const generateTicketId = () => {
    const characters = "0123456789";
    let ticketId = "";
    for (let i = 0; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      ticketId += characters.charAt(randomIndex);
    }
    return ticketId;
  };

  const handlePaymentSubmit = async () => {
    if (cardNumber && cardName && expirationDate && cvv) {
      const matchingData = banks.filter(
        (item) =>
          item.cardName === cardName &&
          item.cardNumber === cardNumber &&
          item.cvv === cvv &&
          item.expirationDate === expirationDate
      );
      if (matchingData.length > 0) {
        console.log("Correct");
        try {
          const db = getFirestore(app);
          const formattedDate = format(bookingDetails.date, "dd/MM/yyyy");
          const paymentData = {
            packageType: bookingDetails.packageType,
            totalPrice: formattedPrice,
            quantity: bookingDetails.quantity,
            date: formattedDate,
            fullName: bookingDetails.fullName,
            phone: bookingDetails.phone,
            email: bookingDetails.email,
            bankData: {
              cardId: matchingData[0].id,
              cardName: cardName,
              cardNumber: cardNumber,
              expirationDate: expirationDate,
              cvv: cvv,
            },
          };
          const paymentRef = collection(db, "payments");
          const docRef = await addDoc(paymentRef, paymentData);
          const paymentId = docRef.id;
          console.log("Document written with ID: ", docRef.id);
          const ticketsData = [];
          for (let i = 0; i < bookingDetails.quantity; i++) {
            const ticketId = generateTicketId();
            const ticketData = {
              ticketId: "ALT" + ticketId,
              paymentId: paymentId,
              ticketDate: formattedDate,
              qrCodeValue: "ALT" + ticketId,
              ticketTick: images[18].successImg2,
            };
            ticketsData.push(ticketData);
          }
          const ticketsRef = collection(db, "tickets");
          await Promise.all(
            ticketsData.map((ticket) => addDoc(ticketsRef, ticket))
          );
          navigate(`/success/${paymentId}`);
        } catch {}
      } else {
        setIsSuccessModalOpen(true);
      }
    } else {
      setIsSuccessModalOpen(true);
    }
  };

  if (!bookingDetails || bookingDetails.quantity === 0) {
    return (
      <div className="container">
        <div className="row text-center pt-5">
          <div className="text__title">Vui lòng điền thông tin thanh toán!</div>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="row text-center pt-5">
        <div className="text__title">Thanh toán</div>
      </div>
      <div className="row mt-5 align-items-center">
        <div className="col-6">
          <div className="payment__box__1 ">
            <div className="payment__border__1">
              <div className="payment__tag tag__margin d-flex align-items-center justify-content-center">
                <div className="payment__tag__border d-flex pt-2 justify-content-center">
                  <div className="tag__text">
                    VÉ CỔNG - VÉ {bookingDetails.packageType}
                  </div>
                </div>
              </div>

              <div className="payment__input__box__1 ms-5 ps-5 me-5 mt-2">
                <div className="d-flex">
                  <div className="me-5">
                    <label className="input__label">Số tiền thanh toán</label>
                    <br />
                    <input
                      type="text"
                      className="input__item"
                      value={formattedPrice}
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="input__label">Số lượng vé</label> <br />
                    <div className="d-flex align-items-center">
                      <input
                        className="input__item w-50 me-2"
                        value={bookingDetails.quantity}
                        onChange={(e) => {
                          dispatch(updateQuantity(Number(e.target.value)));
                        }}
                        type="number"
                        min={1}
                      />
                      <span className="ticket__text">Vé</span>
                    </div>
                  </div>
                  <div>
                    <label className="input__label">Ngày sử dụng</label> <br />
                    <DatePicker
                      selected={bookingDetails.date}
                      onChange={(selectedDate: Date) =>
                        dispatch(updateDate(selectedDate))
                      }
                      dateFormat="dd/MM/yyyy"
                      minDate={new Date()}
                      className="input__item"
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <label className="input__label">Thông tin liên hệ</label>
                  <br />
                  <input
                    type="text"
                    className="input__item w-54"
                    value={bookingDetails.fullName}
                    onChange={(e) => dispatch(updateFullName(e.target.value))}
                  />
                </div>
                <div className="mt-3">
                  <label className="input__label">Điện thoại</label>
                  <br />
                  <input
                    type="tel"
                    className="input__item"
                    value={bookingDetails.phone}
                    onChange={(e) => dispatch(updatePhone(e.target.value))}
                  />
                </div>
                <div className="mt-3">
                  <label className="input__label">Email</label>
                  <br />
                  <input
                    type="email"
                    className="input__item w-54"
                    value={bookingDetails.email}
                    onChange={(e) => dispatch(updateEmail(e.target.value))}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="payment__vector">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="142"
              height="584"
              viewBox="0 0 142 584"
              fill="none"
            >
              <path
                d="M139.686 578.711L97.3042 572.472L81.1709 547.233L75.184 542.53V41.2605L81.1709 36.5576L97.3042 11.3185L139.686 5.07928C139.686 5.07928 149.832 0.940703 114.603 0.0314696C85.9604 -0.720999 70.2052 22.6369 70.2052 22.6369C60.4685 34.551 56.7188 37.4668 39.7662 18.4043C22.8135 -0.658295 0 0.0314696 0 0.0314696L29.6513 23.7029L39.7662 42.4833V541.339L29.6513 560.119L0 583.791C0 583.791 22.8451 584.512 39.7662 565.418C56.7188 546.355 60.4685 549.271 70.2052 561.185C70.2052 561.185 85.9604 584.543 114.603 583.791C149.801 582.85 139.686 578.711 139.686 578.711ZM57.2382 519.805C50.4635 519.805 45.0122 514.349 45.0122 507.64C45.0122 500.899 50.495 495.475 57.2382 495.475C63.9815 495.475 69.4643 500.93 69.4643 507.64C69.4958 514.349 64.013 519.805 57.2382 519.805ZM57.2382 483.279C50.4635 483.279 45.0122 477.823 45.0122 471.114C45.0122 464.373 50.495 458.949 57.2382 458.949C63.9815 458.949 69.4643 464.404 69.4643 471.114C69.4958 477.823 64.013 483.279 57.2382 483.279ZM57.2382 448.069C50.4635 448.069 45.0122 442.614 45.0122 435.905C45.0122 429.164 50.495 423.74 57.2382 423.74C63.9815 423.74 69.4643 429.195 69.4643 435.905C69.4958 442.614 64.013 448.069 57.2382 448.069ZM57.2382 411.7C50.4635 411.7 45.0122 406.245 45.0122 399.535C45.0122 392.794 50.495 387.37 57.2382 387.37C63.9815 387.37 69.4643 392.826 69.4643 399.535C69.4958 406.245 64.013 411.7 57.2382 411.7ZM57.2382 376.303C50.4635 376.303 45.0122 370.847 45.0122 364.138C45.0122 357.397 50.495 351.973 57.2382 351.973C63.9815 351.973 69.4643 357.428 69.4643 364.138C69.4958 370.879 64.013 376.303 57.2382 376.303ZM57.2382 340.121C50.4635 340.121 45.0122 334.666 45.0122 327.957C45.0122 321.216 50.495 315.792 57.2382 315.792C63.9815 315.792 69.4643 321.247 69.4643 327.957C69.4958 334.666 64.013 340.121 57.2382 340.121ZM57.2382 304.567C50.4635 304.567 45.0122 299.112 45.0122 292.402C45.0122 285.661 50.495 280.237 57.2382 280.237C63.9815 280.237 69.4643 285.693 69.4643 292.402C69.4958 299.112 64.013 304.567 57.2382 304.567ZM57.2382 268.512C50.4635 268.512 45.0122 263.056 45.0122 256.347C45.0122 249.637 50.495 244.182 57.2382 244.182C63.9815 244.182 69.4643 249.637 69.4643 256.347C69.4643 263.056 64.013 268.512 57.2382 268.512ZM57.2382 232.832C50.4635 232.832 45.0122 227.377 45.0122 220.667C45.0122 213.926 50.495 208.502 57.2382 208.502C63.9815 208.502 69.4643 213.958 69.4643 220.667C69.4958 227.377 64.013 232.832 57.2382 232.832ZM57.2382 196.933C50.4635 196.933 45.0122 191.477 45.0122 184.768C45.0122 178.027 50.495 172.603 57.2382 172.603C63.9815 172.603 69.4643 178.058 69.4643 184.768C69.4958 191.477 64.013 196.933 57.2382 196.933ZM57.2382 161.065C50.4635 161.065 45.0122 155.61 45.0122 148.9C45.0122 142.159 50.495 136.735 57.2382 136.735C63.9815 136.735 69.4643 142.191 69.4643 148.9C69.4958 155.61 64.013 161.065 57.2382 161.065ZM57.2382 125.354C50.4635 125.354 45.0122 119.899 45.0122 113.189C45.0122 106.48 50.495 101.024 57.2382 101.024C63.9815 101.024 69.4643 106.48 69.4643 113.189C69.4643 119.899 64.013 125.354 57.2382 125.354ZM57.2382 89.3298C50.4635 89.3298 45.0122 83.8744 45.0122 77.1649C45.0122 70.4554 50.495 65 57.2382 65C63.9815 65 69.4643 70.4554 69.4643 77.1649C69.4643 83.8744 64.013 89.3298 57.2382 89.3298Z"
                fill="#FDE8B3"
              />
            </svg>
          </div>
        </div>
        <div className="col">
          <div className="payment__box__2 ">
            <div className="payment__border__2">
              <div className="payment__tag ms-5 d-flex align-items-center justify-content-center">
                <div className="payment__tag__border d-flex pt-2 justify-content-center">
                  <div className="tag__text">THÔNG TIN THANH TOÁN</div>
                </div>
              </div>

              <div className="payment__input__box__2 mx-5 mt-2">
                <div>
                  <label className="input__label">Số thẻ</label>
                  <br />
                  <input
                    className="input__item w-100"
                    placeholder="Số thẻ"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                    maxLength={19}
                  />
                </div>
                <div className="mt-3">
                  <label className="input__label">Họ và tên chủ thẻ</label>
                  <br />
                  <input
                    type="text"
                    className="input__item w-100"
                    placeholder="Họ và tên"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                  />
                </div>
                <div className="mt-3">
                  <label className="input__label">Ngày hết hạn</label>
                  <br />
                  <div className="d-flex">
                    <input
                      type="text"
                      className="input__item w-100 me-2"
                      placeholder="Ngày hết hạn (MM/YY)"
                      value={expirationDate}
                      onChange={handleDateChange}
                    />
                    <div className="icon__box align-items-center justify-content-center d-flex">
                      <CalendarOutlined className="icon__custom" />
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <label className="input__label">CVV/CVC</label>
                  <br />
                  <input
                    className="input__item w-50"
                    type="password"
                    placeholder="***"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                  />
                </div>
                <button
                  className="button__item payment__button mt-4"
                  onClick={handlePaymentSubmit}
                >
                  Đặt vé
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          src={images[16].paymentImg1}
          alt="Avatar3"
          className="payment__img"
        />
      </div>
      <Modal
        open={isSuccessModalOpen}
        onCancel={() => setIsSuccessModalOpen(false)}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        closable={false}
        className="custom__modal"
      >
        <div className="modal__header">
          <img src={images[21].paymentImg2} alt="" />
        </div>
        <p className="modal__text mt-5">
          Hình như đã có lỗi xảy ra khi thanh toán... <br /> Vui lòng kiểm tra
          lại thông tin liên hệ, thông tin thẻ và thử lại.
        </p>
      </Modal>
    </div>
  );
};

export default PaymentPage;
