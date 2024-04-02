function switchToPage(pageName, delay) {
    setTimeout(function() {
        var pageURL = "../Pages/" + pageName;
        window.location.href = pageURL;
    }, delay*1000);
}