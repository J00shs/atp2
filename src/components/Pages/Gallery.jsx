import React from 'react'
import { useParams } from "react-router";


const Gallery = () => {
  const {gallery} = useParams();
  return (
    <div>
        <h1>Hello World!</h1>
    </div>
  )
}

export default Gallery