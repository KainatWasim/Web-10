let timer;
    let minutes = 25;
    let seconds = 0;
    let isRunning = false;

    function updateDisplay() {
      let m = minutes < 10 ? "0" + minutes : minutes;
      let s = seconds < 10 ? "0" + seconds : seconds;
      document.getElementById("timer").innerText = m + ":" + s;
    }

    function startTimer() {
      if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
          if (seconds === 0) {
            if (minutes === 0) {
              clearInterval(timer);
              isRunning = false;
              alert("Time’s up! Take a break.");
            } else {
              minutes--;
              seconds = 59;
            }
          } else {
            seconds--;
          }
          updateDisplay();
        }, 1000);
      }
    }

    function stopTimer() {
      clearInterval(timer);
      isRunning = false;
    }

    function resetTimer() {
      clearInterval(timer);
      isRunning = false;
      minutes = 25;
      seconds = 0;
      updateDisplay();
    }

    function setShortBreak() {
      clearInterval(timer);
      isRunning = false;
      minutes = 5;
      seconds = 0;
      updateDisplay();
    }

    function setLongBreak() {
      clearInterval(timer);
      isRunning = false;
      minutes = 15;
      seconds = 0;
      updateDisplay();
    }

    updateDisplay();