import React from "react";
import "../paysuccess/paysuccess.css";
import Button from "../../components/button/button";
import Avatar4 from "/selfLearning/InternReact/little-little/src/images/avatar4.png";

import QR from "../../components/qr/qr";
const PaySuccess: React.FC = () => {
  return (
    <div className="paysuccess-main">
      <div className="paysuccess-main-top">
        <div className="paysuccess-text">
          <div className="paysuccess-text-one">Thanh toán thành công</div>
        </div>
      </div>
      <div className="paysuccess-main-main">
        <div className="paysuccess-main-main-one">
          <div className="paysuccess-main-children-one">
            <div className="paysuccess-qr-card-row-1">
              <QR />
              <QR />
              <QR />
              <QR />
            </div>
            <div className="paysuccess-qr-card-row-2">
              <p className="paysuccess-text-start">Số lượng vé: 12 vé</p>
              <p className="paysuccess-text-end">Trang 1/3</p>
            </div>
          </div>
        </div>
        <div className="paysuccess-picture">
          <img src={Avatar4} alt="Avatar4" />
        </div>
      </div>
      <div className="paysuccess-main-bottom">
        <div className="paysuccess-button">
          <Button
            label="Tải về"
            width="160px"
            height="40px"
            fontSize="18px"
            fontFamily="iCiel Koni"
            fontWeight="900"
            lineHeight="normal"
            color="#fff"
          />
        </div>
        <div className="paysuccess-button">
          <Button
            label="Gửi qua email"
            width="160px"
            height="40px"
            fontSize="18px"
            fontFamily="iCiel Koni"
            fontWeight="900"
            lineHeight="normal"
            color="#fff"
          />
        </div>
      </div>
    </div>
  );
};

export default PaySuccess;
