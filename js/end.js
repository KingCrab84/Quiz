const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const mostRecentScore = window.localStorage["mostRecentScore"];

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value; 
});

    
saveScoreBtn.addEventListener("click", e => {
    e.preventDefault();
});