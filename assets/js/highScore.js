const highScoresList = document.querySelector('#highScoresList')
const highScores =JSO.parse(localStorage.getItem('highScores')) || []

highScoresList.innerHTML = 
highScores.map(score => {
    return <li class="high-score">${score.name} - ${score.score} </li>

}).join('')