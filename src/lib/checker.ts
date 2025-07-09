import type { InitialCircuitData, InitialGateOperation, InitialLayer, PartialCircuitData, PartialGateOperation, PartialLayer } from "./type_defs";

export function validateCircuitData(_data: PartialCircuitData): InitialCircuitData {
  let data: InitialCircuitData = {
    layers: _data.layers.map((_layer: PartialLayer) => {
      let layer: InitialLayer = {
        num_op: _layer.operations.length,
        operations: _layer.operations.map((_op: PartialGateOperation) => {
          let op: InitialGateOperation = {
            gate: _op.gate,
            num_qubits: _op.qubits.length,
            num_clbits: _op.clbits.length,
            params: _op.params,
            qubits: _op.qubits,
            clbits: _op.clbits
          }
          return op;
        }),
        esp_total: _layer.esp_total,
        esp_this: _layer.esp_this,
        esp_detail: _layer.esp_detail
      };
      return layer
    }),
    num_qubits: _data.qubits.length,
    qubits: _data.qubits,
    num_clbits: _data.clbits.length,
    clbits: _data.clbits,

    // optional
    global_phase: _data.global_phase,
    esp: _data.esp
  };

  return data;
}