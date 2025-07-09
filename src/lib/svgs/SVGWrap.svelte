<script lang="ts">
  import Circle from "./Circle.svelte";
  import ClickWrap from "./ClickWrap.svelte";
  import DoubleLine from "./DoubleLine.svelte";
  import G from "./G.svelte";
  import Line from "./Line.svelte";
  import Rect from "./Rect.svelte";
  import Text from "./Text.svelte";
  import X from "./X.svelte";
  import Path from "./Path.svelte";
  import type { SvgElem } from "$lib/type_defs";

  export let data: SvgElem,
    onClick: Function = () => {},
    onMouseOver: Function = () => {},
    onMouseOut: Function = () => {},
    onMouseMove: Function = () => {};
</script>

{#if data?.type === "g"}
  <G {data} {onClick} {onMouseOver} {onMouseOut} {onMouseMove}></G>
{:else if data?.type === "click-wrap"}
  <ClickWrap {data} {onClick}></ClickWrap>
{:else if data?.type === "line"}
  <Line {data}></Line>
{:else if data?.type === "double-line"}
  <DoubleLine {data}></DoubleLine>
{:else if data?.type === "rect"}
  <Rect {data}></Rect>
{:else if data?.type === "circle"}
  <Circle {data}></Circle>
{:else if data?.type === "text"}
  <Text {data}></Text>
{:else if data?.type === "x"}
  <X {data}></X>
{:else if data?.type === "path"}
  <Path {data}></Path>
{/if}
