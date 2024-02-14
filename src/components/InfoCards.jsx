import React from 'react'


const InfoCards = ({
  heading,
  data,
  unit,
  icon
}) => {
  return (
    <div className=' w-full h-full bg-black/70 backdrop-blur-md rounded-md p-5 text-start'>
        <h2 className='text-gray-400 lg:text-xl'>{icon}{heading}</h2>
        <h1 className='text-white text-2xl lg:text-3xl my-3'>{data}{unit}</h1>
    </div>
  )
}

export default InfoCards