import React from "react";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import {blue, green} from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: green,
    },
});

const Theme = props => {
    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    );
};

export default Theme;
