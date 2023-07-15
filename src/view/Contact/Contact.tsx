import React, { useState } from "react";
import "../../view/Contact/contact.css";
import Avatar from "../../images/avatar2.png";
import Telephone from "../../images/telephone.png";
import Waze from "../../images/waze.png";
import Mail from "../../images/mail-inbox-app.png";
import { Modal } from "antd";
import app from "../../config/firebase";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { CloseOutlined } from "@ant-design/icons";

const ContactPage: React.FC = () => {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const closeIcon = (
    <span className="custom-close-button">
      <CloseOutlined />
    </span>
  );

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const db = getFirestore(app);
      const contactFormCollectionRef = collection(db, "contacts");
      const docRef = await addDoc(contactFormCollectionRef, {
        name,
        email,
        phoneNumber,
        address,
        message,
      });
      setName("");
      setEmail("");
      setPhoneNumber("");
      setAddress("");
      setMessage("");
      setIsSuccessModalOpen(true);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  return (
    <>
      <div className="contact-header-box">
        <div className="header-text-box">
          <div className="header-text">Liên hệ</div>
        </div>
      </div>

      <div className="contact-main-box">
        <div className="contact-tab-box-1">
          <div className="contact-tab-box-border-1">
            <div className="contact-tab-box-text-1">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse ac mollis justo. Etiam volutpat tellus quis risus
                volutpat, ut posuere ex facilisis.
              </p>
            </div>

            <div className="contact-tab-box-text-2">
              <form onSubmit={handleSubmit}>
                <div className="input-row">
                  <input
                    placeholder="Tên"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="input-item contact-input-1"
                    required
                  />
                  <input
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="input-item contact-input-2"
                    required
                  />
                </div>
                <div className="input-row my">
                  <input
                    placeholder="Số điện thoại"
                    value={phoneNumber}
                    onChange={(event) => setPhoneNumber(event.target.value)}
                    className="input-item contact-input-1"
                    required
                  />
                  <input
                    placeholder="Địa chỉ"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                    className="input-item contact-input-2"
                    required
                  />
                </div>
                <div className="textarea-box">
                  <textarea
                    placeholder="Lời nhắn"
                    rows={9}
                    cols={77}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    required
                  ></textarea>
                </div>
                <div className="contact-button-box">
                  <button
                    className="button-item contact-button-wh"
                    type="submit"
                  >
                    Gửi liên hệ
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="contact-tab-box-2">
          <div className="contact-tab-box">
            <div className="contact-tab-box-border">
              <div className="contact-img">
                <img src={Waze} alt="" />
              </div>
              <div className="contact-text">
                <p className="contact-text-1">Địa chỉ:</p>
                <p className="contact-text-2">
                  86/33 Âu Cơ, Phường 9, Quận Tân Bình, TP. Hồ Chí Minh
                </p>
              </div>
            </div>
          </div>
          <div className="contact-tab-box">
            <div className="contact-tab-box-border">
              <div className="contact-img">
                <img src={Mail} alt="" />
              </div>
              <div className="contact-text">
                <p className="contact-text-1">Email:</p>
                <p className="contact-text-2">investigate@your-site.com</p>
              </div>
            </div>
          </div>
          <div className="contact-tab-box">
            <div className="contact-tab-box-border">
              <div className="contact-img">
                <img src={Telephone} alt="" />
              </div>
              <div className="contact-text">
                <p className="contact-text-1">Điện thoại</p>
                <p className="contact-text-2">+84 145 689 798</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-picture-1">
        <img src={Avatar} alt="Picture2" />
      </div>
      <Modal
        visible={isSuccessModalOpen}
        onCancel={() => setIsSuccessModalOpen(false)}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        closeIcon={closeIcon}
      >
        <p className="modal-t">
          Gửi liên hệ thành công. <br /> Vui lòng kiên nhẫn đợi phản hồi từ
          chúng tôi, bạn nhé!
        </p>
      </Modal>
      {/* <Modal
        visible={isSuccessModalOpen}
        onCancel={() => setIsSuccessModalOpen(false)}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        closable={false}
      >
        <p className="modal-t">
          Hình như đã có lỗi xảy ra khi thanh toán... <br /> Vui lòng kiểm tra
          lại thông tin liên hệ, thông tin thẻ và thử lại.
        </p>
      </Modal> */}
    </>
  );
};

export default ContactPage;
