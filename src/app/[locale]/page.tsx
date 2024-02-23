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
import HeroDiagonal from "@/sections/HeroDiagonal";
import initTranslations from "../i18n";

export default async function Home({params:{locale}}:{params:{locale:string}}) {
  const { t } = await initTranslations(locale, ['home'], )

  const projectsData = await getProjectsGalery();

  return (
    <main className="main">
      <h1>{t('test')}</h1>
      {/* <HeroVideo /> */}
      {/* <Hero/> */}
      <HeroDiagonal/>
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
