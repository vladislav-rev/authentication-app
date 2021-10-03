import React from 'react';
import { createStyles, makeStyles } from '@material-ui/styles';
import { CircularProgress, Theme, Typography } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Container from './Container';
import cn from 'classnames';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        pageContainer: {
            width: '100%',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
        },
        formContainer: {
            width: '100%',
            maxWidth: 400,
            borderRadius: '16px',
            overflow: 'hidden',
        },
        pageContent: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            padding: theme.spacing(4, 0),
            flexGrow: 1,
        },
        pageHeader: {
            padding: theme.spacing(4, 0),
            display: 'flex',
            [theme.breakpoints.down(theme.breakpoints.values.md)]: {
                padding: theme.spacing(2, 0),
            },
        },
        headerLogo: {
            width: 164,
            [theme.breakpoints.down(theme.breakpoints.values.md)]: {
                width: 140,
            },
        },
        form: {
            position: 'relative',
        },
        formTitle: {
            textAlign: 'center',
            fontWeight: 700,
            marginBottom: theme.spacing(4),
            [theme.breakpoints.down(theme.breakpoints.values.lg)]: {
                fontSize: `calc(${theme.typography.h2.fontSize}px + (${theme.typography.h1.fontSize} - ${theme.typography.h2.fontSize}) * ((100vw - 320px) / (${theme.breakpoints.values.lg} - 320)))`,
            },
        },
        formDescription: {
            textAlign: 'center',
            marginBottom: theme.spacing(4),
        },
        submitButton: {
            marginTop: theme.spacing(2),
            backgroundColor: theme.colors.accent,
            height: theme.spacing(12),
            borderRadius: theme.spacing(2),
            color: theme.colors.backgroundMain,
            fontWeight: theme.typography.fontWeightBold,
        },
        registerButton: {
            marginTop: 8,
        },
        errorAlert: {
            marginTop: 16,
        },
        loadingIndicator: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backdropFilter: 'blur(1px)',
            backgroundColor: fade(theme.colors.backgroundMain as string, 0.5),
        },
        loaderText: {
            marginTop: 8,
            fontWeight: theme.typography.fontWeightBold,
        },
        loadingSpinner: {
            color: theme.colors.textMain,
        },
        secondaryText: {
            color: theme.colors.textSecondary,
            fontWeight: theme.typography.fontWeightBold,
            textDecoration: 'none',
        },
        formUnderBlock: {
            marginTop: theme.spacing(4),
        },
    })
);

type LoginFormLayoutProps = {
    title: string;
    isLoading: boolean;
    loadingText: string;
    formUnderContent?: React.ReactNode;
};
const LoginFormLayout: React.FunctionComponent<LoginFormLayoutProps> = (
    props
) => {
    const classes = useStyles();
    return (
        <Container>
            <div className={classes.pageContainer}>
                <header className={classes.pageHeader}></header>
                <main className={classes.pageContent}>
                    <div className={classes.formContainer}>
                        <Typography
                            className={classes.formTitle}
                            variant="h1"
                            component="h1"
                        >
                            {props.title}
                        </Typography>
                        <Typography
                            className={cn(
                                classes.formDescription,
                                classes.secondaryText
                            )}
                            variant="body1"
                            component="h3"
                        ></Typography>
                        <div className={classes.form}>
                            {props.children}
                            {props.isLoading && (
                                <div className={classes.loadingIndicator}>
                                    <CircularProgress
                                        thickness={2}
                                        color="inherit"
                                        classes={{
                                            root: classes.loadingSpinner,
                                        }}
                                    />
                                    <Typography
                                        className={classes.loaderText}
                                        variant="body2"
                                        component="span"
                                    >
                                        {props.loadingText}
                                    </Typography>
                                </div>
                            )}
                        </div>

                        <div className={classes.formUnderBlock}>
                            {props.formUnderContent}
                        </div>
                    </div>
                </main>
            </div>
        </Container>
    );
};
export default LoginFormLayout;
