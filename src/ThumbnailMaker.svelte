<script>
  import { Checkbox, Form, FormGroup, Button } from "carbon-components-svelte";
  import Menu from "./Menu.svelte";
  import InputForm from "./InputForm.svelte";
  import DownloadForm from "./DownloadForm.svelte";
  import Thumbnail from "./Thumbnail.svelte";
  import Thumbnail2023 from "./thumbnail/Thumbnail2023.svelte";
  import IconForm from "./IconForm.svelte";

  /** The download timestamp. Using it to force a component repaint (and redownload). */
  let download = null;

  let selected = 0;

  /** If true, display the server side lists. */
  let downloadServerSide = false;

  function handleSubmit(e) {
    e.preventDefault();
    download = Date.now();
  }

  function downloaded() {
    download = null;
  }
</script>

<main>
  <Menu bind:selected />

  {#if selected < 2}
    <Thumbnail {selected} on:download={downloaded} {download} />
  {:else if selected < 4}
    <Thumbnail2023
      selected={selected - 2}
      on:download={downloaded}
      {download}
    />
  {/if}

  <Form on:submit={handleSubmit}>
    <FormGroup>
      <Checkbox
        labelText="Obtener listas del servidor"
        bind:checked={downloadServerSide}
      />
      {#if downloadServerSide}
        <DownloadForm selected={selected % 2} />
      {/if}
    </FormGroup>
    <InputForm selected={selected % 2} is2023={selected >= 2} />
    <IconForm is2023={selected >= 2} />
    <FormGroup>
      <Button type="submit">Descargar</Button>
    </FormGroup>
  </Form>
</main>

<style>
  main {
    max-width: 1280px;
    margin: 0 auto;
    padding-left: 35px;
    padding-right: 35px;
  }
</style>
