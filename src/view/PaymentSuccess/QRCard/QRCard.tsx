import React, { useRef } from "react";
import QRCode from "qrcode.react";
import Tick from "../../../images/tick.png";
import "../QRCard/qrcard.css";
import { DocumentData } from "firebase/firestore";

interface QRCardProps {
  ticket: DocumentData;
}

const QRCard: React.FC<QRCardProps> = ({ ticket }) => {
  return (
    <div className="paysuccess-qr-card">
      <QRCode value={ticket.qrCodeValue} className="paysucces-qr-img" />
      <p className="paysucces-qr-title">{ticket.ticketId}</p>
      <p className="paysucces-qr-text-1">VÉ CỔNG</p>
      <p className="paysucces-qr-text-2">---</p>
      <p className="paysucces-qr-text-3">Ngày sử dụng: {ticket.ticketDate}</p>
      <img src={Tick} alt="QR" className="paysuccess-qr-tick" />
    </div>
  );
};

export default QRCard;
