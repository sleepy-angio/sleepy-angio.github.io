console.log('script loaded');

function defer(method) {
    if (window.jQuery) {
        method();
    } else {
        setTimeout(function() { defer(method) }, 50);
    }
}

function onJqueryInitiated() {
    // jQuery
    const shadowWrapper = $('#shadow-wrapper');   
    
    if (shadowWrapper && shadowWrapper[0].shadowRoot) {
        const shadowRoot = shadowWrapper[0].shadowRoot;
        const shadowEl = $(shadowRoot.innerHTML);
        const h1 = shadowEl.find("h1");
        console.log("jQuery", h1);
        h1.html(h1.innerHtml + " (Im in a shadow dom)");
    } else {
        console.log('Cant find el');        
    }
    
    // Vanilla
    const w = document.getElementById("shadow-wrapper");
    
    if (w) {
      console.log(w);
      const h1 = w.shadowRoot?.querySelector("h1");
      console.log(h1);
    }
}


defer(onJqueryInitiated);
