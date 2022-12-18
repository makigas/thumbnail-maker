<script>
  import { store } from "../lib/state";
  import { createEventDispatcher } from "svelte";
  import { saveSvgAsPng, svgAsPngUri } from "save-svg-as-png";
  import Makigas from "./Makigas.svelte";
  import PillNumber from "./PillNumber.svelte";
  import Title from "./Title.svelte";

  const dispatch = createEventDispatcher();

  export let download,
    selected = 0;

  let svg;

  let iconCenter, titleCenter;
  $: iconCenter = selected == 1 ? 180 : 140;
  $: titleCenter = iconCenter + 140;

  let titleLines, titleLinesOffset;
  $: titleLines = $store.title.split("\n").map((x) => x.trim());
  $: titleLinesOffset = (120 * titleLines.length) / 2;

  $: if (!!download) {
    const title = `${$store.title}_${$store.chapter}.png`;
    svgAsPngUri(svg).then(() => {
      saveSvgAsPng(svg, title);
    });
    dispatch("download");
  }

  $: className = `thumb ${$store.category}`;
</script>

<section>
  <svg
    bind:this={svg}
    viewBox={selected == 0 ? "0 0 1280 720" : "0 0 1280 640"}
    class={className}
    id="thumb"
    background="#ff9800"
  >
    <Makigas x="50" y="50" width="312" height="46" />

    {#if $store.showIcon}
      <g transform={`translate(950, ${iconCenter})`}>
        <image
          href={$store.url}
          width="280"
          height="280"
          class="icon"
          class:whiteburn={$store.mask === "whiteburn"}
        />
      </g>
    {/if}

    <g transform={`translate(0, ${titleCenter})`}>
      <Title
        size={$store.titleSize}
        narrow={$store.titleNarrow}
        alignment={$store.titleAlign}
        title={$store.title}
        showIcon={$store.showIcon}
      />
    </g>

    {#if selected === 0}
      <g transform="translate(0, 500)">
        <rect x="0" y="0" width="1280" height="100" class="episodebar" />
        <PillNumber
          x="50"
          y="-50"
          width="200"
          height="200"
          number={$store.episode}
        />
        <text
          font-family="Montserrat"
          x={(1280 + 250) / 2}
          y="50"
          dominant-baseline="central"
          text-anchor="middle"
          id="text-description"
          class="lesson">{$store.chapter}</text
        >
      </g>
    {/if}
  </svg>
</section>

<style>
  .thumb.programming {
    --accent: #c66900;
    --foreground: white;
  }
  .thumb.skills {
    --accent: #2196f3;
    --foreground: white;
  }
  .thumb.gamedev {
    --accent: #4caf50;
    --foreground: white;
  }
  .thumb.java {
    --accent: #795548;
    --foreground: white;
  }
  .thumb.live {
    --accent: #d50000;
    --foreground: white;
  }
  .thumb.webdev {
    --accent: #673ab7;
    --foreground: white;
  }

  .thumb {
    background: var(--accent);
  }

  text {
    font-family: Montserrat;
    font-size: 20px;
  }

  section {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .thumb {
    width: 100%;
  }

  .bar {
    fill: black;
    opacity: 0.25;
  }

  .episodebar {
    fill: var(--bar-foreground, var(--foreground));
  }

  .lesson {
    font-size: 70px;
    letter-spacing: -2px;
    word-spacing: -2px;
    fill: var(--accent);
    font-weight: bold;
  }

  .icon.whiteburn {
    filter: brightness(100);
  }
</style>
