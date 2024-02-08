import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-36 px-12'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 w-1/3 text-lg'>{overview}</p>
        <div >
            <button className='p-2 px-10 text-lg mr-5 bg-red-600 text-black rounded-lg  '>▶️Play</button>
            <button className='p-2 px-8 text-lg mr-5 bg-gray-400 text-black rounded-lg  '>More Info</button>
        </div>

    </div>
  )
}

export default VideoTitle