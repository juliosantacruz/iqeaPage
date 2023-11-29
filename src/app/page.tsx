
import Hero from '@/sections/Hero'
import Servicios from '@/sections/Servicios'
import AboutUs from '@/sections/AboutUs'
import Stats from '@/sections/Stats'
import Projects from '@/sections/Projects'
import Products from '@/sections/Products'
import Subcribe from '@/sections/Subcribe'
import './home.scss'
import { getProjectsGalery } from '@/services/fetchData'



export default async function Home() {
  const projectsData = await getProjectsGalery();


  return (
    <main className='main'>
        <Hero/>
        <Servicios/>
        <Stats/>
        <AboutUs/>
        <Projects projectsData={projectsData}/>
        <Subcribe/>
        {/* <Products/> */}
    </main>
  )
}
