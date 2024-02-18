'use client'
import sunIcon from '@/assets/icons/bx-sun.svg'
import moonIcon from '@/assets/icons/bx-moon.svg'
import { useState } from 'react'
import './DarkModeBtn.scss'

export const DarkBtn=()=>{
  const [isDarkMode, setDarkMode]=useState(false)

  const handleChange=()=>{
    setDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
    console.log(isDarkMode)
  }

  return(
    <>
    {isDarkMode?
    <button className='moonIcon' onClick={handleChange}><img src={moonIcon.src} alt="icon" /></button>
    :
    <button className='sunIcon'  onClick={handleChange}><img src={sunIcon.src} alt="icon" /></button>
    }
    </>
  )
}
