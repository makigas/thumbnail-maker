<script>
  import { Tabs, Tab } from "carbon-components-svelte";

  export let selected;
</script>

<Tabs bind:selected>
  <Tab label="Miniatura de vídeo" />
  <Tab label="Miniatura de serie" />
  <Tab label="Diseño 2023 (beta)" />
  <Tab label="Tarjeta 2023 (beta)" />
</Tabs>
