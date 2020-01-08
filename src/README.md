# Electron ViewerJS
The PDF/ODT/ODP embedded viewer based on ViewerJS for Electron.

![screen-shot-1](https://user-images.githubusercontent.com/241133/71978767-ba244b00-324e-11ea-8d77-ac934f3ef61a.png)

## Installation
```bash
$ npm i --save electron-viewerjs
```

## Usage
Enable `webviewTag` in `main.js`:
```js
mainWindow = new BrowserWindow({
    ...
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      webviewTag: true //Enable webviewTag
    }
    ...
  })
```

Declare container in `index.html`

```html
<div id="sample-viewer-1" style="width: 100%; height: 100%;"></div>
<div id="sample-viewer-2" data-src="./sample-pdf2-doc.pdf" style="width: 100%; height: 100%;"></div>
```

Declare `viewer` in `renderer.js`

```js
const viewer = require('electron-viewerjs');
```

There are 3 ways of initialize

1. Load file at constructor

```js
let ctx = document.getElementById('sample-viewer-1');
viewer.new(ctx, {path: './sample-pdf1-doc.pdf'});
```

2. Load file by attribute `data-src="..."`
```js
let ctx = document.getElementById('sample-viewer-2');
viewer.new(ctx); //No need to put path here.
```

3. Load file after initialized
```js
let ctx = document.getElementById('sample-viewer-1');
let preview = viewer.new(ctx);
preview.loadSync('./sample-odt-doc.odt'); //Load ODT document file after initialized.
```