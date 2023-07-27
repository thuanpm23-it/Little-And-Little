import React from "react";
import QRCode from "qrcode.react";
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
      <img src={ticket.ticketTick} alt="QR" className="paysuccess-qr-tick" />
    </div>
  );
};

export default QRCard;
