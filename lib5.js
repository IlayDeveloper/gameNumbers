// Запуск игры с кнопки "Начать игру"
VK.api("users.get", {"access_token": "DjUsoVJWogmtBEVzOa5R"}, function (data) {
          alert(data.response.first_name);
});
(function() {
  var numberRandom;
  window.start = function() {
    document.getElementById('Textstart').innerHTML = 'I made a number. Try to guess. Write a number from 1 to 1000. You have 10 attempts.';
    document.getElementById('Textstart').style.display = "block";
    document.getElementById('div1').style.display = "flex";
    document.getElementById('valueUser').innerHTML = " ";
    document.getElementById('buttonStart').value = "Restart";
    document.getElementById('writeText').type = 'text';
    document.getElementById('OK').type = 'button';
    document.getElementById('Cancel').type = 'button';

    //Объявление количество попыток
    function makeCounter () {
      var currentCount = 9;

      return function () {
        return currentCount--;
      }
     }
    window.counter = makeCounter ();
    window.counter2 = makeCounter ();
    window.counter3 = makeCounter ();
    function getRandomInt ( min, max ) {
      return Math.floor ( Math.random() * ( max - min )) + min;
    }
    return numberRandom = getRandomInt ( 1, 1001 );
  }
//==========================++==============================\\
// Основная логика игры при нажатие кнопки "ОК"
  window.enterCodeOK = function () {

    var numberUser = document.getElementById('writeText').value;

    if ( numberUser > numberRandom && counter2()>=1 ) {
      document.getElementById('Textstart').innerHTML = 'Enter a number less, you have left ' + counter();
      document.getElementById('writeText').value = ' ';
      document.getElementById('valueUser').innerHTML += (10-counter3()) + ' attempt: ' + numberUser + "<br>";
    } else if (numberUser < numberRandom && counter2()>=1 ) {
        document.getElementById('Textstart').innerHTML = 'Enter a number more, you have left ' + counter();
        document.getElementById('writeText').value = " ";
        document.getElementById('valueUser').innerHTML += (10-counter3()) + ' attempt: ' + numberUser + "<br>";
    } else if (isNaN(numberUser) && counter2()>=1 ) { // Если вводит не число
        document.getElementById('Textstart').innerHTML = 'Enter the number, please, you have left '+ counter();
        document.getElementById('writeText').value = " ";
        document.getElementById('valueUser').innerHTML += (10-counter3()) + ' attempt: ' + numberUser + "<br>";
    } else if (numberUser == numberRandom) { //Если угадал правильное число
        document.getElementById('Textstart').innerHTML = 'Correctly! The number is indeed ' + numberRandom;
        document.getElementById('valueUser').innerHTML += (10-counter3()) + ' attempt: ' + numberUser + "<br>";
        document.getElementById('writeText').type = 'hidden';
        document.getElementById('OK').type = 'hidden';
        document.getElementById('Cancel').type = 'hidden';
        document.getElementById('writeText').value = " ";
        document.getElementById('buttonStart').value = "Restart";
    }else if (counter()===0) { //Начать заново,если попытки были исчерпаны
        document.getElementById('Textstart').innerHTML = 'The attempts were over. Correct number ' + numberRandom ;
        document.getElementById('valueUser').innerHTML += (10-counter3()) + ' attempt: ' + numberUser + "<br>";
        document.getElementById('writeText').type = 'hidden';
        document.getElementById('OK').type = 'hidden';
        document.getElementById('Cancel').type = 'hidden';
        document.getElementById('buttonStart').value = "Restart";
    }
  }

// Основная логика игры при нажатие кнопки "Отмена"
  window.enterCodeCancel = function(){
    document.getElementById('Textstart').innerHTML = 'The game is stopped. Correct number '+ numberRandom;
    document.getElementById('writeText').type = 'hidden';
    document.getElementById('OK').type = 'hidden';
    document.getElementById('Cancel').type = 'hidden';
    document.getElementById('div1').style.display = "none";
    document.getElementById('valueUser').innerHTML = " ";
    document.getElementById('writeText').value = " ";
    document.getElementById('buttonStart').value = "Play";
  }
}) ()
