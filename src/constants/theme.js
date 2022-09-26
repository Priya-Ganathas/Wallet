import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    primary: "#24C16B", // green
    secondary: "#0C381F",
    green: "#66D59A",
    darkGreen: "#229879",
    darkLime: "#1A8871",
    lightLime: "#BBD6C5",
    lime: "#2AD699",
    lime1: "#5ED0A8",
    lightGreen: "#E7F9EF",
    lightGreen1: "#8EbCA0",
    emerald: "#2BC978",
    red: "#FF4134",
    lightRed: "#FFF1F0",
    purple: "#6B3CE9",
    lightpurple: "#F3EFFF",
    yellow: "#FFC664",
    lightyellow: "#FFF9EC",
    peach: '#FF615F',
    peach1: '#932D2B',
    darkgreen1: '#008159',
    darkgreen2: '#011B13',
    darkblue: "#1C4980",

    //games
    purple2 : "#AD40AF",
    peacockblue : "#0aada8",

    white: "#fff",
    white2: '#F9F9F9',
    black: "#020202",
    blue: "#4096FE",
    gray: "#4A4A4A",
    gray2: '#F8F8F8',
    lightGray: "#F5F6FB",
    lightGray2: '#757575',
    lightGray3: '#EFF0F5',
   

    transparentBlack1: 'rgba(2, 2, 2, 0.1)',
    transparentBlack3: 'rgba(2, 2, 2, 0.3)',
    transparentBlack5: 'rgba(2, 2, 2, 0.5)',
    transparentBlack7: 'rgba(2, 2, 2, 0.7)',
    transparentBlack9: 'rgba(2, 2, 2, 0.9)',
    transparentGray: 'rgba(77,77,77, 0.8)',
    transparentDarkGray: 'rgba(20,20,20, 0.9)',
    transparentprimary: 'rgba(163, 226, 180, 1.0)',
    transparent: 'transparent',
};
export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,
    SPACING:10,

    // font sizes
    largeTitle: 40,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};
export const FONTS = {
    largeTitle: { fontFamily: "Roboto-Black", fontSize: SIZES.largeTitle },
    h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: "Roboto-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "Roboto-Regular", fontSize: SIZES.body5, lineHeight: 22 },
    pop1: { fontFamily: "Roboto-Black", fontSize: SIZES.h2, lineHeight: 30 , color: COLORS.black},
    pop2: { fontFamily: "Roboto-Medium", fontSize: SIZES.h3 },
  
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;