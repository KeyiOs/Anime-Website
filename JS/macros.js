function switchToPage(pageName, delay) {
    setTimeout(function() {
        var pageURL = "../Pages/" + pageName;
        window.location.href = pageURL;
    }, delay*1000);
}

function applyMargin() {
    var lis = document.querySelectorAll(`li`);
    lis.forEach(function(li, index) {
        setTimeout(function() {
            var wrapper = li.querySelector('.wrapper');
            wrapper.style.transition = `margin-left 0.2s ease`;
            wrapper.style.marginLeft = 5 + 'px';

            setTimeout(function() {
                wrapper.style.transition = `margin-left 0.2s ease`;
                wrapper.style.marginLeft = '0px';
            }, 200);
        }, index * 80);
    });
}

function navigationWave() {
    setInterval(applyMargin, 5000);
}