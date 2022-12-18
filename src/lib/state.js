import { writable } from "svelte/store";

export const store = writable({
  title: "Título",
  chapter: "Subtítulo",
  url: "https://cdn.makigas.es/playlists/thumbnails/000/000/014/default/git.png?1483739128",
  category: "skills",
  episode: 0,
  showIcon: true,

  titleSize: "lg",
  titleNarrow: "off",
  titleAlign: "end",

  mask: "none",
  iconLoading: false,
});
