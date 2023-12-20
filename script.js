const startBtn = document.querySelector('#btn-start');
const breakBtn = document.querySelector('#btn-pause');

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

//50min
function LoadingCircleB() {
  let circle = new ProgressBar.Circle('#progress', {
    strokeWidth: 6,
    easing: 'linear',
    duration: 12000,
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
      ribbit.play();
      setTimeout(function(){
      ribbit.pause();
    }, 4000);

      const frogGif = document.getElementById("froggo");
        if (frogGif.src.endsWith("coding-frog.gif")) {
            frogGif.src = "./assets/dancing-frog.gif";
        } else {
      frogGif.src = "./assets/dancing-frog.gif";

            ribbit.pause();

            const currentTimeB = {
              // mins: 25
              minsB: 0, 
              secsB: 12,
            
              decrementB: function (current = this) {
            
                if (current.secsB == 0 && current.minsB > 0) {
                  currentTimeB.minsB -= 1;
                  currentTimeB.secsB = 59;
            
                } else if (current.secsB == 0 && current.minsB == 0) {
                  current.secsB = 0;
                  current.minsB = 0;
                  audio.pause();
            
                  //ribbit sounds to tell when break time starts
                  ribbit.play();
                  setTimeout(function(){
                  ribbit.pause();
                }, 4000);
            
                  const frogGif = document.getElementById("froggo");
                    if (frogGif.src.endsWith("coding-frog.gif")) {
                        frogGif.src = "./assets/dancing-frog.gif";
                    } else {
                  frogGif.src = "./assets/dancing-frog.gif";
                  
              }
                }
            
                else {
                  currentTimeB.secsB -= 1
                }
            
            
                return {
                  ...currentTimeB
                }
              }
            }

            breakBtn.addEventListener('click', () => {
              audio.play();
              if (soundIcon.src.endsWith("sound-off.png")) {
                audio.pause();
              }

              LoadingCircleB(), {once: true};
            
            function pomodoroB() {
            currentTimeB.decrementB(currentTimeB)
            document.querySelector("span#seconds").innerHTML = currentTimeB.secsB < 10 ? `0${currentTimeB.secsB}` : currentTimeB.secsB;
            document.querySelector("span#minutes").innerHTML = currentTimeB.minsB < 10 ? `0${currentTimeB.minsB}` : currentTimeB.minsB;
            }
            
            let tickB = setInterval(() => {
            pomodoroB()
            console.log(currentTimeB)
            }, 1000);
            
            if (currentTimeB.secsB == 0 && currentTimeB.minsB == 0) {
            currentTimeB.minsB = 0;
            currentTimeB.secsB = 0;
            clearInterval(tickB);
            }}, {once: true}), {once: true};
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

//sepparate time array so it doesn't bubble up when pressing on the radio-1 and then on the start btn
const currentTimee = {
  // mins: 25
  minse: 1, 
  secse: 0,

  decremente: function (current = this) {

    if (current.secse == 0 && current.minse > 0) {
      currentTimee.minse -= 1;
      currentTimee.secse = 59;

    } else if (current.secse == 0 && current.minse == 0) {
      current.secse = 0;
      current.minse = 0;
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

      ribbit.pause();

      const currentTimeBB = {
        // mins: 25
        minsBB: 0, 
        secsBB: 12,
      
        decrementBB: function (current = this) {
      
          if (current.secsB == 0 && current.minsB > 0) {
            currentTimeBB.minsBB -= 1;
            currentTimeBB.secsBB = 59;
      
          } else if (current.secsBB == 0 && current.minsBB == 0) {
            current.secsBB = 0;
            current.minsBB = 0;
            audio.pause();
      
            //ribbit sounds to tell when break time starts
            ribbit.play();
            setTimeout(function(){
            ribbit.pause();
          }, 4000);
      
            const frogGif = document.getElementById("froggo");
              if (frogGif.src.endsWith("coding-frog.gif")) {
                  frogGif.src = "./assets/dancing-frog.gif";
              } else {
            frogGif.src = "./assets/dancing-frog.gif";
            
        }
          }
      
          else {
            currentTimeBB.secsBB -= 1
          }
      
      
          return {
            ...currentTimeBB
          }
        }
      }

      breakBtn.addEventListener('click', () => {
        audio.play();
        if (soundIcon.src.endsWith("sound-off.png")) {
          audio.pause();
        }

        LoadingCircleB(), {once: true};
      
      function pomodoroBB() {
      currentTimeBB.decrementBB(currentTimeBB)
      document.querySelector("span#seconds").innerHTML = currentTimeBB.secsBB < 10 ? `0${currentTimeBB.secsBB}` : currentTimeBB.secsBB;
      document.querySelector("span#minutes").innerHTML = currentTimeBB.minsBB < 10 ? `0${currentTimeBB.minsBB}` : currentTimeBB.minsBB;
      }
      
      let tickBB = setInterval(() => {
      pomodoroBB()
      console.log(currentTimeBB)
      }, 1000);
      
      if (currentTimeBB.secsBB == 0 && currentTimeBB.minsBB == 0) {
      currentTimeBB.minsBB = 0;
      currentTimeBB.secsBB = 0;
      clearInterval(tickBB);
      }}, {once: true}), {once: true};
  }
    }

    else {
      currentTimee.secse -= 1
    }


    return {
      ...currentTimee
    }
  }
}

const datetimeHelpere = ({ minse, secse }) => {
return `M${minse}S${secse}`
}

radio1.addEventListener('click', () => {
  document.querySelector("span#seconds").innerHTML = "00";
  document.querySelector("span#minutes").innerHTML = "01";
  
  startBtn.addEventListener('click', () => {
  audio.play();
  if (soundIcon.src.endsWith("sound-off.png")) {
    audio.pause();
  }

  LoadingCircle(), {once: true};

function pomodoroe() {
currentTimee.decremente(currentTimee)
document.querySelector("span#seconds").innerHTML = currentTimee.secse < 10 ? `0${currentTimee.secse}` : currentTimee.secse;
document.querySelector("span#minutes").innerHTML = currentTimee.minse < 10 ? `0${currentTimee.minse}` : currentTimee.minse;
}

let ticke = setInterval(() => {
pomodoroe()
console.log(currentTimee)
}, 1000);

if (currentTimee.secse == 0 && currentTimee.minse == 0) {
currentTimee.minse = 0;
currentTimee.secse = 0;
clearInterval(ticke);
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

        ribbit.pause();

            const currentTimeB2 = {
              // mins: 25
              minsB2: 5, 
              secsB2: 0,
            
              decrementB2: function (current = this) {
            
                if (current.secsB2 == 0 && current.minsB2 > 0) {
                  currentTimeB2.minsB2 -= 1;
                  currentTimeB2.secsB2 = 59;
            
                } else if (current.secsB2 == 0 && current.minsB2 == 0) {
                  current.secsB2 = 0;
                  current.minsB2 = 0;
                  audio.pause();
            
                  //ribbit sounds to tell when break time starts
                  ribbit.play();
                  setTimeout(function(){
                  ribbit.pause();
                }, 4000);
            
                  const frogGif = document.getElementById("froggo");
                    if (frogGif.src.endsWith("coding-frog.gif")) {
                        frogGif.src = "./assets/dancing-frog.gif";
                    } else {
                  frogGif.src = "./assets/dancing-frog.gif";
                  
              }
                }
            
                else {
                  currentTimeB2.secsB2 -= 1
                }
            
            
                return {
                  ...currentTimeB2
                }
              }
            }

            breakBtn.addEventListener('click', () => {
              audio.play();
              if (soundIcon.src.endsWith("sound-off.png")) {
                audio.pause();
              }

              LoadingCircleB(), {once: true};
            
            function pomodoroB2() {
            currentTimeB2.decrementB2(currentTimeB2)
            document.querySelector("span#seconds").innerHTML = currentTimeB2.secsB2 < 10 ? `0${currentTimeB2.secsB2}` : currentTimeB2.secsB2;
            document.querySelector("span#minutes").innerHTML = currentTimeB2.minsB2 < 10 ? `0${currentTimeB2.minsB2}` : currentTimeB2.minsB2;
            }
            
            let tickB2 = setInterval(() => {
            pomodoroB2()
            console.log(currentTimeB2)
            }, 1000);
            
            if (currentTimeB2.secsB2 == 0 && currentTimeB2.minsB2 == 0) {
            currentTimeB2.minsB2 = 0;
            currentTimeB2.secsB2 = 0;
            clearInterval(tickB2);
            }}, {once: true}), {once: true};
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

          ribbit.pause();

          const currentTimeB3 = {
            // mins: 25
            minsB3: 10, 
            secsB3: 0,
          
            decrementB: function (current = this) {
          
              if (current.secsB3 == 0 && current.minsB3 > 0) {
                currentTimeB3.minsB3 -= 1;
                currentTimeB3.secsB3 = 59;
          
              } else if (current.secsB3 == 0 && current.minsB3 == 0) {
                current.secsB3 = 0;
                current.minsB3 = 0;
                audio.pause();
          
                //ribbit sounds to tell when break time starts
                ribbit.play();
                setTimeout(function(){
                ribbit.pause();
              }, 4000);
          
                const frogGif = document.getElementById("froggo");
                  if (frogGif.src.endsWith("coding-frog.gif")) {
                      frogGif.src = "./assets/dancing-frog.gif";
                  } else {
                frogGif.src = "./assets/dancing-frog.gif";
                
            }
              }
          
              else {
                currentTimeB3.secsB3 -= 1
              }
          
          
              return {
                ...currentTimeB3
              }
            }
          }

          breakBtn.addEventListener('click', () => {
            audio.play();
            if (soundIcon.src.endsWith("sound-off.png")) {
              audio.pause();
            }

            LoadingCircleB(), {once: true};
          
          function pomodoroB3() {
          currentTimeB.decrementB3(currentTimeB3)
          document.querySelector("span#seconds").innerHTML = currentTimeB3.secsB3 < 10 ? `0${currentTimeB3.secsB3}` : currentTimeB3.secsB3;
          document.querySelector("span#minutes").innerHTML = currentTimeB3.minsB3 < 10 ? `0${currentTimeB3.minsB3}` : currentTimeB3.minsB3;
          }
          
          let tickB3 = setInterval(() => {
          pomodoroB3()
          console.log(currentTimeB3)
          }, 1000);
          
          if (currentTimeB3.secsB3 == 0 && currentTimeB3.minsB3 == 0) {
          currentTimeB3.minsB3 = 0;
          currentTimeB3.secsB3 = 0;
          clearInterval(tickB3);
          }}, {once: true}), {once: true};
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