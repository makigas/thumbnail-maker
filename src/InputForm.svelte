<script>
  import { store } from "./lib/state";

  export let selected;
  export let is2023 = false;

  import {
    FormGroup,
    TextInput,
    Select,
    SelectItem,
    Checkbox,
    Grid,
    Column,
    Row,
    TextArea,
  } from "carbon-components-svelte";

  let titleSizes = [
    ["sm", "Pequeño"],
    ["md", "Mediano"],
    ["lg", "Grande"],
  ];

  let titleNarrow = [
    ["off", "No"],
    ["slight", "Ligero"],
    ["hard", "Mucho"],
  ];

  let titleAlign = [
    ["start", "Izquierda"],
    ["center", "Centrado"],
    ["end", "Derecha"],
  ];

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
  {#if is2023}
    <Row>
      <Column>
        <Select labelText="Tamaño" bind:selected={$store.titleSize}>
          {#each titleSizes as size}
            <SelectItem value={size[0]} text={size[1]} />
          {/each}
        </Select>
      </Column>
      <Column>
        <Select labelText="Condensar" bind:selected={$store.titleNarrow}>
          {#each titleNarrow as narrow}
            <SelectItem value={narrow[0]} text={narrow[1]} />
          {/each}
        </Select>
      </Column>
      <Column>
        <Select labelText="Alinear" bind:selected={$store.titleAlign}>
          {#each titleAlign as align}
            <SelectItem value={align[0]} text={align[1]} />
          {/each}
        </Select>
      </Column>
    </Row>
  {/if}
  <Row>
    <Column>
      <TextArea
        labelText="Serie"
        placeholder="Título de la serie"
        bind:value={$store.title}
      />
    </Column>
  </Row>
  {#if selected === 0}
    <Row>
      {#if is2023}
        <Column sm={1} md={2} lg={2}>
          <TextInput
            labelText="Número"
            placeholder="Número de capítulo"
            bind:value={$store.episode}
          />
        </Column>
      {/if}
      <Column sm={is2023 ? 3 : 4} md={is2023 ? 6 : 8} lg={is2023 ? 14 : 16}>
        <TextInput
          labelText="Capítulo"
          placeholder="Nombre del capítulo"
          bind:value={$store.chapter}
        />
      </Column>
    </Row>
  {/if}
  <Row>
    <Column>
      <Select labelText="Categoría" bind:selected={$store.category}>
        {#each choices as choice}
          <SelectItem value={choice[0]} text={choice[1]} />
        {/each}
      </Select>
    </Column>
  </Row>
</FormGroup>
