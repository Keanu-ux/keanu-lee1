// trivia.js
$(document).ready(function () {
    const triviaQuestions = [
        { question: "What is the capital city of Japan?", answer: "Tokyo" },
        { question: "Which planet is closest to the Sun?", answer: "Mercury" },
        { question: "Who wrote the play 'Romeo and Juliet'?", answer: "William Shakespeare" },
        { question: "What is the largest ocean on Earth?", answer: "Pacific Ocean" },
        { question: "Who was the first president of the United States?", answer: "George Washington" },
        { question: "Which country is famous for the Eiffel Tower?", answer: "France" },
        { question: "What is the hardest natural substance on Earth?", answer: "Diamond" },
        { question: "Which element has the chemical symbol 'O'?", answer: "Oxygen" },
        { question: "What is the largest mammal in the world?", answer: "Blue Whale" },
        { question: "In which year did the Titanic sink?", answer: "1912" }
    ];

    let currentQuestion = null;
    let questionIndex = 0;
    let waitingForAnswer = false;

    function addMessage(text, isUser = false) {
        const messageClass = isUser ? "user-message" : "bot-message";
        $('#chatbox').append(`<div class="message ${messageClass}">${text}</div>`);
        $('#chatbox').scrollTop($('#chatbox')[0].scrollHeight);
    }

    function askTriviaQuestion() {
        if (questionIndex < triviaQuestions.length) {
            currentQuestion = triviaQuestions[questionIndex];
            addMessage(currentQuestion.question);
            waitingForAnswer = true;
            questionIndex++;
        } else {
            addMessage("You've answered all the trivia questions! Type 'restart' to play again.");
            waitingForAnswer = false;
        }
    }

    $('#send-message').click(function () {
        const userInput = $('#user-input').val().trim();
        if (userInput === "") return;

        addMessage(userInput, true);
        $('#user-input').val('');

        if (userInput.toLowerCase() === "start" && !waitingForAnswer) {
            addMessage("Let's begin! Here's your first question:");
            questionIndex = 0;
            askTriviaQuestion();
        } else if (userInput.toLowerCase() === "restart") {
            addMessage("Restarting the game. Type 'start' to begin again.");
            questionIndex = 0;
            waitingForAnswer = false;
        } else if (waitingForAnswer) {
            const correctAnswer = currentQuestion.answer.toLowerCase();
            if (userInput.toLowerCase() === correctAnswer) {
                addMessage("Correct!");
            } else {
                addMessage(`Incorrect! The correct answer is: ${currentQuestion.answer}`);
            }
            waitingForAnswer = false;
            addMessage("Type 'next' for the next question or 'restart' to start over.");
        } else if (userInput.toLowerCase() === "next" && !waitingForAnswer) {
            askTriviaQuestion();
        } else if (!waitingForAnswer) {
            addMessage("I didn't understand that. Type 'start' to begin trivia or 'next' to continue.");
        }
    });
});
