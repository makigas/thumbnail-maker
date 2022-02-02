<script>
  import { createEventDispatcher } from 'svelte';
	import { saveSvgAsPng } from 'save-svg-as-png';

  const dispatch = createEventDispatcher()

	export let state;
  export let download;
  let svg;

  $: if (!!download) {
    const title = `${state.title}_${state.chapter}.png`;
    saveSvgAsPng(svg, title);
    dispatch('download');
  }

  $: className = `thumb ${state.category}`;
</script>

<section>
<svg
      bind:this={svg}
      viewBox="0 0 1280 720"
      class={className}
      id="thumb"
      background="#ff9800"
    >
      <defs>
        <filter id="inset-shadow">
          <feOffset dx="10" dy="10" />
          <feGaussianBlur stdDeviation="10" result="offset-blur" />
          <feComposite
            operator="out"
            in="SourceGraphic"
            in2="offset-blur"
            result="inverse"
          />
          <feFlood flood-color="black" flood-opacity="1" result="color" />
          <feComposite operator="in" in="color" in2="inverse" result="shadow" />
          <feComposite operator="over" in="shadow" in2="SourceGraphic" />
        </filter>
        <pattern
          id="icon-image"
          x="0"
          y="0"
          width="100%"
          height="100%"
          viewBox="0 0 180 180"
        >
          <image
            id="icon-image-src"
            width="180"
            height="180"
            xlink:href={state.url} />
          />
        </pattern>
      </defs>
      <rect x="0" y="0" width="1280" height="120" class="bar" />

      <g class="top">
        <svg
          class="makigas"
          aria-role="img"
          aria-hidden="true"
          viewBox="0 0 47 7"
          version="1.1"
          width="432"
          height="120"
          x="50"
        >
          <path
            d="m 0,6 0,-5 2,0 0,1 2,0 0,-1 2,0 0,1 1,0 0,4 -2,0 0,-2 L 4,4 4,5 3,5 3,4 2,4 2,6 0,6 Z"
          ></path>
          <path
            d="m 9,6 0,-1 -1,0 0,-1 1,0 0,-1 L 12,3 12,2 9,2 l 0,-1 L 13,1 l 0,1 1,0 0,4 -5,0 z m 1,-1 L 12,5 12,4 10,4 l 0,1 z"
          ></path>
          <path
            d="m 15,6 0,-6 2,0 0,3 1,0 0,-1 2,0 0,1 -1,0 0,1 1,0 0,1 1,0 0,1 -2,0 0,-1 -1,0 0,-1 -1,0 0,2 -2,0 z"
          ></path>
          <path
            d="m 22,6 0,-1 1,0 0,-2 -1,0 0,-1 3,0 0,3 1,0 0,1 -4,0 z m 1,-5 0,-1 2,0 0,1 -2,0 z"
          ></path>
          <path
            d="m 27,7 0,-1 4,0 0,-1 -3,0 0,-1 -1,0 0,-2 1,0 0,-1 5,0 0,5 -1,0 0,1 -5,0 z m 2,-3 2,0 0,-2 -2,0 0,2 z"
          ></path>
          <path
            d="m 35,6 0,-1 -1,0 0,-1 1,0 0,-1 3,0 0,-1 -3,0 0,-1 4,0 0,1 1,0 0,4 -5,0 z m 1,-1 2,0 0,-1 -2,0 0,1 z"
          ></path>
          <path
            d="m 47,1 0,1 L 43,2 l 0,1 3,0 0,1 1,0 0,1 -1,0 0,1 L 41,6 l 0,-1 4,0 0,-1 L 42,4 l 0,-1 -1,0 0,-1 1,0 0,-1 5,0 z"
          ></path>
        </svg>
        <svg
          class="topic topic-programming"
          height="110"
          width="100"
          x="1130"
          viewBox="0 0 1664 1280"
        >
          <path
            d="M585 727l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393L23 311q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23t-10 23zm1079 457v64q0 14-9 23t-23 9H672q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h960q14 0 23 9t9 23z"
          />
        </svg>
        <svg
          class="topic topic-webdev"
          viewBox="0 0 1856 1408"
          height="120"
          width="100"
          x="1130"
        >
          <path
            d="M585 1143l-50 50q-10 10-23 10t-23-10L23 727q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23L192 704l393 393q10 10 10 23t-10 23zM1176 76L803 1367q-4 13-15.5 19.5T764 1389l-62-17q-13-4-19.5-15.5T680 1332L1053 41q4-13 15.5-19.5T1092 19l62 17q13 4 19.5 15.5T1176 76zm657 651l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393l-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23t-10 23z"
          />
        </svg>
        <svg
          class="topic topic-skills"
          width="70"
          height="90"
          y="15"
          x="1160"
          viewBox="0 0 1024 1536"
        >
          <path
            d="M288 1344q0-40-28-68t-68-28t-68 28t-28 68t28 68t68 28t68-28t28-68zm0-1152q0-40-28-68t-68-28t-68 28t-28 68t28 68t68 28t68-28t28-68zm640 128q0-40-28-68t-68-28t-68 28t-28 68t28 68t68 28t68-28t28-68zm96 0q0 52-26 96.5T928 486q-2 287-226 414q-67 38-203 81q-128 40-169.5 71T288 1152v26q44 25 70 69.5t26 96.5q0 80-56 136t-136 56t-136-56t-56-136q0-52 26-96.5t70-69.5V358q-44-25-70-69.5T0 192q0-80 56-136T192 0t136 56t56 136q0 52-26 96.5T288 358v497q54-26 154-57q55-17 87.5-29.5t70.5-31t59-39.5t40.5-51t28-69.5T736 486q-44-25-70-69.5T640 320q0-80 56-136t136-56t136 56t56 136z"
          />
        </svg>
        <svg
          class="topic topic-gamedev"
          height="110"
          width="120"
          x="1110"
          viewBox="0 0 1920 1280"
        >
          <path
            d="M832 832V704q0-14-9-23t-23-9H608V480q0-14-9-23t-23-9H448q-14 0-23 9t-9 23v192H224q-14 0-23 9t-9 23v128q0 14 9 23t23 9h192v192q0 14 9 23t23 9h128q14 0 23-9t9-23V864h192q14 0 23-9t9-23zm576 64q0-53-37.5-90.5T1280 768t-90.5 37.5T1152 896t37.5 90.5t90.5 37.5t90.5-37.5T1408 896zm256-256q0-53-37.5-90.5T1536 512t-90.5 37.5T1408 640t37.5 90.5T1536 768t90.5-37.5T1664 640zm256 128q0 212-150 362t-362 150q-192 0-338-128H850q-146 128-338 128q-212 0-362-150T0 768t150-362t362-150h896q212 0 362 150t150 362z"
          />
        </svg>
        <svg
          class="topic topic-java"
          height="80"
          y="20"
          width="100"
          x="1130"
          viewBox="0 0 1856 1408"
        >
          <path
            d="M1664 384q0-80-56-136t-136-56h-64v384h64q80 0 136-56t56-136zM0 1152h1792q0 106-75 181t-181 75H256q-106 0-181-75T0 1152zm1856-768q0 159-112.5 271.5T1472 768h-64v32q0 92-66 158t-158 66H480q-92 0-158-66t-66-158V64q0-26 19-45t45-19h1152q159 0 271.5 112.5T1856 384z"
          />
        </svg>
        <svg
          class="topic topic-live"
          height="70"
          y="25"
          width="120"
          x="1120"
          viewBox="0 0 1792 1280"
        >
          <path
            d="M1792 96v1088q0 42-39 59q-13 5-25 5q-27 0-45-19l-403-403v166q0 119-84.5 203.5T992 1280H288q-119 0-203.5-84.5T0 992V288Q0 169 84.5 84.5T288 0h704q119 0 203.5 84.5T1280 288v165l403-402q18-19 45-19q12 0 25 5q39 17 39 59z"
          />
        </svg>
      </g>

      <circle
        class="icon"
        cx="1050"
        cy="420"
        r="180"
        fill="url(#icon-image)"
        filter="url(#inset-shadow)"
      />

      <text
        font-family="Montserrat"
        x="50"
        y="410"
        id="text-title"
        class="title"
      >{state.title}</text>
      <text
        font-family="Montserrat"
        x="50"
        y="520"
        id="text-description"
        class="lesson"
      >{state.chapter}</text>
    </svg>
</section>

<style>
text {
  font-family: Montserrat;
  font-size: 20px;
}

section {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.thumb {
  width: 100%;
}

.bar {
  fill: black;
  opacity: 0.25;
}

.makigas,
.topic {
  fill: white;
}

.title,
.lesson {
  fill: white;
}

.title {
font-size: 80px;
letter-spacing: -4px;
word-spacing: -4px;
  font-weight: bold;
}
.lesson {
font-size: 65px;
letter-spacing: -4px;
word-spacing: -4px;
}

.topic {
  display: none;
}

.thumb.programming {
  background: #ff9800;
}
.thumb.skills {
  background: #2196f3;
}
.thumb.gamedev {
  background: #4caf50;
}
.thumb.java {
  background: #795548;
}
.thumb.live {
  background: #f44336;
}
.thumb.webdev {
  background: #673ab7;
}
.thumb.programming .topic-programming {
  display: block;
}
.thumb.skills .topic-skills {
  display: block;
}
.thumb.gamedev .topic-gamedev {
  display: block;
}
.thumb.java .topic-java {
  display: block;
}
.thumb.live .topic-live {
  display: block;
}
.thumb.webdev .topic-webdev {
  display: block;
}
</style>
