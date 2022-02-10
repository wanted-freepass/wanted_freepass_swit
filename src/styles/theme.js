const theme = {
  mainPink: "#FF505F",
  lightPink: "#ffe5e8",
  black: "#343434",
  darkGray: "#787880",
  gray: "#b9babe",
  white: "#fff",

  chatBackground: "#F8F8F8",
  buttonBackground: "#e6e6e8",

  fontLarge: "20px",
  fontMedium: "16px",
  fontRegular: "14px",
  fontSmall: "12px",

  weightBold: "700",
  weightSemiBold: "500",
  weightRegular: "400",

  buttonRadius: "4px",
  chatRadius: "6px",
  borderGray: "1px solid #b9babe",

  marginCenter: "0 auto",

  mobile: `screen and (max-width: 375px)`,
  tablet: `screen and (max-width: 768px)`,

  flex: (align = "center", justify = "center", direction = "row") => `
      display: flex;
      flex-direction: ${direction};
      align-items: ${align};
      justify-content:${justify};
      `,

  absoluteCenter: `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      `,

  positionFixed: `
      position: fixed;
      top: 0;
      left: 0;
      z-index:999;
    `,
};

export default theme;
