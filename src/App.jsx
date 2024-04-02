import { useState } from 'react'
import './App.css'
import Display from './components/Display'
import SideBar from './components/NavBar'
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";


function App() {
  const [displaySideBar, setDisplaySideBar] = useState("active");
  //this logic is for displaying or hiding the side bar
  const sideBarHandler = () => {
    if (displaySideBar === "active") {
      setDisplaySideBar("inactive")
    } else {
      setDisplaySideBar("active")
    }
  }

  return (
    <>
      <div className={`button ${displaySideBar}`} onClick={() => { sideBarHandler() }} >
        {displaySideBar === "inactive" && <GiHamburgerMenu />} 
        {displaySideBar === "active" && <ImCross />} 
      </div>
      <div className="mainContainer">
        <div className={`sideBar ${displaySideBar}`}>
          <SideBar displaySideBar={displaySideBar} />
        </div>
        <div className={`display ${displaySideBar}`}>
          <Display displaySideBar={displaySideBar} />
        </div>
      </div>
    </>
  )
}

export default App
