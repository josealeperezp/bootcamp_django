var boxList = document.querySelectorAll('td');

var restartButton = document.querySelector('#restartbutton');

restartButton.addEventListener('click', function(){
    for(var i = 0; i < boxList.length; i++) {
      boxList[i].textContent = '';
    }
})

for(var i = 0; i < boxList.length; i++) {
  boxList[i].addEventListener('click', function(){
    this.textContent = assignLetter(this.textContent);
  })
}

function assignLetter(actualValue) {
  if(actualValue == 'X') {
    return 'O';
  } else if(actualValue == 'O') {
    return '';
  } else {
    return 'X';
  }
}
