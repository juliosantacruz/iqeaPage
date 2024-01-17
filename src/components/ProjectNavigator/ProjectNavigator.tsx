"use client";
import React, { useEffect, useState } from "react";
import leftArrow from "@/assets/icons/bx-chevron-left.svg";
import rightArrow from "@/assets/icons/bx-chevron-right.svg";
import "./ProjectNavigator.scss";
import { usePathname } from "next/navigation";
import { getProyectosNavigator } from "@/services/fetchData";
import Link from "next/link";

type ProjectNavType = {
  id: number;
  title: string;
  slug: string;
  isPublic: string;
};
type ProjectIndex = {
  current: ProjectNavType;
  next?: ProjectNavType;
  prev?: ProjectNavType;
};
export default function ProjectNavigator({data}:any) {
  const [projectIndex, setProjectIndex] = useState<ProjectIndex>();
  const pathname = usePathname();

  useEffect(() => {
    const fetchProyects = async () => {
      const setPublic = pathname.split("/")[1] === "acceso" ? true : false;
      // const data = await getProyectosNavigator();
      if (setPublic) {
        const projectsList = data
          .map((project: any) => {
            const { titulo, slug, isPublic } = project.attributes;
            const newProject = {
              id: project.id,
              title: titulo,
              slug: slug,
              isPublic: isPublic,
            };

            return newProject;
          })
          .sort((a: ProjectNavType, b: ProjectNavType) => a.id - b.id);

        const pageSlug = pathname.split("/")[3];
        const currentIndex = projectsList?.findIndex(
          (element: any) => element.slug === pageSlug
        );
        const prevIndex = currentIndex - 1;
        const nextIndex = currentIndex + 1;

        setProjectIndex({
          current: projectsList[currentIndex],
          next: projectsList[nextIndex],
          prev: projectsList[prevIndex],
        });
      } else {
        const projectsList = data
          .map((project: any) => {
            const { titulo, slug, isPublic } = project.attributes;
            const newProject = {
              id: project.id,
              title: titulo,
              slug: slug,
              isPublic: isPublic,
            };

            return newProject;
          })
          .filter((project: ProjectNavType) => !!project.isPublic)
          .sort((a: ProjectNavType, b: ProjectNavType) => a.id - b.id);

        const pageSlug = pathname.split("/")[2];
        const currentIndex = projectsList?.findIndex(
          (element: any) => element.slug === pageSlug
        );
        // console.log('index',currentIndex)
        const prevIndex = currentIndex - 1;
        const nextIndex = currentIndex + 1;

        setProjectIndex({
          current: projectsList[currentIndex],
          next: projectsList[nextIndex],
          prev: projectsList[prevIndex],
        });
      }

      // setProjectsNavigator(projectsList);
    };
    fetchProyects();
  }, []);

  const pageSlug = pathname.split("/")[1] === "acceso" ? 'acceso/portafolio' : 'proyectos'
  // console.log(projectIndex );
  return (
    <div className="proyectNavigation">
      {projectIndex?.prev !== undefined && projectIndex !== undefined ? (
        <Link
          className="navButton left"
          href={`/${pageSlug}/${projectIndex.prev.slug}`}
        >
          <div className="btnTitle">
            <img src={leftArrow.src} alt="icon" /> Proyecto Anterior
          </div>
          <div className="btnSubtitle">{projectIndex.prev.title}</div>
        </Link>
      ) : null}
      {projectIndex?.next !== undefined && projectIndex !== undefined ? (
        <Link
          className="navButton right"
          href={`/${pageSlug}/${projectIndex.next.slug}`}
        >
          <div className="btnTitle">
            Proyecto Siguiente <img src={rightArrow.src} alt="icon" />
          </div>
          <div className="btnSubtitle">{projectIndex.next.title}</div>
        </Link>
      ) : null}
    </div>
  );
}
