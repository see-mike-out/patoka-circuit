import type { InitialGateOperation, RowMap } from "./data"
import type { SvgGroup } from "./svg"

export type GatePlan = {
  name: string,
  is_custom: false,
  width: number,
  plan: (op: InitialGateOperation, li: number, qr: RowMap) => SvgGroup
}

export type CustomGatePlan = {
  name: string,
  is_custom: true,
  width: number,
  plan: (op: InitialGateOperation, gate_name: string, li: number, qr: RowMap) => SvgGroup
}