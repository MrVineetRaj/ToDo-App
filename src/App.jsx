import { useState } from 'react'
import './App.css'
import Display from './components/Display'
import Header from './components/Header'
import SideBar from './components/NavBar'
import Bg from './components/Bg'


function App() {
  const [displaySideBar, setDisplaySideBar] = useState("inactive");
  const sideBarHandler = () => {
    if (displaySideBar === "active") {
      setDisplaySideBar("inactive")
    } else {
      setDisplaySideBar("active")
    }
  }
  return (
    <>
      <div className='button' onClick={() => { sideBarHandler() }}></div>
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
