import React from "react";
import QRimg from "../../../images/qr.png";
import Tick from "../../../images/tick.png";
import "../QRCard/qrcard.css";

const QRCard: React.FC = () => {
  return (
    <div className="paysuccess-qr-card">
      <img src={QRimg} alt="QR" className="paysucces-qr-img" />
      <p className="paysucces-qr-title">ALT20210501</p>
      <p className="paysucces-qr-text-1">VÉ CỔNG</p>
      <p className="paysucces-qr-text-2">---</p>
      <p className="paysucces-qr-text-3">Ngày sử dụng: 31/05/2021</p>
      <img src={Tick} alt="QR" className="paysuccess-qr-tick" />
    </div>
  );
};

export default QRCard;
