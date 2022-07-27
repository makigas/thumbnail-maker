<script>
  import {
    Form,
    FormGroup,
    TextInput,
    Select,
    SelectItem,
    Button,
  } from "carbon-components-svelte";

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

<Form on:submit>
  <FormGroup>
    <TextInput
      labelText="Serie"
      placeholder="Título de la serie"
      bind:value={state.title}
    />
    <TextInput
      labelText="Capítulo"
      placeholder="Nombre del capítulo"
      bind:value={state.chapter}
    />
    <TextInput
      labelText="URL"
      placeholder="URL de la foto"
      bind:value={state.url}
    />
    <Select labelText="Categoría" bind:selected={state.category}>
      {#each choices as choice}
        <SelectItem value={choice[0]} text={choice[1]} />
      {/each}
    </Select>
  </FormGroup>
  <Button type="submit">Descargar</Button>
</Form>
