import React, { useContext, useState } from 'react'
import { FaTimes, FaCheck } from 'react-icons/fa' 
import Style from '../assets/css/addnote.module.css'
import { NoteContex } from '../contex/NoteContex'

const AddNote = () => {
  
  const { isOpen, setIsOpen, addNote } = useContext(NoteContex)
  
  const [ newNote, setNewNote ] = useState({id:'', title:'', detail:''})


  const handleClick = async () => {
    await setNewNote({id:'', title:'', detail:''});
    await setIsOpen(false)
  }

  const handleChange = (e) => {
    const id = new Date().toISOString()
    setNewNote({...newNote, id, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    addNote(newNote)
    setIsOpen(!isOpen)

    setNewNote({id:'', title:'', detail:''})
  }

  return (
    <div className={Style.addNote} style={ isOpen ? {display:'flex'}: {display:'none'}}>
      <form className={Style.addForm} onSubmit={handleSubmit}>
        <div className={Style.title}>
          <input
            className={Style.titleInput}
            placeholder='Write Your Note Title'
            name='title' 
            value={newNote.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className={Style.detail}>
          <textarea
           className={Style.detailInput}
           placeholder='Write Your Note Detail'
           name='detail'
           value={newNote.detail}
           onChange={handleChange}
           required
          />
        </div>
        <div className={Style.buttons}>
          <button
              type='button'
              className={`${Style.btn} ${Style.crossBtn}`}
              onClick={handleClick}
            >
                <FaTimes />
            </button>
            <button
              className={`${Style.btn} ${Style.editBtn}`}
              type='submit'
            >
                <FaCheck />
            </button>
          </div>
      </form>
    </div>
  )
}

export default AddNote