let playerPoints = 0
let cpuPoints = 0

const player = document.getElementById("playerPoints")
const cpu = document.getElementById("cpuPoints")

const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")

const modal = document.getElementById("modal")
const restart = document.getElementById('restart')

const showWinner = document.getElementById('showWiner')
const playerAnswer = document.getElementById('cpuAnswer')
const cpuAnswer = document.getElementById('cpuAnswer')

function getCpuChoice(){
    const Choices = ['rock','paper','scissors']
    const random = Math.floor(Math.random() * 3)
    return Choices[random]
}

function win(playerChoice, cpuChoice){
    playerPoints++;
    player.innerText = playerPoints
    cpu.innerText = cpuPoints
    showWinner.innerText = "Has ganado"
    playerAnswer.innerText = playerChoice
    cpuAnswer.innerText = cpuChoice
    modal.style.display = "block"
}

function lose(playerChoice, cpuChoice){
    cpuPoints++;
    cpu.innerText = cpuPoints
    player.innerText = playerPoints
    showWinner.innerText = "Has perdido"
    playerAnswer.innerText = playerChoice
    cpuAnswer.innerText = cpuChoice
    modal.style.display = "block"
}

function draw(){
    player.innerText = playerPoints
    cpu.innerText = cpuPoints
    showWinner.innerText = "Empate"
    modal.style.display = "block"
}

function play(playerChoice){
    const cpuChoice = getCpuChoice()
    switch(playerChoice + cpuChoice){
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win(playerChoice, cpuChoice);
            break;
        
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            lose(playerChoice, cpuChoice)
            break

        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            draw()
            break;
    }
}

function main(){
    rock.addEventListener('click', function(){
        play('rock')
    })
        
    paper.addEventListener('click', function(){
        play('paper')
    })
    
    scissors.addEventListener('click', function(){
        play('scissors')
    })
}

function Restart(){
    playerPoints = 0
    cpuPoints = 0
    player.innerText = playerPoints
    cpu.innerText = cpuPoints
}

function clearModal(e){
    if(e.target != modal){
        modal.style.display = "none"
    }
}

console.log(getCpuChoice())

restart.addEventListener('click', Restart)

const button = document.querySelector('button')

button.addEventListener('click', clearModal)
main()