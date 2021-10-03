import React, { InputHTMLAttributes } from 'react';
import { makeStyles } from '@material-ui/styles';
import cn from 'classnames';
import styles from './styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(styles);
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
    inputFieldStartSlot?: React.ReactNode;
    inputFieldEndSlot?: React.ReactNode;
    inputHeaderSlot?: React.ReactNode;
    classname?: string;
    helperText?: string;
    placeholder?: string;
    error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const classes = useStyles(props);
    const {
        name,
        label,
        inputHeaderSlot,
        inputFieldStartSlot,
        inputFieldEndSlot,
        className,
        helperText,
        error,
        ...rest
    } = props;

    return (
        <div className={cn(classes.root, className)}>
            <div className={classes.inputHeader}>
                <Typography
                    component={'label'}
                    variant="body1"
                    htmlFor={name}
                    className={classes.inputLabel}
                >
                    {label}
                </Typography>

                {inputHeaderSlot && (
                    <div className={classes.inputHeaderSlot}>
                        {inputHeaderSlot}
                    </div>
                )}
            </div>

            <div className={classes.inputFieldContainer}>
                {inputFieldStartSlot && (
                    <div className={classes.inputFieldStartSlot}>
                        {inputFieldStartSlot}
                    </div>
                )}
                <input
                    className={classes.inputField}
                    id={name}
                    name={name}
                    ref={ref}
                    {...rest}
                />
                {inputFieldEndSlot && (
                    <div className={classes.inputFieldEndSlot}>
                        {inputFieldEndSlot}
                    </div>
                )}
                {helperText && (
                    <Typography
                        className={classes.helperText}
                        variant="caption"
                    >
                        {helperText}
                    </Typography>
                )}
            </div>
        </div>
    );
});

export default Input;
