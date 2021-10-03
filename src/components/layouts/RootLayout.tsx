import React from 'react';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: theme.colors.backgroundMain,
        },
    })
);
const RootLayout: React.FunctionComponent = (props) => {
    const classes = useStyles();
    return <div className={classes.root}>{props.children}</div>;
};
export default RootLayout;
