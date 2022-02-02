<script>
	import TextBox from './TextBox.svelte';
	import Select from './Select.svelte';

  export let state;
	let choices = [
		["programming", "Programación"],
		["skills", "Mejora tus skills"],
		["gamedev", "Desarrollo de juegos"],
		["java", "Java"],
		["live", "Emisiones en directo"],
		["webdev", "Desarrollo web"],
	];
</script>

<form on:submit|preventDefault>
  <TextBox label="Serie" placeholder="Título de la serie" bind:value={state.title} />
  <TextBox label="Capítulo" placeholder="Nombre del capítulo" bind:value={state.chapter} />
  <TextBox label="URL" placeholder="URL de la foto" bind:value={state.url} />
  <Select label="Categoría" bind:value={state.category} choices={choices} />
	<button type="submit">Descargar</button>
</form>

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
