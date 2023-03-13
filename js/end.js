const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = window.localStorage["mostRecentScore"];

const MAX_HIGH_SCORES = 5;
finalScore.innerText = `Score: ${mostRecentScore}`;
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value; 
});
    
saveScoreBtn.addEventListener("click", e => {
    e.preventDefault();
});