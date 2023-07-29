import { QRCode } from "antd";
import "../success/qrcard.css";
import React from "react";
import { DocumentData } from "firebase/firestore";

interface QRCardProps {
  ticket: DocumentData;
}
const QRcard: React.FC<QRCardProps> = ({ ticket }) => {
  return (
    <div className="qr__card bg-white text-center px-4 pt-4 pb-3 rounded-4 ms-3">
      <QRCode value={ticket.qrCodeValue} className="qr__code" />
      <p className="qr__title pt-3">{ticket.ticketId}</p>
      <p className="qr__text__1">VÉ CỔNG</p>
      <p className="qr__text__2">---</p>
      <p className="qr__text__3">Ngày sử dụng: {ticket.ticketDate}</p>
      <img src={ticket.ticketTick} alt="QR" className="qr__tick" />
    </div>
  );
};

export default QRcard;
