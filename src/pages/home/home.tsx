import React from "react";
import "../home/home.css";
import NavBar from "../../components/navigation/navbar";
import HomeLogo from "/selfLearning/InternReact/little-little/src/images/damsen.png";
import Input from "../../components/input/input";
import Button from "./../../components/button/button";
import Star from "/selfLearning/InternReact/little-little/src/images/star.png";
import Picture4 from "/selfLearning/InternReact/little-little/src/images/picture4.png";
import Picture5 from "/selfLearning/InternReact/little-little/src/images/picture5.png";
import Picture1 from "/selfLearning/InternReact/little-little/src/images/picture1.png";
import Picture2 from "/selfLearning/InternReact/little-little/src/images/picture2.png";
import Picture7 from "/selfLearning/InternReact/little-little/src/images/picture7.png";
import Picture3 from "/selfLearning/InternReact/little-little/src/images/picture3.png";
import Picture6 from "/selfLearning/InternReact/little-little/src/images/picture6.png";
import Picture8 from "/selfLearning/InternReact/little-little/src/images/picture8.png";

const HomePage: React.FC = () => {
  return (
    // <div className="wrapper">
    //   <div className="navbar-wrapper">
    //     <NavBar />
    //   </div>

    <div className="home-main">
      <div className="home-main-top">
        <div className="home-logo">
          <img src={HomeLogo} alt="Home Logo" />
        </div>
        <div className="home-text">
          <div className="home-text-one">ĐẦM SEN</div>
          <div className="home-text-two">PARK</div>
        </div>
        <div className="home-picture-1">
          <img src={Picture4} alt="Picture4" />
        </div>
        {/* <div className="home-picture-2">
          <img src={Picture5} alt="Picture5" />
        </div> */}
        <div className="home-picture-3">
          <img src={Picture1} alt="Picture1" />
        </div>
      </div>
      <div className="home-main-main">
        <div className="home-main-main-one">
          <div className="home-main-children-one">
            <div className="home-text-children-one">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse ac mollis justo. Etiam volutpat tellus quis risus
                volutpat, ut posuere ex facilisis.
              </p>
              <p>
                Suspendisse iaculis libero lobortis condimentum gravida. Aenean
                auctor iaculis risus, lobortis molestie lectus consequat a.
              </p>
            </div>

            <div className="home-text-children-two">
              <div className="row-text-one">
                <img src={Star} alt="Star" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="row-text-one">
                <img src={Star} alt="Star" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="row-text-one">
                <img src={Star} alt="Star" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="row-text-one">
                <img src={Star} alt="Star" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
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
                <Input
                  placeholder="Loại gói"
                  width="75%"
                  padding="15px 0 15px 15px"
                />
              </div>
              <div className="home-input-row">
                <div className="home-input-col-1">
                  <Input
                    placeholder="Số lượng vé"
                    width="102px"
                    padding="15px 0 15px 15px"
                  />
                </div>
                <div className="home-input-col-2">
                  <Input
                    placeholder="Ngày sử dụng"
                    width="90%"
                    padding="15px 0 15px 15px"
                  />
                </div>
              </div>
              <div className="home-input">
                <Input
                  placeholder="Họ và tên"
                  width="90%"
                  padding="20px 0 20px 15px"
                />
              </div>
              <div className="home-input">
                <Input
                  placeholder="Số điện thoại"
                  width="90%"
                  padding="20px 0 20px 15px"
                />
              </div>
              <div className="home-input">
                <Input
                  placeholder="Địa chỉ email"
                  width="90%"
                  padding="20px 0 20px 15px"
                />
              </div>
            </div>
            <div className="home-button">
              <Button
                label="Đặt vé"
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
        <div className="home-picture-5">
          <img src={Picture7} alt="Picture7" />
        </div>
        <div className="home-picture-6">
          <img src={Picture6} alt="Picture6" />
        </div>
        <div className="home-picture-7">
          <img src={Picture3} alt="Picture3" />
        </div>
        <div className="home-picture-8">
          <img src={Picture8} alt="Picture8" />
        </div>
      </div>
      <div className="home-picture-4">
        <img src={Picture2} alt="Picture2" />
      </div>
    </div>
    // </div>
  );
};

export default HomePage;
