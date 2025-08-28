import Image from "next/image"
import React from "react"

export default function TechnologyBadge({ src }: { src: string }) {
  return (
    <div className="group cursor-pointer transform transition-all duration-300 hover:scale-110">
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 items-center justify-center flex border border-primary/30 hover:border-primary/70 transition-all duration-300 hover:bg-gray-700/50 hover:shadow-lg hover:shadow-primary/20">
        <Image
          src={src}
          width={40}
          height={40}
          alt={src}
          className="transition-all duration-300 group-hover:brightness-110"
        />
      </div>
    </div>
  )
}
