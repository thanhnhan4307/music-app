import React, { useContext } from 'react'
import { Songs } from '../Context'

export default function DetailSong() {
  const {song} = useContext(Songs)
  return (
    <div className='p-3'>
        <h2 className='text-gray-300 font-bold'>Now playing</h2>
        <div className="flex ">
        <h2 className='text-gray-100 text-2xl mt-3 mb-4 font-bold'>{song.name}</h2>

        </div>
        <div className='w-[220px] m-auto'>
            <img className='w-full' src={song.links.images[0].url} alt='avartar'></img>
        </div>
        <div className='flex justify-around items-center mt-10'>
        {/* <img className='w-[70px] rounded-full' src={song.links.images[1].url} alt='avartar'></img> */}
        <span className='text-sm text-white font-bold'>{song.author}</span>
        </div>
    </div>
  )
}
