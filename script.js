window.onload = function LoadingCircle() {
  let circle = new ProgressBar.Circle('#progress', {
    strokeWidth: 6,
    easing: 'easeInOut',
    duration: 1500,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: null
  });

  circle.animate(1);
}

const currentTime = {
  // mins: 25
  mins: 1, 
  secs: 0,
  increment: function (current = this) {

    if (current.secs == 59) {
      currentTime.mins += 1
      currentTime.secs = 0
    } else {

      currentTime.secs += 1
    }

    return {
      ...currentTime
    }
  },

  decrement: function (current = this) {

    if (current.secs == 0 && current.mins > 0) {
      currentTime.mins -= 1;
      currentTime.secs = 59;

    } else if (current.secs == 0 && current.mins == 0) {
      current.secs = 0;
      current.mins = 0;
    }

    else {
      currentTime.secs -= 1
    }


    return {
      ...currentTime
    }
  }
}


const datetimeHelper = ({ mins, secs }) => {
return `M${mins}S${secs}`
}

const startBtn = document.querySelector('#btn-start');

const timer1 = startBtn.addEventListener('click', () => {


function pomodoro() {
currentTime.decrement(currentTime)
document.querySelector("span#seconds").innerHTML = currentTime.secs < 10 ? `0${currentTime.secs}` : currentTime.secs;
document.querySelector("span#minutes").innerHTML = currentTime.mins < 10 ? `0${currentTime.mins}` : currentTime.mins;
}

let tick = setInterval(() => {
pomodoro()
console.log(currentTime)
}, 1000);

if (currentTime.secs == 0 && currentTime.mins == 0) {
currentTime.mins = 0;
currentTime.secs = 0;
clearInterval(tick);
}});