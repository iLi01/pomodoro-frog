const startBtn = document.querySelector('#btn-start');

// mock full circle on the main loaded page 
window.onload = function LoadingCircle0() {
  let circle = new ProgressBar.Circle('#progress0', {
    strokeWidth: 6,
    // color: '#5CD266',
    trailColor: '#5CD266',
    trailWidth: 1,
    svgStyle: null
  });
  
  circle.animate(0);
}

// actual moving circle - 1min
function LoadingCircle() {
  let circle = new ProgressBar.Circle('#progress', {
    strokeWidth: 6,
    easing: 'linear',
    duration: 1*60000,
    color: '#5CD266',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: null
  });
  
  circle.animate(1);
}

//25min
function LoadingCircle2() {
  let circle = new ProgressBar.Circle('#progress', {
    strokeWidth: 6,
    easing: 'linear',
    duration: 25*60000,
    color: '#5CD266',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: null
  });
  
  circle.animate(1);
}

//50min
function LoadingCircle3() {
  let circle = new ProgressBar.Circle('#progress', {
    strokeWidth: 6,
    easing: 'linear',
    duration: 50*60000,
    color: '#5CD266',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: null
  });
  
  circle.animate(1);
}

const mainWheel = document.querySelector('#progress');
const mockDiv = document.querySelector('#progress0');

// removing the fake wheel and showing the actual one
const removeMockDiv = startBtn.addEventListener('click', () => {
  removeMockDiv = mockDiv.remove();
});

// stops wheel from looping
// startBtn.addEventListener('click', (LoadingCircle), {once: true});


// start button becomes restart button after clicking button & restart reloads the page
startBtn.addEventListener("click", function() {
  if (startBtn.textContent = "Start") {
    startBtn.textContent = "Restart";
      startBtn.addEventListener("click", function() {
        window.location.reload();
      })
  } else {
    startBtn.textContent = "Start";
  }
});

// volume of audio
let audio = document.getElementById("audio1");
let ribbit = document.getElementById("audio2");

ribbit.volume = 0.1;
audio.volume = 0.2;

function play() {
  audio.play();
}
function pause() {
  audio.pause();
}

//changing the sound icon
const soundBtn = document.getElementById('btn-mute');
const soundIcon = document.getElementById('sound-icon');

soundBtn.addEventListener("click", function() {
  if (soundIcon.src.endsWith("sound-on.png")) {
    soundIcon.src = "./assets/sound-off.png";
    audio.pause();
  } else {
    soundIcon.src = "./assets/sound-on.png";
    audio.play();
  }
});

// timer in array - MAIN one
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
      audio.pause();

      //ribbit sounds to tell when break time starts
      setTimeout(function(){
        ribbit.play();
          setTimeout(function(){
              ribbit.pause();
          }, 4000);
      }, 500);

      const frogGif = document.getElementById("froggo");
        if (frogGif.src.endsWith("coding-frog.gif")) {
            frogGif.src = "./assets/dancing-frog.gif";
        } else {
      frogGif.src = "./assets/dancing-frog.gif";
  }
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

//when button clicked - timer array / function starts
//AUTOMATICALLY WITHOUT CLICKING ON ANY RADIO !!
// when timer starts - sounds starts as well !!ONLY IF IT'S NOT OFF ALREADY
const timer = startBtn.addEventListener('click', () => {
  audio.play();
  if (soundIcon.src.endsWith("sound-off.png")) {
    audio.pause();
  }

  LoadingCircle(), {once: true};

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


///RADIO 1 CLICKED (default anyway but you can go back if RE-clicked)
const radio1 = document.getElementById("radio-1");

radio1.addEventListener('click', () => {
  document.querySelector("span#seconds").innerHTML = "00";
  document.querySelector("span#minutes").innerHTML = "01";
  
  startBtn.addEventListener('click', () => {
  audio.play();
  if (soundIcon.src.endsWith("sound-off.png")) {
    audio.pause();
  }

  LoadingCircle(), {once: true};

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
}}, {once: true});}, {once: true});
//{once: true} doesn't allow event bubbling aka over pressing the buttons & messing up the timer
//(eg. if you press 3 times, it would -3seconds instead of just -1second)



///RADIO 2 CLICKED & new timer
const radio2 = document.getElementById("radio-2");

const currentTime2 = {
  // mins: 25
  mins2: 25, 
  secs2: 0,
  decrement2: function (current = this) {

    if (current.secs2 == 0 && current.mins2 > 0) {
      currentTime2.mins2 -= 1;
      currentTime2.secs2 = 59;

    } else if (current.secs2 == 0 && current.mins2 == 0) {
      current.secs2 = 0;
      current.mins2 = 0;
      audio.pause();
      
      //ribbit sounds to tell when break time starts
      setTimeout(function(){
        ribbit.play();
          setTimeout(function(){
              ribbit.pause();
          }, 4000);
      }, 500);

        if (frogGif.src.endsWith("coding-frog.gif")) {
            frogGif.src = "./assets/dancing-frog.gif";
        } else {
      frogGif.src = "./assets/dancing-frog.gif";
  }
    }

    else {
      currentTime2.secs2 -= 1
    }


    return {
      ...currentTime2
    }
  }
}

const datetimeHelper2 = ({ mins2, secs2 }) => {
  return `M${mins2}S${secs2}`
  }

radio2.addEventListener('click', () => {
  document.querySelector("span#seconds").innerHTML = "00";
  document.querySelector("span#minutes").innerHTML = "25";

  startBtn.addEventListener('click', () => {
  audio.play();
  if (soundIcon.src.endsWith("sound-off.png")) {
    audio.pause();
  }

  LoadingCircle2(), {once: true};

function pomodoro2() {
currentTime2.decrement2(currentTime2)
document.querySelector("span#seconds").innerHTML = currentTime2.secs2 < 10 ? `0${currentTime2.secs2}` : currentTime2.secs2;
document.querySelector("span#minutes").innerHTML = currentTime2.mins2 < 10 ? `0${currentTime2.mins2}` : currentTime2.mins2;
}

let tick2 = setInterval(() => {
pomodoro2()
console.log(currentTime2)
}, 1000);

if (currentTime2.secs2 == 0 && currentTime2.mins2 == 0) {
currentTime2.mins2 = 0;
currentTime2.secs2 = 0;
clearInterval(tick2);
}}, {once: true});}, {once: true});
//{once: true} doesn't allow event bubbling aka over pressing the buttons & messing up the timer
//(eg. if you press 3 times, it would -3seconds instead of just -1second)


///RADIO 3 CLICKED & new timer
const radio3 = document.getElementById("radio-3");

const currentTime3 = {
  // mins: 25
  mins3: 50, 
  secs3: 0,
  decrement3: function (current = this) {
    
    if (current.secs3 == 0 && current.mins3 > 0) {
      currentTime3.mins3 -= 1;
      currentTime3.secs3 = 59;

    } else if (current.secs3 == 0 && current.mins3 == 0) {
      current.secs3 = 0;
      current.mins3 = 0;
      audio.pause();
      
      //ribbit sounds to tell when break time starts
      setTimeout(function(){
        ribbit.play();
          setTimeout(function(){
              ribbit.pause();
          }, 4000);
      }, 500);

      document.getElementById("audio2").loop = false;
        if (frogGif.src.endsWith("coding-frog.gif")) {
            frogGif.src = "./assets/dancing-frog.gif";
        } else {
      frogGif.src = "./assets/dancing-frog.gif";
  }
    }

    else {
      currentTime3.secs3 -= 1
    }


    return {
      ...currentTime3
    }
  }
}

const datetimeHelper3 = ({ mins3, secs3 }) => {
  return `M${mins3}S${secs3}`
  }

radio3.addEventListener('click', () => {
  document.querySelector("span#seconds").innerHTML = "00";
  document.querySelector("span#minutes").innerHTML = "50";

  startBtn.addEventListener('click', () => {
  audio.play();
  if (soundIcon.src.endsWith("sound-off.png")) {
    audio.pause();
  }

  LoadingCircle3(), {once: true};

function pomodoro3() {
currentTime3.decrement3(currentTime3)
document.querySelector("span#seconds").innerHTML = currentTime3.secs3 < 10 ? `0${currentTime3.secs3}` : currentTime3.secs3;
document.querySelector("span#minutes").innerHTML = currentTime3.mins3 < 10 ? `0${currentTime3.mins3}` : currentTime3.mins3;
}

let tick3 = setInterval(() => {
pomodoro3()
console.log(currentTime3)
}, 1000);

if (currentTime3.secs3 == 0 && currentTime3.mins3 == 0) {
currentTime3.mins3 = 0;
currentTime3.secs3 = 0;
clearInterval(tick3);
}}, {once: true});}, {once: true});
//{once: true} doesn't allow event bubbling aka over pressing the buttons & messing up the timer
//(eg. if you press 3 times, it would -3seconds instead of just -1second)