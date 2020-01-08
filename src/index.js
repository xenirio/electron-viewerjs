class Viewer {
    viewerjs = `node_modules/electron-viewerjs/ViewerJS/index.html`;
    
    constructor(context, options) {
        this.context = context;
        
        let webview = document.createElement("webview");
        webview.setAttribute("src", this.viewerjs);
        webview.setAttribute("style", "width: 100%; height: 100%;");

        this.context.append(webview);
        this.webview = webview;

        let path = options.path || this.context.getAttribute("data-src");
        if(path)
            this.loadSync(path);
    }

    loadSync(path) {
        this.webview.setAttribute("src", `${this.viewerjs}#../../../${path}`);
    }
}

exports.new = (context, options  = {}) => new Viewer(context, options);