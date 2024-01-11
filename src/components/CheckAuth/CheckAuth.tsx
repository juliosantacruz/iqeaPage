'use client'
import React from 'react'
import { useUserStore } from '@/store/portfolioStore';
import { useRouter } from 'next/navigation'



export default function CheckAuth() {
  const { isAuth} = useUserStore()
  const router = useRouter()

  if(!isAuth){
    router.push('/acceso')
  }
  return (
    <div>💼</div>
  )
}
