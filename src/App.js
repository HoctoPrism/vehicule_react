import './App.css';
import React from "react";
import {Outlet} from "react-router-dom";
import {Box, Container} from "@mui/material";

function App() {

    document.title = "Accueil"

    return <Container maxWidth="xl" sx={{ mt: 18 }}>
        <Outlet/>
    </Container>

}

export default App;
