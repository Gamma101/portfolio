import Image from "next/image"
import React from "react"

export default function AdditionalSkill({
  name,
  src,
}: {
  name: string
  src: string
}) {
  return (
    <div className="group cursor-pointer transform transition-all duration-300 hover:scale-105">
      <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-3 border border-gray-700/30 hover:border-gray-500/50 transition-all duration-300">
        <Image
          src={src}
          width={40}
          height={40}
          alt={name}
          className="mx-auto mb-1"
        />
        <p className="text-xs text-center text-gray-500 group-hover:text-gray-300 transition-colors">
          {name}
        </p>
      </div>
    </div>
  )
}
