'use client'
import { useRouter } from 'next/navigation'
import React, { ChangeEvent, useTransition } from 'react'
import { useLocale } from 'use-intl'
import './LocaleSwitch.scss'

export default function LocaleSwitch() {
  const [isPending, startTransition]=useTransition()
  const router = useRouter()
  const localActive = useLocale()


  const onSelectChange =(event:ChangeEvent<HTMLSelectElement>)=>{
    const nextLocale=event.target.value
    startTransition(()=>{
      router.replace(`/${nextLocale}`)
    })
  }
  return (
    <>

      <select className='languageSelect' defaultValue={localActive} onChange={onSelectChange} disabled={isPending}>
        <option value="es">Español</option>
        <option value="en">English</option>
      </select>
    </>
  )
}
