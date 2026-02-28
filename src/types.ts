// src/types.ts — exports nommés UNIQUEMENT, jamais export default

export type BeadType = 'round' | 'star' | 'faceted'

export interface BeadCell {
  type: BeadType
  color: string // Toujours format hex #RRGGBB — JAMAIS noms CSS
}

// Indexé [rangée][colonne] — JAMAIS [colonne][rangée]
// grid[0] = première rangée (haut)
export type GridState = (BeadCell | null)[][]

export type ToolMode = 'brush' | 'eraser'

export interface GridConfig {
  rows: number
  colsOdd: number
  colsEven: number
}
