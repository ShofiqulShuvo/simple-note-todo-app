import React, { useContext } from 'react'
import { NoteContex } from '../contex/NoteContex'
import Note from './Note'

const Home = () => {
    const { notes} = useContext(NoteContex)
  return (
    <>
      <div className='home'>
          { notes.length ? (
              notes.map(note => {
                  const { id } = note;

                  return <Note key={id} note={note}  />
              })
          ) : (<h1 style={{marginTop:'3rem'}}>No Notes Found</h1>)}
      </div>
    </>
  )
}

export default Home