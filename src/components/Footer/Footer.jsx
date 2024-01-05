import React from "react";
import './footer.scss'
import { useLocation } from "react-router-dom";
// import { Modal } from "../Modal/Modal";

export const Footer = () => {

  const { pathname } = useLocation();
  if (pathname === "/admin" && '*') {
    return <></>; }

  return (
    <div className='footer'> 
      <span>© Dandelion</span>
      <span>Разработка - Nebelschwimmer (Андрей Дьяков) ©</span> 
    </div>
  )
}