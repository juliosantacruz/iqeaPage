"use client";
import React, { useEffect, useState } from "react";
import "./LogClients.scss";
import { getVisitasPortafolioBySlug } from "@/services/fetchData";
import { useUserStore } from "@/store/portfolioStore";
import { useRouter } from 'next/navigation'
import InputField from "../InputField/InputField";


export default function LogClients() {
  const [password, setPassword]=useState('')
  const [error, setError]=useState(false)
  const {setUser, name, isAuth} = useUserStore()
  const router = useRouter()

  useEffect(()=>{
    if(isAuth){
      router.push('/acceso/portafolio')
    }
  })

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try{
      const rawData = await getVisitasPortafolioBySlug(password)
      const data = JSON.parse(rawData)
      const userData = {
        id:data?.data.id,
        name:data?.data.attributes.Name,
        company:data?.data.attributes.Company,
        isAuth:data?.data.attributes.IsAuth

      }
      setUser(userData)

    }catch(error){
      console.log(error)
      setError(true)
    }


  };

  const handleChange = (event: any) => {
    const dato = event?.target.value;
    setPassword(dato);
  };

  return (
    <div className="Welcome">
      <div className="WelcomeForm">
        <form onSubmit={(event)=>onSubmit(event)} >
          <h2>Bienvenidos {name||'lol'}</h2>
          <InputField
          name="password"
          label="Contraseña"
          type="password"
          value={password}
          inputChange={(event: any) => handleChange(event)}
          />
          {/* <div className="input">
            <label htmlFor="">Contraseña</label>
            <input name="password" type="text" />
          </div> */}
          <button type="submit">Entrar</button>

          {error &&
          <h4>La contraseña no es valida..</h4>}
        </form>
      </div>
    </div>
  );
}
