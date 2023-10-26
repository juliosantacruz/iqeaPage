import React from 'react'

type Props={className?:string}
export default function IconMenu({className}:Props) {


  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" className={className}><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>
  )
}

