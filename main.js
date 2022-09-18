const questions = document.querySelectorAll('p.question')

for (let question of questions) 
    question.addEventListener('click', showAnswer)

function showAnswer(e) {
    e.target.classList.toggle('active')
    let quest = e.target.parentNode.children[0].children[0].classList
    let ans = e.target.parentNode.children[1].classList
    quest.toggle('active')
    ans.toggle('active')
}