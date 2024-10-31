$(document).ready(function() {
    let currentQuestion = null;
    let waitingForAnswer = false;

    // Handle user input when "Send" button is clicked
    $('#send-message').click(function() {
        const userInput = $('#user-input').val().trim();
        if (userInput === "") return;

        // Display user's message
        addMessage(userInput, true);
        $('#user-input').val(''); // Clear input field

        // Check if input is "start" to trigger trivia question
        if (userInput.toLowerCase() === "start" && !waitingForAnswer) {
            addMessage("Fetching a trivia question...");
            fetchTriviaQuestion(); // Call function to fetch question
        } 
        // Check if user is answering the trivia question
        else if (waitingForAnswer) {
            checkAnswer(userInput);
        } 
        // Handle unrecognized input
        else {
            addMessage("Type 'start' to begin a trivia game.", false);
        }
    });

    // Function to fetch a trivia question from the server
    async function fetchTriviaQuestion() {
        try {
            const response = await fetch('http://localhost:6000/api/trivia', { // Ensure the correct port
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
            });

            const triviaData = await response.json();
            if (triviaData && triviaData.question && triviaData.answer) {
                currentQuestion = triviaData;
                displayQuestion(triviaData.question);
                waitingForAnswer = true;
            } else {
                addMessage("Failed to get a trivia question. Please try again.", false);
            }
        } catch (error) {
            console.error("Error fetching trivia question:", error);
            addMessage("Error fetching question. Please try again later.", false);
        }
    }

    // Function to display the trivia question
    function displayQuestion(questionText) {
        addMessage(`Question: ${questionText}`);
    }

    // Function to check if the answer is correct
    function checkAnswer(userAnswer) {
        const correctAnswer = currentQuestion.answer;
        if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
            addMessage("Correct!");
        } else {
            addMessage(`Incorrect! The correct answer was: ${correctAnswer}`);
        }
        waitingForAnswer = false;
        addMessage("Type 'start' to get another question.", false);
    }

    // Function to add messages to the chatbox
    function addMessage(text, isUser = false) {
        const messageClass = isUser ? "user-message" : "bot-message";
        $('#chatbox').append(`<div class="message ${messageClass}">${text}</div>`);
        $('#chatbox').scrollTop($('#chatbox')[0].scrollHeight); 
    }
});
