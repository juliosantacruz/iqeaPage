
import React  from "react";
import "./Projects.scss";
import ButtonStyle from "@/components/ButtonStyle";
import Link from "next/link";
import ProjectSlider from "./ProjectSlider";

export default function Projects({ projectsData, t }: any) {
  // console.log(projectsData)
  return (
    <section className="projectsIqea">
      <div className="projectsAccent">
        <div className="headerProjects centerDiv">
        <h2>{t('ProjectsTitle')}</h2>
          <p>{t('ProjectsContent')}</p>
        </div>

        <ProjectSlider data={projectsData} />
        <ButtonStyle>
          <Link
            href={"/proyectos"}
            style={{ maxWidth: "200px", margin: "30px 0" }}
          >
             {t('ProjectsBtn')}
          </Link>
        </ButtonStyle>
      </div>
    </section>
  );
}
