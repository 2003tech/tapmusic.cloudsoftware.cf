window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#606bd3",
        "#60c2d3"
    ]

    // L E T S  M A K E  S O M E  S O U N D
    pads.forEach((pad, index) =>{
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0;
            sounds[index].play()

            createBalls(index);
        });
    });

    // C O L O R E D  B A L L S (cuz why not they look nice)
    const createBalls = (index) => {
        const ball = document.createElement("div");
        visual.appendChild(ball);
        ball.style.backgroundColor = colors[index];
        ball.style.animation = 'jump 1s ease'
        ball.addEventListener('animationend', function(){
            visual.removeChild(this)
        });
    }
});