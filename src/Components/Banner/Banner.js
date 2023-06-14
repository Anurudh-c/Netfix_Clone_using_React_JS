import React, { useEffect, useState } from 'react'
import'./Banner.css' 
import axios from '../../Axios'
import {API_key,imageUrl} from '../../constants/constants'

function Banner() {
  const [movie,setMovie]=useState()
  useEffect(()=>{axios.get(`trending/all/week?api_key=${API_key}&language=en-US`).then((response)=>{console.log(response.data.results[0])
  setMovie(response.data.results[1])})},[])
  return (
      <div     style={{backgroundImage:`url(${movie? imageUrl+movie.backdrop_path:""})`}} className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title :""}</h1>
            <div className='banner_buttons'>
                <button className='button'>play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>{movie ? movie.overview:" "}</h1>
        </div>
        
         
      <div className='fade_bottom'></div>
    </div>
  )
}

export default Banner
