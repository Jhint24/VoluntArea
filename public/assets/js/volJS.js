$(document).ready(function(){
    $('.timepicker').timepicker();



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

    
    $("#select1").on('change', function () {
        $('#myselect').val("1");
        $('#myselect').material_select();
    });


//Activate submit button
        $('#submitButton').on('click', function(event) {
        event.preventDefault();
        console.log(JSON.stringify("hi or whatever"));


                // Gather user inputs
        var userInput = {
            name: $('#userName').val(),//.trim() of undefined !!!
            web: $('.webAddress').val(),
            activity:$('.activity').val(),
            date:$('#volunteerdate').val(),
            time:$('#volunteertime').val(), 
            vol:$('.volNeeded').val(),         
            hours:$('.eventHours').val()
            
        };
        console.log(JSON.stringify(userInput));
            // Add user inputs to orgs table

            //     $.post('/api/orgs', userInput)
            // .done(function(data) {
            //     console.log('JSON.stringify(data)');

            $.ajax("/api/orgs/",    {
                type: "POST",
                data: userInput
            }).then( function(data) {
                console.log(userInput.name, userInput.web, userInput.activity, userInput.date, userInput.time, userInput.hours);
                location.reload();
            })
            
            // Pop open the modal dialog
                $('#modal1').modal('open');
            });



$('.timepicker').timepicker({
    default: 'now', // Set default time: 'now', '1:30AM', '16:30'
    fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
    twelvehour: false, // Use AM/PM or 24-hour format
    donetext: 'OK', // text for done-button
    cleartext: 'Clear', // text for clear-button
    canceltext: 'Cancel', // Text for cancel-button
    autoclose: false, // automatic close timepicker
    ampmclickable: true, // make AM PM clickable
    aftershow: function(){} //Function for after opening timepicker
    });



    $('.modal').modal();
    $('.dropdown-trigger').dropdown();
    // $('#select1, #myselect').material_select();
}); 