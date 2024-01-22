import styled from "styled-components";

export const LoginContainer = styled.div`

.loginPage__main {
    display: flex;
    .loginPage__leftComponent {
    }

    .loginPage__rightComponent {
        display: flex;
        flex-direction: column;
        text-align: center;
        .loginPage__top {
            height: 380px;
            width: 350px;
            margin-top: 25px;
            border: 1px solid #dbdbdb;
            .loginPage__logo {
                width: 175px;
                margin-top: 25px;
            }
            
            .loginPage__signin {    
                margin-top: 25px;
                .loginPage__ordiv {
                    margin-top: 10px;
                    .loginPage__dividor {
                        width: 80px;
                        height: 0px;
                        margin-top: 10px;
                    }
                    .loginPage__or {
                        margin: 0px 10px;
                        font-weight: bold;
                        color: #8e8e8e
                    }   
                }
                
                .loginPage__fb {
                    color: #395185;
                    font-weight: bold;
                    margin-top: 30px;
                    img {
                        width: 15px; 
                    }
                }
                .loginPage__forgt {
                    color: rgba(0, 55, 107, 1);
                    font-size: 12px;
                    line-height: 14px;
                    margin-top: 12px;
                
                }
            }
                    
        }
        .loginPage__middle {
            margin-top: 25px;
            height: 56px;
            width: 350px;
            background-color: white;
            border: 1px solid #dbdbdb;
            justify-content: center;
            span {
                line-height: 56px;
            }
            a {}
        }
        .loginPage__bottom {
            .loginPage__downloadSection {
                height: 105px;
                width: 350px;
                margin-top:20px;
                .loginPage__option {
                    margin-top: 20px;
                    img {
                        width: 136px;
                       }
                    .loginPage__dwimg{ 
                        margin: 5px;
                    }
                }
            }
        }

    } 
}


.loginPage__signin {
    margin-top:20px;
}
.loginPage__signup {
    margin-top:20px;
}

.loginPage__text {
    width: 258px;
    height: 36px;
    border: 1px solid #dbdbdb;
    background-color: #fafafa;
    padding-left: 10px;
    border-radius: 5px;
    margin-bottom: 5px;
}

.login__button {
    width: 270px;
    height: 36px;
    margin: 5px;
    border: 1px solid #0395f6;
    background-color: #0395f6;
    color: white;
} 
`
