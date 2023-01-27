import React from "react";
import NoteContexProvider from "./contex/NoteContex";
import NavBar from './components/NavBar'
import Home from './components/Home'
import AddNote from './components/AddNote'

function App() {

  return (
    <NoteContexProvider>
        <NavBar />
        <Home />
        <AddNote  />
    </NoteContexProvider>
  );
}

export default App;
