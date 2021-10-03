import { createMuiTheme } from '@material-ui/core/styles';
import { Light } from './ThemeLight';
import { CustomTheme } from './ThemeInterface';
import { CustomThemeOptions } from './ThemeOptions';
declare module '@material-ui/core/styles/createMuiTheme' {
    interface Theme extends CustomTheme {}
    interface ThemeOptions extends CustomThemeOptions {}
}
const themeLight = createMuiTheme(Light);

export const themes = {
    themeLight,
};
