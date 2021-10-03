import * as React from 'react';

export interface CustomThemeOptions {
    colors?: {
        backgroundMain?: React.CSSProperties['color'];
        backgroundSecondary?: React.CSSProperties['color'];
        backgroundTertiary?: React.CSSProperties['color'];
        backgroundAccent?: React.CSSProperties['color'];
        backgroundAccentLight?: React.CSSProperties['color'];
        textMain?: React.CSSProperties['color'];
        textSecondary?: React.CSSProperties['color'];
        separatorLight?: React.CSSProperties['color'];
        separatorDark?: React.CSSProperties['color'];
        accent?: React.CSSProperties['color'];
        danger?: React.CSSProperties['color'];
    };
}
