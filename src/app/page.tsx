'use client'
import { useState } from 'react'
import AthleteCard from './components/athleteCard'
import SearchBar from './components/searchBar'

export type Athlete = {
  name: string
  age: number
  imgPath: string
}
const zennon: Athlete = {
  name: 'zennon',
  age: 22,
  imgPath:
    'https://avatars.githubusercontent.com/u/76619871?s=400&u=4656718ac5110df371778f0e1a24e302dbe9bd4b&v=4',
}

const athletesArray: Athlete[] = Array(12).fill(zennon)

export default function Home() {
  const [athletes, setAthletes] = useState<Athlete[]>(athletesArray)
  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-slate-600">
      <nav className="w-4/5 rounded-md flex items-center justify-center gap-2 p-2 mt-5 bg-slate-800">
        <input
          type="text"
          placeholder="Digite o nome do jogador"
          className="rounded-md w-6/12 p-2"
        />
        <button className="rounded-md w-1/12 p-2 bg-amber-500">BUSCAR</button>
      </nav>

      <div className="flex flex-wrap w-4/5 items-center justify-center">
        {athletes.map((athlete, index) => (
          <AthleteCard key={index} athlete={athlete} />
        ))}
      </div>
    </main>
  )
}
