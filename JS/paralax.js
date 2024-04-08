(function() {
    let fog1 = document.querySelector(".fog#first");
    let fog2 = document.querySelector(".fog#second");
    let fog3 = document.querySelector(".fog#third");
    let fog4 = document.querySelector(".fog#fourth");

    var fog1offest = fog1.offsetTop;
    var fog2offest = fog2.offsetTop;
    var fog3offest = fog3.offsetTop;
    var fog4offest = fog4.offsetTop;

    window.addEventListener('scroll', function(){
        let value = window.scrollY;
        if (this.window.innerWidth > 1700) {
            if (value > 1000) value = 1000;
            fog1.style.top = fog1offest + 295 + (value * 0.8) + 'px';
            fog2.style.top = fog2offest + 295 + (value * 0.6) + 'px';
            fog3.style.top = fog3offest + 295 + (value * 0.4) + 'px';
            fog4.style.top = fog4offest + 295 + (value * 0.2) + 'px';
        } else {
            if (value > 1300) value = 1300;
            fog1.style.top = fog1offest + 295 + (value * 0.9) + 'px';
            fog2.style.top = fog2offest + 295 + (value * 0.8) + 'px';
            fog3.style.top = fog3offest + 295 + (value * 0.65) + 'px';
            fog4.style.top = fog4offest + 295 + (value * 0.55) + 'px';
        }
    })
})();