const viewer = require('electron-viewerjs');

(function() {
    let ctx1 = document.getElementById("sample-viewer-1");
    viewer.new(ctx1, {path: `./sample-pdf1-doc.pdf`});

    let ctx2 = document.getElementById("sample-viewer-2");
    viewer.new(ctx2);

    let ctx3 = document.getElementById("sample-viewer-3");
    let preview = viewer.new(ctx3);
    preview.loadSync("./sample-odt-doc.odt");
 })();