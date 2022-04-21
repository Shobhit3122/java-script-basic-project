// questions

const Questions = [
  {
    id: 0,
    q: "Question1:Everything in a React is a ______",
    a: [
      { text: "Module", isCorrect: false },
      { text: "Component", isCorrect: false },
      { text: "Package", isCorrect: true },
      { text: "Class", isCorrect: false },
    ],
    },
    {
    id: 1,
    q: "Question2:In which directory reatc Component are saved?",
    a: [
      { text: "Inside js/components/", isCorrect: false },
      { text: "Inside Vendor/components/", isCorrect: false },
      { text: "Inside vendor/", isCorrect: true },
      { text: "Inside vendor", isCorrect: false },
    ],
    },
    {
    id: 2,
    q: "Questoin3:What is Babel?",
    a: [
      { text: "A Transpiler", isCorrect: false },
      { text: "An Interpreter", isCorrect: false },
      { text: "A compiler", isCorrect: true },
      { text: "Both Compiler and Transpiler", isCorrect: false },
    ],
    },
    {
    id: 3,
    q: "Question4:Everything in a React is a ______",
    a: [
      { text: "Module", isCorrect: false },
      { text: "Component", isCorrect: false },
      { text: "Package", isCorrect: true },
      { text: "Class", isCorrect: false },
    ],
    },
    {
    id: 4,
    q: "Question5:How many Element does a react component return?",
    a: [
      { text: "1 Element", isCorrect: false },
      { text: "2 Element", isCorrect: false },
      { text: "Multiple Elements", isCorrect: true },
      { text: "None of the above", isCorrect: false },
    ],
    },
    {
    id: 5,
    q: "Question6:What does a  command do?",
    a: [
      { text: "A module bundler", isCorrect: false },
      { text: "Runs reatc local devlopment server", isCorrect: false },
      { text: "Transpile all javascript into onefile", isCorrect: true },
      { text: "None of the above", isCorrect: false },
    ],
    },
];


var start = true;
  

function iterate(id) {
  console.log("ITERATE")
    var result = document.getElementsByClassName("result");
console.log(result);
    result[0].innerText = "";

    const question = document.getElementById("questionc");


  question.innerText = Questions[id].q;
  console.log(Questions[id].q);


    const op1 = document.getElementById("op1");
    const op2 = document.getElementById("op2");
    const op3 = document.getElementById("op3");
    const op4 = document.getElementById("op4");

    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;


    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;
 

    var selected = "";

    op1.addEventListener("click", () => {
        op1.style.backgroundColor = "lightgoldenrodyellow";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op1.value;
    });


    op2.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightgoldenrodyellow";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op2.value;
    });


    op3.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightgoldenrodyellow";
        op4.style.backgroundColor = "lightskyblue";
        selected = op3.value;
    });


    op4.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightgoldenrodyellow";
        selected = op4.value;
    });

  
  
  const evaluate = document.getElementsByClassName("evaluate");
 
  let count = 0;   
  evaluate[0].addEventListener("click", () => {
        if (selected == "true") {
            result[0].innerHTML = "True";
          result[0].style.color = "green";
          count++;
          result[0] = count;
          console.log("count", count);
         
        } else {
            result[0].innerHTML = "False";
          result[0].style.color = "red";
          
    }
    });
     console.log("count", count);

}



if (start) {
    iterate("0");
}


const next = document.getElementById("nex")

var id = 0;

next.addEventListener("click", () => {
  console.log("uyuyfy");
  start = false;
  console.log(id);
  if (id < 5) {
    id++;
    console.log("IF CONDITION")
    iterate(id);
    console.log(id);
  }
});



const prev = document.getElementById("prev");


prev.addEventListener("click", () => {
 
  start = false;
  if (id > 0) {
    id--;
    iterate(id);
    console.log(id);
  }
});

var timeleft = 19;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished";
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);
