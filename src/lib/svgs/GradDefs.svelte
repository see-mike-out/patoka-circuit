<script lang="ts">
  import type { SvgGradientStop } from "$lib/type_defs";

  export let def: { grad_data: SvgGradientStop[]; id: string };
</script>

{#if def?.grad_data?.length > 0}
  <linearGradient id={def.id} x1="0" x2="0" y1="0" y2="1">
    {#each def?.grad_data as d}
      <stop offset={d.offset} stop-color={d["stop-color"]} />
    {/each}
  </linearGradient>
{/if}
