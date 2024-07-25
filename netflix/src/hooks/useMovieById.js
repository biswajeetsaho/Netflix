// import axios from 'axios';
// import { options } from '../utils/constant';
// import { useDispatch } from 'react-redux';
// import { getTrailerMovie } from '../redux/movieSlice';
// import { useEffect } from 'react';

// const useMovieById = async (movieId) => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     const getMovieById = async () => {
//       try {
//         movieId = movieId.movieId;
//         console.log("movieId:", movieId);
//         const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options);
//         console.log(res.data.results);
//         const trailer = res?.data?.results?.filter((item) => {
//           return item.type === "Featurette";
//         })
//         dispatch(getTrailerMovie(trailer.length > 0 ? trailer[0] : res.data.results[0]));
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     getMovieById();
//   }, [movieId, dispatch])
//  }

// export default useMovieById;

import axios from 'axios';
import { options } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { getTrailerMovie } from '../redux/movieSlice';
import { useCallback } from 'react';

const useMovieById = (movieId) => {
  const dispatch = useDispatch();

  const fetchMovieTrailer = useCallback(async () => {
    try {
      if (!movieId) {
        throw new Error('Invalid movie ID');
      }

      console.log("movieId:", movieId);
      const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options);

      if (!res.data || !res.data.results) {
        throw new Error('Invalid response structure');
      }

      console.log(res.data.results);

      const trailer = res.data.results.filter((item) => item.type === "trailer");

      if (trailer.length === 0 && res.data.results.length === 0) {
        throw new Error('No trailers available');
      }

      dispatch(getTrailerMovie(trailer.length > 0 ? trailer[0] : res.data.results[0]));
    } catch (error) {
      console.error('Error fetching movie trailer:', error.message);
      dispatch(getTrailerMovie(null)); // Dispatch null or an empty object to handle the error state in the redux store
    }
  }, [movieId, dispatch]);

  return fetchMovieTrailer;
};

export default useMovieById;



