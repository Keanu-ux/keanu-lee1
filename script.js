$(document).ready(function() {
    // Tab switching functionality
    $('.tab-link').click(function(event) {
        event.preventDefault(); 
        var tab_id = $(this).data('tab'); 
        $('.tab-content').hide();
        $('#' + tab_id).fadeIn(); 
    });

    // Trivia functionality or any other code can be added here
});
