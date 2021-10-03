import React from 'react';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme, Typography, Box, CircularProgress } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: theme.spacing(4),
        },
        contentWrapper: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            maxWidth: 150,
        },
        text: {
            marginTop: theme.spacing(2),
            textAlign: 'center',
            color: theme.colors.textSecondary,
        },
    })
);
type LoadingPageProps = {
    message?: string;
};
export const LoadingPage: React.FunctionComponent<LoadingPageProps> = (
    props
) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.contentWrapper}>
                <Box>
                    <CircularProgress />
                </Box>
                {props.message && (
                    <Typography className={classes.text}>
                        {props.message}
                    </Typography>
                )}
            </div>
        </div>
    );
};

export default LoadingPage;
