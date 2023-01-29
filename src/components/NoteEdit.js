import React, { useContext, useEffect, useState } from "react";
import { NoteContex } from "../contex/NoteContex";
import { FaTimes, FaCheck } from "react-icons/fa";
import Style from "../assets/css/note.module.css";

const NoteEdit = ({note, isEdit, setIsEdit}) => {
    const { id, title, detail } = note;
    const { editNote } = useContext(NoteContex);

    const [editedNote, setEditedNote] = useState({ title: "", detail: "" });

    useEffect(() => {
      setEditedNote({ title: title, detail: detail });
    }, [detail, title]);
  
  
    const handleChange = (e) => {
      setEditedNote({ ...editedNote, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      editNote(id, editedNote);
      setIsEdit(false);
    };

  return (
    <>
    <form className={Style.note} onSubmit={handleSubmit}>
          <div className={Style.heading}>
            <input
              className={Style.headingInput}
              name="title"
              value={editedNote.title}
              onChange={handleChange}
              autoFocus
            />
          </div>
          <div className={Style.noteInputDetails}>
            <textarea
              className={Style.detailsInput}
              name="detail"
              value={editedNote.detail}
              onChange={handleChange}
            />
          </div>
          <div className={Style.footer}>
            <div className={Style.buttons}>
              <button
                className={`${Style.btn} ${Style.crossBtn}`}
                type="button"
                onClick={() => setIsEdit(!isEdit)}
              >
                <FaTimes />
              </button>
              <button
                className={`${Style.btn} ${Style.submitBtn}`}
                type="submit"
              >
                <FaCheck />
              </button>
            </div>
          </div>
        </form>
    </>
  )
}

export default NoteEdit