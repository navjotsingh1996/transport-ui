import { createMuiTheme } from "@material-ui/core";

/**
 * Contains the theme for the whole application
 */
export const theme = createMuiTheme({
  override: {
    MuiDialogTitle: {
      root: {
        backgroundColor: '#fffd70'
      }
    }
  },
  palette: {
    type: "dark"
  },
  primary: {
    // light: will be calculated from palette.primary.main,
    main: '#b6c2f5',
    // dark: will be calculated from palette.primary.main,
    // contrastText: will be calculated to contrast with palette.primary.main
  },
  secondary: {
    main: '#fffd70',
    // dark: will be calculated from palette.secondary.main,
    //  contrastText: '#ffffff',
  },
  // Used by `getContrastText()` to maximize the contrast between
  // the background and the text.
  contrastThreshold: 3,
  // Used by the functions below to shift a color's luminance by approximately
  // two indexes within its tonal palette.
  // E.g., shift from Red 500 to Red 300 or Red 700.
  tonalOffset: 0.2,
});