$(document).ready(function () {

    $('.carousel').carousel();
    var $input
    //var picker 

    $('.datepicker').datepicker();
    var picker = $('.datepicker').val();
    //console.log(picker)


    function getdate() {
        var picker = $('.datepicker').val();
        console.log(picker)

    }

    var welcomeSection = $(' .welcome-section');
    setTimeout(function () {
        console.log("hi");
        welcomeSection.removeClass('content-hidden');
        console.log(welcomeSection);
    }, 500);


        $("#getDate").click(function () {
    // action goes here!!
    var date = $('.datepicker').val();
    console.log(date)


});

});