import MovieCard from '../MovieCard/MovieCard'
import { Grid } from '@mui/material'
import PropTypes from 'prop-types';

/**
 * Component for displaying list of movies
 */
export default function MovieList (props) {

    const movies = props.movies

    return(
        <Grid container className="movie-list-container">
            {
                movies.map((data,index) => {
                    return(
                        <MovieCard key={index} movieData={data}/>
                    )
                })
            }
        </Grid>
    )
}

MovieList.propTypes = {
    movies: PropTypes.array,
}