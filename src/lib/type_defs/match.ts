export type MatchData = {
  layer_match: LayerMatch[],
  bit_match: BitMatch[]
}

export type LayerMatch = {
  from: [number, number], // layer index, operation index
  to: {
    complete: boolean,
    matches: Array<[number, number]>,
    un_matches: number,
  }
}

export type BitMatch = {
  from: number | null,
  to: number,
  is_ancilla: boolean
};