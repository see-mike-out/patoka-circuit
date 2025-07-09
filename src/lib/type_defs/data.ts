import type { MatchData } from "./match";

export type PartialCircuitData = {
  layers: PartialLayer[],
  num_qubits?: number,
  qubits: InitialQubit[],
  num_clbits?: number,
  clbits: InitialClbit[],

  // optional
  global_phase?: number | null,
  esp?: number
};

export type PartialLayer = {
  num_op?: number,
  operations: PartialGateOperation[],
  esp_total?: number,
  esp_this?: number,
  esp_detail?: EspDetail[]
};

export type PartialGateOperation = {
  gate: string,
  num_qubits?: number,
  num_clbits?: number,
  params: number[],
  qubits: RegisteredQubit[],
  clbits: RegisteredClbit[]
}

export type InitialCircuitData = {
  layers: InitialLayer[],
  num_qubits: number,
  qubits: InitialQubit[],
  num_clbits: number,
  clbits: InitialClbit[],

  // optional
  global_phase?: number | null,
  esp?: number
};

export type InitialLayer = {
  num_op: number,
  operations: InitialGateOperation[],
  esp_total?: number,
  esp_this?: number,
  esp_detail?: EspDetail[]
};

export type InitialGateOperation = {
  gate: string,
  num_qubits: number,
  num_clbits: number,
  params: number[],
  qubits: RegisteredQubit[],
  clbits: RegisteredClbit[]
};

export type RegisteredQubit = {
  register: QubitRegister,
  index: number
};

export type QubitRegister = {
  name: string,
  size: number
};

export type RegisteredClbit = {
  register: ClbitRegister,
  index: number
};

export type ClbitRegister = {
  name: string,
  size: number
};

export type EspDetail = {
  gate: string,
  gate_error: number,
  qubits: number[]
}

export type InitialQubit = {
  register: QubitRegister,
  index: number
}

export type InitialClbit = {
  register: ClbitRegister,
  index: number
}

export type Config = {
  unit_id: string,
  show_moments: boolean,
  is_original: boolean,
  match?: MatchData,
  no_match?: boolean,
  filter_unused_qubits?: boolean,
  matched_circuit_id?: string[],
  this_circuit_id?: string,
  pagination?: Pagination,
  first_layer_index?: number
}

export type Pagination = {
  page: number,
  range: [number, number],
  total_page: number,
}

export type RowMap = { [key: number]: number };

export type ImageLoader = {
  png: string,
  id: string,
  svg: string
};