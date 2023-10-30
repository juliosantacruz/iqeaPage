import React from 'react'
import './ButtonStyle.scss'



type ButtonStyle={
    children:React.ReactNode , 

}
export default function ButtonStyle({children}:ButtonStyle) {
  return (
    <div className='iqeaBtn'>
         {children}
    </div>
  )
}
