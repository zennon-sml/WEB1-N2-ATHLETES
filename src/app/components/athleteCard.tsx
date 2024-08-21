import React from 'react'
import { Athlete } from '../page'
import { Button } from '@/components/ui/button'
import { Star } from 'lucide-react'
import { toast } from '@/components/ui/use-toast'

interface AthleteProps {
  athlete: Athlete
  onFavorite: (athlete: Athlete) => void
}

export default function AthleteCard({ athlete, onFavorite }: AthleteProps) {
  return (
    <div className="bg-slate-800 w-48 max-w-60 rounded-md p-2 flex flex-col items-start m-2 text-white">
      <h2>{athlete.name}</h2>
      <p>Idade: {athlete.age}</p>
      <p className="whitespace-nowrap w-20 flex-nowrap">
        Time: {athlete.team_name}
      </p>
      <div className="flex items-center justify-center w-full">
        <img
          src={
            athlete.imgPath ||
            'https://static.vecteezy.com/ti/vetor-gratis/p1/14151738-jogador-de-futebol-icone-simples-preto-vetor.jpg'
          }
          alt={athlete.name}
          className="w-40 h-40 rounded-md"
        />
      </div>
      <div className="flex items-center justify-center w-full">
        <Button
          className="m-2 hover:bg-amber-500"
          onClick={() => {
            toast({
            title: "Adicionado aos favoritos",
          })
          onFavorite(athlete)
          }}
        >
          <Star />
          Favoritar
        </Button>
      </div>
    </div>
  )
}
