import './assets/global.css';
import "carbon-components-svelte/css/g10.css";
import ThumbnailMaker from "./ThumbnailMaker.svelte";

const app = new ThumbnailMaker({
  target: document.body,
});

export default app;
