<script lang="ts">
  import Circuit from "$lib/Circuit.svelte";
  import {
    layer_match_0,
    original_circuit_0,
    transpiled_circuit_0,
  } from "./sample_data";
  const unit_id = "test-unit-id00-0000";
</script>

<h1>Patoka Circuit</h1>
<p>Interactive Circuit Visualization</p>

<div id={"circuit-viewer-" + unit_id}>
  <h2>Original</h2>
  <Circuit
    circuit_data={original_circuit_0}
    is_original={true}
    match={layer_match_0}
    id={"original"}
    matched_circuit_id={["transpiled"]}
    onClick={() => {}}
    filter_unused_qubits={true}
    {unit_id}
  ></Circuit>

  <h2>Transpiled</h2>
  <Circuit
    circuit_data={transpiled_circuit_0}
    is_original={false}
    match={layer_match_0}
    id={"transpiled"}
    matched_circuit_id={["original"]}
    onClick={() => {}}
    filter_unused_qubits={true}
    {unit_id}
  ></Circuit>
</div>

<style>
  h1,
  h2,
  p {
    font-family: sans-serif;
  }
</style>
