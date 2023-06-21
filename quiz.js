const questions = [
  {
    questionText: "Commonly used data types DO NOT include:",
    options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts",
  },
  {
    questionText: "Arrays in JavaScript can be used to store ______.",
    options: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    answer: "4. all of the above",
  },
  {
    questionText:
      "String values must be enclosed within _____ when being assigned to variables.",
    options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    answer: "3. quotes",
  },
  {
    questionText:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log",
    ],
    answer: "4. console.log",
  },
  {
    questionText:
      "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
    options: ["1. break", "2. stop", "3. halt", "4. exit"],
    answer: "1. break",
  },
];
var universe=document.getElementById("que");
var i=0;
var points=0;
// var selected=null;
function display()
{
    const ques=document.createElement("h4");
    ques.innerHTML=i+1+". "+questions[i].questionText;
    const op=document.createElement("ul");
    for(var j=0;j<questions[i].options.length;j++)
    {
        const opval=document.createElement("li");
        const button = document.createElement("button");
    button.type = "button";
    button.innerText = questions[i].options[j];
    button.classList.add("option-button");

    opval.appendChild(button);
    op.appendChild(opval);

    // Add event listener to handle selection
    // Add event listener to handle selection
button.addEventListener("click", (function(index) {
  return function(event) {
    const selectedButton = event.target;
    const computedStyle = window.getComputedStyle(selectedButton);
    const currentBackgroundColor = computedStyle.backgroundColor;

    const selected = selectedButton.innerText;
    if (questions[index].answer.toLowerCase() === selected.toLowerCase()) {
      points += 10;
    }

    if (currentBackgroundColor === "rgb(255, 255, 255)") {
      selectedButton.style.backgroundColor = "#218380";
      selectedButton.style.color = "#fff";
    } else {
      selectedButton.style.backgroundColor = "#fff";
      selectedButton.style.color = "#000";
    }
   // Log the updated value of points

    // ... rest of your code ...
  };
  })(i));

 }
    var but=(i===questions.length-1)? createSubmit() : createNext();
    op.style.listStyleType='none';
    universe.appendChild(ques);
    universe.appendChild(op);
    universe.appendChild(but);
}
function createNext(){
  const next=document.createElement("button");
  next.innerText="Next";
  next.classList.add("next-button");
    // if (selected == null) {
    //   next.disabled = true;
    // }
    // else{
    //   next.disabled=false;
    // }
  next.addEventListener("click",function nextt(){
    i++;
    universe.innerHTML="";
    display();
   
  })
  return next;
}
function createSubmit(){
  var sub=document.createElement("button");
  sub.innerText="Submit";
  sub.classList.add("submit-button");
  sub.addEventListener("click",function result(){
    // universe.innerHTML="";
    // const alldone=document.createElement("h2");
    // alldone.innerHTML="All Done!!!";
    // const pp=document.createElement("p");
    // pp.innerHTML="Your Final Score is : "+points;
    // const lab=document.createElement("label");
    // lab.innerHTML="Enter Your Initials : ";
    // const inp=document.createElement("input");
    // inp.type="text";
    // const inpbut=document.createElement("button");
    // inpbut.textContent="Enter";
    // inpbut.id="inpbutton";
    // inpbut.addEventListener("click",function(){
    //   const initials = inp.value;
    //   const score = {
    //     initials: initials,
    //     points: points
    //   };
    //   scorelist.push(score);
    //   scores();
    // })
    // universe.appendChild(alldone);
    // universe.appendChild(pp);
    // universe.appendChild(lab);
    // universe.appendChild(inp);
    // universe.appendChild(inpbut);
    universe.innerHTML="";
    const alldone=document.createElement("h2");
    alldone.innerHTML="All Done!!!";
    const pp=document.createElement("p");
    pp.innerHTML="Your Final Score is : "+points;
    const goback=document.createElement("button");
      goback.innerText="Go Back";
      goback.id="inpbutton";
      goback.addEventListener("click",function(){
        window.location.href="index.html";
    })
    universe.appendChild(alldone);
    universe.appendChild(pp);
    universe.appendChild(goback);
  })
  return sub;
}
display();

// var scorelist=[];
// function scores() {
//   universe.innerHTML = "";
//   const hscores = document.createElement("h1");
//   hscores.innerHTML = "High Scores";
//   const scorevalues = document.createElement("p");
//   const goback=document.createElement("button");
//   goback.innerText="Go Back";
//   goback.id="inpbutton";
//   goback.addEventListener("click",function(){
//     window.location.href="index.html";
//   })
//   const clearhighscores=document.createElement("button");
//   clearhighscores.innerText="Clear High Scores";
//   clearhighscores.id="inpbutton";

  
//   scorelist.forEach((score, index) => {
//     scorevalues.innerHTML= `${index + 1}. ${score.initials}: ${score.points}<br>`;
//   });

   
//   universe.appendChild(hscores);
//   universe.appendChild(scorevalues);
//   universe.appendChild(goback);
//   universe.appendChild(clearhighscores);
// }

// Set the initial time in seconds
let seconds = 100;

// Get the timer element
const timerElement = document.getElementById("timer");

// Function to update the timer display
function updateTimer() {
  timerElement.textContent = seconds;

  if (seconds > 0) {
    seconds--;
  } else {
    // Time is up, perform necessary actions
    clearInterval(timerInterval);
    alert("Time Over and it will redirect to result page");
    universe.innerHTML="";
    const alldone=document.createElement("h2");
    alldone.innerHTML="All Done!!!";
    const pp=document.createElement("p");
    pp.innerHTML="Your Final Score is : "+points;
    const goback=document.createElement("button");
      goback.innerText="Go Back";
      goback.id="inpbutton";
      goback.addEventListener("click",function(){
        window.location.href="index.html";
    })
    universe.appendChild(alldone);
    universe.appendChild(pp);
    universe.appendChild(goback);
    // Example: Show an alert
  }
}

// Call the updateTimer function every second
const timerInterval = setInterval(updateTimer, 1000);




