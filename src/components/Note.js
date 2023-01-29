import React, { useState } from "react";
import NoteView from "./NoteView"
import NoteEdit from "./NoteEdit"

const Note = ({note}) => {

  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
      {!isEdit ? (
        <NoteView note={note} setIsEdit={setIsEdit} isEdit={isEdit} />
      ) : (
        <NoteEdit note={note} setIsEdit={setIsEdit} isEdit={isEdit} />
      )}
    </>
  );
};

export default Note;
