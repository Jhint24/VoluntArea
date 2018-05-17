$(document).ready(function () {
    // $('.carousel').carousel();
    $('.dropdown-trigger').dropdown();
    $('.datepicker').datepicker();
    $('#select1, #myselect').material_select();

    $("#select1").on('change', function () {
        $('#myselect').val("1");
        $('#myselect').material_select();
    });
    $('.carousel').carousel();
    
    var welcomeSection = $(' .welcome-section');
    setTimeout (function () {
        console.log("hi");
        welcomeSection.removeClass('content-hidden');
        console.log(welcomeSection);
    }, 500);
});