"use client"
import React from "react"
import GridBackground from "./components/GridBackground"
import PrimarySkill from "./components/PrimarySkill"
import AdditionalSkill from "./components/AdditionalSkill"
import GithubArrow from "./components/GithubArrow"
import { FaArrowDown } from "react-icons/fa"
import Project from "./components/Project"
import { projects } from "@/lib/projects"
import { MdEmail } from "react-icons/md"

export default function Home() {
  const scrollToProjects = () => {
    const projectsElement = document.getElementById("projects")
    if (projectsElement) {
      projectsElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <GridBackground
        gridSize={30}
        gridColor="rgba(104, 189, 162, 0.2)"
        backgroundColor="#1b1b1b"
      >
        <div className="w-full min-h-screen flex justify-center flex-col mt-30 md:mt-20 sm:p-10 items-center py-10">
          <h1 className="text-center text-[50px] md:text-[80px] lg:text-[120px] relative font-roboto">
            <div className="absolute left-50 -top-10">
              <GithubArrow />
            </div>
            Danil <span className="text-primary">Olenberger</span>
          </h1>

          <p className="text-2xl sm:text-3xl lg:text-4xl w-[90%] sm:w-[70%] lg:w-[50%] text-center">
            {"{"} <span className="text-primary">Frontend </span>Developer {"}"}
          </p>

          <div className="mt-12 w-full max-w-4xl px-4">
            {/* Primary Skills */}
            <div className="mb-8">
              <h3 className="text-lg sm:text-xl font-semibold text-center mb-6 text-gray-300">
                Primary Skills
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                <PrimarySkill name="JavaScript" src="js.svg" />
                <PrimarySkill name="TypeScript" src="typescript.svg" />
                <PrimarySkill name="HTML5" src="html5.svg" />
                <PrimarySkill name="CSS3" src="css3.svg" />
                <PrimarySkill name="React" src="react.svg" />
                <PrimarySkill name="Node.js" src="nodejs.svg" />
                <PrimarySkill name="Git" src="git.svg" />
              </div>
            </div>

            {/* Secondary Skills */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-center mb-6 text-gray-400">
                Additional Technologies
              </h3>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                <AdditionalSkill name="Express.js" src="expressjs.svg" />
                <AdditionalSkill name="PostgreSQL" src="postgresql.svg" />
                <AdditionalSkill name="Docker" src="docker.svg" />
                <AdditionalSkill name="Supabase" src="supabase.svg" />
                <AdditionalSkill name="Next.js" src="nextjs2.svg" />
                <AdditionalSkill name="Tailwind" src="tailwindcss.svg" />
                <AdditionalSkill name="shadcn/ui" src="shadcnui.svg" />
                <AdditionalSkill name="React Native" src="react.svg" />
                <AdditionalSkill name="Expo" src="expo.svg" />
              </div>
            </div>
          </div>
          <div className="pt-10">
            <a
              className="flex items-center gap-2 text-2xl justify-center mb-4 text-gray-400 hover:text-primary duration-300 transition-all hover:shadow-primary"
              href="mailto:danilolenberger@gmail.com"
            >
              <MdEmail size={30} /> danilolenberger@gmail.com
            </a>
          </div>
          {/* Show Projects */}
          <div className="w-full flex items-center justify-center mt-16 mb-10">
            <button
              onClick={scrollToProjects}
              className="flex items-center gap-2 group bg-gray-800/50 backdrop-blur-sm rounded-full p-4 border border-gray-700/50 hover:border-primary/50 transition-all duration-300 cursor-pointer"
            >
              <FaArrowDown className="text-gray-400 group-hover:text-primary transition-color duration-300" />
              <p className="text-gray-400 group-hover:text-primary transition-color duration-300">
                Show Projects
              </p>
            </button>
          </div>
        </div>
      </GridBackground>
      {/* Projects */}
      <div
        id="projects"
        className="w-full bg-background flex items-center justify-center flex-col"
      >
        <div className="w-full h-1 bg-primary/50" />
        <h2 className="text-primary font-roboto text-4xl font-medium text-center mt-5">
          Projects
        </h2>
        <div className="w-full flex items-center justify-center space-y-10 flex-col">
          {projects &&
            projects.map((project, key) => {
              return <Project place={key} key={key} project={project} />
            })}
        </div>
      </div>
    </div>
  )
}
