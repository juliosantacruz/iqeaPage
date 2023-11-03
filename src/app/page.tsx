
import Hero from '@/sections/Hero'
import Servicios from '@/sections/Servicios'
import AboutUs from '@/sections/AboutUs'
import Stats from '@/sections/Stats'
import Projects from '@/sections/Projects'
import Products from '@/sections/Products'
import Subcribe from '@/sections/Subcribe'
import './home.scss'



export default function Home() {
  
  return (
    <main className='main'>
        <Hero/>
        <Servicios/>
        <Stats/>
        <AboutUs/>
        <Projects/>
        <Subcribe/>
        <Products/>
    </main>
  )
}
