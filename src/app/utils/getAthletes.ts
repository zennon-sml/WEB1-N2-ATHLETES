import { Athlete } from '../page'

const API_URL = process.env.NEXT_PUBLIC_API_URL
const API_KEY = process.env.NEXT_PUBLIC_API_KEY

interface PlayerResponse {
  player_id: string
  player_name: string
  player_age: string
  player_image: string
  team_name: string
}

export const GetAthletes = async (athleteName: string): Promise<Athlete[]> => {
  console.log(`${API_URL}${athleteName}${API_KEY}`)
  try {
    const res = await fetch(`${API_URL}${athleteName}${API_KEY}`)
    const data = await res.json()

    const athletesArray: Athlete[] = data.map((player: PlayerResponse) => ({
      player_id: player.player_id,
      name: player.player_name,
      age: parseInt(player.player_age, 10),
      imgPath: player.player_image,
      team_name: player.team_name,
    }))

    return athletesArray
  } catch (error) {
    console.log('erro')
  }
  return []
}
