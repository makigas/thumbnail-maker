<script>
	// TODO: Can Svelte fail if a prop is not given?
	export let label = "";
	export let placeholder = label;
	export let value = null;
</script>

{#if label}
<label>
<span>{label}:</span>
<input type="text" placeholder={placeholder} bind:value={value} />
</label>
{/if}

<style>
label {
	display: block;
	width: 100%;
}

span {
  margin-bottom: 0.25rem;
}

span, input {
	display: block;
	width: 100%;
}

@media (min-width: 800px) {
	label{
		display: flex;
    gap: 1rem;
    align-items: baseline;
	}
	span, input {
		display: initial;
	}
	span {
		max-width: 19rem;
		text-align: right;
	}
	input {
		flex: 1;
	}
}
</style>

