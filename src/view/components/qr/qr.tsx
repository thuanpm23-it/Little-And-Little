import React from "react";
import QRimg from "/selfLearning/InternReact/little-little/src/images/qr.png";
import Tick from "/selfLearning/InternReact/little-little/src/images/tick.png";
const QR: React.FC = () => {
  return (
    <div className="paysuccess-qr-card">
      <img src={QRimg} alt="QR" className="paysucces-qr-img-1" />
      <p className="paysucces-qr-title">ALT20210501</p>
      <p className="paysucces-qr-text-1">VÉ CỔNG</p>
      <p className="paysucces-qr-text-2">---</p>
      <p className="paysucces-qr-text-3">Ngày sử dụng: 31/05/2021</p>
      <img src={Tick} alt="QR" />
    </div>
  );
};

export default QR;
