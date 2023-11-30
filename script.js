const startBtn = document.querySelector('#btn-start');

// mock full circle on the main loaded page 
window.onload = function LoadingCircle0() {
  let circle = new ProgressBar.Circle('#progress0', {
    strokeWidth: 5,
    // color: '#5CD266',
    trailColor: '#5CD266',
    trailWidth: 1,
    svgStyle: null
  });
  
  circle.animate(0);
}

function LoadingCircle() {
  let circle = new ProgressBar.Circle('#progress', {
    strokeWidth: 5,
    easing: 'linear',
    duration: 25*60000,
    color: '#5CD266',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: null
  });
  
  circle.animate(1);
}


// function intervalGap(){
//   let no = 1;
//   setInterval(function(){
//   if(no < 4){
//       LoadingCircle();
//       mainWheel.remove();
//       no++;
//   }else{
//       clearInterval();
//   }}, 60000); // for every second a new wheel starts
// }
// intervalGap()


// const sectionDiv = document.querySelector('#timer-section');
const mainWheel = document.querySelector('#progress');
const mockDiv = document.querySelector('#progress0');

const removeMockDiv = startBtn.addEventListener('click', () => {
  removeMockDiv = mockDiv.remove();
});

startBtn.addEventListener('click', (LoadingCircle), {once: true});

const currentTime = {
  // mins: 25
  mins: 1, 
  secs: 0,
  increment: function (current = this) {

    if (current.secs == 59) {
      currentTime.mins += 1
      currentTime.secs = 0
    } 
    
    else {
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

const timer1 = startBtn.addEventListener('click', () => {
  audio.play();
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
}}, {once: true});

let audio = document.getElementById("audio");
audio.volume = 0.5;

function play() {
  audio.play();
}
function pause() {
  audio.pause();
}