var result
function myfunction() {
  var user = prompt('Choose rock, paper or scissors')
  var computer, ran
  var ran = Math.floor(Math.random() * 3)
  if (ran == 1) {
    computer = 'rock'
  } else if (ran == 2) {
    computer = 'paper'
  } else {
    computer = 'scissors'
  }
  //if(user!=nil)
  check(computer, user)
}
// Function to find out wheather you win/lose/draw.
function check(computer, user) {
    if(computer == 'rock'& user == 'paper') 
    result = 'win'
    else if(computer == 'rock' & user == 'scissors')
    result = 'lose'
    else if (computer == 'paper' & user == 'rock') 
    result = 'lose'
    else if(computer == 'paper' & user == 'scissors')
    result = 'win'
    else if (computer == 'scissors' & user == 'rock') 
    result = 'win'
    else if(computer =='scissors' & user == 'paper') 
    result = 'lose'
    else if(user!='rock'&user!='scissors'&user!='paper')
    result='entered an invalid input'
    else 
    result = 'draw'
  

  alert('Computer choose ' + computer)
  alert('You ' + result)
}

