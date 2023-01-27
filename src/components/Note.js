import React, { useContext, useEffect, useState } from "react";
import { FaRegEdit, FaTimes, FaTrashAlt, FaCheck } from "react-icons/fa";
import Style from "../assets/css/note.module.css";
import { NoteContex } from "../contex/NoteContex";
import { dateFormat } from "../utilities/dateFormat";

const Note = (props) => {
  const { id, title, detail } = props.note;
  const { date, month, year } = dateFormat(id);
  const { deleteNote, editNote } = useContext(NoteContex);

  const [isEdit, setIsEdit] = useState(false);
  const [editedNote, setEditedNote] = useState({ title: "", detail: "" });

  useEffect(() => {
    setEditedNote({ title: title, detail: detail });
  }, [detail, title]);

  const handleDelete = (id) => {
    deleteNote(id);
  };

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
      {!isEdit ? (
        <div className={Style.note}>
          <div className={Style.heading}>
            <h4>{title}</h4>
          </div>
          <div className={Style.noteDetails}>
            <p>{detail}</p>
          </div>
          <div className={Style.footer}>
            <div className={Style.date}>{`${date} ${month} ${year}`}</div>
            <div className={Style.buttons}>
              <button
                className={`${Style.btn} ${Style.editBtn}`}
                onClick={() => setIsEdit(!isEdit)}
              >
                <FaRegEdit />
              </button>
              <button
                className={`${Style.btn} ${Style.deleteBtn}`}
                onClick={() => handleDelete(id)}
              >
                <FaTrashAlt />
              </button>
            </div>
          </div>
        </div>
      ) : (
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
      )}
    </>
  );
};

export default Note;
