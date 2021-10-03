import React from 'react';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import cn from 'classnames';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: 1200,
            margin: '0 auto',
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
            [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
                paddingLeft: theme.spacing(2),
                paddingRight: theme.spacing(2),
            },
        },
        mediumSize: {
            maxWidth: 720,
            paddingLeft: 0,
            paddingRight: 0,
        },
    })
);

type ContainerProps = {
    className?: string;
    size?: 'medium';
};
const Container: React.FunctionComponent<ContainerProps> = (props) => {
    const classes = useStyles();
    return (
        <div
            className={cn(classes.root, props.className, {
                [classes.mediumSize]: props.size,
            })}
        >
            {props.children}
        </div>
    );
};
export default Container;
