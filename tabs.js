// tabs.js
$(document).ready(function () {
    // Initial setup to hide tabs
    $('.tab-content').hide();
    $('#home').show();

    // Tab switching functionality
    $('.tab-link').click(function (event) {
        event.preventDefault();
        var tab_id = $(this).data('tab');
        $('.tab-content').hide();
        $('#' + tab_id).fadeIn();
    });
});
