// selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const continue_btn = info_box.querySelector(".buttons .restart");
const back_btn = document.querySelector("footer .back_btn");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const solution_list = document.querySelector(".solution_list");
const tell_btn = result_box.querySelector(".smallbuttons .tell");
const video = info_box.querySelector("video");

// if start button clicked
start_btn.onclick = () =>{
    info_box.classList.add("activeInfo"); //show info box
    video.play();
}

// if back button clicked
back_btn.onclick = () =>{
    video.currentTime = 0;
    video.play();
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    info_box.classList.add("activeInfo"); //show info box
}

// if continue button clicked
continue_btn.onclick = () =>{
    video.pause();
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    back_btn.classList.add("show"); //show the back button
    showQuestions(0); //calling showQuestions function
}

const restart_quiz = result_box.querySelector(".buttons .restart");

// if restart button clicked
restart_quiz.onclick = () =>{
    video.currentTime = 0;
    video.play();
    result_box.classList.remove("activeResult"); //hide result box
    info_box.classList.add("activeInfo"); //show info box
}

// if tell dell button clicked
tell_btn.onclick = () =>{
    window.open("https://forms.office.com/Pages/ResponsePage.aspx?id=mhlclKKDgE6fjFqRvldS3SHp4vSNuFFBuaZHJ2ZazQ1UOUcyVzVTUDJNQlFJMTYzUjI3TE9HTjRUMi4u", "_blank");
}

const next_btn = document.querySelector("footer .next_btn");

// if next button clicked
next_btn.onclick = () => {
    let options = document.getElementsByClassName("option");
    let array = [].slice.call(options)
    for (let i = 0; i < array.length; i++) {
        if (array[i].classList.contains("correct")) {
            let input = array[i].textContent; //getting user selected option
            quiz_box.classList.remove("activeQuiz"); //hide box
            next_btn.classList.remove("show");
            quiz_box.classList.add("activeQuiz"); //show disability box
            if(input=="Auditory"||input=="Visual"||input=="Cognitive"||input=="Mobility"){
                chooseDis(input);
            }else{
                showResult(input);
            }
        }
    }
}

// getting disability from array
function chooseDis(string){
    const que_text = document.querySelector(".que_text");
    for(i=0; i < disability.length; i++){
        if(disability[i].distype==string){
            index = i;
        }
    }
    // creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>' + disability[index].distype +'</span>';
    let option_tag = "";
    for(i=0; i < disability[index].options.length; i++){
        option_tag += '<div class="option"><span>'+ disability[index].options[i] +'</span></div>\n';
    }
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    const option = option_list.querySelectorAll(".option");
    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

// getting distype and options from array
function showQuestions(index){
    const que_text = document.querySelector(".que_text");
    // creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>' + distype[index].title +'</span>';
    let option_tag = "";
    for(i=0; i < distype[index].options.length; i++){
        option_tag += '<div class="option"><span>'+ distype[index].options[i] +'</span></div>\n';
    }
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    const option = option_list.querySelectorAll(".option");
    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';

// if user clicked on option
function optionSelected(answer) {
    let userAns = answer.textContent; //getting user selected option
    const allOptions = option_list.children.length; //getting all option items
    answer.classList.add("correct"); //adding green color to correct selected option
    answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
}

function showResult(input){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    
    for(i=0; i < solutions.length; i++){
        if(solutions[i].disability==input){
            index = i;
        }
    }

    let solution_tag = "";
    for(i=0; i < solutions[index].solutions.length; i++){
        solution_tag += '<a href="' + solutions[index].links[i] + '" target="_blank">' + '<button class="solution" id="div' + i + '"> <h4>' + solutions[index].solutions[i] + '</h4><p class="description">' + solutions[index].description[i] + '</p></button></a>\n';
    }
    solution_list.innerHTML = solution_tag; //adding new div tag inside option_tag
}