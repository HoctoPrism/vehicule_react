import React, {useEffect, useState} from "react";
import '../../App.css';
import {Box, Button, Container, FormControl, Paper, TextField, Typography} from "@mui/material";
import {useDispatch} from 'react-redux';
import {resetTirageArray, setTirageArray} from "../features/TirageArray/TirageArraySlice";
import TirageArrayList from "../features/TirageArray/TirageArray";

function Tirage() {

    document.title = 'Tirage au sort';

    const [formValues, setFormValues] = useState([])
    const dispatch = useDispatch();

    useEffect(() => {
    }, [formValues]);

    const getFormValue = (e) => {
        e.preventDefault();
        dispatch(setTirageArray(formValues));
    }

    const resetFormValue = (e) => {
        e.preventDefault();
        dispatch(resetTirageArray());
    }

    return <Container maxWidth="sm">
        <Paper sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', py: 10}}>
            <Typography variant="h3" sx={{textAlign: "center"}} gutterBottom>Tirage</Typography>
            <FormControl sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <TextField style={{width: 400, height: 50}}
                           label="Noms des Participants"
                           variant="standard"
                           multiline
                           onChange={(e) => setFormValues(e.target.value)}
                />
                <Box sx={{mt: 5}}>
                    <Button type="submit"
                            variant="contained"
                            onClick={getFormValue}>
                        Envoyer
                    </Button>
                    <Button sx={{ mx: 5 }} variant="contained" onClick={resetFormValue}>Reset</Button>
                </Box>
            </FormControl>
        </Paper>
        <TirageArrayList/>
    </Container>
}


export default Tirage;