import styled from "styled-components";

export const RegisterContainer = styled.div`

.registerPage_main {
    display: flex;
    flex-direction: column;
    .registerPage__top {
        width: 350px;
        height: 100%;
        margin-top: 25px;
        border: 1px solid #dbdbdb;
        padding: 20px;
        .registerPage__logo {
            width: 175px;
            margin-top: 25px;
        }
        .registerPage__fb {
            color: #395185;
            font-weight: bold;
            margin-top: 30px;
            img {
                width: 15px; 
            }
        }

        .registerPage__ordiv {
            margin-top: 10px;
            .registerPage__dividor {
                width: 80px;
                height: 0px;
                margin-top: 10px;
            }
            .registerPage__or {
                margin: 0px 10px;
                font-weight: bold;
                color: #8e8e8e
            }   
        }

            .registerPage__signup {    
                margin-top: 25px;

            }
            .registerPage__aa {
                color: rgba(0, 55, 107, 1);
                font-size: 12px;
                line-height: 14px;
                margin-top: 12px;
            }
                    
        }
        .registerPage__middle {
            margin-top: 25px;
            line-height: 56px;
            width: 350px;
            background-color: white;
            border: 1px solid #dbdbdb;
            justify-content: center;
            span {
            }
            a {}
        }
        .registerPage__bottom {
            .registerPage__downloadSection {
                height: 105px;
                width: 350px;
                margin-top:20px;
                .registerPage__option {
                    margin-top: 20px;
                    img {
                        width: 136px;
                       }
                    .registerPage__dwimg{ 
                        margin: 5px;
                    }
                }
            }
        }
}


.registerPage__signin {
    margin-top:20px;
}
.registerPage__signup {
    margin-top:20px;
}

.registerPage__text {
    width: 100%;
    height: 36px;
    border: 1px solid #dbdbdb;
    background-color: #fafafa;
    padding-left: 10px;
    border-radius: 5px;
    margin-bottom: 5px;
}

.registerPage__button {
    width: 100%;
    height: 36px;
    /* margin: 20px; */
    border: 1px solid #0395f6;
    background-color: #0395f6;
    color: white;
} 
`
