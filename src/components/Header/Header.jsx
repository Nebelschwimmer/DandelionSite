import React from "react";
import './header.scss'
import { Logo } from '../Logo/Logo';
import { useLocation } from "react-router-dom";

export const Header = ({scrollRef, setGlow}) => {
  
  const scrollToForm = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth", alignToTop: false });
    setGlow(true)
  }

  const { pathname } = useLocation();
  if (pathname === "/ad23min45" && '*') {
    return <></>; }


  return (
  <>
  <div className='header__container'>
    
    <Logo />

    <nav className='header__navigation'>
      <span onClick={()=>{scrollToForm()}} className='header__navigation__span'>Присоединиться</span>
    </nav>
  </div>
  </>
)
}
