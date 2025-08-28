export type ProjectType = {
  title: string
  description: React.ReactNode
  technologies?: string[]
  youtubeLink?: string
  githubLink?: string
  image?: string
  tags: string[]
}

export const projects: ProjectType[] = [
  {
    title: "Chapter",
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
      "/typescript.svg",
      "/nextjs2.svg",
      "/react.svg",
      "/shadcnui.svg",
      "/tailwindcss.svg",
    ],
    youtubeLink: "https://www.youtube.com/watch?v=ALuSnsIvsb8",
    githubLink: "https://github.com/Gamma101/chapter",
    image: "/chapter-screen.png",
    tags: [
      "TypeScript",
      "Custom Hooks",
      "Axios",
      "JWT",
      "Responsive Design",
      "Skeleton Loading",
    ],
  },
  {
    title: "ToDoosh",
    description: (
      <p>
        <span className="text-primary font-semibold">ToDoosh</span> is a mobile
        note taking app. It uses{" "}
        <span className="text-primary font-semibold">React Native</span> &{" "}
        <span className="text-primary font-semibold">Expo</span>, It has basic
        CRUD operations with{" "}
        <span className="text-primary font-semibold">AsyncStorage</span> as
        database. Also this ToDoosh{" "}
        <span className="text-primary font-semibold">supports theming</span>,
        that depends on your system preferences.
      </p>
    ),
    technologies: [
      "/typescript.svg",
      "/react-native.svg",
      "/expo.svg",
      "/tailwindcss.svg",
    ],
    githubLink: "https://github.com/Gamma101/todoosh",
    image: "/todoosh-screen.png",
    tags: ["React Native", "Expo", "TypeScript", "Themeing", "AsyncStorage"],
  },
  {
    title: "web-chat",
    description: (
      <p>
        <span className="text-primary font-semibold">web-chat</span> is a
        website for chatting. It uses{" "}
        <span className="text-primary font-semibold">React</span> &{" "}
        <span className="text-primary font-semibold">Next.js</span>, and{" "}
        <span className="text-primary font-semibold">Supabase</span> as database
        with event{" "}
        <span className="text-primary font-semibold">subscriptions</span> for{" "}
        <span className="text-primary font-semibold">Real-Time</span> chatting.
      </p>
    ),
    technologies: [
      "/typescript.svg",
      "/nextjs2.svg",
      "/tailwindcss.svg",
      "/supabase.svg",
    ],
    githubLink: "https://github.com/Gamma101/todoosh",
    youtubeLink: "https://youtu.be/7rrrAATh4jk",
    image: "/web-chat-screen.png",
    tags: ["TypeScript", "Real-Time", "Supabase", "Auth"],
  },
  {
    title: "Bookulus",
    description: (
      <p>
        <span className="text-primary font-semibold">Bookulus</span> is a mobile
        app for reading books. It uses{" "}
        <span className="text-primary font-semibold">React Native</span> with{" "}
        <span className="text-primary font-semibold">Expo</span> components, and{" "}
        <span className="text-primary font-semibold">AsyncStorage</span> as
        database.
      </p>
    ),
    technologies: [
      "/js.svg",
      "/react-native.svg",
      "/expo.svg",
      "/tailwindcss.svg",
    ],
    githubLink: "https://github.com/Gamma101/bookulus",
    youtubeLink: "https://youtube.com/shorts/Bc-v3MOpRmY",
    image: "/bookulus-screen.png",
    tags: ["React Native", "Expo", "EpubJS"],
  },
]
