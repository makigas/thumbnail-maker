# thumbnail-maker

## About

This is the web application that I use to generate the thumbnails used in my videos and in my playlists.

The web application allows to preview the thumbnail using an SVG template where the values, colors and images are selected using the form.

When the thumbnail is ready, clicking the Download button will convert the SVG into a PNG file using [save-svg-as-png](https://www.npmjs.com/package/save-svg-as-png) and download it as a PNG that can be uploaded to YouTube or to the CMS system.

## Web Application Architecture

Chaos.

However, I'm refactoring the application to use a CSS framework and I am taking the opportunity to cleanup some components.

## How to run

`npm run dev`

## How to build

`npm run build` && `npm run preview` to double check that it works.

## How to deploy

I am using GitHub Pages for this.

## What the license

GNU General Public License 3.0, as usual, to prevent you from doing privative things to my project... somehow. See COPYING for the raw license.