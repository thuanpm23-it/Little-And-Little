import React from "react";
import "../payment/payment.css";
import Button from "../../components/button/button";
import Input from "../../components/input/input";
import Avatar3 from "/selfLearning/InternReact/little-little/src/images/avatar3.png";
const PaymentPage: React.FC = () => {
  return (
    <div className="payment-main">
      <div className="payment-main-top">
        <div className="payment-text">
          <div className="payment-text-one">Thanh toán</div>
        </div>
      </div>
      <div className="payment-main-main">
        <div className="payment-main-main-one">
          <div className="payment-main-children-one">
            <div className="payment-tag-1">
              <div className="payment-tag-border-1">
                <div className="payment-tag-text-1">VÉ CỔNG - VÉ GIA ĐÌNH</div>
              </div>
            </div>
            <div className="payment-input-box-1">
              <div className="payment-input-row">
                <div className="payment-input-col-1">
                  <label>Số tiền thanh toán</label>
                  <Input
                    placeholder=""
                    width="100%"
                    padding="15px 0 15px 15px"
                  />
                </div>
                <div className="payment-input-col-2">
                  <label>Số lượng vé</label>
                  <div className="payment-input-col-row">
                    <Input
                      placeholder=""
                      width="94px"
                      padding="15px 0 15px 15px"
                    />
                    <span>vé</span>
                  </div>
                </div>
                <div className="payment-input-col-3">
                  <label>Ngày sử dụng</label>
                  <Input
                    placeholder=""
                    width="100%"
                    padding="15px 0 15px 15px"
                  />
                </div>
              </div>
              <div className="payment-input">
                <label>Thông tin liên hệ</label>
                <Input placeholder="" width="51%" padding="15px 0 15px 15px" />
              </div>
              <div className="payment-input">
                <label>Điện thoại</label>
                <Input placeholder="" width="29%" padding="15px 0 15px 15px" />
              </div>
              <div className="payment-input">
                <label>Email</label>
                <Input placeholder="" width="51%" padding="15px 0 15px 15px" />
              </div>
            </div>
          </div>
        </div>
        <div className="payment-main-main-two">
          <div className="payment-main-children-two">
            <div className="payment-tag-2">
              <div className="payment-tag-border-2">
                <div className="payment-tag-text-2">THÔNG TIN THANH TOÁN</div>
              </div>
            </div>
            <div className="payment-input-box-2">
              <div className="payment-input">
                <label>Số thẻ</label>
                <Input
                  placeholder="Số thẻ"
                  width="90%"
                  padding="15px 0 15px 15px"
                />
              </div>
              <div className="payment-input">
                <label>Họ và tên chủ thẻ</label>
                <Input
                  placeholder="Họ và tên"
                  width="90%"
                  padding="15px 0 15px 15px"
                />
              </div>
              <div className="payment-input-row">
                <div className="payment-input-col-1">
                  <label>Ngày hết hạn</label>
                  <Input
                    placeholder="Ngày hết hạn"
                    width="140%"
                    padding="15px 0 15px 15px"
                  />
                </div>
              </div>
              <div className="payment-input">
                <label>CVV/CVC</label>
                <Input
                  placeholder="***"
                  width="90%"
                  padding="15px 0 15px 15px"
                />
              </div>
            </div>
            <div className="payment-button">
              <Button
                label="Thanh toán"
                width="85%"
                height="61px"
                fontSize="28px"
                fontFamily="iCiel Koni"
                fontWeight="900"
                lineHeight="normal"
                color="#fff"
              />
            </div>
          </div>
        </div>
        <div className="home-picture-10">
          <img src={Avatar3} alt="Avatar3" />
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
