import React from "react";
import "../home/home.css";
import NavBar from "../../components/navigation/navbar";
import HomeLogo from "/selfLearning/InternReact/little-little/src/images/damsen.png";
import Input from "../../components/input/input";
import Button from "./../../components/button/button";

const HomePage: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="navbar-wrapper">
        <NavBar />
      </div>

      <div className="home-main">
        <div className="home-main-top">
          <div className="home-logo">
            <img src={HomeLogo} alt="Home Logo" />
          </div>
          <div className="home-text">
            <div className="home-text-one">ĐẦM SEN</div>
            <div className="home-text-two">PARK</div>
          </div>
        </div>

        <div className="home-main-main">
          <div className="home-main-main-one">
            <div className="home-main-children-one"></div>
          </div>
          <div className="home-main-main-two">
            <div className="home-main-children-two">
              <div className="home-tag">
                <div className="home-tag-border">
                  <div className="home-tag-text">VÉ CỦA BẠN</div>
                </div>
              </div>
              <div className="home-input-box">
                <div className="home-input">
                  <Input placeholder="Loại gói" width="378px" />
                </div>
                <div className="home-input-row">
                  <div className="home-input-col-1">
                    <Input placeholder="Số lượng vé" width="130px" />
                  </div>
                  <div className="home-input-col-2">
                    <Input placeholder="Ngày sử dụng" width="204px" />
                  </div>
                </div>
                <div className="home-input">
                  <Input placeholder="Họ và tên" width="448px" />
                </div>
                <div className="home-input">
                  <Input placeholder="Số điện thoại" width="448px" />
                </div>
                <div className="home-input">
                  <Input placeholder="Địa chỉ email" width="448px" />
                </div>
              </div>
              <div className="home-button">
                <Button
                  label="Đặt vé"
                  width="368px"
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
        </div>
      </div>
    </div>
  );
};

export default HomePage;
