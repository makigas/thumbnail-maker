<script>
	import Select from './Select.svelte'
	import TextBox from './TextBox.svelte';

	export let state;
	let selectedTopic = null
	let playlists = []
	let playlistsSelect = []
	let selectedPlaylist = null

	const CATEGORIES = {
		'desarrollo-de-juegos': 'gamedev',
		'java': 'java',
		'mejora-tus-skills': 'skills',
		'emisiones-en-directo': 'live',
		'lenguajes-de-programacion': 'programming',
		'desarrollo-web': 'webdev',
	}

	function fetchTopics() {
		return fetch('https://www.makigas.es/topics.json')
			.then(xhr => xhr.json())
			.then(({ topics }) => topics.map(({ title, slug }) => ({ title, slug })));
	}

	function fetchTopic(slug) {
		return fetch(`https://www.makigas.es/topics/${slug}.json`)
			.then(xhr => xhr.json())
			.then(({ playlists }) => playlists.map(p => ({
				title: p.title,
				icon: p._links.icon[0].href,
			})))
	}

	function topicChanged(e) {
		selectedTopic = e.target.value
		fetchTopic(selectedTopic).then((lists) => {
			playlists = lists
			console.log(playlists)
			playlistsSelect = playlists.map((p) => [p.title, p.title])
			selectedPlaylist = playlistsSelect[0][0]
			updateState()
		})
	}

	function listChanged(e) {
		selectedPlaylist = e.target.value
		updateState()
	}

	function updateState() {
		let data = playlists.find((i) => i.title === selectedPlaylist)
		state.category = CATEGORIES[selectedTopic]
		state.title = data.title
		state.url = data.icon
	}

	let topics = fetchTopics()
</script>

{#await topics}
	<p>Descargamos temas...</p>
{:then topicList}
<form on:submit|preventDefault>
<Select on:change={topicChanged} label="Tema" choices={topicList.map((t) => [t.slug, t.title])} value={selectedTopic} />
<Select on:change={listChanged} label="Lista" choices={playlistsSelect} value={selectedPlaylist} />
<TextBox label="Capítulo" placeholder="Nombre del capítulo" bind:value={state.chapter} />
<button type="submit">Descargar</button>
</form>
{/await}
<style>
button {
	width: 100%;
}

@media (min-width: 800px) {
  button {
  	margin-left: 20rem;
		width: calc(100% - 20rem);
  }
}
</style>
