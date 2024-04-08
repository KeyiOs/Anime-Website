(function() {
    let fog1 = document.querySelector(".fog#first");
    let fog2 = document.querySelector(".fog#second");
    let fog3 = document.querySelector(".fog#third");

    var fog1offest = fog1.offsetTop;
    var fog2offest = fog2.offsetTop;
    var fog3offest = fog3.offsetTop;

    window.addEventListener('scroll', function(){
        let value = window.scrollY;
        if (this.window.innerWidth > 1700) {
            fog1.style.top = fog1offest + 295 + (value * 0.95) + 'px';
            fog2.style.top = fog2offest + 295 + (value * 0.7) + 'px';
            fog3.style.top = fog3offest + 295 + (value * 0.5) + 'px';
        } else {
            fog1.style.top = fog1offest + 295 + (value * 0.95) + 'px';
            fog2.style.top = fog2offest + 295 + (value * 0.9) + 'px';
            fog3.style.top = fog3offest + 295 + (value * 0.85) + 'px';
        }
    })
})();