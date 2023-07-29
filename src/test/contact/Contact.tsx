import React, { useState } from "react";
import "../contact/contact.css";
import { images } from "../../assets/images/images";
import { CloseOutlined } from "@ant-design/icons";
import { sendContactForm } from "../../redux/slice/contact/contactSlice";
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { Modal } from "antd";

const Contact = () => {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const dispatch: AppDispatch = useDispatch();

  const closeIcon = (
    <span className="close__button">
      <CloseOutlined />
    </span>
  );

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const contactData = {
      name,
      email,
      phoneNumber,
      address,
      message,
    };
    dispatch(sendContactForm(contactData));
    setName("");
    setEmail("");
    setPhoneNumber("");
    setAddress("");
    setMessage("");
    setIsSuccessModalOpen(true);
  };
  return (
    <div className="container">
      <div className="row text-center pt-5">
        <div className="text__title">Liên hệ</div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <div className="contact__box__1">
            <div className="contact__border__1 px-5">
              <p className="text__1  mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse ac mollis justo. Etiam volutpat tellus quis risus
                volutpat, ut posuere ex facilisis.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="d-flex mt-4">
                  <input
                    type="text"
                    className="input__item w-50 me-3"
                    placeholder="Tên"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                  />
                  <input
                    className="input__item w-75"
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </div>
                <div className="d-flex mt-4">
                  <input
                    type="tel"
                    className="input__item w-50 me-3"
                    placeholder="Số điện thoại"
                    value={phoneNumber}
                    onChange={(event) => setPhoneNumber(event.target.value)}
                    required
                  />
                  <input
                    type="text"
                    className="input__item w-75"
                    placeholder="Địa chỉ"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                    required
                  />
                </div>
                <textarea
                  placeholder="Lời nhắn"
                  className="textarea__item w-100 mt-4 input__item"
                  rows={6}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="button__item contact__button w-50 mt-4"
                >
                  Gửi liên hệ
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="contact__box__2">
            <div className="contact__box ">
              <div className="contact__border d-flex p-4">
                <div className="contact__image__box me-3">
                  <img src={images[14].contactImg3} alt="" />
                </div>
                <div className="contact__text__box">
                  <p className="contact__text__1">Địa chỉ:</p>
                  <p className="contact__text__2">
                    86/33 Âu Cơ, Phường 9, Quận Tân Bình, TP. Hồ Chí Minh
                  </p>
                </div>
              </div>
            </div>
            <div className="contact__box mt-3">
              <div className="contact__border d-flex p-4">
                <div className="contact__image__box me-3">
                  <img src={images[15].contactImg4} alt="" />
                </div>
                <div className="contact__text__box">
                  <p className="contact__text__1">Email:</p>
                  <p className="contact__text__2">investigate@your-site.com</p>
                </div>
              </div>
            </div>
            <div className="contact__box mt-3">
              <div className="contact__border d-flex p-4">
                <div className="contact__image__box me-3">
                  <img src={images[13].contactImg2} alt="" />
                </div>
                <div className="contact__text__box">
                  <p className="contact__text__1">Điện thoại</p>
                  <p className="contact__text__2">+84 145 689 798</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          src={images[12].contactImg1}
          alt="Picture2"
          className="contact__img"
        />
      </div>
      <Modal
        open={isSuccessModalOpen}
        onCancel={() => setIsSuccessModalOpen(false)}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        closeIcon={closeIcon}
      >
        <p className="modal__text">
          Gửi liên hệ thành công. <br /> Vui lòng kiên nhẫn đợi phản hồi từ
          chúng tôi, bạn nhé!
        </p>
      </Modal>
    </div>
  );
};

export default Contact;
