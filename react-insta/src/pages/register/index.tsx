// import React from "react";
import { RegisterContainer } from "./style";
import { Grid } from "@mui/material";
/* image */
import insta_logo from "../../assets/images/logoinsta.png";
import fb from "../../assets/images/fb.png";
import appstore from "../../assets/images/app.png";
import playstore from "../../assets/images/play.png";

function index() {
  return (
    <RegisterContainer>
      <Grid container spacing={1}>
        <Grid xs={3}></Grid>
        <Grid xs={6} className="registerPage_main">
          <div className="registerPage__top">
            <img className="registerPage__logo" src={insta_logo}></img>
            <h3>Đăng ký để xem ảnh và video từ bạn bè.</h3>
            <div className="registerPage__fb">
              <img src={fb} /> Đăng nhập bằng Facebook
            </div>
            <div className="registerPage__ordiv">
              <div className="registerPage__dividor"></div>
              <div className="registerPage__or">HOẶC</div>
              <div className="registerPage__dividor"></div>
            </div>
            <div className="registerPage__signup">
              <input
                type="text"
                className="registerPage__text"
                placeholder="Số di động hoặc email"
              />
              <input
                type="text"
                className="registerPage__text"
                placeholder="Tên đầy đủ"
              />
              <input
                type="text"
                className="registerPage__text"
                placeholder="Tên người dùng"
              />
              <input
                type="text"
                className="registerPage__text"
                placeholder="Mật khẩu"
              />

              <div className="registerPage__aa">
                <span>
                  Những người dùng dịch vụ của chúng tôi có thể đã tải thông tin
                  liên hệ của bạn lên Instagram.
                </span>
                <a>Tìm hiểu thêm</a>
              </div>
              <div className="registerPage__aa">
                <span>
                  Bằng cách đăng ký, bạn đồng ý với Điều khoản, Chính sách quyền
                  riêng tư và Chính sách cookie của chúng tôi.
                </span>
              </div>
              <button className="registerPage__button">Đăng ký</button>

              {/* {this.state.isLogin ? <SignIn /> : <SignUp />} */}
            </div>
          </div>
          <div className="registerPage__middle">
            <span>Bạn có tài khoản?</span>
            <a> Đăng nhập</a>
          </div>
          <div className="registerPage__bottom">
            <div className="registerPage__downloadSection">
              <div>Tải ứng dụng.</div>
              <div className="registerPage__option">
                <img
                  className="registerPage__dwimg"
                  src={appstore}
                  width={136}
                />
                <img
                  className="registerPage__dwimg"
                  src={playstore}
                  width={136}
                />
              </div>
            </div>
          </div>
        </Grid>
        <Grid xs={3}></Grid>
      </Grid>
    </RegisterContainer>
  );
}

export default index;
