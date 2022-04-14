import styled  from "styled-components";
import { COLORS, SIZES } from "../../assets/theme/theme";

export const SidebarWrapper = styled.div `
    min-width: ${SIZES.sidebar};
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background: ${COLORS.kwhite};
    background: #FFFFFF;
    box-shadow: 0px 0px 25px 10px rgba(0, 0, 0, 0.04);  

    .hmo_logo{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 2rem;

        h2{
            font-size: 20px;
            line-height: 30px;
            font-weight: 500;
            margin-left: 8px;
        }

        .hmo_logo-Icon{
            font-size: 24px;
            color: ${COLORS.kwhite};
        }
    }

`  