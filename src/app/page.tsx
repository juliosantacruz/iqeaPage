import Hero from "@/sections/Hero";
import Servicios from "@/sections/Servicios";
import AboutUs from "@/sections/AboutUs";
import Stats from "@/sections/Stats";
import Projects from "@/sections/Projects";
import Products from "@/sections/Products";
import Subcribe from "@/sections/Subcribe";
import "./home.scss";
import { getProjectsGalery } from "@/services/fetchData";
import HeroVideo from "@/sections/HeroVideo/HeroVideo";
import Designs from "@/sections/Designs/Designs";

export default async function Home() {
  const projectsData = await getProjectsGalery();

  return (
    <main className="main">
      <HeroVideo />
      {/* <Hero/> */}
      <Servicios />
      <Stats />
      <AboutUs />
      {/* <Designs /> */}
      <Projects projectsData={projectsData} />
      {/* <Subcribe/> */}
      <Products />
    </main>
  );
}
