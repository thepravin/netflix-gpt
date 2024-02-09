import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video  pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 w-1/3 text-lg'>{overview}</p>
        <div >
            <button className='p-2 px-10 text-lg mr-5 bg-red-600 font-bold text-black rounded-lg hover:opacity-80 '>▶️Play</button>
            <button className='p-2 px-8 text-lg mr-5 font-bold bg-gray-400 text-black rounded-lg  hover:opacity-80 '>More Info</button>
        </div>

    </div>
  )
}

export default VideoTitle