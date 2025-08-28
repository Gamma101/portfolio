import Image from "next/image"
import React from "react"

export default function GithubArrow() {
  return (
    <div className="relative">
      <div className="w-30">
        <p className="w-full absolute -top-17 right-35 -rotate-50 text-primary font-semibold text-xl font-architect">
          My GitHub
        </p>
      </div>
      <Image
        className="absolute -top-10 right-30"
        src="arrow.svg"
        width={70}
        height={50}
        alt="arrow"
      />
      <a
        href="https://github.com/Gamma101"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="github.svg" width={50} height={50} alt="arrow" />
      </a>
    </div>
  )
}
