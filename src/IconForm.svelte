<script>
  import {
    Checkbox,
    Column,
    FileUploader,
    FormGroup,
    Row,
    Select,
    SelectItem,
    TextInput,
  } from "carbon-components-svelte";
  import { store } from "./lib/state";

  export let is2023 = false;

  let fileUploader;
  let operation = "url";

  function uploadedFile({ detail }) {
    const file = detail[0];

    if (file.type && file.type.startsWith("image/")) {
      $store.iconLoading = true;
      const reader = new FileReader();
      reader.addEventListener("load", (event) => {
        console.log(event.target);
        $store.url = event.target.result;
        $store.iconLoading = false;
      });
      reader.readAsDataURL(file);
    }
  }
</script>

<FormGroup>
  <Row>
    <Column>
      <Checkbox labelText="Mostrar icono" bind:checked={$store.showIcon} />
    </Column>
  </Row>
  {#if $store.showIcon}
    <Row>
      <Column>
        <Select labelText="Modo" bind:selected={operation}>
          <SelectItem value="url" text="Remoto" />
          <SelectItem value="upload" text="Subir a mano" />
        </Select>
      </Column>
      {#if is2023}
        <Column>
          <Select labelText="Aplicar máscara" bind:selected={$store.mask}>
            <SelectItem value="none" text="No" />
            <SelectItem value="whiteburn" text="Tintar a blanco" />
          </Select>
        </Column>
      {/if}
    </Row>
    {#if operation === "url"}
      <Row>
        <Column>
          <TextInput
            labelText="URL"
            placeholder="URL de la foto"
            bind:value={$store.url}
          />
        </Column>
      </Row>
    {/if}
    {#if operation === "upload"}
      <Row>
        <Column>
          <FileUploader
            bind:this={fileUploader}
            on:change={uploadedFile}
            status={$store.iconLoading ? "uploading" : "complete"}
            labelTitle="Imagen"
            buttonLabel="Seleccionar"
            accept={[".jpg", ".jpeg", ".png", ".gif", ".webp", ".bmp"]}
          />
        </Column>
      </Row>
    {/if}
  {/if}
</FormGroup>
