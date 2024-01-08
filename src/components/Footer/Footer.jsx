import React from "react";
import './footer.scss'
import { useLocation } from "react-router-dom";


export const Footer = () => {

  const { pathname } = useLocation();
  if (pathname === "/admin" && '*') {
    return <></>; }

  return (
    <div className='footer'> 
      <span>© Dandelion</span>
      <span>Разработка - Nebelschwimmer ©</span> 
    </div>
  )
}