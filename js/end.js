const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = window.localStorage["mostRecentScore"];
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;
finalScore.innerText = `Score: ${mostRecentScore}`;

try {
    var last_score = Number(highScores[highScores.length - 1]["score"]);
}

finally {
    if (last_score > Number(mostRecentScore) && highScores.length > 5) {
        username.style.display = "none";
        saveScoreBtn.style.display = "none"
    }
    username.addEventListener('keyup', () => {
        saveScoreBtn.disabled = !username.value; 
    });
    
    saveScoreBtn.addEventListener("click", e => {
        e.preventDefault();
    
        const score = {
            score: mostRecentScore,
            name: username.value
        };
        highScores.push(score);
        highScores.sort((a, b) => b.score - a.score);
        highScores.splice(5);
    
        localStorage.setItem("highScores", JSON.stringify(highScores));
        window.location.assign("/");
    });
}