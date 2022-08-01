<script>
  import { store } from "./lib/state";
  import {
    Select,
    FormGroup,
    TextInput,
    TextInputSkeleton,
    SelectSkeleton,
    SelectItem,
  } from "carbon-components-svelte";

  let selectedTopic = null;
  let playlists = [];
  let playlistsSelect = [];
  let selectedPlaylist = null;

  let picked = false;

  const CATEGORIES = {
    "desarrollo-de-juegos": "gamedev",
    java: "java",
    "mejora-tus-skills": "skills",
    "emisiones-en-directo": "live",
    "lenguajes-de-programacion": "programming",
    "desarrollo-web": "webdev",
  };

  function fetchTopics() {
    return fetch("https://www.makigas.es/temas.json")
      .then((xhr) => xhr.json())
      .then(({ topics }) => topics.map(({ title, slug }) => ({ title, slug })));
  }

  function fetchTopic(slug) {
    return fetch(`https://www.makigas.es/temas/${slug}.json`)
      .then((xhr) => xhr.json())
      .then(({ playlists }) =>
        playlists.map((p) => ({
          title: p.title,
          icon: p._links.icon[0].href,
        })),
      );
  }

  function topicChanged(e) {
    selectedTopic = e.detail;
    picked = true;
    fetchTopic(selectedTopic).then((lists) => {
      playlists = lists;
      playlistsSelect = playlists.map((p) => [p.title, p.title]);
      selectedPlaylist = playlistsSelect[0][0];
      updateState();
    });
  }

  function listChanged(e) {
    selectedPlaylist = e.detail;
    updateState();
  }

  function updateState() {
    let data = playlists.find((i) => i.title === selectedPlaylist);
    $store.category = CATEGORIES[selectedTopic];
    $store.title = data.title;
    $store.url = data.icon;
  }

  let topics = fetchTopics();
</script>

<FormGroup>
  {#await topics}
    <SelectSkeleton />
    <SelectSkeleton />
    <TextInputSkeleton />
  {:then topicList}
    <Select on:change={topicChanged} labelText="Tema" value={selectedTopic}>
      {#if !picked}
        <SelectItem text="(Elegir)" />
      {/if}
      {#each topicList.map((t) => [t.slug, t.title]) as topic}
        <SelectItem value={topic[0]} text={topic[1]} />
      {/each}
    </Select>
    <Select on:change={listChanged} labelText="Lista" value={selectedPlaylist}>
      {#each playlistsSelect as playlist}
        <SelectItem value={playlist[0]} text={playlist[1]} />
      {/each}
    </Select>
    <TextInput
      labelText="Capítulo"
      placeholder="Nombre del capítulo"
      bind:value={$store.chapter}
    />
  {/await}
</FormGroup>
