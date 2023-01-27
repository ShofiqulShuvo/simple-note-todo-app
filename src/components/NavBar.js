import React, { useContext } from 'react'
import Style from '../assets/css/navbar.module.css'
import { NoteContex } from '../contex/NoteContex'

const NavBar = () => {
  const { setIsOpen } = useContext(NoteContex)
  return (
    <div className={Style.navbar}>
        <div className={Style.container}>
            <div className={Style.logo}>My Note</div>
            <button
             className={Style.addNote}
             onClick={()=> setIsOpen(true)}
            >
              Create Note
            </button>
        </div>
    </div>
  )
}

export default NavBar