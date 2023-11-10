// const startBtn = document.querySelector('#btn-start');

// const timer1 = startBtn.addEventListener('click', () => {
//   let actualSeconds = 1*60-1;

//   let myTimer = setInterval(pomodoro, 1000);

//   function pomodoro() {
//     document.getElementById("timer-into-seconds").innerHTML = "( " + actualSeconds + " seconds )";
//     actualSeconds -= 1;
//     }

//   if(actualSeconds <= 0){
//     clearInterval(myTimer);
//     document.getElementById("timer-into-seconds").innerHTML = "Break time!";
//   }})





  // const startBtn = document.querySelector('#btn-start');
  // // let display = document.querySelector('#timer');
  
  
  // const timer1 = startBtn.addEventListener('click', (e) => {
  //   e.stopPropagation()
  //   let actualSeconds = 1*60-1;
  
  //   const myTimer = setInterval(function pomodoro(){
  //   document.getElementById("timer-into-seconds").innerHTML = "( " + actualSeconds + " seconds )";
    
  //   actualSeconds -= 1;
  //   }, 1000);
  
    
  //   if(actualSeconds <= 0){
  //     clearInterval(myTimer);
  //     document.getElementById("timer-into-seconds").innerHTML = "Break time!";
  // }});
  
    // minutes /////////////////
  
  //   setTimeout(() => { document.getElementById("minutes").innerHTML = "24 : 00"; }, 1000);
    
  //   let minutes = 1;
  //   let seconds = 59;
  
  //   setInterval(function pomodoroo(){
  //   document.getElementById("minutes").innerHTML = minutes + " : " + seconds;
    
  //   minutes -= 1;
  
  //   if(actualSeconds <= 0){
  //     clearInterval(pomodoroo);
  //     document.getElementById("minutes").innerHTML = "00 : 00"
  // }
  //   }, 60*1000);
  // }
  // );
  
  
  ////////connect these
  // function timer2() {
  //   let actualSecondss = 5*60-1;
  
  //   setInterval(function pomodorooo(){
  //   document.getElementById("timer-into-seconds").innerHTML = "( " + actualSecondss + " seconds )";
    
  //   actualSecondss -= 1;
  
  
  //   if(actualSecondss <= 0){
  //       clearInterval(pomodorooo);
  //       document.getElementById("timer-into-seconds").innerHTML = "Restart your timer?"
  //   }
  //   }, 1000);
  
  
  //   // minutes /////////////////
  
  //   setTimeout(() => { document.getElementById("minutes").innerHTML = "4 : 00"; }, 1000);
    
  //   let minutess = 3;
  //   let secondss = 59;
  
  //   setInterval(function pomodoroooo(){
  //   document.getElementById("minutes").innerHTML = minutess + 
  //   " : " + secondss;
    
  //   minutess -= 1;
  
  //   if(actualSecondss <= 0){
  //     clearInterval(pomodoroooo);
  //     document.getElementById("minutes").innerHTML = "00 : 00"
  // }
  //   }, 60*1000);
  // };
  
  
  
  
  // function doHomework(subject, callback) {
  //   alert(`Starting my ${subject} homework.`);
  //   callback();
  // }
  // function alertFinished(){
  //   alert('Finished my homework');
  // }
  // doHomework('math', alertFinished);
  
  
  
  // const promise1 = new Promise((resolve, reject) => {
  //   resolve('Success!');
  // });
  
  // promise1.then((value) => {
  //   console.log(value);
  //   // Expected output: "Success!"
  // });
  
  
  // doSomething(function (result) {
  //   doSomethingElse(result, function (newResult) {
  //     doThirdThing(newResult, function (finalResult) {
  //       console.log(`Got the final result: ${finalResult}`);
  //     }, failureCallback);
  //   }, failureCallback);
  // }, failureCallback);
  
  
  // function failureCallback(error) {
  //   console.error(`Error generating audio file: ${error}`);
  // }
  


  const currentTime = {
    mins: 25,
    secs: 0,
    incriment: function (current = this) {

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
    decriment: function (current = this) {

      if (current.secs == 0 && current.mins > 0) {
        currentTime.mins -= 1
        currentTime.secs = 59
      } else {

        currentTime.secs -= 1
      }

      return {
        ...currentTime
      }
    }
  }

  const datetimeHelper = ({ mins, secs }) => {
    return `M${mins}S{secs}`
  }

  const startBtn = document.querySelector('#btn-start');

  const timer1 = startBtn.addEventListener('click', () => {
    let actualSeconds = 1 * 60 - 1;


    function pomodoro() {
      currentTime.decriment(currentTime)
      document.querySelector("span#seconds").innerHTML = currentTime.secs < 10 ? `0${currentTime.secs}` : currentTime.secs;
      document.querySelector("span#minutes").innerHTML = currentTime.mins < 10 ? `0${currentTime.mins}` : currentTime.mins;
      actualSeconds = 1;
    }

    let tick = setInterval(() => {
      pomodoro()
      console.log(currentTime)
    }, 1000);


    while (actualSeconds <= 0) {
      clearInterval(tick);
      document.getElementById("timer-into-seconds").innerHTML = "Break time!";
    }
  })

  
