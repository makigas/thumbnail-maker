<script>
	import Form from './Form.svelte';
	import Thumbnail from './Thumbnail.svelte';

	let download = null

	let state = {
		title: "Tutorial de Git",
		chapter: "Capítulo 14",
		url: "https://cdn.makigas.es/playlists/thumbnails/000/000/014/default/git.png?1483739128",
		category: "java",
	};

	function handleSubmit() {
		console.log("pues bueno")
		console.log({ download })
		download = Date.now()
		console.log({ download })
	}

</script>

<main>
  <Thumbnail download={download} state={state} />
  <Form on:submit={handleSubmit} bind:state={state} />
</main>

<style>
	main {
		max-width: 1024px;
		margin: 0 auto;
		padding-left: 35px;
		padding-right: 35px;
	}
</style>
