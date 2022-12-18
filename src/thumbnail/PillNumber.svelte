<script>
  export let number;
</script>

<svg width="160" height="160" {...$$restProps} viewBox="-80 -80 160 160">
  <circle cx="0" cy="0" r="80" class="border" />
  <circle cx="0" cy="0" r="75" class="pill" />
  <text
    x="0"
    y="0"
    dominant-baseline="central"
    text-anchor="middle"
    class="number">{number}</text
  >
</svg>

<style scoped>
  .border {
    fill: var(--foreground);
  }
  .pill {
    fill: var(--accent);
  }

  .number {
    font-family: Montserrat;
    font-size: 90px;
    fill: var(--foreground);
    font-weight: 700;
  }
</style>
