import styled from "styled-components";
import { COLORS, SIZES } from "../../assets/theme/theme";

export const MenuItemContainer = styled.a `
  display: flex;
  flex-direction: row;
  font-size: 15px;
  padding: 14px 30px 14px 30px;
  align-items: center;
  justify-content: space-between;
  color: #A6B0CF;

  & svg {
    height: 30px;
    margin-right: 10px;
  }

  &:hover {
    background-color: #00022e;
    color: #fc86aa;
    opacity: 0.5;
    cursor: pointer;
  }

  .menu-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: ${({ depth }) => `${depth}rem`};
  }

  &.selected {
    background: #FFFFFF;
    box-shadow: 0px 5px 14px rgba(0, 0, 0, 0.05);
    border-radius: 5.92941px;
    color: ${COLORS.kprimary};
    font-weight: 600;

    .icon{
      background: ${COLORS.kprimary};
      height: 30px;
      width: 30px;
      border-radius: ${SIZES.base};
      margin-right: .8rem;
      display: flex;
      align-items: center !important;
      justify-content: center !important;

      & svg {
        height: unset;
        margin-right: unset;
        color: ${COLORS.kwhite};
      }
    }
  }
`;