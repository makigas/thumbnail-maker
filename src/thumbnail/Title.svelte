<script>
  export let title;
  export let alignment;
  export let size;
  export let narrow;

  export let showIcon;

  let tspanSizes = {
    sm: 80,
    md: 100,
    lg: 120,
  };

  let aligns = {
    start: [50, 50],
    center: [475, 640],
    end: [900, 1230],
  };

  let lines;

  $: lines = title.split("\n").map((line) => line.trim());
</script>

<g
  transform={`translate(${aligns[alignment][showIcon ? 0 : 1]}, ${
    (lines.length * tspanSizes[size]) / -2
  })`}
>
  <text
    id="text-title"
    dominant-baseline="hanging"
    class:left={alignment === "start"}
    class:center={alignment === "center" || alignment === "middle"}
    class:right={alignment === "end"}
    class:sm={size === "sm"}
    class:md={size === "md"}
    class:lg={size === "lg"}
    class:nahalf={narrow === "slight"}
    class:na={narrow === "hard"}
    class="title"
  >
    {#each lines as line, i}
      <tspan x="0" dy={i == 0 ? 0 : tspanSizes[size]}>{line}</tspan>
    {/each}
  </text>
</g>

<style scoped>
  text.sm {
    --size: 80px;
  }
  text.md {
    --size: 100px;
  }
  text.lg {
    --size: 120px;
  }
  text.left {
    text-anchor: left;
  }
  text.center {
    text-anchor: middle;
  }
  text.right {
    text-anchor: end;
  }
  tspan {
    fill: var(--foreground);
  }

  .title {
    font-family: Montserrat;
    font-size: var(--size);
    line-height: var(--size);
    font-weight: bold;
  }

  text.nahalf {
    letter-spacing: -0.04em;
  }
  text.na {
    letter-spacing: -0.08em;
  }
</style>
