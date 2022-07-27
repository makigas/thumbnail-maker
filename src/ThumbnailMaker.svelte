<script>
  import { Checkbox, Form, FormGroup, Button } from "carbon-components-svelte";
  import InputForm from "./InputForm.svelte";
  import DownloadForm from "./DownloadForm.svelte";
  import Thumbnail from "./Thumbnail.svelte";

  let download = null;

  let fetched = false;

  let state = {
    title: "Tutorial de Git",
    chapter: "Capítulo 14",
    url: "https://cdn.makigas.es/playlists/thumbnails/000/000/014/default/git.png?1483739128",
    category: "java",
  };

  function handleSubmit(e) {
    e.preventDefault();
    download = Date.now();
  }

  function downloaded() {
    download = null;
  }
</script>

<main>
  <Thumbnail on:download={downloaded} {download} {state} />

	<Form on:submit={handleSubmit}>
		<FormGroup>
			<Checkbox labelText="Obtener listas del servidor" bind:checked={fetched} />
		</FormGroup>

    {#if fetched}
      <DownloadForm bind:state />
    {:else}
      <InputForm bind:state />
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
