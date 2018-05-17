$(document).ready(function () {
    // $('.carousel').carousel();
    $('.dropdown-trigger').dropdown();
    $('.datepicker').datepicker();
    $('#select1, #myselect').material_select();

    $("#select1").on('change', function () {
        $('#myselect').val("1");
        $('#myselect').material_select();
    });
});
//    $('.carousel-slider').carousel({
//     fullWidth: true
//   });