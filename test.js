console.log('script loaded');

function defer(method) {
    if (window.jQuery) {
        method();
    } else {
        setTimeout(function() { defer(method) }, 50);
    }
}

function onJqueryInitiated() {
    const cardContainer = $('#fund-grid-container')
     const tableContainer = $('#fund-table-container')
     console.log(cardContainer, tableContainer);
}


defer(onJqueryInitiated);
