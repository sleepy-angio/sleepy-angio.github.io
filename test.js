console.log('script loaded');

function defer(method) {
    if (window.jQuery) {
        method();
    } else {
        setTimeout(function() { defer(method) }, 50);
    }
}

function onJqueryInitiated() {
    const shadowWrapper = $('#shadow-wrapper');
    const w = document.getElementById("shadow-wrapper");
    
    console.log(shadowWrapper, w);
    
    if (shadowWrapper && shadowWrapper[0].shadowRoot) {
        const shadowRoot = shadowWrapper[0].shadowRoot;
        const shadowEl = $(shadowRoot.innerHTML);
        const h1 = shadowEl.find("h1");
        console.log("j", h1);
    } else {
        console.log('Cant find el');        
    }
    
    if (w) {
      console.log(w);
      const h1 = w.shadowRoot?.querySelector("h1");
      console.log(h1);
    }
}


defer(onJqueryInitiated);
