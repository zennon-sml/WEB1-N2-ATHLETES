import React from 'react'
import { Athlete } from '../page'

interface AthleteProps {
  athlete: Athlete
}
export default function AthleteCard({ athlete }: AthleteProps) {
  return (
    <div className="bg-slate-800 rounded-md p-2 flex flex-col items-center m-2 text-white">
      <h2>{athlete.name}</h2>
      <p>Age: {athlete.age}</p>
      <img
        src={athlete.imgPath}
        alt={athlete.name}
        className="w-40 h-40 rounded-md"
      />
    </div>
  )
}
