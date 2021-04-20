const state = {
  kind: "programming",
  title: "Lanzar aros",
  subtitle: "Capítulo 14",
  icon:
    "https://cdn.makigas.es/playlists/thumbnails/000/000/026/hidef/Thumb.png?1610556923",
};

function updateViewer() {
  document.getElementById("thumb").setAttribute("class", "thumb " + state.kind);
  document.getElementById("text-title").innerHTML = state.title;
  document.getElementById("text-description").innerHTML = state.subtitle;
  document
    .getElementById("icon-image-src")
    .setAttribute("xlink:href", state.icon);
}

function resetForm() {
  document.getElementById("kind").value = state.kind;
  document.getElementById("title").value = state.title;
  document.getElementById("subtitle").value = state.subtitle;
  document.getElementById("icon-src").value = state.icon;
}

resetForm();
updateViewer();

document.getElementById("kind").addEventListener("change", (e) => {
  state.kind = e.target.value;
  updateViewer();
});

document.getElementById("title").addEventListener("keyup", (e) => {
  state.title = e.target.value;
  updateViewer();
});
document.getElementById("subtitle").addEventListener("keyup", (e) => {
  state.subtitle = e.target.value;
  updateViewer();
});
document.getElementById("icon-src").addEventListener("keyup", (e) => {
  state.icon = e.target.value;
  updateViewer();
});

document.getElementById("download").addEventListener("click", () => {
  saveSvgAsPng(document.getElementById("thumb"), "Thumbnail.png", {
    scale: 1.5,
  });
});

// https://cdn.makigas.es/playlists/thumbnails/000/000/026/hidef/Thumb.png?1610556923
