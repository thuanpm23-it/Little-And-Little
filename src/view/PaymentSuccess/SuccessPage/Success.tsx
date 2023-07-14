import React from "react";
import "../SuccessPage/success.css";
import Avatar4 from "../../../images/avatar4.png";
import QRCard from "./../QRCard/QRCard";
const SuccessPage: React.FC = () => {
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
            <div className="paysuccess-card">
              <QRCard />
              <QRCard />
              <QRCard />
              <QRCard />
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
