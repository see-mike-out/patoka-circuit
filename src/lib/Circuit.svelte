<script lang="ts">
  import { onMount } from "svelte";
  import { planDrawing } from "./svg_utils/plan_draw";
  import SvgWrap from "./svgs/SVGWrap.svelte";
  import type { InitialCircuitData, MatchData, SvgPlan } from "./type_defs";

  export let circuit_data: InitialCircuitData,
    is_original = true,
    match: MatchData | undefined = undefined,
    id: string,
    matched_circuit_id: string[],
    onClick = () => {},
    filter_unused_qubits = true,
    unit_id;

  // tooltips
  let showTooltip = false,
    tooltip_x,
    tooltip_y,
    tootlip_content: string,
    clicked_tooltip = false,
    tooltip_priority = 999;

  function openTooltip(
    e: MouseEvent,
    cont: string,
    clicked: boolean,
    priority?: number,
  ) {
    if (clicked_tooltip && !clicked) return;
    if (priority !== undefined && tooltip_priority < priority) return;
    showTooltip = true;
    tooltip_x = e.clientX + 5;
    tooltip_y = e.clientY + 5;
    tootlip_content = cont;
    clicked_tooltip = clicked;
    tooltip_priority = priority ? priority : 0;
  }
  function moveTooltip(e: MouseEvent) {
    if (showTooltip) {
      tooltip_x = e.clientX + 5;
      tooltip_y = e.clientY + 5;
    }
  }
  function closeTooltip(force: boolean) {
    if (!clicked_tooltip) showTooltip = false;
    if (force) {
      showTooltip = false;
      tooltip_priority = 999;
    }
  }

  let drawPlan!: SvgPlan | null;
  onMount(() => {
    drawPlan = planDrawing(circuit_data, {
      show_moments: true,
      is_original,
      match,
      matched_circuit_id,
      this_circuit_id: id,
      filter_unused_qubits,
      unit_id,
    });
  });

  $: {
    drawPlan = planDrawing(circuit_data, {
      show_moments: true,
      is_original,
      match,
      matched_circuit_id,
      this_circuit_id: id,
      filter_unused_qubits,
      unit_id,
    });
  }
</script>

{#if drawPlan !== null}
  <div
    id={id + "-wrapper"}
    class="ciruit-view-wrapper"
    style="position: relative; width: 100%; overflow-x: scroll; overflow-y:hidden;"
  >
    <!-- todo: sticky -->
    <div
      class="circuit-sticky"
      style={`width: ${drawPlan.groups.qubit_group.x + (drawPlan.groups.qubit_group.width ?? 0)}px; height:${drawPlan.height}px;`}
    >
      <svg
        id={id + "-sticky"}
        width={drawPlan.groups.qubit_group.x +
          (drawPlan.groups.qubit_group.width ?? 0)}
        height={drawPlan.height}
        viewBox={drawPlan.viewBox
          .map((d, i) =>
            i == 2
              ? //@ts-ignore
                drawPlan.groups.qubit_group.x +
                //@ts-ignore
                (drawPlan.groups.qubit_group.width ?? 0)
              : d,
          )
          .join(" ")}
      >
        <style>
          g {
            font-family: Iosevka;
            font-size: 14px;
          }
        </style>
        {#if drawPlan.groups.phase_marker}
          <SvgWrap
            data={drawPlan.groups.phase_marker}
            onMouseOver={openTooltip}
            onMouseOut={closeTooltip}
            onMouseMove={moveTooltip}
          ></SvgWrap>
        {/if}
        {#if drawPlan.groups.qubit_group}
          <SvgWrap
            data={drawPlan.groups.qubit_group}
            {onClick}
            onMouseOver={openTooltip}
            onMouseOut={closeTooltip}
            onMouseMove={moveTooltip}
          ></SvgWrap>
        {/if}
        {#if drawPlan.groups.esp_axis_group}
          <SvgWrap
            data={drawPlan.groups.esp_axis_group}
            {onClick}
            onMouseOver={openTooltip}
            onMouseOut={closeTooltip}
            onMouseMove={moveTooltip}
          ></SvgWrap>
        {/if}
      </svg>
    </div>
    <div class="circuit-main">
      <svg
        {id}
        width={drawPlan.width}
        height={drawPlan.height}
        viewBox={drawPlan.viewBox.join(" ")}
      >
        <style>
          g {
            font-family: Iosevka;
            font-size: 14px;
          }
        </style>
        {#if drawPlan.groups.phase_marker}
          <SvgWrap
            data={drawPlan.groups.phase_marker}
            onMouseOver={openTooltip}
            onMouseOut={closeTooltip}
            onMouseMove={moveTooltip}
          ></SvgWrap>
        {/if}
        {#if drawPlan.groups.moment_group}
          <SvgWrap
            data={drawPlan.groups.moment_group}
            {onClick}
            onMouseOver={openTooltip}
            onMouseOut={closeTooltip}
            onMouseMove={moveTooltip}
          ></SvgWrap>
        {/if}
        {#if drawPlan.groups.qubit_group}
          <SvgWrap
            data={drawPlan.groups.qubit_group}
            {onClick}
            onMouseOver={openTooltip}
            onMouseOut={closeTooltip}
            onMouseMove={moveTooltip}
          ></SvgWrap>
        {/if}
        {#if drawPlan.groups.circuit_line_group}
          <SvgWrap
            data={drawPlan.groups.circuit_line_group}
            {onClick}
            onMouseOver={openTooltip}
            onMouseOut={closeTooltip}
            onMouseMove={moveTooltip}
          ></SvgWrap>
        {/if}
        {#if drawPlan.groups.circuit_group}
          <SvgWrap
            data={drawPlan.groups.circuit_group}
            {onClick}
            onMouseOver={openTooltip}
            onMouseOut={closeTooltip}
            onMouseMove={moveTooltip}
          ></SvgWrap>
        {/if}
      </svg>
    </div>
  </div>
{/if}

{#if showTooltip}
  <!--  style={`top: ${tooltip_y}px; left: ${tooltip_x}px;`} -->
  <div class="g-tooltip">
    {@html tootlip_content}
  </div>
{:else}
  <div class="g-tooltip deactive">
    Click or hover to see details. Double-click for further details.
  </div>
{/if}

<style>
  :global(
      .ciruit-view-wrapper,
      .ciruit-view-wrapper *,
      .g-tooltip,
      .g-tooltip *
    ) {
    font-family: iosevka, monospace;
  }
  .g-tooltip {
    /* position: fixed; */
    position: relative;
    left: 50%;
    width: fit-content;
    padding: 0.5rem;
    background-color: #ffffff;
    border: 1px solid #000;
    line-height: 100%;
    font-size: 0.9rem;
    z-index: 300;
    transform: translateX(-50%);
  }
  .g-tooltip.deactive {
    color: #999;
    border-color: #999;
  }
  :global(.g-tooltip .item) {
    display: block;
  }
  .ciruit-view-wrapper {
    /* display: flex; */
    position: relative;
    width: 100%;
  }
  .circuit-sticky {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 9;
    background-color: #ffffff;
  }
  .circuit-main {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }
</style>
