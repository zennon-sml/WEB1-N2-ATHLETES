'use client'
import { FormEvent, useState } from 'react'
import AthleteCard from './components/athleteCard'
import { GetAthletes } from './utils/getAthletes'
import { Skeleton } from '@/components/ui/skeleton'

export type Athlete = {
  player_id: string
  name: string
  age: number
  imgPath: string
  team_name: string
}

const Home: React.FC = () => {
  const [athletes, setAthletes] = useState<Athlete[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [search, setSearch] = useState('')

  const SkeletonFill = new Array(20).fill(0)

  const fetchData = async (event: FormEvent) => {
    event.preventDefault()
    setIsLoading(true)
    const data = await GetAthletes(search)
    setAthletes(data)
    setIsLoading(false)
  }

  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-slate-600">
      <nav className="w-4/5 rounded-md  gap-2 p-2 mt-5 bg-slate-800">
        <form
          className="flex items-center justify-center gap-2"
          onSubmit={(event) => fetchData(event)}
        >
          <input
            type="text"
            placeholder="Digite o nome do jogador"
            className="rounded-md w-6/12 p-2"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className="rounded-md w-1/12 p-2 bg-amber-500">
            BUSCAR
          </button>
        </form>
      </nav>
      {isLoading ? (
        <div className="flex flex-wrap w-4/5 items-center justify-center gap-2 p-2">
          {SkeletonFill.map((_, index) => (
            <Skeleton key={index} className="w-[160px] h-[200px] rounded-md" />
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap w-4/5 items-center justify-center">
          {athletes.map((athlete, index) => (
            <AthleteCard key={index} athlete={athlete} />
          ))}
        </div>
      )}
    </main>
  )
}

export default Home
