import React from "react";
import './footer.scss'
import { useLocation } from "react-router-dom";


export const Footer = () => {

  const { pathname } = useLocation();
  if (pathname === "/ad23min45" && '*') {
    return <></>; }

  return (
    <div className='footer'> 
      <span>© Dandelion</span>
    </div>
  )
}