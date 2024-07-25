import { createSlice } from "@reduxjs/toolkit";

const movieSlice =createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        topRatedMovies:null,
        upComingMovies:null,
        toggle:false,
        trailerMovie:null,
        open:false,
        id:"",
    },
    reducers:{
        //action
        getNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        getPopularMovie:(state,action)=>{
            state.popularMovies =action.payload;
        },
        getTopRatedMovie:(state,action)=>{
            state.topRatedMovies =action.payload;
        },
        getUpcomingMovie:(state,action)=>{
            state.upComingMovies =action.payload;
        },
        setToggle:(state)=>{
            state.toggle=!state.toggle;
        },
        getTrailerMovie:(state,action)=>{
            state.trailerMovie=action.payload;
        },
        setOpen:(state,action)=>{
            state.open=action.payload;
        },
        getId:(state,action)=>{
            state.id=action.payload;
        }
    }
});
export const {getNowPlayingMovies, getPopularMovie, getTopRatedMovie, getUpcomingMovie,setToggle,getTrailerMovie,setOpen,getId} = movieSlice.actions;
export default movieSlice.reducer;