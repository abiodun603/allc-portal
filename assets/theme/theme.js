export const COLORS = {
    kprimary: "#070F4A",
    ksecondary: "#74788D",
    kseconddayx: "#747891",
    kblack: "#000000",
    kblack2: "#171725",
    kgrey: "#555B6D",
    klightgrey: "#F7F7F7",
    kblackCom: "#495057",
    kblackComx: "#49505C",
    kwhite: "#FFFFFF",
    klightGreen:"#D6F3E9",
    kLightGray: "#EFF2F7",
    kdeepBlue: "#0F153A",
    kbackGray: "#D7D7D7",
    kblue : "#13257B",
    kdeepBlue: "#0F153A",
    kbadge: "#FA6A6A",
    kborder: "#E5E5F2",
    kdanger: "#E72E1E",
    ksmallbutton: "#EAEAEA",
    kbackGray2: "#44444F",
    kgreen: "#34c38f",
    kbackground: "#F8F8FB"
}

export const SIZES = {
    base: "8px",
    font: "14px",
    radius: "12px",
    radiusx: "4px",
    padding: "24px",

    // font sizes
    h1: "54px",
    h2: "20px",
    h3: "18px",
    h4: "21px",
    h5: "16px",
    body1: "24px",
    body2: "22px",
    body3: "16px",
    body4: "15px",
    body5: "13px",
    body6: "14px",
    height: "24px",
    sidebar: "16rem"
}

export const FONTS = {
    h1: {'font-size' : SIZES.h1, "line-height": SIZES.height, color: COLORS.primary},
    h2: {'font-size' : SIZES.h2, "line-height": SIZES.height, color: COLORS.primary},
    h3: {'font-size' : SIZES.h3, "line-height": SIZES.height, color: COLORS.primary},
    h4: {'font-size' : SIZES.h4, "line-height": SIZES.height, color: COLORS.primary},
    h5: {'font-size' : SIZES.h5, "line-height": SIZES.height, color: COLORS.primary},
    h6: {'font-size' : SIZES.h6, "line-height": SIZES.height, color: COLORS.primary},
    body1: {'font-size' : SIZES.body1, "line-height": SIZES.height, color: COLORS.primary},
    body2: {'font-size' : SIZES.body2, "line-height": SIZES.height, color: COLORS.primary},
    body3: {'font-size' : SIZES.body3, "line-height": SIZES.height, color: COLORS.primary},
    body4: {'font-size' : SIZES.body4, "line-height": SIZES.height, color: COLORS.primary},
    body4: {'font-size' : SIZES.body5, "line-height": SIZES.height, color: COLORS.primary},


}

const appTheme = {COLORS, SIZES, FONTS };

export default appTheme