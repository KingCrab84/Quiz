const username = document.querySelector("#username");
const saveScoreBtn = document.querySelector("#saveScoreBtn");
const finalScore = document.querySelector("#finalScore");
const mostRecentScore = localStorage["mostRecentScore"];
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;
finalScore.innerHTML = `Score: ${mostRecentScore}`;

let lastScore;

try {
    lastScore = Number(highScores[highScores.length - 1]["score"]);
}

finally {
    if (lastScore > Number(mostRecentScore)) {
        username.style.display = "none";
        saveScoreBtn.style.display = "none";
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
        window.location.assign("index.html");
    });
}