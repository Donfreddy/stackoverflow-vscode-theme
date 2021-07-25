//
//  STACK OVERFLOW -- COLORS
//
//  This Colors comes from Stacks, Stacks provides everything
//  you need to quickly design, build, and ship coherent experiences
//  across all of Stack Overflow.
//
//  Website: https://stackoverflow.design
//  GitHub: https://github.com/StackExchange/Stacks
//

//  --  Primary Colors
const white = "#fff";
const black = "#0c0d0e"; // #
const dark = "#2d2d2d";
const orange = "#f48024";

//  --  Accent Colors
const yellow = "#fbf2d4";
const green = "#5eba7d";
const blue = "#0077cc";
const powder = "#e1ecf4";
const red = "#d1383d";
const fog = "#f7f8f8";

const lightColors = {
  white: white,
  dark: dark,
  black: [
    "#fafafb",
    "#eff0f1",
    "#e4e6e8",
    "#d6d9dc",
    "#c8ccd0",
    "#bbc0c4",
    "#9fa6ad",
    "#9199a1",
    "#848d95",
    "#6a737c",
    "#535a60",
    "#3c4146",
    "#2f3337",
    "#242729",
    black,
  ],
  orange: ["#f48024", "#ef8236", black, "#", "#", "#", "#"],

  gray: ["#bcbbbb"],
  blue: [""],
};

const darkColors = {
  white: ["#fff"],
  dark: dark,
  black: ["#222426"],

  gray: ["#bcbbbb"],
  orange: ["#f48024", "#ef8236"],
  blue: ["#0077cc"],
};

export default function getColors(theme: string) {
  if (theme === "light") {
    return lightColors;
  } else {
    return darkColors;
  }
}
