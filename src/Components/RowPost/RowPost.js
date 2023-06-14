import React,{useEffect,useState} from 'react'
import './RowPost.css'
import axios from '../../Axios'
import {imageUrl,API_key} from '../../constants/constants'
import Youtube from 'react-youtube'

function RowPost(props) {
    const [Movies,setMovies]=useState([])
    const [urlId,setUrlId]=useState('')
    useEffect(()=>{axios.get(props.url).then(response=>{
      console.log(response.data) 
      setMovies(response.data.results)
})},[])
const opts = {
  height: '390',
  width: '640',
  playerVars: {
    autoplay: 1,
  },
};

const handleMovie=(id)=>{
  console.log(id)
  axios.get(`/movie/${id}/videos?api_key=${API_key}&language=en-US`).then(response=>{
    if(response.data.results.length!==0){
      setUrlId(response.data.results[0])

    }
    console.log(response.data)
  })
}

  return (
    <div ClassName='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {Movies.map((obj)=><img onClick={()=>handleMovie(obj.id)} className={props.isSmall ?'smallPoster':'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`}></img>
)}

        </div>
      {urlId && <Youtube opts={opts} videoId={urlId.key}/>}
    </div>
  )
}

export default RowPost
