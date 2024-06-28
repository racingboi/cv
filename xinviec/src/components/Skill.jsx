import React from 'react'

export default function Skill({ skill, level}) {
  return (
    <div className="w-1/2 mb-4">
    <p className="font-semibold">{skill}</p>
    <div className="flex">
      {[...Array(level)].map((_, i) => (
        <span key={i} className="text-yellow-500">★</span>
      ))}
      {[...Array(5 - level)].map((_, i) => (
        <span key={i} className="text-zinc-300">★</span>
      ))}
    </div>
  </div>
  )
}
