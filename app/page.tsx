import Image from "next/image"
import React from "react"

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <header className="w-full absolute top-0 left-0">
        <p>Danil Olenberger</p>
      </header>
      <div className="bg-gray-50 w-full flex justify-center flex-col sm:p-10">
        <h1>React Frontend Developer</h1>
        <p>
          Hi, my name is Danil Olenberger and I&apos;m a passionate React
          frontend developer
        </p>
        <div>
          <p>My tech stack</p>
          <div className="flex items-center space-x-2">
            <p>Main skills:</p>
            <Image src="js.svg" width={40} height={40} alt="Java Script" />
            <Image src="html5.svg" width={40} height={40} alt="HTML5" />
            <Image src="css3.svg" width={40} height={40} alt="CSS3" />
            <Image src="react.svg" width={40} height={40} alt="React" />
            <Image src="nodejs.svg" width={40} height={40} alt="NodeJS" />
            <Image src="nextjs2.svg" width={40} height={40} alt="NextJS" />
            <Image
              src="tailwindcss.svg"
              width={40}
              height={40}
              alt="TailwindCSS"
            />
            <Image
              src="shadcnui.svg"
              width={40}
              height={40}
              alt="TailwindCSS"
            />
          </div>
          <div className="flex items-center ">
            <p>Secondary skills:</p>
            <Image
              src="postgresql.svg"
              width={40}
              height={40}
              alt="PostgreSQL"
            />
            <Image src="expressjs.svg" width={40} height={40} alt="ExpressJS" />
            <Image src="supabase.svg" width={40} height={40} alt="Supabase" />
            <Image src="docker.svg" width={40} height={40} alt="Docker" />
          </div>
        </div>
      </div>
    </div>
  )
}
