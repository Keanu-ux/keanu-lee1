// Initialize EmailJS
(function() {
    emailjs.init("3Z5IrM_tvp7Yx_frS"); // Your EmailJS public key
})();

$(document).ready(function() {
    // Handle form submission for Contact Me
    $('#contact-form').submit(function(event) {
        event.preventDefault(); // Prevent default form submission

        // Use EmailJS to send the form data
        emailjs.sendForm('service_zjdrhe5', 'template_0al2b5l', this)
        .then(function(response) {
            alert('Message sent successfully!');
            $('#contact-form')[0].reset(); // Reset the form
        }, function(error) {
            alert('Failed to send message. Please try again.');
            console.error('EmailJS error:', error);
        });
    });
});
