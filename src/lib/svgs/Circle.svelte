<script lang="ts">
  import type { SvgCircle } from "$lib/type_defs";
  import { default_fill, defualt_color } from "../svg_utils/constants";

  export let data: SvgCircle;
</script>

{#if data}
  <circle
    id={data.id}
    class={data._class}
    data-role={data.role}
    cx={data.cx}
    cy={data.cy}
    r={data.r}
    stroke={data.stroke || defualt_color}
    stroke-width={data["stroke-width"] !== undefined ? data["stroke-width"] : 1}
    fill={data.fill || default_fill}
    fill-opacity={data["fill-opacity"] !== undefined ? data["fill-opacity"] : 1}
  >
  </circle>
{/if}
