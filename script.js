const questions = [
    {
        question: "What is correct syntax to print something to the console in javascript?",
        answers: [
            {
               text: "print('Hello')", correct: false
            },
         {
               text: "console.print('Hello')", correct: false
            },

            {
               text: "console.log('Hello')", correct: true
            },

             {
               text: "log.console('Hello')", correct: false
            },

        ]
    },


    {
        question: "What is the output of typeof 37",
        answers: [
            {
               text: "number", correct: true
            },
         {
               text: "boolean", correct: false
            },

            {
               text: "object", correct: false
            },

             {
               text: "string", correct: false
            },

        ]
    },


        {
        question: "What will be the output 3 +'3' ",
        answers: [
            {
               text: "6", correct: false
            },
         {
               text: "33", correct: true
            },

            {
               text: "error", correct: false
            },

             {
               text: "NaN", correct: false
            },

        ]
    },


    {
        question: "Which of the following javascript DATA TYPE?",
        answers:[
            {
                text:"integer", correct: false
            },

            {
                text:"boolean", correct:true
            },

            {
                text:"char", correct: false
            },
            {
                text:"float", correct: false
            },

        ]
    }
]

const quizQuestion = document.querySelector("#question");
const answerButtons = document.querySelectorAll(".answer");
const nextQuestion = document.querySelector("#next-question");

let currQuestionIndex = 0;
let score = 0;

function showQuestion(){
    resetState();
    const currQuestion = questions[currQuestionIndex];
    quizQuestion.textContent = currQuestion.question;

    answerButtons.forEach((btn, index)=>{

        const answer = currQuestion.answers[index];

    btn.textContent = answer.text;
    btn.onclick = () => 
        selectAnswer(answer.correct, btn);
});

}

function resetState(){
    nextQuestion.style.display = "none";
   
    answerButtons.forEach(btn => {
    btn.style.backgroundColor = "#007bff";
         btn.disabled = false;
    });
        
}

function selectAnswer(isCorrect, selectedBtn){
    answerButtons.forEach(btn =>
    btn.disabled  = true);

    if(isCorrect){
        selectedBtn.style.backgroundColor = "green";
        score++;
    }
    else{
        
        selectedBtn.style.backgroundColor = "red";
            const correctAnswer = questions[currQuestionIndex].answers.find(a => a.correct);
        answerButtons.forEach(btn => {
        if(btn.textContent === correctAnswer.text){
            btn.style.backgroundColor = "green";
}
        })

}

nextQuestion.textContent = currQuestionIndex === questions.length - 1 ? "Check Score" : "Next Question";
nextQuestion.style.display = "block";

    }

nextQuestion.onclick = () =>{
currQuestionIndex++;
if(currQuestionIndex < questions.length){
        showQuestion();
}
    else{
        showScore();
    }
}
        

function showScore(){
    const totalQuestions = questions.length;
    let message = "";

    if(score === totalQuestions){
        message = "Congratulation You Got all answer correct 🎊";
    }

    else if(score >= totalQuestions / 2){
        message = "Good job you did well, but there is room for improvement 🎉";
    }
    else{
        message = "You need a little more practice. keep learning";
    }
    
    quizQuestion.textContent = `Your scored ${score} out of ${totalQuestions}\n ${message}`;
    

    document.querySelector(".answers").style.display = "none";
    nextQuestion.textContent = "play again";
    nextQuestion.style.display = "block";
    nextQuestion.onclick = () =>
        location.reload();
}

showQuestion();