function animate() {
    const box = document.querySelector('.box');

    let marginTop = -300;
    let marginLeft = -160;
    let speedTop = 1;
    let speedPositive = 0;
    let speedNegative = 1;
    let ifSwitch = true;
    let verticalSlow = 0.9965;
    let horizontalSlow = 0.003;
    let backSwing = 0.0005;
    let interation = 0;

    function animation() {
        marginTop += speedTop - backSwing;
        speedTop = speedTop * verticalSlow;
        backSwing += 0.0005;

        if(ifSwitch) {
            marginLeft += speedPositive;
            speedPositive += horizontalSlow;
            if(speedPositive > 1) {
                ifSwitch = false;
                speedPositive = -1;
            }
        } else if(interation == 2) {
            return;
        } else {
            marginLeft += speedNegative;
            speedNegative -= horizontalSlow;
            if(speedNegative < -1) {
                ifSwitch = true;
                speedNegative = 1;
                interation++;
            }
        }

        if (speedTop < 0.1) {
            speedTop = 1;
            backSwing = 0.0005;
        }

        box.style.top = marginTop + 'px';
        box.style.left = marginLeft + 'px';

        setTimeout(animation, 1);
    }

    animation();
}