import './App.css';
import React, {useEffect} from "react";
import {Outlet} from "react-router-dom";
import {AppBar, Box, Container, createTheme, CssBaseline, Tabs, ThemeProvider} from "@mui/material";
import {lightTheme} from "./component/_partials/_theme/_lightTheme";
import {darkTheme} from "./component/_partials/_theme/_darkTheme";
import {ColorContext} from "./component/_partials/_theme/_colorContext";
import {SwitchModeButton} from "./component/_partials/_theme/_switchModeButton";
import LinkTab from "./assets/js/_navbar";

function App() {

    const [mode, setMode] = React.useState("light");
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) =>
                    prevMode === "light" ? "dark" : "light"
                );
            },
        }),
        []
    );
    const theme = React.useMemo(
        () => createTheme(mode === "light" ? lightTheme : darkTheme),
        [mode]
    );

    function Navbar() {

        document.title = "Accueil"

        const [value, setValue] = React.useState(0);
        const handleChange = (event, newValue) => {
            return setValue(newValue);
        };

        useEffect(() => {
        })

        return (
            <Box sx={{flexGrow: 1}}>
                <AppBar className='header'>
                    <Box sx={{m: 5}} component="div">{document.title}</Box>
                    <Tabs value={value} onChange={handleChange} aria-label="navbar">
                        <LinkTab label="Accueil" href="/"/>
                        <LinkTab label="Page Two" href="/"/>
                        <LinkTab label="Page Three" href="/"/>
                        <SwitchModeButton/>
                    </Tabs>
                </AppBar>
            </Box>
        )
    }

    return <ColorContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme/>
            <Navbar/>
            <Container maxWidth="xl">
                <Outlet/>
            </Container>
        </ThemeProvider>
    </ColorContext.Provider>
}

export default App;
