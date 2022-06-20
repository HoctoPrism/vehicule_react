import React from 'react'
import {Box, Grid} from "@mui/material";
import store from "../../../store";

function TirageArrayList() {

    const tirageList = store.getState().TirageArray

    function createGroups(arr) {
        const shuffle = arr.sort((a, b) => 0.5 - Math.random())
        const perGroup = Math.ceil(shuffle.length / Math.ceil(arr.length / 2));
        return new Array(Math.ceil(arr.length / 2))
            .fill('')
            .map((_, i) => shuffle.slice(i * perGroup, (i + 1) * perGroup));
    }

    if (tirageList[0]) {
        const readyToShuffle = tirageList[0].split(' ')
        let finalArray = createGroups(readyToShuffle)

        return (<Grid container spacing={3} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', my: 3}}>
                {finalArray.map((item, key) => (
                    <Grid item xs={3} key={key}>
                        Groupe {key+1} : {item.map((item2) => ( <Box sx={{ mx: 1 }}>{item2}</Box> ))}
                    </Grid>
                ))}
            </Grid>
        )
    } else {
        return false
    }

}

export default TirageArrayList