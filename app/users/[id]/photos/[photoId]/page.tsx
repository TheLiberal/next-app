import React from 'react'

interface Props{
  params: {
    id: number;
    photoId: number;
  }
}

const PhotoPage = ({params: {id, photoId}}: Props) => {
  return (
    <div>PhotoPage {photoId}</div>
  )
}

export default PhotoPage