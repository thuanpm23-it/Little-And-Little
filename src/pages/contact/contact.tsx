import React, { useState } from "react";
import "../contact/contact.css";
import NavBar from "../../components/navigation/navbar";
import Avatar from "/selfLearning/InternReact/little-little/src/images/avatar2.png";
import Input from "../../components/input/input";
import Button from "./../../components/button/button";
import TextArea from "../../components/textarea/texarea";
import Telephone from "/selfLearning/InternReact/little-little/src/images/telephone.png";
import Waze from "/selfLearning/InternReact/little-little/src/images/waze.png";
import Mail from "/selfLearning/InternReact/little-little/src/images/mail-inbox-app.png";
import { Modal } from "antd";
import app from "../../config/firebase";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const ContactPage: React.FC = () => {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

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
    <div className="contact-main">
      <div className="contact-main-top">
        <div className="contact-text">
          <div className="contact-text-one">Liên hệ</div>
        </div>
      </div>

      <div className="contact-main-main">
        <div className="contact-main-main-one">
          <div className="contact-main-children-one">
            <div className="contact-text-children-one">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse ac mollis justo. Etiam volutpat tellus quis risus
                volutpat, ut posuere ex facilisis.
              </p>
            </div>

            <div className="contact-text-children-two">
              <div className="input-box">
                <form onSubmit={handleSubmit}>
                  <div className="input-box-row-1">
                    <div className="contact-input-col-1">
                      <Input
                        placeholder="Tên"
                        width="105%"
                        padding="15px"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                      />
                    </div>
                    <div className="contact-input-col-2">
                      <Input
                        placeholder="Email"
                        width="202%"
                        padding="15px"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="input-box-row-2">
                    <div className="contact-input-col-1">
                      <Input
                        placeholder="Số điện thoại"
                        width="105%"
                        padding="15px"
                        value={phoneNumber}
                        onChange={(event) => setPhoneNumber(event.target.value)}
                      />
                    </div>
                    <div className="contact-input-col-2">
                      <Input
                        placeholder="Địa chỉ"
                        width="202%"
                        padding="15px"
                        value={address}
                        onChange={(event) => setAddress(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="textarea-box">
                    <TextArea
                      rows={10}
                      cols={88}
                      placeholder="Lời nhắn"
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                    />
                  </div>
                  <div className="contact-button">
                    <Button
                      label="Gửi liên hệ"
                      width="70%"
                      height="61px"
                      fontSize="28px"
                      fontFamily="iCiel Koni"
                      fontWeight="900"
                      lineHeight="normal"
                      color="#fff"
                      type="submit"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-main-main-two">
          <div className="contact-main-children-two">
            <div className="contact-main-children-two-1">
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
          <div className="contact-main-children-two">
            <div className="contact-main-children-two-1">
              <div className="contact-img">
                <img src={Mail} alt="" />
              </div>
              <div className="contact-text">
                <p className="contact-text-1">Email:</p>
                <p className="contact-text-2">investigate@your-site.com</p>
              </div>
            </div>
          </div>
          <div className="contact-main-children-two">
            <div className="contact-main-children-two-1">
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
      <div className="contact-picture-4">
        <img src={Avatar} alt="Picture2" />
      </div>
      <Modal
        title="Thành công"
        visible={isSuccessModalOpen}
        onCancel={() => setIsSuccessModalOpen(false)}
      >
        <p>Gửi liên hệ thành công!</p>
        <p>Vui lòng kiên nhẫn đợi phản hồi từ chúng tôi, bạn nhé!</p>
      </Modal>
    </div>
  );
};

export default ContactPage;
