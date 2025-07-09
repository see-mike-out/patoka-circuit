# Patoka-Circuit

A Svelte library for quantum circuit visualization.

## Installation

`npm install patoka-circuit`

Note: it works within a Svelte environment.

## Include a circuit

```svelte
<script lang="ts">
  import { Circuit } from "patoka-circuit";
  let original_circuit = {
    ...
  };
  let match_data = {
    ...
  };
  let transpiled_circuit_0 = {
    ...
  };
  let transpiled_circuit_1 = {
    ...
  };
  let unit_id = "some_string";
</script>
<!-- have a `unit_id` (some string is good) -->
<!-- Why? This is intended for Jupyter Notebook, without this info, your interactions might be corruped. -->
<div id={"circuit-viewer-" + unit_id}>
  ...
  <!-- original -->
  <Circuit
    circuit_data={original_circuit}
    is_original={true}
    match={match_data}
    id={"original"}
    matched_circuit_id={["transpiled-0", "transpiled-1"]}
    onClick={() => { ... }}
    filter_unused_qubits={true}
    {unit_id}
  >
  </Circuit>
  <!-- transpiled/decomposed -->
  <Circuit
    circuit_data={transpiled_circuit_0}
    is_original={true}
    match={match_data}
    id={"transpiled-0"}
    matched_circuit_id={["original"]}
    onClick={() => { ... }}
    filter_unused_qubits={true}
    {unit_id}
  >
  </Circuit>
  <!-- can be mapped to multiple decomposed circuits -->
  <Circuit
    circuit_data={transpiled_circuit_1}
    is_original={true}
    match={match_data}
    id={"transpiled-1"}
    matched_circuit_id={["original"]}
    onClick={() => { ... }}
    filter_unused_qubits={true}
    {unit_id}
  >
  </Circuit>
  ...
</div>
```

For examples: go to `src/routes/+pages.svelte`

### Types

#### `circuit_data` --> `InitialCircuitData`

- `layers`: (required, `Array<InitialLayer>`) operations in layers (this is not figured out ahead—please use your circuit library)
- `num_qubits`: (required, `number`) the number of qubits (of the machine for transpiled circuits)
- `num_clbits`: (required, `number`) the number of classical bits
- `qubits`: (required, `Array<InitialQubit>`) qubits (of the machine for transpiled circuits)
- `clbits`: (required, `Array<InitialClibt>`) classical bits
- `global_phase`: (optional, `number` or `null`) the global phase value (if any)

#### `layer` --> `InitialLayer`

- `num_op`: (required, `number`) the number of the operations in a layer
- `operations`: (required, `Array<InitialGateOperation>`) the operations in a layer

#### `operation` --> `InitialGateOperation`

- `gate`: (required, `string`) the name of the gate (see below for the preset gates, but it also support random custom gates)
- `num_qubits`: (required, `number`) the number of the qubits for this operation
- `num_clbits`: (required, `number`) the number of the classical bits for this operation (e.g., for measurement)
- `params`: (required, `Array<number>`) the parameters for this operation (if none, provide an empty array)
- `qubits`: (required, `Array<RegisteredQubit>`) the qubits for this operation
- `clbits`: (required, `Array<RegisteredClbit>`) the classical bits for this operation

#### `qubit` and `clbit` --> `RegisteredQubit` and `RegisteredClbit`

They have the same structure:

- `register`: (required) the register of qubits/classical bits,
  - `name`: (required, `string`) the name of the register
  - `size`: (required, `number`) the total number of the qubits/classical bits in the register
- `index`: (required, `number`) the index of this qubit/classical bit

#### Notes

**if you haven't specified `num_qubits`, `num_clbits`, `num_op`, etc., import `validateCircuitData` function.**

```ts
import { validateCircuitData } from "patoka-circuit";

let compiled = validateCircuitData(partial);
```

#### Saving the circuit visualization as an image file

```ts
import { getSVGimageLink } from "patoka-circuit";
import type { Writable } from "svelte/store";

let loader: Writable = writable(); // for reactivity

// for `id` and `unit_id`, see above
getSVGimageLink(unit_id, id, loader).then((loaded) => {
  ...
}); 
```

The `loader` object consists of:

- `id` (`string`): the id of the SVG
- `png` (`string`): the URL for the PNG image (Blob)
- `svg` (`string`): the URL for the SVG image (Blob)

Once you get this information, set it to the `href` of an `<A>` object.

## For developers

Please Fork and Pull Request.
