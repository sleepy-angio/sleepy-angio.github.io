console.log('script loaded');

function defer(method) {
    if (window.jQuery) {
        method();
    } else {
        setTimeout(function() { defer(method) }, 50);
    }
}

function onJqueryInitiated() {
    const shadowWrapper = $('#shadow-wrapper')
    if (shadowWrapper && shadowWrapper.shadowRoot) {
        const h1 = shadowWrapper.shadowRoot.find("h1");
        console.log(h1);
    } else {
        console.log('Cant find el');        
    }
}


defer(onJqueryInitiated);
