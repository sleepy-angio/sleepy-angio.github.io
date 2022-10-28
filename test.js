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
        const h1 = $("h1", shadowRoot);;

        h1.text(h1.html() + " jquery update in a shadow dom");
    } else {
        console.log('Cant find el');        
    }
    
    
    
    /* 
    // Vanilla
    const w = document.getElementById("shadow-wrapper");
    
    if (w) {
      console.log(w);
      const h1 = w.shadowRoot?.querySelector("h1");
        // This works
        h1.innerHTML = "Updated with vanilla";
      console.log(h1);
    }
    // Vanilla update working
    const elementRef = document.getElementById("shadow-wrapper");
    const firstHeading = elementRef.shadowRoot.getElementById("one");
    firstHeading.innerHTML = firstHeading.innerHTML + " vanilla update";

    // jQuery update
    const shadowWrapper = $('#shadow-wrapper'); 
    const shadowRoot = shadowWrapper[0].shadowRoot;
    const secondHeading = $("#two", shadowRoot);
    secondHeading.text(secondHeading.html() + " jquery update");
    */
}


defer(onJqueryInitiated);
