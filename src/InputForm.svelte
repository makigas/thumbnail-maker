<script>
  import { store } from "./lib/state";

  export let selected;

  import {
    FormGroup,
    TextInput,
    Select,
    SelectItem,
    Checkbox,
  } from "carbon-components-svelte";

  let choices = [
    ["programming", "Programación"],
    ["skills", "Mejora tus skills"],
    ["gamedev", "Desarrollo de juegos"],
    ["java", "Java"],
    ["live", "Emisiones en directo"],
    ["webdev", "Desarrollo web"],
  ];
</script>

<FormGroup>
  <TextInput
    labelText="Serie"
    placeholder="Título de la serie"
    bind:value={$store.title}
  />
  {#if selected === 0}
    <TextInput
      labelText="Capítulo"
      placeholder="Nombre del capítulo"
      bind:value={$store.chapter}
    />
  {/if}
  <Checkbox labelText="Mostrar icono" bind:checked={$store.showIcon} />
  {#if $store.showIcon}
    <TextInput
      labelText="URL"
      placeholder="URL de la foto"
      bind:value={$store.url}
    />
  {/if}
  <Select labelText="Categoría" bind:selected={$store.category}>
    {#each choices as choice}
      <SelectItem value={choice[0]} text={choice[1]} />
    {/each}
  </Select>
</FormGroup>
