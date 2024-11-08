import { Outlet, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBookOpen, faPlus, faSun, faMoon} from '@fortawesome/free-solid-svg-icons'
import profile from '../assets/profile.jpg'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import { Link } from 'react-router-dom'
import { useRef } from "react";
import useThemeContext from "../hooks/useThemeContext";

export default function Layout() {
  let location = useLocation();
  const nodeRef = useRef(null)

  let {theme, changeTheme, isDark} = useThemeContext()
  let themeStyle = theme === 'light'? '' : 'bg-gray-900'

  return (
    <div className={themeStyle}>
    <nav className={`flex justify-between items-center px-6 py-3 bg-blue-500 text-gray-100`}>
        <Link to='/'>
          <div className="logo text-2xl">
          <FontAwesomeIcon icon={faBookOpen} /> Library
          </div>
        </Link>
        <div className="flex items-center gap-3">
          {!isDark && <button onClick={() => changeTheme('dark')}> <FontAwesomeIcon icon={faMoon} /> </button>}
          {isDark && <button onClick={() => changeTheme('light')}> <FontAwesomeIcon icon={faSun} /> </button>}
        <Link to={'/create'}>
        <button className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-2 rounded-full">
            <span className="hidden md:block">Create Book</span>
            <FontAwesomeIcon className="block md:hidden" icon={faPlus}/>
        </button>
        </Link>
        <img src={profile} alt="" className="w-12 h-12 rounded-full border border-gray-100" />
        </div>
    </nav>
    
    <SwitchTransition>
      <CSSTransition nodeRef={nodeRef} timeout={300} classNames={`fade`} key={location.pathname}>
        <div ref={nodeRef} className="max-w-6xl mx-auto mt-10">
          <Outlet/>
        </div>
      </CSSTransition>
    </SwitchTransition>
    
    </div>
  )
}
