import React from "react"

interface GridBackgroundProps {
  children: React.ReactNode
  gridSize?: number
  gridColor?: string
  backgroundColor?: string
}

const GridBackground: React.FC<GridBackgroundProps> = ({
  children,
  gridSize = 20,
  gridColor = "rgba(0, 0, 0, 0.1)",
  backgroundColor = "transparent",
}) => {
  const gridStyle = {
    backgroundImage: `
      linear-gradient(${gridColor} 1px, transparent 1px),
      linear-gradient(90deg, ${gridColor} 1px, transparent 1px)
    `,
    backgroundSize: `${gridSize}px ${gridSize}px`,
    backgroundColor: backgroundColor,
  }

  return (
    <div className="w-full h-full" style={gridStyle}>
      {children}
    </div>
  )
}

export default GridBackground
