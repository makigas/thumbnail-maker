<script>
	import InputForm from './InputForm.svelte';
	import DownloadForm from './DownloadForm.svelte';
	import Thumbnail from './Thumbnail.svelte';

	let download = null

	let fetched = false;

	let state = {
		title: "Tutorial de Git",
		chapter: "Capítulo 14",
		url: "https://cdn.makigas.es/playlists/thumbnails/000/000/014/default/git.png?1483739128",
		category: "java",
	};

	function handleSubmit() {
		download = Date.now()
	}

	function downloaded() {
		download = null
	}

</script>

<main>
<Thumbnail on:download={downloaded} download={download} state={state} />
<label>
	<input type="checkbox" bind:checked={fetched} />
Descargar desde el servidor
</label>

{#if fetched}
<DownloadForm bind:state={state} on:submit={handleSubmit} />
{:else}
<InputForm on:submit={handleSubmit} bind:state={state} />
{/if}
</main>

<style>
	main {
		max-width: 1024px;
		margin: 0 auto;
		padding-left: 35px;
		padding-right: 35px;
	}
</style>
