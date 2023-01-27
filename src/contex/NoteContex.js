import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const NoteContex = createContext();

const NoteContexProvider = (props) => {
  const initialValue = [
    { id: '2022-11-22T17:46:48.502Z', title: "Dummy Notes-1", detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. \nConsequuntur est exercitationem repellendus adipisci, id dolores!Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { id: '2022-11-23T17:47:06.686Z', title: "Dummy Notes-2", detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. \nConsequuntur est exercitationem repellendus adipisci, id dolores!Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { id: '2022-11-23T17:47:17.814Z', title: "Dummy Notes-3", detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. \nConsequuntur est exercitationem repellendus adipisci, id dolores!Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { id: '2022-11-25T17:47:24.806Z', title: "Dummy Notes-4", detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. \nConsequuntur est exercitationem repellendus adipisci, id dolores!Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { id: '2022-11-27T17:47:31.462Z', title: "Dummy Notes-5", detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. \nConsequuntur est exercitationem repellendus adipisci, id dolores!Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  ];

  const notesLocalStorage = JSON.parse(localStorage.getItem('trytomakenotesapp'))

  const [notes, setNotes] = useState( notesLocalStorage ? notesLocalStorage : initialValue);

  useEffect(()=>{
    localStorage.setItem('trytomakenotesapp', JSON.stringify(notes))
  },[notes])

  // Adding New Note
  const addNote = (note) => { 
    setNotes([...notes, note]) 
  }

  //  Delete A Note
  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id))
  }

  // Edit A Note
  const editNote = (id, editedNote) => {
    const newNotes = notes.map(note => {
      if (note.id === id){
        return { ...note, ...editedNote}
      } else {
        return note
      }
    })

    setNotes(newNotes)
  }

  // For Open and Close Create Note Modal
  const [ isOpen, setIsOpen ] = useState(false)

  const value = { notes: notes, isOpen, setIsOpen, addNote, deleteNote, editNote };

  return (
    <NoteContex.Provider value={value}>
      {props.children}
    </NoteContex.Provider>
  );
};

export default NoteContexProvider;
