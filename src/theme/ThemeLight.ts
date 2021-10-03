import * as palette from './palette';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

export const Light: ThemeOptions = {
    spacing: 4,
    breakpoints: {
        values: {
            xs: 400,
            sm: 600,
            md: 760,
            lg: 960,
            xl: 1280,
        },
    },
    palette: {
        primary: {
            main: palette.blue,
        },
    },
    typography: {
        fontFamily: '"Open Sans", "Roboto", "Helvetica", "Arial", sans-serif',
        htmlFontSize: 16,
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 600,
        h1: {
            fontSize: 40,
            fontWeight: 500,
        },
        h2: {
            fontSize: 32,
            fontWeight: 500,
        },
        h3: {
            fontSize: 18,
            fontWeight: 500,
        },
        body1: {
            fontSize: 16,
            fontWeight: 400,
        },
        body2: {
            fontSize: 14,
            fontWeight: 500,
        },
        caption: {
            fontSize: 12,
            fontWeight: 500,
        },
    },
    colors: {
        backgroundMain: palette.white,
        backgroundSecondary: palette.darkWhite,
        backgroundTertiary: palette.lightGrey,
        backgroundAccent: palette.darkBlueWhite,
        backgroundAccentLight: palette.lightBlueWhite,
        textMain: palette.blueBlack,
        textSecondary: palette.blueLightGrey,
        separatorLight: palette.lightGrey,
        separatorDark: palette.lighterGrey,
        accent: palette.blue,
        danger: palette.red,
    },
};
