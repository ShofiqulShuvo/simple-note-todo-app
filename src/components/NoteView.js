import React, { useContext } from 'react'
import { FaRegEdit,  FaTrashAlt } from "react-icons/fa";
import Style from "../assets/css/note.module.css";
import { NoteContex } from "../contex/NoteContex";
import { dateFormat } from "../utilities/dateFormat";

const NoteView = ({note, setIsEdit, isEdit}) => {

    const { id, title, detail } = note;
    const { date, month, year } = dateFormat(id);
    const { deleteNote } = useContext(NoteContex);

    const handleDelete = (id) => {
        deleteNote(id);
    };

  return (
    <>
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
    </>
  )
}

export default NoteView