<script>
  import { Tabs, Tab } from "carbon-components-svelte";

  export let selected;
</script>

<Tabs bind:selected>
  <Tab label="Miniatura de vídeo" />
  <Tab label="Miniatura de serie" />
</Tabs>
