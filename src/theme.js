import { createMuiTheme } from "@material-ui/core/styles";

//Padrão
const theme = createMuiTheme({
  typography: {
    fontSize: 22,
  },
  palette: {
    primary: {
      main: "#701f38",
      light: "#dd87a2",
      dark: "#4b1223",
      greyLight1: "#f7f7f7",
      greyLight2: "#eee",
      greyDark: "#1f232c",
      greyDark2: "#434c63",
      colorWhite: "#fff",
      colorBlack: "#000",
      colorMenu: "#701f38",
    },
    secondary: {
      main: "#434c63",
    },
  },
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: "1.4rem",
      },
    },
  },
});

//Custom
// const theme = createMuiTheme({
//   typography: {
//     fontSize: 22,
//   },
//   palette: {
//     primary: {
//       main: "#0582CA",
//       light: "#00A6FB",
//       dark: "#0A2463",
//       greyLight1: "#f7f7f7",
//       greyLight2: "#eee",
//       greyDark: "#1f232c",
//       greyDark2: "#434c63",
//       colorWhite: "#fff",
//       colorBlack: "#000",
//       colorMenu: "#0582CA",
//     },
//     secondary: {
//       main: "#434c63",
//     },
//     charts: {
//       first: "#EB7384",
//       second: "#FEFEFE",
//       third: "#718A88",
//       forth: "#917876",
//       fifth: "#995A7D",
//     },
//   },
//   overrides: {
//     MuiTooltip: {
//       tooltip: {
//         fontSize: "1.4rem",
//       },
//     },
//   },
// });

export default theme;