import React from 'react'
import {ReactComponent as LogoSrc} from './Logo_dandelion.svg' 
import './logo.scss'

export const Logo = () => {


  return (
    <div>
      <LogoSrc className='logo' />
    </div>
  )
}