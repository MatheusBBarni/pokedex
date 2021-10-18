export type PokemonType =
  | 'Fire'
  | 'Ice'
  | 'Flying'
  | 'Psychic'
  | 'Water'
  | 'Ground'
  | 'Rock'
  | 'Poison'
  | 'Grass'
  | 'Electric'
  | 'Bug'
  | 'Ghost'
  | 'Dark'
  | 'Dragon'
  | 'Fairy'
  | 'Steel'
  | 'Fighting'
  | 'Normal'

export type Pokemon = {
  id: number
  num: string
  name: string
  img: string
  type: PokemonType[]
  height: string
  weight: string
  candy: string
  candy_count: number
  egg: string
  spawn_chance: number
  avg_spawns: number
  spawn_time: string
  multipliers: number[]
  weaknesses: PokemonType[]
  next_evolution: Pokemon[]
}

export type PokemonApiResponse = {
  pokemon: Pokemon[]
}
