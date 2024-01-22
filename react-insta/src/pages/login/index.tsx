// import React from "react";
import { LoginContainer } from "./style";
import { Grid } from "@mui/material";
/* image */
import inst_image from "../../assets/images/9364675fb26a.svg";
import insta_logo from "../../assets/images/logoinsta.png";
import fb from "../../assets/images/fb.png";
import appstore from "../../assets/images/app.png";
import playstore from "../../assets/images/play.png";
// import signIn from "../SignIn/SignIn";
// import signUp from "../../SignUp/SignUp";
// import { Construction } from "@mui/icons-material";

function index() {
  // Construction(props) {
  //   super(props)
  //   this.state = {
  //     isLogin: true
  //   }
  // }
  // changeLogin () => {
  //   if(this.state.isLogin) => {
  //     this.setState({isLogin: false})
  //   }
  //   else {
  //     this.setState({isLogin: true})
  //   }

  // }

  return (
    <LoginContainer>
      <Grid container spacing={1}>
        <Grid xs={3}></Grid>
        <Grid xs={6}>
          <Grid item xs={2} className="loginPage__main">
            <div className="loginPage__leftComponent">
              <img src={inst_image} width="454px" />
            </div>
            <div className="loginPage__rightComponent">
              <div className="loginPage__top">
                <img className="loginPage__logo" src={insta_logo}></img>
                <div className="loginPage__signin">
                  <input type="text" className="loginPage__text" />
                  <input type="text" className="loginPage__text" />
                  <button className="login__button">Đăng nhập</button>
                  <div className="loginPage__ordiv">
                    <div className="loginPage__dividor"></div>
                    <div className="loginPage__or">HOẶC</div>
                    <div className="loginPage__dividor"></div>
                  </div>
                  <div className="loginPage__fb">
                    <img src={fb} /> Đăng nhập bằng Facebook
                  </div>
                  <div className="loginPage__forgt">Quên mật khẩu?</div>
                  {/* {this.state.isLogin ? <SignIn /> : <SignUp />} */}
                </div>
              </div>
              <div className="loginPage__middle">
                <span>Bạn chưa có tài khoản ư?</span>
                <a> Đăng ký</a>
              </div>
              <div className="loginPage__bottom">
                <div className="loginPage__downloadSection">
                  <div>Tải ứng dụng.</div>
                  <div className="loginPage__option">
                    <img
                      className="loginPage__dwimg"
                      src={appstore}
                      width={136}
                    />
                    <img
                      className="loginPage__dwimg"
                      src={playstore}
                      width={136}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid xs={3}></Grid>
      </Grid>
    </LoginContainer>
  );
}

export default index;
