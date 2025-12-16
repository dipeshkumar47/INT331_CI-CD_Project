const player = document.getElementById("player");
const obstacle = document.getElementById("obstacle");
const scoreEl = document.getElementById("score");

let isJumping = false;
let position = 0;
let score = 0;
let passed = false;

// Jump
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowUp" && !isJumping) {
        jump();
    }
});

function jump() {
    isJumping = true;
    let up = setInterval(() => {
        if (position >= 120) {
            clearInterval(up);
            let down = setInterval(() => {
                if (position <= 0) {
                    clearInterval(down);
                    isJumping = false;
                }
                position -= 5;
                player.style.bottom = position + 10 + "px";
            }, 20);
        }
        position += 5;
        player.style.bottom = position + 10 + "px";
    }, 20);
}

// Collision + scoring
setInterval(() => {
    let playerBottom = parseInt(
        window.getComputedStyle(player).getPropertyValue("bottom")
    );
    let obstacleLeft = parseInt(
        window.getComputedStyle(obstacle).getPropertyValue("left")
    );

    // Collision
    if (obstacleLeft < 90 && obstacleLeft > 50 && playerBottom < 60) {
        alert("Game Over! Score: " + score);
        location.reload();
    }

    // Score when obstacle passed
    if (obstacleLeft < 50 && !passed) {
        score++;
        scoreEl.innerText = "Score: " + score;
        passed = true;
    }

    if (obstacleLeft > 650) {
        passed = false;
    }
}, 20);
