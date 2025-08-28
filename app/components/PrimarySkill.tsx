import Image from "next/image"
import React from "react"

export default function PrimarySkill({
  name,
  src,
}: {
  name: string
  src: string
}) {
  return (
    <div className="group cursor-pointer transform transition-all duration-300 hover:scale-110">
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 hover:border-primary/50 transition-all duration-300">
        <Image
          src={src}
          width={50}
          height={50}
          alt={name}
          className="mx-auto mb-2"
        />
        <p className="text-sm text-center text-gray-400 group-hover:text-primary transition-colors">
          {name}
        </p>
      </div>
    </div>
  )
}
