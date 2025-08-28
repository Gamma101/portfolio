import Image from "next/image"
import React from "react"
import { FaYoutube } from "react-icons/fa"
import { GrGithub } from "react-icons/gr"
import TechnologyBadge from "./TechnologyBadge"
import { ProjectType } from "@/lib/projects"

export default function Chapter({
  project,
  place,
}: {
  project: ProjectType
  place: number
}) {
  const infoPart = (
    <div className="w-full lg:w-[50%] space-y-4">
      <h3 className="text-2xl font-roboto text-center">{project.title}</h3>
      {project.description}
      <div className="flex flex-wrap justify-center gap-3 mt-6 mb-6">
        {Array.isArray(project.technologies) &&
          project.technologies.map((technology, key) => {
            return <TechnologyBadge src={technology} key={key} />
          })}
      </div>
      <div className="w-full flex items-center justify-center space-x-10">
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            className="flex items-center gap-2 text-2xl"
          >
            <GrGithub />
            Code
          </a>
        )}
        {project.youtubeLink && (
          <a
            href={project.youtubeLink}
            target="_blank"
            className="flex items-center gap-2 text-2xl"
          >
            <FaYoutube />
            Demo
          </a>
        )}
      </div>
    </div>
  )
  const imagePart = project.image ? (
    <Image
      src={project.image}
      className="rounded-2xl border-2 border-primary"
      height={500}
      width={500}
      alt="chapter welcome page"
    />
  ) : (
    <div></div>
  )

  return (
    <div className="w-[70%] block lg:flex mt-10 items-center justify-center space-x-10">
      {place % 2 !== 0 ? infoPart : imagePart}
      {place % 2 !== 0 ? imagePart : infoPart}
    </div>
  )
}
