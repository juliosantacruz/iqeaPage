'use client'
import React, { useEffect } from 'react'
import { useUserStore } from '@/store/portfolioStore';
import { useRouter } from  'next/navigation'



export default function CheckAuth() {
  const { isAuth} = useUserStore()
  const router = useRouter()

  useEffect(()=>{
    if(!isAuth){
      router.push('/acceso')
    }

  })
  return (
    <div>💼</div>
  )
}
