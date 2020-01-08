class Viewer {
    viewerjs = "ViewerJS/index.html";
    
    constructor(context, options) {
        this.context = context;
        let webview = `<webview src="${this.viewerjs}" style="width: 100%; height: 100%;"></webview>`;

        this.context.append(webview);
        if(options.path)
            this.loadSync(options.path);
    }

    loadSync(path) {
        this.webview.replace(/src=".+"/gi, `src="${this.viewerjs}#${path}"`);
    }
}

exports.new = (id, options  = {}) => new Viewer(id, options);