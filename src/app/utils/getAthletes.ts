import { Athlete } from '../page'

const API_URL = process.env.NEXT_PUBLIC_API_URL
const API_KEY = process.env.NEXT_PUBLIC_API_KEY

const zennon: Athlete = {
  name: 'zennon',
  age: 22,
  imgPath:
    'https://avatars.githubusercontent.com/u/76619871?s=400&u=4656718ac5110df371778f0e1a24e302dbe9bd4b&v=4',
}

const athletesArray: Athlete[] = Array(12).fill(zennon)

export const GetAthletes = async (athleteName: string): Promise<Athlete[]> => {
  try {
    return athletesArray
  } catch (error) {
    console.log('erro')
  }
  return athletesArray
}
