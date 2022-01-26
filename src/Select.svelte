<script>
	export let label;
	export let choices;
	export let value;
</script>

	<label>
		<span>{label}:</span>
		<select bind:value={value}>
      {#each choices as [key, label]}
        <option value={key}>{label}</option>
      {/each}
		</select>
	</label>

<style>
label {
	display: block;
	width: 100%;
}

span {
  margin-bottom: 0.25rem;
}

span, select {
	display: block;
	width: 100%;
}

@media (min-width: 800px) {
	label{
		display: flex;
    gap: 1rem;
    align-items: baseline;
	}
	span, select {
		display: initial;
	}
	span {
		max-width: 19rem;
		text-align: right;
	}
	select {
		flex: 1;
	}
}
</style>
