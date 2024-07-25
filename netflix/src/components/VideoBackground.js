// import React, { useEffect } from 'react';
// import useMovieById from '../hooks/useMovieById'
// import { useSelector } from 'react-redux';

// const VideoBackground = ({movieId}) => {
//   const trailerMovie= useSelector(store=>store.movie.trailerMovie);
//   movieId = movieId.movieId;
//   // console.log('maaa::::',movieId);
//   // useMovieById(movieId);
//   const fetchMovieTrailer = useMovieById(movieId);

//   useEffect(() => {
//     fetchMovieTrailer();
//   }, [fetchMovieTrailer]);

//   console.log('VideoBackground movieId:', movieId);
//   console.log('VideoBackground trailerMovie:', trailerMovie);

//   return (
//     <div className='w-screen'>
//       <iframe 
//       className='w-screen video aspect-video'
//       src={`https://www.youtube.com/embed/${trailerMovie.key}?si=fs1yE4VFXGjsPSIu&autoplay=1&mute=1`} 
//       title="YouTube video player" 
//       frameBorder="0" 
//        referrerpolicy="strict-origin-when-cross-origin" 
//        allowFullScreen>
//        </iframe>
//     </div>
//   );
// };

// export default VideoBackground;


import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useMovieById from '../hooks/useMovieById';

const VideoBackground = ({ movieId,bool }) => {
  const trailerMovie = useSelector(store => store.movie.trailerMovie);
  const fetchMovieTrailer = useMovieById(movieId);

  useEffect(() => {
    if (movieId) {
      fetchMovieTrailer();
    }
  }, [movieId, fetchMovieTrailer]);

  return (
    <div className='w-screen'>
      {trailerMovie && trailerMovie.key ? (
        <iframe
          className={`${bool?" ": "w-screen video aspect-video"} `}
          src={`https://www.youtube.com/embed/${trailerMovie.key}?autoplay=1&mute=1`}
          title="YouTube video player"
          frameBorder="0"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default VideoBackground;
