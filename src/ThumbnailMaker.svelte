<script>
  import { Checkbox, Form, FormGroup, Button } from "carbon-components-svelte";
  import InputForm from "./InputForm.svelte";
  import DownloadForm from "./DownloadForm.svelte";
  import Thumbnail from "./Thumbnail.svelte";

  /** The download timestamp. Using it to force a component repaint (and redownload). */
  let download = null;

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
  <Thumbnail on:download={downloaded} {download} />

	<Form on:submit={handleSubmit}>
		<FormGroup>
			<Checkbox labelText="Obtener listas del servidor" bind:checked={downloadServerSide} />
		</FormGroup>

    {#if downloadServerSide}
      <DownloadForm />
    {:else}
      <InputForm />
    {/if}
    <FormGroup>
      <Button type="submit">Descargar</Button>
    </FormGroup>
  </Form>
</main>

<style>
  main {
    max-width: 1024px;
    margin: 0 auto;
    padding-left: 35px;
    padding-right: 35px;
  }
</style>
