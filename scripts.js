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

function LoadingCircle() {
  let circle = new ProgressBar.Circle('#progress', {
    strokeWidth: 6,
    easing: 'linear',
    duration: 60000,
    color: '#5CD266',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: null
  });
  
  circle.animate(1);
}

function LoadingCircleGrey() {
  let circle = new ProgressBar.Circle('#progress-grey', {
    strokeWidth: 6,
    easing: 'linear',
    duration: 60000,
    color: '#eee',
    trailColor: '#5CD266',
    trailWidth: 1,
    svgStyle: null
  });
  
  circle.animate(1);
}

function intervalGap(){
  let no = 1;
  setInterval(function(){
  if(no < 4){
      LoadingCircle();
      mainWheel.remove();
      LoadingCircleGrey();
      mainWheelGrey.remove();
      no++;
  }else{
      clearInterval();
  }}, 60000); // for every second a new wheel starts
}
intervalGap();


// function addRemove(){
//   let num = 0;
//   setInterval(function(){
//   if(num < 2){
//       mainWheel.remove();
//       let cloneDiv = mainWheel.cloneNode(true);
//       cloneDiv.id = 'progress';
//       document.body.appendChild(cloneDiv);
//       // ??? add & remove div after each wheel HOW DO I
//       num++;
//   }else{
//       clearInterval();
//   }}, 60000); // for every second a new wheel gets removed & added
// }
// addRemove();

const mainWheelGrey = document.querySelector('#progress-grey');
const sectionDiv = document.querySelector('#timer-section');
const mainWheel = document.querySelector('#progress');
const mockDiv = document.querySelector('#progress0');

const removeMockDiv = startBtn.addEventListener('click', () => {
  removeMockDiv = mockDiv.remove();
});


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

// function reseting(){  
//   LoadingCircle().reset();  
// }  


// for every second a new wheel gets removed & added
// function addRemove(){
//   let num = 0;
//   setInterval(function(){
//   if(num < 2){
//       mainWheel.remove();
//       let cloneDiv = mainWheel.cloneNode(true);
//       cloneDiv.id = 'progress';
//       document.body.appendChild(cloneDiv);
//       num++;
//   }else{
//       clearInterval();
//   }}, 60000); 
// }
// addRemove();

// const sectionDiv = document.querySelector('#timer-section');















// DRAFTS










// const startBtn = document.querySelector('#btn-start');

// // mock full circle on the main loaded page 
// window.onload = function LoadingCircle0() {
//   let circle = new ProgressBar.Circle('#progress0', {
//     strokeWidth: 6,
//     // color: '#5CD266',
//     trailColor: '#5CD266',
//     trailWidth: 1,
//     svgStyle: null
//   });
  
//   circle.animate(0);
// }

// // actual moving circle
// function LoadingCircle() {
//   let circle = new ProgressBar.Circle('#progress', {
//     strokeWidth: 6,
//     easing: 'linear',
//     duration: 1*60000,
//     color: '#5CD266',
//     trailColor: '#eee',
//     trailWidth: 1,
//     svgStyle: null
//   });
  
//   circle.animate(1);
// }

// const mainWheel = document.querySelector('#progress');
// const mockDiv = document.querySelector('#progress0');

// // removing the fake wheel and showing the actual one
// const removeMockDiv = startBtn.addEventListener('click', () => {
//   removeMockDiv = mockDiv.remove();
// });

// // start button becomes restart button after clicking button & restart reloads the page
// startBtn.addEventListener("click", function() {
//   if (startBtn.textContent = "Start") {
//     startBtn.textContent = "Restart";
//       startBtn.addEventListener("click", function() {
//         window.location.reload();
//       })
//   } else {
//     startBtn.textContent = "Start";
//   }
// });

// // stops wheel from looping
// startBtn.addEventListener('click', (LoadingCircle), {once: true});

// // timer in array
// const currentTime = {
//   // mins: 25
//   mins: 1, 
//   secs: 0,
//   increment: function (current = this) {

//     if (current.secs == 59) {
//       currentTime.mins += 1
//       currentTime.secs = 0
//     } 
    
//     else {
//       currentTime.secs += 1
//     }

//     return {
//       ...currentTime
//     }
//   },

//   decrement: function (current = this) {

//     if (current.secs == 0 && current.mins > 0) {
//       currentTime.mins -= 1;
//       currentTime.secs = 59;

//     } else if (current.secs == 0 && current.mins == 0) {
//       current.secs = 0;
//       current.mins = 0;
//       audio.pause();
//       // const frogGif = document.getElementById('froggo');
//       // currentTime.mins = 1;
//       // currentTime.secs = 0;
//     }

//     else {
//       currentTime.secs -= 1
//     }


//     return {
//       ...currentTime
//     }
//   }
// }

// const datetimeHelper = ({ mins, secs }) => {
// return `M${mins}S${secs}`
// }

// //when button clicked - timer array / function starts
// // when timer starts - sounds starts as well !!ONLY IF IT'S NOT OFF ALREADY
// const timer = startBtn.addEventListener('click', () => {
//   audio.play();
//   if (soundIcon.src.endsWith("sound-off.png")) {
//     audio.pause();
//   }

// function pomodoro() {
// currentTime.decrement(currentTime)
// document.querySelector("span#seconds").innerHTML = currentTime.secs < 10 ? `0${currentTime.secs}` : currentTime.secs;
// document.querySelector("span#minutes").innerHTML = currentTime.mins < 10 ? `0${currentTime.mins}` : currentTime.mins;
// }

// let tick = setInterval(() => {
// pomodoro()
// console.log(currentTime)
// }, 1000);

// if (currentTime.secs == 0 && currentTime.mins == 0) {
// currentTime.mins = 0;
// currentTime.secs = 0;
// clearInterval(tick);
// }}, {once: true});


// // volume of audio
// let audio = document.getElementById("audio");
// audio.volume = 0.2;

// function play() {
//   audio.play();
// }
// function pause() {
//   audio.pause();
// }

// //changing the sound icon
// const soundBtn = document.getElementById('btn-mute');
// const soundIcon = document.getElementById('sound-icon');

// soundBtn.addEventListener("click", function() {
//   if (soundIcon.src.endsWith("sound-on.png")) {
//     soundIcon.src = "./assets/sound-off.png";
//     audio.pause();
//   } else {
//     soundIcon.src = "./assets/sound-on.png";
//     audio.play();
//   }
// });


// ///second timer 
// const fakeBtn = document.getElementById("radio-2");

// const currentTime2 = {
//   // mins: 25
//   mins2: 2, 
//   secs2: 0,
//   decrement2: function (current = this) {

//     if (current.secs2 == 0 && current.mins2 > 0) {
//       currentTime2.mins2 -= 1;
//       currentTime2.secs2 = 59;

//     } else if (current.secs2 == 0 && current.mins2 == 0) {
//       current.secs2 = 0;
//       current.mins2 = 0;
//       audio.pause();
//       // const frogGif = document.getElementById('froggo');
//       // currentTime.mins = 1;
//       // currentTime.secs = 0;
//     }

//     else {
//       currentTime2.secs2 -= 1
//     }


//     return {
//       ...currentTime2
//     }
//   }
// }

// const datetimeHelper2 = ({ mins2, secs2 }) => {
//   return `M${mins2}S${secs2}`
//   }

// const timer2 = fakeBtn.addEventListener('click', () => {
//   audio.play();
//   if (soundIcon.src.endsWith("sound-off.png")) {
//     audio.pause();
//   }

// function pomodoro2() {
// currentTime2.decrement2(currentTime2)
// document.querySelector("span#seconds").innerHTML = currentTime2.secs2 < 10 ? `0${currentTime2.secs2}` : currentTime2.secs2;
// document.querySelector("span#minutes").innerHTML = currentTime2.mins2 < 10 ? `0${currentTime2.mins2}` : currentTime2.mins2;
// }

// let tick2 = setInterval(() => {
// pomodoro2()
// console.log(currentTime2)
// }, 1000);

// if (currentTime2.secs2 == 0 && currentTime2.mins2 == 0) {
// currentTime2.mins2 = 0;
// currentTime2.secs2 = 0;
// clearInterval(tick2);
// }}, {once: true});