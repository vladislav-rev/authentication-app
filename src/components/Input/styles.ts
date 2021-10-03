import { Theme, createStyles } from '@material-ui/core';
import { InputProps } from './Input';

export const styles = (theme: Theme) =>
    createStyles<any, InputProps>({
        root: {
            width: '100%',
            padding: theme.spacing(2, 0),
        },
        inputHeader: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: theme.spacing(2),
        },
        inputHeaderSlot: {
            marginLeft: theme.spacing(2),
        },
        inputLabel: {
            color: theme.colors.textMain,
            fontWeight: theme.typography.fontWeightBold,
        },
        inputFieldContainer: {
            height: theme.spacing(10),
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            borderWidth: 2,
            borderStyle: 'solid',
            borderColor: ({ error }) =>
                error ? theme.colors.danger : theme.colors.backgroundAccent,
            borderRadius: theme.spacing(2),
            padding: theme.spacing(0, 2),
            marginBottom: theme.spacing(3),
            transition: 'border 300ms ease-in-out',
            '&:focus-within': {
                borderColor: theme.colors.accent,
            },
        },
        inputFieldStartSlot: {
            marginRight: theme.spacing(2),
        },
        inputFieldEndSlot: {
            marginLeft: theme.spacing(2),
        },
        inputField: {
            display: 'block',
            flex: '1 1 auto',
            lineHeight: theme.spacing(9) + 'px',
            fontSize: 14,
            fontWeight: 500,
            color: theme.colors.textMain,
            border: 'none',
            '&::placeholder': {
                color: theme.colors.textSecondary,
                fontWeight: theme.typography.fontWeightBold,
            },
            '&:focus': {
                outline: 'none',
            },
            '&:-webkit-autofill': {
                '-webkit-box-shadow': `0 0 0 30px ${theme.colors.backgroundMain} inset !important`,
                '-webkit-text-fill-color': theme.colors.textMain,
            },
        },
        helperText: {
            position: 'absolute',
            left: 0,
            top: `calc(100% + ${theme.spacing(1)}px)`,
            width: '100%',
            fontWeight: theme.typography.fontWeightBold,
            color: ({ error }) =>
                error ? theme.colors.danger : theme.colors.textSecondary,
        },
    });

export default styles;
