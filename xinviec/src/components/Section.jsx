import React from 'react'

export default function Section({ title, children }) {
  return (
    <div className="mt-6">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    {children}
  </div>
  )
}
