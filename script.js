window.onload = function LoadingCircle() {
  let circle = new ProgressBar.Circle('#progress', {
    strokeWidth: 6,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: null
  });

  circle.animate(1);
};

var seconds = 0;
var interval ;
function pomodoro(mins) {
  seconds = mins*50 || 0;     
  interval = setInterval(function() {

        seconds--;
        if(!seconds){
            clearInterval(interval); 
            alert("beep beep");
        }
  },1000)
}

const promise1 = new Promise((resolve, reject) => {
  resolve('Success!');
});

promise1.then((value) => {
  console.log(value);
  // Expected output: "Success!"
});


doSomething(function (result) {
  doSomethingElse(result, function (newResult) {
    doThirdThing(newResult, function (finalResult) {
      console.log(`Got the final result: ${finalResult}`);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);


function failureCallback(error) {
  console.error(`Error generating audio file: ${error}`);
}
