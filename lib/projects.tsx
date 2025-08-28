export type ProjectType = {
  title: string
  description: React.ReactNode
  technologies?: string[]
  youtubeLink?: string
  githubLink?: string
  image?: string
}

export const projects: ProjectType[] = [
  {
    title: "📚 Chapter",
    description: (
      <p>
        <span className="text-primary font-semibold">Chapter</span> is a reading
        platform where users can discover and explore books. It uses{" "}
        <span className="text-primary font-semibold">
          Google Books API integration
        </span>{" "}
        for search, <span className="text-primary font-semibold">JWT</span>{" "}
        registration and authentication, personalized libraries,{" "}
        <span className="text-primary font-semibold">adaptive design</span> for
        all devices, and smooth user experience with{" "}
        <span className="text-primary font-semibold">skeleton loading</span> .
      </p>
    ),
    technologies: [
      "/nextjs2.svg",
      "/react.svg",
      "/shadcnui.svg",
      "/tailwindcss.svg",
    ],
    youtubeLink: "https://www.youtube.com/watch?v=ALuSnsIvsb8",
    githubLink: "https://github.com/Gamma101/chapter",
    image: "/chapter-screen.png",
  },
]
