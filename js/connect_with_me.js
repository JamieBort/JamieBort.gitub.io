var lets = document.getElementById('lets');
// var myArray=["Let's connect.", "Let's collaborate.", "Let's pair program.", "Let's Build Something Together"];
var myArray=["Connect.", "Collaborate.", "Pair Program.", "Build Something Together."];
var t=0;
window.setInterval(function(){
    t++;
    lets.innerHTML=myArray[t%myArray.length];
    // console.log(myArray[t%myArray.length]);
}, 2000);