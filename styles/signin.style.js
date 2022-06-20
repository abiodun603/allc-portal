import styled from "styled-components"
import { COLORS, SIZES } from "../assets/theme/theme"

export const SigninContainer = styled.div `
  position: relative;
  background-image: url(${props => props.image.src});
  width: 100%;
  height: 100vh;
  padding-right: 6rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .login {
    position: relative;
    width: 500px;
    height: 483px;
    background: linear-gradient(133.55deg, rgba(255, 255, 255, 0.7) -6.74%, rgba(255, 255, 255, 0) 100%);
    backdrop-filter: blur(20px);
    border-radius: 40px;
    padding:4rem;

    p {
      font-style: normal;
      font-weight: 400;
      font-size: ${SIZES.h3};
      line-height: 28px;
      color: ${COLORS.kprimary};
    }

    h2{
      font-weight: 800;
      font-size: ${SIZES.body1};
      color: ${COLORS.kprimary};
    }

    .form {
      width: 100%;
      
      .field {
        position: relative;
      }

      input[type=email], input[type=password] {
        font-size: 14px;
        font-weight: 400;
        padding: 10px 15px 10px 10px;
        position: relative;
        width: 100%;
        outline: none;
        height: 56px;
        border-radius: ${SIZES.base};
        border: none;
        background: ${COLORS.kwhite};
        backdrop-filter: blur(10px);
        border-top: 1px solid rgba(255,255,255,0.2);
        border-left: 1px solid rgba(255,255,255,0.2);
        box-shadow: 5px 5px 30px rgba(0,0,0,0.2);
        color: ${COLORS.kblack2};
        transition: color 0.3s ease-out;
      }

      input[type=submit] {
        width: 170px;
        text-align: center;
        font-size: 14px;
        font-weight: 500;
        padding: 12px 0;
        color: #fff;
        background: ${COLORS.kprimary};
        border-radius: ${SIZES.base};
        backdrop-filter: blur(10px);
        border: none;
        margin-bottom: 20px;
      }
    }
    
    ::-webkit-input-placeholder {
      color: #ffffff;
      font-family: "Open Sans";
    }
    
    
    
    .form input[type=text] {
      margin-bottom: 15px;
    }
    /*continued styling for input */
    .form input[type=checkbox] {
      display: none;
    }
  }
`