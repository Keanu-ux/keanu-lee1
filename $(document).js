// Tab navigation functionality
$(document).ready(function(){
    // Hide all tabs except the first one (Home)
    $('.tab-content').hide();
    $('#home').show();

    // Click event for tab links
    $('.tab-link').click(function(event){
        event.preventDefault(); // Prevent default action of anchor tag
        var tab_id = $(this).data('tab'); // Get the tab ID from the data attribute

        // Hide all tab content and show the selected one
        $('.tab-content').hide();
        $('#' + tab_id).fadeIn(); // Use fadeIn for smooth transition
    });
});

// Slideshow functionality

// Initial slide index
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls (dots)
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Function to display the slides
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  // Loop around if the index goes beyond the slides
  if (n > slides.length) {
    slideIndex = 1;
  }

  // Loop to the last slide if the index goes below 1
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove the "active" class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the current slide and set the corresponding dot as active
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
$('#contact-form').submit(function(event) {
    event.preventDefault();
    console.log("Form is submitted"); // Check if this is logged in the console
    alert('Message sent successfully!');
    $('#contact-form')[0].reset(); // Reset the form after submission
    
});
