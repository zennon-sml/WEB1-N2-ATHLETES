'use client'
import { useEffect, useState } from 'react'
import AthleteCard from './components/athleteCard'
import { GetAthletes } from './utils/getAthletes'

export type Athlete = {
  player_id: string
  name: string
  age: number
  imgPath: string
  team_name: string
}

const Home: React.FC = () => {
  const [athletes, setAthletes] = useState<Athlete[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetAthletes('zennon')
      setAthletes(data)
    }

    fetchData()
  }, [])

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

export default Home
