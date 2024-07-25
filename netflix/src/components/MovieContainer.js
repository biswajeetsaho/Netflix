import React from 'react'
import ListMovie from './ListMovie'
import {useSelector} from "react-redux"
const MovieContainer = () => {
  const movie = useSelector(store=>store.movie);
  // console.log(movie.popularMovies);
  return (
    <div className="bg-black">
      <div className='-mt-52 relative z-10'>
        <ListMovie title={"Popular Movies"} movies={movie.popularMovies} />
        <ListMovie title={"Now Playing Movies"} movies={movie.nowPlayingMovies} />
        <ListMovie title={"Top Rated Movies"} movies={movie.topRatedMovies} />
        <ListMovie title={"Upcoming Movies"} movies={movie.upComingMovies} />
      </div>

    </div>
  )
}

export default MovieContainer
