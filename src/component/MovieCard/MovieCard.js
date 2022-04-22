import { Grid } from "@mui/material"
import { Button } from "@mui/material";

import './MovieCard.css'

export default function MovieCard(data){

    const movieData = data.data;
    
    return (
        <Grid item xs={12} sm ={6} md={4} lg={2} className="movie-card-container">
            <Grid item xs={12}>
                <img src={movieData.Poster} className="movie-img"/>
            </Grid>
            <Grid container className="text-container">
                <Grid item xs={12}>
                    <b>Title: </b>{movieData.Title}
                </Grid>
                <Grid item xs={12}>
                    <b>Year: </b>{movieData.Year}
                </Grid>
                <Grid item xs={12}>
                    <Button variant="outlined"> 
                        <label>
                            Like this movie!
                        </label>
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}