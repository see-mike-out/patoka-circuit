<script lang="ts">
  import type { SvgClickWrap } from "$lib/type_defs";

  const ClickWrapRoles = [
    "qubit-group-click-wrap",
    "gate-group-click-wrap",
    "qubit-node-click-wrap",
    "op-gate-error-group-click-wrap",
    "esp-bar-click-wrap",
    "machine-gate-click-wrap",
  ];

  export let data: SvgClickWrap,
    onClick: Function = () => {};
</script>

{#if data}
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <rect
    id={data.id}
    class={data._class + " click-wrap"}
    data-role={data.role}
    x={data.x}
    y={data.y}
    width={data.width}
    height={data.height}
    stroke="transparent"
    stroke-width="0"
    fill="transparent"
    on:dblclick={(e) => {
      if (ClickWrapRoles.includes(data.role ?? "")) {
        onClick(data);
      }
    }}
  >
  </rect>
{/if}
