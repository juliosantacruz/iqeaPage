import Image from 'next/image'
import './home.scss'
import Hero from '@/sections/Hero'
import Servicios from '@/sections/Servicios'
import AboutUs from '@/sections/AboutUs'
import Stats from '@/sections/Stats'
import Projects from '@/sections/Projects'
import Products from '@/sections/Products'

export default function Home() {
  return (
    <main className='main'>
        <Hero/>
        <Servicios/>
        <AboutUs/>
        <Stats/>
        <Projects/>
        <Products/>
    </main>
  )
}
