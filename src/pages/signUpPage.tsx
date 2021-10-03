import React from 'react';
import { createStyles } from '@material-ui/styles';
import { ButtonBase, makeStyles, Theme, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Alert from '@material-ui/lab/Alert';
import { useForm } from 'react-hook-form';

import LoginFormLayout from '../components/layouts/LoginFormLayout';
import { Link } from 'react-router-dom';
import { spaUrls } from '../utils/apiHelper';
import { useUserContext } from '../store/user';
import { signUp, setUserError } from '../store/user';
import Input from '../components/Input';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        form: {
            display: 'flex',
            flexDirection: 'column',
        },
        submitButton: {
            marginTop: theme.spacing(2),
            backgroundColor: theme.colors.accent,
            height: theme.spacing(12),
            borderRadius: theme.spacing(2),
            color: theme.colors.backgroundMain,
            fontWeight: theme.typography.fontWeightBold,
        },
        errorAlert: {},
        secondaryText: {
            color: theme.colors.textSecondary,
            fontWeight: theme.typography.fontWeightBold,
            textDecoration: 'none',
        },
        iconButtonStyles: {
            color: theme.colors.textSecondary,
        },
        formUnderBlock: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        secondaryActionButton: {
            color: theme.colors.accent,
            fontWeight: theme.typography.fontWeightBold,
        },
        secondaryActionText: {
            color: theme.colors.textSecondary,
            fontWeight: theme.typography.fontWeightBold,
            marginRight: theme.spacing(1),
        },
    })
);
interface ISignupForm {
    email: string;
    password: string;
    confirmPassword: string;
}
// eslint-disable-next-line
const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const SignUpPage: React.FunctionComponent = (props) => {
    const classes = useStyles();
    const { state, dispatch } = useUserContext();
    const [showPassword, setPasswordVisibility] = React.useState(false);
    const { register, handleSubmit, errors, setError } = useForm<ISignupForm>({
        defaultValues: {
            email: '',
            password: '',
            confirmPassword: '',
        },
    });

    const onSubmit = (data: ISignupForm) => {
        if (data.password === data.confirmPassword) {
            signUp(dispatch, data.email, data.password);
        } else {
            setError('confirmPassword', {
                type: 'manual',
                message: "Passwords don't match",
            });
        }
    };

    const handleClickShowPassword = () => {
        setPasswordVisibility(!showPassword);
    };
    const clearError = () => {
        dispatch(setUserError(null));
    };

    const formUnderBlock = React.useMemo(() => {
        return (
            <div className={classes.formUnderBlock}>
                <Typography
                    variant="body2"
                    className={classes.secondaryActionText}
                >
                    Already have an account?
                </Typography>
                <Link style={{ textDecoration: 'none' }} to={spaUrls.login()}>
                    <Typography
                        variant="body2"
                        className={classes.secondaryActionButton}
                    >
                        Sign in
                    </Typography>
                </Link>
            </div>
        );
    }, [
        classes.formUnderBlock,
        classes.secondaryActionButton,
        classes.secondaryActionText,
    ]);

    return (
        <LoginFormLayout
            title="Sign up"
            isLoading={state.isLoading}
            loadingText="Checking your data"
            formUnderContent={formUnderBlock}
        >
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <Input
                    label="Email Address"
                    placeholder="name@address.com"
                    type="text"
                    name="email"
                    onFocus={clearError}
                    ref={register({
                        required: 'Email is required',
                        pattern: {
                            value: emailRegex,
                            message: 'Incorrect email',
                        },
                    })}
                    error={!!errors?.email?.message}
                    helperText={errors?.email?.message}
                />

                <Input
                    label="Password"
                    placeholder="Enter your password"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    onFocus={clearError}
                    ref={register({
                        required: 'Password is required',
                    })}
                    error={!!errors?.password?.message}
                    helperText={errors?.password?.message}
                    inputFieldEndSlot={
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                        >
                            {showPassword ? (
                                <VisibilityOff
                                    classes={{
                                        root: classes.iconButtonStyles,
                                    }}
                                />
                            ) : (
                                <Visibility
                                    classes={{
                                        root: classes.iconButtonStyles,
                                    }}
                                />
                            )}
                        </IconButton>
                    }
                />

                <Input
                    label="Confirm Password"
                    placeholder="Enter your password"
                    type={showPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    onFocus={clearError}
                    ref={register({
                        required: 'Password is required',
                    })}
                    error={!!errors?.confirmPassword?.message}
                    helperText={errors?.confirmPassword?.message}
                    inputFieldEndSlot={
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                        >
                            {showPassword ? (
                                <VisibilityOff
                                    classes={{
                                        root: classes.iconButtonStyles,
                                    }}
                                />
                            ) : (
                                <Visibility
                                    classes={{
                                        root: classes.iconButtonStyles,
                                    }}
                                />
                            )}
                        </IconButton>
                    }
                />

                {state.error && (
                    <Alert className={classes.errorAlert} severity="error">
                        {state.error}
                    </Alert>
                )}

                <ButtonBase type="submit" className={classes.submitButton}>
                    <Typography variant="body1">Sign up</Typography>
                </ButtonBase>
            </form>
        </LoginFormLayout>
    );
};
export default SignUpPage;
