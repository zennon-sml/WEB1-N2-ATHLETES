'use client'
import { FormEvent, useState } from 'react'
import AthleteCard from './components/athleteCard'
import { GetAthletes } from './utils/getAthletes'
import { Skeleton } from '@/components/ui/skeleton'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Star } from 'lucide-react'
import AthleteCardStarred from './components/athleteCardStarred'

export type Athlete = {
  player_id: string
  name: string
  age: number
  imgPath: string
  team_name: string
}

const zennon: Athlete = {player_id: "4",name: "Zennon", age: 22, team_name: "IFCE", imgPath: "https://lh3.googleusercontent.com/pw/AP1GczO5k-KPyJF7xNfwU2X9tnx7JbQS1TNOg4Su8ZS5iDawSNFX6lYUXjJWPs7MBgWVintyyxn5BlLQSlMGU-tTYtG96evfVUbHMS8rQyphHeKA_LtEa5j085poEOwIAajP3sM5IzZ7PCXh-3wxNU4T2WkU5A=w696-h929-s-no-gm?authuser=0"}
const junior: Athlete = {player_id: "7",name: "Junior", age: 22, team_name: "IFCE", imgPath: "https://lh3.googleusercontent.com/pw/AP1GczOElzBVRsU5Bx8YgP-DcJlv8ndvMLpkV-6ENuXXWkkzlCnZxTRY2QCkgeLT0SfUNU9KhS90wgKNLeGV_UQcS6a5cXA-tW80VrJYM49ncVoSlS72WVvVTKfHyUeoeoE6757DrA5LPBRneIdn3DeYYjbX5A=w698-h929-s-no-gm?authuser=0"}
const Home: React.FC = () => {
  const [athletes, setAthletes] = useState<Athlete[]>([zennon, junior])
  const [starredAthletes, setStarredAthletes] = useState<Athlete[]>([])
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

  const handleFavorite = (athlete: Athlete) => {
    setStarredAthletes((prev) => [...prev, athlete])
  }

  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-slate-600">
      <nav className="w-4/5 rounded-md flex items-center justify-center gap-2 p-2 mt-5 bg-slate-800">
        <form
          className="flex items-center justify-center gap-2"
          onSubmit={fetchData}
        >
          <input
            type="text"
            placeholder="Digite o nome do jogador"
            className="rounded-md w-80 p-2"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className="rounded-md w-20 p-2 bg-amber-500">
            Buscar
          </button>
        </form>
        <Dialog>
          <DialogTrigger className="bg-amber-500 flex rounded-md p-2">
            <Star />
            Favoritos
          </DialogTrigger>
          <DialogContent className="min-w-max">
            <div className="flex flex-nowrap w-4/5 items-center justify-center">
              {starredAthletes.map((athlete, index) => (
                <AthleteCardStarred
                  key={index}
                  athlete={athlete}
                  onFavorite={handleFavorite}
                />
              ))}
            </div>
          </DialogContent>
        </Dialog>
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
            <AthleteCard
              key={index}
              athlete={athlete}
              onFavorite={handleFavorite}
            />
          ))}
        </div>
      )}
    </main>
  )
}

export default Home
