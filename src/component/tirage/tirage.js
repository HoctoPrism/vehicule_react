import React, {useEffect, useState} from "react";
import '../../App.css';
import {Box, Button, FormControl, FormHelperText, TextareaAutosize, Typography} from "@mui/material";
import { useDispatch } from 'react-redux';
import {setTirageArray} from "../features/TirageArray/TirageArraySlice";
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


    return <section>
        <Typography variant="h3" sx={{ mt: 10, textAlign: "center" }} gutterBottom>Tirage</Typography>
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <form>
                <FormControl>
                    <TextareaAutosize
                        aria-label="participant_helper"
                        placeholder="Nom du Participant"
                        style={{ width: 400 }}
                        /*value={formValues}*/ onChange={(e) => setFormValues(e.target.value)}
                    />
                    <FormHelperText id="participant_helper">Veuillez entrer un nom.</FormHelperText>
                    <Button type="submit" size="small" variant="contained" onClick={getFormValue}>Envoyer</Button>
                </FormControl>
            </form>
        </Box>
        <TirageArrayList />
    </section>
}


export default Tirage;