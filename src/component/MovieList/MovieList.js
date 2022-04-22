import MovieCard from '../MovieCard/MovieCard'
import { Grid } from '@mui/material'

export default function movieList (props) {

    const movies = props.data

    return(
        <Grid container className="movie-list-container">
            {
                movies.map((data,index) => {
                    return(
                        <MovieCard key={index} data={data}/>
                    )
                })
            }
        </Grid>
    )

}