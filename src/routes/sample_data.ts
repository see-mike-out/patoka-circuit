import type { InitialCircuitData, MatchData } from "$lib"

export let original_circuit_0: InitialCircuitData = {
  "layers": [
    {
      "num_op": 5,
      "operations": [{
        "gate": "h",
        "num_qubits": 1,
        "num_clbits": 0,
        "params": [],
        "qubits": [{ "register": { "name": "q", "size": 5 }, "index": 0 }],
        "clbits": []
      }, {
        "gate": "h",
        "num_qubits": 1,
        "num_clbits": 0,
        "params": [],
        "qubits": [{ "register": { "name": "q", "size": 5 }, "index": 1 }],
        "clbits": []
      }, {
        "gate": "h",
        "num_qubits": 1,
        "num_clbits": 0,
        "params": [],
        "qubits": [{ "register": { "name": "q", "size": 5 }, "index": 2 }], "clbits": []
      }, {
        "gate": "h",
        "num_qubits": 1,
        "num_clbits": 0,
        "params": [],
        "qubits": [{ "register": { "name": "q", "size": 5 }, "index": 3 }], "clbits": []
      }, {
        "gate": "x",
        "num_qubits": 1,
        "num_clbits": 0,
        "params": [],
        "qubits": [{ "register": { "name": "q", "size": 5 }, "index": 4 }], "clbits": []
      }]
    }, {
      "num_op": 1,
      "operations": [{
        "gate": "h",
        "num_qubits": 1,
        "num_clbits": 0,
        "params": [],
        "qubits": [{ "register": { "name": "q", "size": 5 }, "index": 4 }],
        "clbits": []
      }]
    }, {
      "operations": [{
        "gate": "cx",
        "num_qubits": 2,
        "num_clbits": 0,
        "params": [],
        "qubits": [
          { "register": { "name": "q", "size": 5 }, "index": 0 },
          { "register": { "name": "q", "size": 5 }, "index": 4 }],
        "clbits": []
      }], "num_op": 1
    }, {
      "num_op": 1,
      "operations": [{
        "gate": "cx",
        "num_qubits": 2,
        "num_clbits": 0,
        "params": [],
        "qubits": [
          { "register": { "name": "q", "size": 5 }, "index": 1 },
          { "register": { "name": "q", "size": 5 }, "index": 4 }
        ],
        "clbits": []
      }]
    }, {
      "num_op": 1,
      "operations": [{
        "gate": "cx",
        "num_qubits": 2,
        "num_clbits": 0,
        "params": [],
        "qubits": [
          { "register": { "name": "q", "size": 5 }, "index": 2 },
          { "register": { "name": "q", "size": 5 }, "index": 4 }
        ],
        "clbits": []
      }]
    }, {
      "num_op": 1,
      "operations": [{
        "gate": "cx",
        "num_qubits": 2,
        "num_clbits": 0,
        "params": [],
        "qubits": [
          { "register": { "name": "q", "size": 5 }, "index": 3 },
          { "register": { "name": "q", "size": 5 }, "index": 4 }
        ],
        "clbits": []
      }]
    }, {
      "num_op": 1,
      "operations": [{
        "gate": "barrier",
        "num_qubits": 5,
        "num_clbits": 0,
        "params": [],
        "qubits": [
          { "register": { "name": "q", "size": 5 }, "index": 0 },
          { "register": { "name": "q", "size": 5 }, "index": 1 },
          { "register": { "name": "q", "size": 5 }, "index": 2 },
          { "register": { "name": "q", "size": 5 }, "index": 3 },
          { "register": { "name": "q", "size": 5 }, "index": 4 }
        ],
        "clbits": []
      }]
    }, {
      "num_op": 5,
      "operations": [{
        "gate": "h",
        "num_qubits": 1,
        "num_clbits": 0,
        "params": [],
        "qubits": [{ "register": { "name": "q", "size": 5 }, "index": 0 }],
        "clbits": []
      }, {
        "gate": "h",
        "num_qubits": 1,
        "num_clbits": 0,
        "params": [],
        "qubits": [{ "register": { "name": "q", "size": 5 }, "index": 1 }],
        "clbits": []
      }, {
        "gate": "h",
        "num_qubits": 1,
        "num_clbits": 0,
        "params": [],
        "qubits": [{ "register": { "name": "q", "size": 5 }, "index": 2 }],
        "clbits": []
      }, {
        "gate": "h",
        "num_qubits": 1,
        "num_clbits": 0,
        "params": [],
        "qubits": [{ "register": { "name": "q", "size": 5 }, "index": 3 }],
        "clbits": []
      }, {
        "gate": "h",
        "num_qubits": 1,
        "num_clbits": 0,
        "params": [],
        "qubits": [{ "register": { "name": "q", "size": 5 }, "index": 4 }],
        "clbits": []
      }]
    }, {
      "operations": [{
        "gate": "measure",
        "num_qubits": 1,
        "num_clbits": 1,
        "params": [],
        "qubits": [{ "register": { "name": "q", "size": 5 }, "index": 0 }],
        "clbits": [{ "register": { "name": "q", "size": 5 }, "index": 0 }]
      }], "num_op": 1
    }, {
      "num_op": 1,
      "operations": [{
        "gate": "measure",
        "num_qubits": 1,
        "num_clbits": 1,
        "params": [],
        "qubits": [{ "register": { "name": "q", "size": 5 }, "index": 1 }],
        "clbits": [{ "register": { "name": "q", "size": 5 }, "index": 1 }]
      }]
    }, {
      "num_op": 1,
      "operations": [{
        "gate": "measure",
        "num_qubits": 1,
        "num_clbits": 1,
        "params": [],
        "qubits": [{ "register": { "name": "q", "size": 5 }, "index": 2 }],
        "clbits": [{ "register": { "name": "q", "size": 5 }, "index": 2 }]
      }]
    }, {
      "num_op": 1,
      "operations": [{
        "gate": "measure",
        "num_qubits": 1,
        "num_clbits": 1,
        "params": [],
        "qubits": [{ "register": { "name": "q", "size": 5 }, "index": 3 }],
        "clbits": [{ "register": { "name": "q", "size": 5 }, "index": 3 }]
      }]
    }
  ],
  "num_qubits": 5,
  "qubits": [
    {
      "index": 0, "register": { "name": "q", "size": 5 }
    }, {
      "index": 1, "register": { "name": "q", "size": 5 }
    }, {
      "index": 2, "register": { "name": "q", "size": 5 }
    }, {
      "index": 3, "register": { "name": "q", "size": 5 }
    }, {
      "index": 4, "register": { "name": "q", "size": 5 }
    }
  ],
  "num_clbits": 4,
  "clbits": [
    {
      "index": 0, "register": { "name": "c", "size": 4 }
    }, {
      "index": 1, "register": { "name": "c", "size": 4 }
    }, {
      "index": 2, "register": { "name": "c", "size": 4 }
    }, {
      "index": 3, "register": { "name": "c", "size": 4 }
    }
  ],
  "global_phase": null,
};

export let transpiled_circuit_0: InitialCircuitData = {
  "layers": [
    {
      "num_op": 5,
      "operations": [{
        "gate": "rz", "num_qubits": 1, "num_clbits": 0, "params": [-1.5707963267948966],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 15 }],
        "clbits": []
      }, {
        "gate": "rz", "num_qubits": 1, "num_clbits": 0, "params": [1.5707963267948966],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 20 }],
        "clbits": []
      }, {
        "gate": "rz", "num_qubits": 1, "num_clbits": 0, "params": [-1.5707963267948974],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 21 }],
        "clbits": []
      }, {
        "gate": "rz", "num_qubits": 1, "num_clbits": 0, "params": [-1.5707963267948966],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 22 }],
        "clbits": []
      }, {
        "gate": "rz", "num_qubits": 1, "num_clbits": 0, "params": [1.5707963267948957],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 23 }],
        "clbits": []
      }],
      "esp_total": 1,
      "esp_this": 1,
      "esp_detail": [
        {
          "gate": "rz",
          "gate_error": 0,
          "qubits": [15]
        },
        {
          "gate": "rz",
          "gate_error": 0,
          "qubits": [20]
        },
        {
          "gate": "rz",
          "gate_error": 0,
          "qubits": [21]
        },
        {
          "gate": "rz",
          "gate_error": 0,
          "qubits": [22]
        },
        {
          "gate": "rz",
          "gate_error": 0,
          "qubits": [23]
        }
      ]
    }, {
      "num_op": 5,
      "operations": [{
        "gate": "sx", "num_qubits": 1, "num_clbits": 0, "params": [],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 15 }],
        "clbits": []
      }, {
        "gate": "sx", "num_qubits": 1, "num_clbits": 0, "params": [],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 20 }],
        "clbits": []
      }, {
        "gate": "sx", "num_qubits": 1, "num_clbits": 0, "params": [],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 21 }],
        "clbits": []
      }, {
        "gate": "sx", "num_qubits": 1, "num_clbits": 0, "params": [],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 22 }],
        "clbits": []
      }, {
        "gate": "sx", "num_qubits": 1, "num_clbits": 0, "params": [],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 23 }],
        "clbits": []
      }],
      "esp_total": 0.9986643285108772,
      "esp_this": 0.9986643285108772,
      "esp_detail": [
        {
          "gate": "sx",
          "gate_error": 0.0002883870913596295,
          "qubits": [15]
        },
        {
          "gate": "sx",
          "gate_error": 0.000312190113476366,
          "qubits": [20]
        },
        {
          "gate": "sx",
          "gate_error": 0.0002965966224981807,
          "qubits": [21]
        },
        {
          "gate": "sx",
          "gate_error": 0.00022698523728966087,
          "qubits": [22]
        },
        {
          "gate": "sx",
          "gate_error": 0.00021222261478363156,
          "qubits": [23]
        }
      ]
    }, {
      "operations": [{
        "gate": "rz", "num_qubits": 1, "num_clbits": 0, "params": [1.178097245096172],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 15 }],
        "clbits": []
      }, {
        "gate": "rz", "num_qubits": 1, "num_clbits": 0, "params": [-3.141592653589793],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 20 }],
        "clbits": []
      }, {
        "gate": "rz", "num_qubits": 1, "num_clbits": 0, "params": [-2.460801919092516],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 21 }],
        "clbits": []
      }, {
        "gate": "rz", "num_qubits": 1, "num_clbits": 0, "params": [-1.5707963267948948],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 22 }],
        "clbits": []
      }, {
        "gate": "rz", "num_qubits": 1, "num_clbits": 0, "params": [-2.6380772947384763],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 23 }],
        "clbits": []
      }], "num_op": 5, "esp_total": 0.9986643285108772, "esp_this": 1,
      "esp_detail": [{
        "gate": "rz",
        "gate_error": 0,
        "qubits": [15]
      }, {
        "gate": "rz",
        "gate_error": 0,
        "qubits": [20]
      }, {
        "gate": "rz",
        "gate_error": 0,
        "qubits": [21]
      }, {
        "gate": "rz",
        "gate_error": 0,
        "qubits": [22]
      }, {
        "gate": "rz",
        "gate_error": 0,
        "qubits": [23]
      }]
    }, {
      "operations": [{
        "gate": "ecr", "num_qubits": 2, "num_clbits": 0, "params": [],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 21 }, { "register": { "name": "q", "size": 127 }, "index": 22 }],
        "clbits": []
      }, {
        "gate": "sx", "num_qubits": 1, "num_clbits": 0, "params": [],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 23 }],
        "clbits": []
      }], "num_op": 2, "esp_total": 0.9911747402066129, "esp_this": 0.9925003946867391,
      "esp_detail": [{
        "gate": "ecr",
        "gate_error": 0.007288929574170516,
        "qubits": [21, 22]
      }, {
        "gate": "sx",
        "gate_error": 0.00021222261478363156,
        "qubits": [23]
      }]
    }, {
      "operations": [{
        "gate": "rz", "num_qubits": 1, "num_clbits": 0, "params": [-2.460801919092515],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 21 }],
        "clbits": []
      }, {
        "gate": "rz", "num_qubits": 1, "num_clbits": 0, "params": [1.5707963267948966],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 22 }],
        "clbits": []
      }, {
        "gate": "rz", "num_qubits": 1, "num_clbits": 0, "params": [1.5707963267948974],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 23 }],
        "clbits": []
      }], "num_op": 3, "esp_total": 0.9911747402066129, "esp_this": 1,
      "esp_detail": [{
        "gate": "rz",
        "gate_error": 0,
        "qubits": [21]
      }, {
        "gate": "rz",
        "gate_error": 0,
        "qubits": [22]
      }, {
        "gate": "rz",
        "gate_error": 0,
        "qubits": [23]
      }]
    }, {
      "operations": [{
        "gate": "sx", "num_qubits": 1, "num_clbits": 0, "params": [],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 21 }],
        "clbits": []
      }, {
        "gate": "sx", "num_qubits": 1, "num_clbits": 0, "params": [],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 22 }],
        "clbits": []
      }], "num_op": 2, "esp_total": 0.990655845821672, "esp_this": 0.9994764854632668,
      "esp_detail": [{
        "gate": "sx",
        "gate_error": 0.0002965966224981807,
        "qubits": [21]
      }, {
        "gate": "sx",
        "gate_error": 0.00022698523728966087,
        "qubits": [22]
      }]
    }, {
      "operations": [{
        "gate": "rz", "num_qubits": 1, "num_clbits": 0, "params": [1.5707963267948966],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 21 }],
        "clbits": []
      }, {
        "gate": "rz", "num_qubits": 1, "num_clbits": 0, "params": [-1.9634954084936211],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 22 }],
        "clbits": []
      }], "num_op": 2, "esp_total": 0.990655845821672, "esp_this": 1,
      "esp_detail": [{
        "gate": "rz",
        "gate_error": 0,
        "qubits": [21]
      }, {
        "gate": "rz",
        "gate_error": 0,
        "qubits": [22]
      }]
    }, {
      "operations": [{
        "gate": "ecr", "num_qubits": 2, "num_clbits": 0, "params": [],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 21 }, { "register": { "name": "q", "size": 127 }, "index": 20 }],
        "clbits": []
      }, {
        "gate": "sx", "num_qubits": 1, "num_clbits": 0, "params": [],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 22 }],
        "clbits": []
      }], "num_op": 2, "esp_total": 0.9823160295734382, "esp_this": 0.9915815201783658,
      "esp_detail": [{
        "gate": "ecr",
        "gate_error": 0.00819335435482696,
        "qubits": [21, 20]
      }, {
        "gate": "sx",
        "gate_error": 0.00022698523728966087,
        "qubits": [22]
      }]
    }, {
      "operations": [{
        "gate": "rz", "num_qubits": 1, "num_clbits": 0, "params": [1.5707963267948966],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 20 }],
        "clbits": []
      }, {
        "gate": "rz", "num_qubits": 1, "num_clbits": 0, "params": [-1.570796326794897],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 21 }],
        "clbits": []
      }, {
        "gate": "rz", "num_qubits": 1, "num_clbits": 0, "params": [-1.5707963267948966],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 22 }],
        "clbits": []
      }], "num_op": 3, "esp_total": 0.9823160295734382, "esp_this": 1,
      "esp_detail": [{
        "gate": "rz",
        "gate_error": 0,
        "qubits": [20]
      }, {
        "gate": "rz",
        "gate_error": 0,
        "qubits": [21]
      }, {
        "gate": "rz",
        "gate_error": 0,
        "qubits": [22]
      }]
    }, {
      "operations": [{
        "gate": "sx", "num_qubits": 1, "num_clbits": 0, "params": [],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 20 }],
        "clbits": []
      }, {
        "gate": "sx", "num_qubits": 1, "num_clbits": 0, "params": [],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 21 }],
        "clbits": []
      }], "num_op": 2, "esp_total": 0.981718099561193, "esp_this": 0.9993913058585587,
      "esp_detail": [{
        "gate": "sx",
        "gate_error": 0.000312190113476366,
        "qubits": [20]
      }, {
        "gate": "sx",
        "gate_error": 0.0002965966224981807,
        "qubits": [21]
      }]
    }, {
      "operations": [{
        "gate": "ecr", "num_qubits": 2, "num_clbits": 0, "params": [],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 15 }, { "register": { "name": "q", "size": 127 }, "index": 22 }],
        "clbits": []
      }], "num_op": 1, "esp_total": 0.9766793126333114, "esp_this": 0.9948673790061181,
      "esp_detail": [{
        "gate": "ecr",
        "gate_error": 0.005132620993881926,
        "qubits": [15, 22]
      }]
    }, {
      "operations": [{
        "gate": "rz", "num_qubits": 1, "num_clbits": 0, "params": [-3.141592653589793],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 21 }],
        "clbits": []
      }, {
        "gate": "rz", "num_qubits": 1, "num_clbits": 0, "params": [-1.9634954084936203],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 15 }],
        "clbits": []
      }, {
        "gate": "rz", "num_qubits": 1, "num_clbits": 0, "params": [-1.5707963267948966],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 22 }],
        "clbits": []
      }], "num_op": 3, "esp_total": 0.9766793126333114, "esp_this": 1,
      "esp_detail": [{
        "gate": "rz",
        "gate_error": 0,
        "qubits": [21]
      }, {
        "gate": "rz",
        "gate_error": 0,
        "qubits": [15]
      }, {
        "gate": "rz",
        "gate_error": 0,
        "qubits": [22]
      }]
    }, {
      "operations": [{
        "gate": "ecr", "num_qubits": 2, "num_clbits": 0, "params": [],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 21 }, { "register": { "name": "q", "size": 127 }, "index": 20 }],
        "clbits": []
      }, {
        "gate": "sx", "num_qubits": 1, "num_clbits": 0, "params": [],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 22 }],
        "clbits": []
      }], "num_op": 2, "esp_total": 0.9684571575477003, "esp_this": 0.9915815201783658,
      "esp_detail": [{
        "gate": "ecr",
        "gate_error": 0.00819335435482696,
        "qubits": [21, 20]
      }, {
        "gate": "sx",
        "gate_error": 0.00022698523728966087,
        "qubits": [22]
      }]
    }, {
      "operations": [{
        "gate": "rz", "num_qubits": 1, "num_clbits": 0, "params": [-1.5707963267948966],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 20 }],
        "clbits": []
      }, {
        "gate": "rz", "num_qubits": 1, "num_clbits": 0, "params": [1.5707963267948966],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 21 }],
        "clbits": []
      }, {
        "gate": "rz", "num_qubits": 1, "num_clbits": 0, "params": [1.9634954084936203],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 22 }],
        "clbits": []
      }], "num_op": 3, "esp_total": 0.9684571575477003, "esp_this": 1,
      "esp_detail": [{
        "gate": "rz",
        "gate_error": 0,
        "qubits": [20]
      }, {
        "gate": "rz",
        "gate_error": 0,
        "qubits": [21]
      }, {
        "gate": "rz",
        "gate_error": 0,
        "qubits": [22]
      }]
    }, {
      "operations": [{
        "gate": "sx", "num_qubits": 1, "num_clbits": 0, "params": [],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 21 }],
        "clbits": []
      }, {
        "gate": "ecr", "num_qubits": 2, "num_clbits": 0, "params": [],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 22 }, { "register": { "name": "q", "size": 127 }, "index": 23 }],
        "clbits": []
      }], "num_op": 2, "esp_total": 0.9585946972869571, "esp_this": 0.989816317444835,
      "esp_detail": [{
        "gate": "sx",
        "gate_error": 0.0002965966224981807,
        "qubits": [21]
      }, {
        "gate": "ecr",
        "gate_error": 0.009890019278981504,
        "qubits": [22, 23]
      }]
    }, {
      "operations": [{
        "gate": "rz", "num_qubits": 1, "num_clbits": 0, "params": [1.5707963267948966],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 21 }],
        "clbits": []
      }, {
        "gate": "rz", "num_qubits": 1, "num_clbits": 0, "params": [-3.141592653589793],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 22 }],
        "clbits": []
      }, {
        "gate": "rz", "num_qubits": 1, "num_clbits": 0, "params": [1.5707963267948966],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 23 }],
        "clbits": []
      }], "num_op": 3, "esp_total": 0.9585946972869571, "esp_this": 1,
      "esp_detail": [{
        "gate": "rz",
        "gate_error": 0,
        "qubits": [21]
      }, {
        "gate": "rz",
        "gate_error": 0,
        "qubits": [22]
      }, {
        "gate": "rz",
        "gate_error": 0,
        "qubits": [23]
      }]
    }, {
      "operations": [{
        "gate": "ecr", "num_qubits": 2, "num_clbits": 0, "params": [],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 21 }, { "register": { "name": "q", "size": 127 }, "index": 20 }],
        "clbits": []
      }, {
        "gate": "sx", "num_qubits": 1, "num_clbits": 0, "params": [],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 22 }],
        "clbits": []
      }, {
        "gate": "sx", "num_qubits": 1, "num_clbits": 0, "params": [],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 23 }],
        "clbits": []
      }], "num_op": 3, "esp_total": 0.9503230643149714, "esp_this": 0.9913710841553824,
      "esp_detail": [{
        "gate": "ecr",
        "gate_error": 0.00819335435482696,
        "qubits": [21, 20]
      }, {
        "gate": "sx",
        "gate_error": 0.00022698523728966087,
        "qubits": [22]
      }, {
        "gate": "sx",
        "gate_error": 0.00021222261478363156,
        "qubits": [23]
      }]
    }, {
      "operations": [{
        "gate": "rz", "num_qubits": 1, "num_clbits": 0, "params": [-3.141592653589793],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 20 }],
        "clbits": []
      }, {
        "gate": "x", "num_qubits": 1, "num_clbits": 0, "params": [],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 21 }],
        "clbits": []
      }, {
        "gate": "rz", "num_qubits": 1, "num_clbits": 0, "params": [-1.5707963267948966],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 22 }],
        "clbits": []
      }, {
        "gate": "rz", "num_qubits": 1, "num_clbits": 0, "params": [-0.5035153588513177],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 23 }],
        "clbits": []
      }], "num_op": 4, "esp_total": 0.9500412017038135, "esp_this": 0.9997034033775019,
      "esp_detail": [{
        "gate": "rz",
        "gate_error": 0,
        "qubits": [20]
      }, {
        "gate": "x",
        "gate_error": 0.0002965966224981807,
        "qubits": [21]
      }, {
        "gate": "rz",
        "gate_error": 0,
        "qubits": [22]
      }, {
        "gate": "rz",
        "gate_error": 0,
        "qubits": [23]
      }]
    }, {
      "operations": [{
        "gate": "sx", "num_qubits": 1, "num_clbits": 0, "params": [],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 20 }],
        "clbits": []
      }, {
        "gate": "rz", "num_qubits": 1, "num_clbits": 0, "params": [1.5707963267948966],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 21 }],
        "clbits": []
      }], "num_op": 2, "esp_total": 0.9497446082332462, "esp_this": 0.9996878098865236,
      "esp_detail": [{
        "gate": "sx",
        "gate_error": 0.000312190113476366,
        "qubits": [20]
      }, {
        "gate": "rz",
        "gate_error": 0,
        "qubits": [21]
      }]
    }, {
      "operations": [{
        "gate": "ecr", "num_qubits": 2, "num_clbits": 0, "params": [],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 21 }, { "register": { "name": "q", "size": 127 }, "index": 22 }],
        "clbits": []
      }], "num_op": 1, "esp_total": 0.942821986670386, "esp_this": 0.9927110704258295,
      "esp_detail": [{
        "gate": "ecr",
        "gate_error": 0.007288929574170516,
        "qubits": [21, 22]
      }]
    }, {
      "operations": [{
        "gate": "x", "num_qubits": 1, "num_clbits": 0, "params": [],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 21 }],
        "clbits": []
      }], "num_op": 1, "esp_total": 0.9425423488535225, "esp_this": 0.9997034033775019,
      "esp_detail": [{
        "gate": "x",
        "gate_error": 0.0002965966224981807,
        "qubits": [21]
      }]
    }, {
      "operations": [{
        "gate": "barrier", "num_qubits": 5, "num_clbits": 0, "params": [],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 20 }, { "register": { "name": "q", "size": 127 }, "index": 15 }, { "register": { "name": "q", "size": 127 }, "index": 23 }, { "register": { "name": "q", "size": 127 }, "index": 21 }, { "register": { "name": "q", "size": 127 }, "index": 22 }],
        "clbits": []
      }], "num_op": 1, "esp_total": 0.9425423488535225, "esp_this": 1,
      "esp_detail": []
    }, {
      "operations": [{
        "gate": "rz", "num_qubits": 1, "num_clbits": 0, "params": [1.5707963267948966],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 15 }],
        "clbits": []
      }, {
        "gate": "rz", "num_qubits": 1, "num_clbits": 0, "params": [1.5707963267948966],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 20 }],
        "clbits": []
      }, {
        "gate": "rz", "num_qubits": 1, "num_clbits": 0, "params": [1.5707963267948966],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 21 }],
        "clbits": []
      }, {
        "gate": "rz", "num_qubits": 1, "num_clbits": 0, "params": [1.5707963267948966],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 22 }],
        "clbits": []
      }, {
        "gate": "rz", "num_qubits": 1, "num_clbits": 0, "params": [1.5707963267948966],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 23 }],
        "clbits": []
      }], "num_op": 5, "esp_total": 0.9425423488535225, "esp_this": 1,
      "esp_detail": [{
        "gate": "rz",
        "gate_error": 0,
        "qubits": [15]
      }, {
        "gate": "rz",
        "gate_error": 0,
        "qubits": [20]
      }, {
        "gate": "rz",
        "gate_error": 0,
        "qubits": [21]
      }, {
        "gate": "rz",
        "gate_error": 0,
        "qubits": [22]
      }, {
        "gate": "rz",
        "gate_error": 0,
        "qubits": [23]
      }]
    }, {
      "operations": [{
        "gate": "sx", "num_qubits": 1, "num_clbits": 0, "params": [],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 15 }],
        "clbits": []
      }, {
        "gate": "sx", "num_qubits": 1, "num_clbits": 0, "params": [],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 20 }],
        "clbits": []
      }, {
        "gate": "sx", "num_qubits": 1, "num_clbits": 0, "params": [],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 21 }],
        "clbits": []
      }, {
        "gate": "sx", "num_qubits": 1, "num_clbits": 0, "params": [],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 22 }],
        "clbits": []
      }, {
        "gate": "sx", "num_qubits": 1, "num_clbits": 0, "params": [],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 23 }],
        "clbits": []
      }], "num_op": 5, "esp_total": 0.941283421910868, "esp_this": 0.9986643285108772,
      "esp_detail": [{
        "gate": "sx",
        "gate_error": 0.0002883870913596295,
        "qubits": [15]
      }, {
        "gate": "sx",
        "gate_error": 0.000312190113476366,
        "qubits": [20]
      }, {
        "gate": "sx",
        "gate_error": 0.0002965966224981807,
        "qubits": [21]
      }, {
        "gate": "sx",
        "gate_error": 0.00022698523728966087,
        "qubits": [22]
      }, {
        "gate": "sx",
        "gate_error": 0.00021222261478363156,
        "qubits": [23]
      }]
    }, {
      "operations": [{
        "gate": "rz", "num_qubits": 1, "num_clbits": 0, "params": [1.5707963267948966],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 15 }],
        "clbits": []
      }, {
        "gate": "rz", "num_qubits": 1, "num_clbits": 0, "params": [1.5707963267948966],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 20 }],
        "clbits": []
      }, {
        "gate": "rz", "num_qubits": 1, "num_clbits": 0, "params": [1.5707963267948966],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 21 }],
        "clbits": []
      }, {
        "gate": "rz", "num_qubits": 1, "num_clbits": 0, "params": [1.5707963267948966],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 22 }],
        "clbits": []
      }, {
        "gate": "rz", "num_qubits": 1, "num_clbits": 0, "params": [1.5707963267948966],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 23 }],
        "clbits": []
      }], "num_op": 5, "esp_total": 0.941283421910868, "esp_this": 1,
      "esp_detail": [{
        "gate": "rz",
        "gate_error": 0,
        "qubits": [15]
      }, {
        "gate": "rz",
        "gate_error": 0,
        "qubits": [20]
      }, {
        "gate": "rz",
        "gate_error": 0,
        "qubits": [21]
      }, {
        "gate": "rz",
        "gate_error": 0,
        "qubits": [22]
      }, {
        "gate": "rz",
        "gate_error": 0,
        "qubits": [23]
      }]
    }, {
      "operations": [{
        "gate": "measure", "num_qubits": 1, "num_clbits": 1, "params": [],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 20 }],
        "clbits": [{ "register": { "name": "q", "size": 127 }, "index": 20 }]
      }], "num_op": 1, "esp_total": 0.9331883844824346, "esp_this": 0.9914000000000001,
      "esp_detail": [{
        "gate": "measure",
        "gate_error": 0.008599999999999941,
        "qubits": [20]
      }]
    }, {
      "operations": [{
        "gate": "measure", "num_qubits": 1, "num_clbits": 1, "params": [],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 15 }],
        "clbits": [{ "register": { "name": "q", "size": 127 }, "index": 15 }]
      }], "num_op": 1, "esp_total": 0.9204970224534734, "esp_this": 0.9863999999999999,
      "esp_detail": [{
        "gate": "measure",
        "gate_error": 0.013600000000000056,
        "qubits": [15]
      }]
    }, {
      "operations": [{
        "gate": "measure", "num_qubits": 1, "num_clbits": 1, "params": [],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 23 }],
        "clbits": [{ "register": { "name": "q", "size": 127 }, "index": 23 }]
      }], "num_op": 1, "esp_total": 0.9125807480603735, "esp_this": 0.9914,
      "esp_detail": [{
        "gate": "measure",
        "gate_error": 0.008600000000000052,
        "qubits": [23]
      }]
    }, {
      "operations": [{
        "gate": "measure", "num_qubits": 1, "num_clbits": 1, "params": [],
        "qubits": [{ "register": { "name": "q", "size": 127 }, "index": 21 }],
        "clbits": [{ "register": { "name": "q", "size": 127 }, "index": 21 }]
      }], "num_op": 1,
      // optional
      "esp_total": 0.9058276505247267, "esp_this": 0.9925999999999999,
      "esp_detail": [{
        "gate": "measure",
        "gate_error": 0.007400000000000073,
        "qubits": [21]
      }]
    }
  ], // layer ends

  "num_qubits": 127,
  "qubits": [
    { "index": 0, "register": { "name": "q", "size": 127 } },
    { "index": 1, "register": { "name": "q", "size": 127 } },
    { "index": 2, "register": { "name": "q", "size": 127 } },
    { "index": 3, "register": { "name": "q", "size": 127 } },
    { "index": 4, "register": { "name": "q", "size": 127 } },
    { "index": 5, "register": { "name": "q", "size": 127 } },
    { "index": 6, "register": { "name": "q", "size": 127 } },
    { "index": 7, "register": { "name": "q", "size": 127 } },
    { "index": 8, "register": { "name": "q", "size": 127 } },
    { "index": 9, "register": { "name": "q", "size": 127 } },
    { "index": 10, "register": { "name": "q", "size": 127 } },
    { "index": 11, "register": { "name": "q", "size": 127 } },
    { "index": 12, "register": { "name": "q", "size": 127 } },
    { "index": 13, "register": { "name": "q", "size": 127 } },
    { "index": 14, "register": { "name": "q", "size": 127 } },
    { "index": 15, "register": { "name": "q", "size": 127 } },
    { "index": 16, "register": { "name": "q", "size": 127 } },
    { "index": 17, "register": { "name": "q", "size": 127 } },
    { "index": 18, "register": { "name": "q", "size": 127 } },
    { "index": 19, "register": { "name": "q", "size": 127 } },
    { "index": 20, "register": { "name": "q", "size": 127 } },
    { "index": 21, "register": { "name": "q", "size": 127 } },
    { "index": 22, "register": { "name": "q", "size": 127 } },
    { "index": 23, "register": { "name": "q", "size": 127 } },
    { "index": 24, "register": { "name": "q", "size": 127 } },
    { "index": 25, "register": { "name": "q", "size": 127 } },
    { "index": 26, "register": { "name": "q", "size": 127 } },
    { "index": 27, "register": { "name": "q", "size": 127 } },
    { "index": 28, "register": { "name": "q", "size": 127 } },
    { "index": 29, "register": { "name": "q", "size": 127 } },
    { "index": 30, "register": { "name": "q", "size": 127 } },
    { "index": 31, "register": { "name": "q", "size": 127 } },
    { "index": 32, "register": { "name": "q", "size": 127 } },
    { "index": 33, "register": { "name": "q", "size": 127 } },
    { "index": 34, "register": { "name": "q", "size": 127 } },
    { "index": 35, "register": { "name": "q", "size": 127 } },
    { "index": 36, "register": { "name": "q", "size": 127 } },
    { "index": 37, "register": { "name": "q", "size": 127 } },
    { "index": 38, "register": { "name": "q", "size": 127 } },
    { "index": 39, "register": { "name": "q", "size": 127 } },
    { "index": 40, "register": { "name": "q", "size": 127 } },
    { "index": 41, "register": { "name": "q", "size": 127 } },
    { "index": 42, "register": { "name": "q", "size": 127 } },
    { "index": 43, "register": { "name": "q", "size": 127 } },
    { "index": 44, "register": { "name": "q", "size": 127 } },
    { "index": 45, "register": { "name": "q", "size": 127 } },
    { "index": 46, "register": { "name": "q", "size": 127 } },
    { "index": 47, "register": { "name": "q", "size": 127 } },
    { "index": 48, "register": { "name": "q", "size": 127 } },
    { "index": 49, "register": { "name": "q", "size": 127 } },
    { "index": 50, "register": { "name": "q", "size": 127 } },
    { "index": 51, "register": { "name": "q", "size": 127 } },
    { "index": 52, "register": { "name": "q", "size": 127 } },
    { "index": 53, "register": { "name": "q", "size": 127 } },
    { "index": 54, "register": { "name": "q", "size": 127 } },
    { "index": 55, "register": { "name": "q", "size": 127 } },
    { "index": 56, "register": { "name": "q", "size": 127 } },
    { "index": 57, "register": { "name": "q", "size": 127 } },
    { "index": 58, "register": { "name": "q", "size": 127 } },
    { "index": 59, "register": { "name": "q", "size": 127 } },
    { "index": 60, "register": { "name": "q", "size": 127 } },
    { "index": 61, "register": { "name": "q", "size": 127 } },
    { "index": 62, "register": { "name": "q", "size": 127 } },
    { "index": 63, "register": { "name": "q", "size": 127 } },
    { "index": 64, "register": { "name": "q", "size": 127 } },
    { "index": 65, "register": { "name": "q", "size": 127 } },
    { "index": 66, "register": { "name": "q", "size": 127 } },
    { "index": 67, "register": { "name": "q", "size": 127 } },
    { "index": 68, "register": { "name": "q", "size": 127 } },
    { "index": 69, "register": { "name": "q", "size": 127 } },
    { "index": 70, "register": { "name": "q", "size": 127 } },
    { "index": 71, "register": { "name": "q", "size": 127 } },
    { "index": 72, "register": { "name": "q", "size": 127 } },
    { "index": 73, "register": { "name": "q", "size": 127 } },
    { "index": 74, "register": { "name": "q", "size": 127 } },
    { "index": 75, "register": { "name": "q", "size": 127 } },
    { "index": 76, "register": { "name": "q", "size": 127 } },
    { "index": 77, "register": { "name": "q", "size": 127 } },
    { "index": 78, "register": { "name": "q", "size": 127 } },
    { "index": 79, "register": { "name": "q", "size": 127 } },
    { "index": 80, "register": { "name": "q", "size": 127 } },
    { "index": 81, "register": { "name": "q", "size": 127 } },
    { "index": 82, "register": { "name": "q", "size": 127 } },
    { "index": 83, "register": { "name": "q", "size": 127 } },
    { "index": 84, "register": { "name": "q", "size": 127 } },
    { "index": 85, "register": { "name": "q", "size": 127 } },
    { "index": 86, "register": { "name": "q", "size": 127 } },
    { "index": 87, "register": { "name": "q", "size": 127 } },
    { "index": 88, "register": { "name": "q", "size": 127 } },
    { "index": 89, "register": { "name": "q", "size": 127 } },
    { "index": 90, "register": { "name": "q", "size": 127 } },
    { "index": 91, "register": { "name": "q", "size": 127 } },
    { "index": 92, "register": { "name": "q", "size": 127 } },
    { "index": 93, "register": { "name": "q", "size": 127 } },
    { "index": 94, "register": { "name": "q", "size": 127 } },
    { "index": 95, "register": { "name": "q", "size": 127 } },
    { "index": 96, "register": { "name": "q", "size": 127 } },
    { "index": 97, "register": { "name": "q", "size": 127 } },
    { "index": 98, "register": { "name": "q", "size": 127 } },
    { "index": 99, "register": { "name": "q", "size": 127 } },
    { "index": 100, "register": { "name": "q", "size": 127 } },
    { "index": 101, "register": { "name": "q", "size": 127 } },
    { "index": 102, "register": { "name": "q", "size": 127 } },
    { "index": 103, "register": { "name": "q", "size": 127 } },
    { "index": 104, "register": { "name": "q", "size": 127 } },
    { "index": 105, "register": { "name": "q", "size": 127 } },
    { "index": 106, "register": { "name": "q", "size": 127 } },
    { "index": 107, "register": { "name": "q", "size": 127 } },
    { "index": 108, "register": { "name": "q", "size": 127 } },
    { "index": 109, "register": { "name": "q", "size": 127 } },
    { "index": 110, "register": { "name": "q", "size": 127 } },
    { "index": 111, "register": { "name": "q", "size": 127 } },
    { "index": 112, "register": { "name": "q", "size": 127 } },
    { "index": 113, "register": { "name": "q", "size": 127 } },
    { "index": 114, "register": { "name": "q", "size": 127 } },
    { "index": 115, "register": { "name": "q", "size": 127 } },
    { "index": 116, "register": { "name": "q", "size": 127 } },
    { "index": 117, "register": { "name": "q", "size": 127 } },
    { "index": 118, "register": { "name": "q", "size": 127 } },
    { "index": 119, "register": { "name": "q", "size": 127 } },
    { "index": 120, "register": { "name": "q", "size": 127 } },
    { "index": 121, "register": { "name": "q", "size": 127 } },
    { "index": 122, "register": { "name": "q", "size": 127 } },
    { "index": 123, "register": { "name": "q", "size": 127 } },
    { "index": 124, "register": { "name": "q", "size": 127 } },
    { "index": 125, "register": { "name": "q", "size": 127 } },
    { "index": 126, "register": { "name": "q", "size": 127 } }
  ], // qubits ends

  "num_clbits": 4,
  "clbits": [
    { "index": 0, "register": { "name": "c", "size": 4 } },
    { "index": 1, "register": { "name": "c", "size": 4 } },
    { "index": 2, "register": { "name": "c", "size": 4 } },
    { "index": 3, "register": { "name": "c", "size": 4 } }
  ],
  // optional
  "global_phase": 1.178097245096172,
  "esp": 0.9058276505247267,
}

// if you are going to use the match function
export let layer_match_0: MatchData = {
  "layer_match": [
    {
      "from": [0, 0],
      "to": {
        "complete": false,
        "matches": [[0, 1], [1, 1], [8, 0]],
        "un_matches": 0
      }
    },
    {
      "from": [0, 1],
      "to": {
        "complete": false,
        "matches": [[22, 0], [1, 0], [24, 0]],
        "un_matches": 0
      }
    },
    {
      "from": [0, 2],
      "to": {
        "complete": false,
        "matches": [[15, 2], [1, 4], [22, 4]],
        "un_matches": 0
      }
    },
    {
      "from": [0, 3],
      "to": {
        "complete": false,
        "matches": [[6, 0], [1, 2], [13, 1]],
        "un_matches": 0
      }
    },
    {
      "from": [0, 4],
      "to": {
        "complete": false,
        "matches": [[4, 1], [1, 3], [0, 3]],
        "un_matches": 0
      }
    },
    {
      "from": [1, 0],
      "to": {
        "complete": false,
        "matches": [[4, 1], [1, 3], [0, 3]],
        "un_matches": 0
      }
    },
    {
      "from": [2, 0],
      "to": {
        "complete": false,
        "matches": [[15, 1]],
        "un_matches": 0
      }
    },
    {
      "from": [3, 0],
      "to": {
        "complete": false,
        "matches": [[9, 0], [22, 1], [24, 1], [18, 0], [22, 3], [23, 0], [24, 3]],
        "un_matches": 0
      }
    },
    {
      "from": [4, 0],
      "to": {
        "complete": false,
        "matches": [[0, 0], [8, 2], [14, 1], [3, 1]],
        "un_matches": 0
      }
    },
    {
      "from": [5, 0],
      "to": {
        "complete": false,
        "matches": [[0, 4], [2, 0], [2, 4], [3, 0], [4, 2], [5, 0], [5, 1], [6, 1], [7, 1], [11, 2], [9, 1], [10, 0], [2, 1], [11, 1], [17, 2], [12, 1], [13, 2], [24, 4], [16, 1], [16, 2], [23, 1], [17, 1], [17, 3], [13, 0], [19, 0], [20, 0]],
        "un_matches": 0
      }
    },
    {
      "from": [6, 0],
      "to": {
        "complete": false,
        "matches": [[15, 0]],
        "un_matches": 0
      }
    },
    {
      "from": [7, 0],
      "to": {
        "complete": false,
        "matches": [[15, 0]],
        "un_matches": 0
      }
    },
    {
      "from": [7, 1],
      "to": {
        "complete": false,
        "matches": [[15, 0]],
        "un_matches": 0
      }
    },
    {
      "from": [7, 2],
      "to": {
        "complete": false,
        "matches": [[23, 4], [23, 3]],
        "un_matches": 0
      }
    },
    {
      "from": [7, 3],
      "to": {
        "complete": false,
        "matches": [[0, 2], [2, 2], [2, 3], [4, 0], [7, 0], [8, 1], [11, 0], [12, 0], [14, 0], [18, 1], [16, 0], [17, 0], [22, 2], [21, 0], [24, 2], [23, 2]],
        "un_matches": 0
      }
    },
    {
      "from": [7, 4],
      "to": {
        "complete": false,
        "matches": [[25, 0]],
        "un_matches": 0
      }
    },
    {
      "from": [8, 0],
      "to": {
        "complete": false,
        "matches": [[25, 0]],
        "un_matches": 0
      }
    },
    {
      "from": [9, 0],
      "to": {
        "complete": false,
        "matches": [[26, 0]],
        "un_matches": 0
      }
    },
    {
      "from": [10, 0],
      "to": {
        "complete": false,
        "matches": [[27, 0]],
        "un_matches": 0
      }
    },
    {
      "from": [11, 0],
      "to": {
        "complete": false,
        "matches": [[28, 0]],
        "un_matches": 0
      }
    }],
  "bit_match": [
    {
      "from": 4,
      "to": 22,
      "is_ancilla": false
    },
    {
      "from": 0,
      "to": 20,
      "is_ancilla": false
    },
    {
      "from": 1,
      "to": 15,
      "is_ancilla": false
    },
    {
      "from": 2,
      "to": 23,
      "is_ancilla": false
    },
    {
      "from": 3,
      "to": 21,
      "is_ancilla": false
    },
    {
      "from": null,
      "to": 0,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 1,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 2,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 3,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 4,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 5,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 6,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 7,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 8,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 9,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 10,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 11,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 12,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 13,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 14,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 16,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 17,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 18,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 19,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 24,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 25,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 26,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 27,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 28,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 29,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 30,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 31,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 32,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 33,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 34,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 35,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 36,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 37,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 38,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 39,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 40,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 41,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 42,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 43,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 44,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 45,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 46,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 47,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 48,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 49,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 50,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 51,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 52,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 53,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 54,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 55,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 56,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 57,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 58,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 59,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 60,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 61,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 62,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 63,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 64,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 65,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 66,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 67,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 68,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 69,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 70,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 71,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 72,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 73,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 74,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 75,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 76,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 77,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 78,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 79,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 80,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 81,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 82,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 83,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 84,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 85,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 86,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 87,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 88,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 89,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 90,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 91,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 92,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 93,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 94,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 95,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 96,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 97,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 98,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 99,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 100,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 101,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 102,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 103,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 104,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 105,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 106,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 107,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 108,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 109,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 110,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 111,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 112,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 113,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 114,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 115,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 116,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 117,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 118,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 119,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 120,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 121,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 122,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 123,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 124,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 125,
      "is_ancilla": true
    },
    {
      "from": null,
      "to": 126,
      "is_ancilla": true
    }
  ]
}