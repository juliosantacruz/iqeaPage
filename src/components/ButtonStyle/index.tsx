import React from 'react'
import './ButtonStyle.scss'



type ButtonStyleProps={
    children:React.ReactNode , 

}
export default function ButtonStyle({children}:ButtonStyleProps) {
  return (
    <div className='iqeaBtn'>
         {children}
    </div>
  )
}
