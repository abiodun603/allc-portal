import styled from "styled-components"
import { COLORS, SIZES } from "../../../assets/theme/theme"

export const LayoutWrapper = styled.div `
    // color: ${COLORS.kwhite}
    // min-height: 100vh;
`

export const LayoutContent = styled.div `
    padding-left: ${SIZES.sidebar};
    background: ${COLORS.kwhite};
    min-height: 100vh !important

`

export const LayoutContentMain = styled.div `
    min-height: 100vh;
    padding: 1.2rem 3.8rem;

`