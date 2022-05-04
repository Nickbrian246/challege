import React from "react";
import { CardMovieInfo } from "./CardMovieInfo";
import  {useSelector} from 'react-redux'



const CardMovie = ()=> {
  const {known_for} = useSelector((state) => state.actorName.actorName.results[0]);
  console.log(known_for,'soy results')
  return (
    <>
    
      { known_for.map((data) => (
        <CardMovieInfo data={data}/>
        
      ))}
    </>
  )
}

export {CardMovie}