$(document).ready(function(){
    $('.timepicker').timepicker({
        twelveHour: false, // Use AM/PM or 24-hour format
    });



    $('.carousel').carousel();
  

    $('.datepicker').datepicker({
        format: 'yyyy-mm-dd'
    });
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
            time:$('#volunteertime').val() + ":00", 
            vol:$('.volNeeded').val(),         
            hours:$('.eventHours').val()
            
        };
        console.log(JSON.stringify(userInput));
            // Add user inputs to orgs table

                $.post('/api/orgs', userInput)
            .done(function(data) {
                console.log('JSON.stringify(data)');
                
    //     
            
            // Pop open the modal dialog
                $('#modal1').modal('open');
            });

        });



    $('.modal').modal();
    $('.dropdown-trigger').dropdown();
    // $('#select1, #myselect').material_select();
}); 