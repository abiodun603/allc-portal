import styled, { keyframes } from "styled-components";
import { COLORS, SIZES } from "../assets/theme/theme";
import AuthImage from "../assets/AuthImg.svg"

export const LayoutBox = styled.div`
  /** style layout here*/
  background-color: #ffffff;
  min-height: 100vh;
  padding: 0;
  height: 100%;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
  textarea {
    resize: none;
    min-height: 100%;
    padding: 1em;
  }
  select {
    outline: none;
  }
`;

export const AuthNote = styled.div `
  width: 100%;
  padding : 0.8rem 0rem;
  background: ${COLORS.klightGreen};
  border: 1px solid ${COLORS.klightGreen};
  border-radius: 4px;
  margin-top: 1rem;

  p{
    font-size: 13px;
    color: ${COLORS.kblackCom};
    text-align: center;
  }
`

export const AuthContainer = styled.div`
  /** style auth layout here */
  display: grid;
  grid-template-columns: repeat(2, 65% 35% 1fr);
  height: 100vh;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const slideUp = keyframes`
0%{
  opacity: 0;
  transform: translate(0px, 40px);
}
100%{
  opacity: 1;
  transform: translate(0px, 0px);
}
`;

export const CredentialBox = styled.div`
  /** style credential container here */
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 2em;
  width: 450px;
  box-shadow: 0px 10px 20px rgba(18, 38, 63, 0.0313726);

  .credentialHeader{
    display: flex !important;
    align-items: center;

    .credentialIcon{
      color: ${COLORS.kblackCom}
      // font-size: 
    }

    h2{
      font-size: ${SIZES.h2};
      font-weight: 500;
      color: ${COLORS.kblackCom}
    }

    .credentialIcon{
      color: ${COLORS.kblackCom};
      font-size: 24px;
      margin-right: ${SIZES.base};
    }
  }

  .credentialChildren{
    flex: 1;
    display: flex !important;
    justify-content: center !important;
    flex-direction: column;

    .credentialChildrenHeader{
      h3{
        color: ${COLORS.kprimary};
        font-size: ${SIZES.h5};
        line-height: 36px;
      }

      p{
        color: ${COLORS.ksecondary};
        font-size: ${SIZES.body4};
        font-weight: normal;
        line-height: 20px;
        margin-right: 2rem;
      }
    }
  }

  .credentialConfirmation{
    flex: 1;
    display: flex !important;
    justify-content: center !important;
    align-items: center;
    flex-direction: column;

    h3{
      text-align: center;
      font-weight: 500;
      size: ${SIZES.h3};
      color: ${COLORS.kblackCom};
    }

    .credentialConfirmationDescription{
      text-align: center;
      font-size: ${SIZES.body4};
      color: ${COLORS.kblackCom};
      margin-top: 1rem;
    }

    .credentialConfirmationCircle{
      display: flex;
      align-items: center;
      justify-content: center;
      background: #EFF2F7;
      width: 72px;
      height: 72px;
      border-radius: 50%;
      margin-bottom: 2rem;

      .credentialConfirmationCircleIcon{
        font-size: 26px;
        color: ${COLORS.kprimary}
      }
    }
  }

  .credentialFooter {
     h3{
       color: ${COLORS.kblackCom};
       font-size: ${SIZES.body4};
       font-weight: 400;
       text-align: center;
     }
  }
  .form_container {
    width: 100%;
    animation: ${slideUp} ease 1s;
    display: flex;
    // justify-content: center;
    form {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    padding: 0 1.5em;
    .form_container {
      width: 100%;
    }
  }
`;

export const ImageBox = styled.div`
  /** style side image container for login */
  background-image: url(${(props) => props.img});

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  -ms-background-size: cover;
  -moz-background-size: cover;
  div {
    min-height: 100%;
    background: rgba(0, 0, 0, 0.81);
    display: flex;
    justify-content: center;
    align-items: center;
    h3 {
      color: #fff;
      font-size: 50px;
      animation: ${slideUp} ease 1s;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const AuthLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 35%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Card = styled.div `
  max-width: 500px;
  width: 500px;

  // margin: 80px auto;
  height: auto;
  // padding: 35px;
  // padding-top: 70px;
  border-radius: 5px;
  box-shadow: 0px 10px 20px rgba(18, 38, 63, 0.0313726);
  border-radius: ${SIZES.base};
  background: ${COLORS.kwhite};

    .cardBody{
      height :100%;
      padding: 40px 20px;
    }
`

export const CardHeader = styled.div `
  // height: 200px;
  padding: 45px 0px  0 20px;
  height: 140px;
  background: ${COLORS.kdeepBlue};
  width: 100%;
  border-radius: ${SIZES.base} ${SIZES.base} 0px 0px;
  position: relative;
  h3, p{
    color: ${COLORS.kwhite};
  }

  h3{
    margin-top: -15px;
    font-weight: 500;
    font-size: ${SIZES.h3}
  }

  .headerCircle{
    position: absolute;
    bottom: -25%;
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background: ${COLORS.kLightGray};
    display: flex;
    align-items: center;
    justify-content: center;

    .headerCircleIcon{
      color: ${COLORS.kblackCom};
      font-size: 36px;
    }
  }


`