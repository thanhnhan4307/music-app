/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-has-content */
import React,{useContext, useEffect, useState} from 'react'
import { Songs } from '../Context'

export default function ListSong() {
    const {DataSongs, handleSetSong,song} = useContext(Songs);
    const [idSong, setidSong] = useState(0)
    const handlePlaySong = (idSong) => {
        setidSong(idSong)
        handleSetSong(idSong)
    };
    useEffect(()=>{
        setidSong(song.id)
    })
    // console.log(DataSongs)
  return (
    <div className='col-span-2 overflow-y-scroll relative'>
      <div className=''>
      <table className='table-auto w-full'>
            <thead className='text-white h-12'>
                <tr>
                    <th>#</th>
                    <th className='text-left'>Title</th>
                    <th className='w-[10%]'>Author</th>
                    <th className='w-[10%]'><i className='fa fa-download'></i></th>
                </tr>
            </thead>
            <tbody>
                {
                    DataSongs.map((song,index)=> 
                    <tr key={index} className={`cursor-pointer bg-stone-800 h-12 text-white hover:bg-zinc-500 ${idSong === song.id && 'text-teal-400'}`} onClick={()=>handlePlaySong(song.id)}>
                    <td className='text-center'>{index+1}</td>
                    <td>{song.name}</td>
                    <td className='text-center'>{song.author}</td>
                    <td className='text-center'>
                        <a href={song.url}><i className='fa fa-download'></i></a>    
                    </td>   
                </tr> )
                }
               
            </tbody>

        </table>
      </div>
    </div>
  )
}
