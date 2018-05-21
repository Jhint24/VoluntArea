$(document).ready(function () {
    $('.timepicker').timepicker({
        twelveHour: false, // Use AM/PM or 24-hour format
    });
    $('.parallax').parallax();
     


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
        //variable to get date selection value
        var date = $('.datepicker').val();
        console.log(date)
        var result = [""];

        //function to loop through date values of stored events
        result = $('.eventDate').text();
        var p = 0
        var final = []
        var temp = []
        var j = 0
        for (var i = 0; i < (result.length + 1); i++) {
            if (i % 10 == 0) {
                p = 0
                final[j] = temp.join("")
                console.log(final[j])
                //console.log(j)
                j = j + 1

            }
            temp[p] = result[i]
            p = p + 1

        }
        //to filter the events matching selected date
        for (var i = 0; i < final.length; i++) {
            //console.log($(".card").find("[data-myVal]"));
            if (String(date) != String(final[i])) {
                $('#cardDiv' + (i)).hide();

            }
            else {
                $('#cardDiv' + (i)).show();
                //console.log("match")
            }
        }
    });


    $("#select1").on('change', function () {
        $('#myselect').val("1");
        $('#myselect').material_select();
    });

    //Activate submit button
    $('#submitButton').on('click', function (event) {
        event.preventDefault();
        //console.log(JSON.stringify("hi or whatever"));
        var validate = $('#userName').val().trim();//.trim() of undefined !!!
        var validate2 = $('.webAddress').val().trim();
        var validate3 = $('.activity').val().trim();
        var validate4 = $('#volunteerdate').val();
        var validate5 = $('#volunteertime').val();
        // Gather user inputs
        var userInput = {
            name: $('#userName').val().trim(),//.trim() of undefined !!!
            web: $('.webAddress').val().trim(),
            activity: $('.activity').val().trim(),
            date: $('#volunteerdate').val(),
            time: $('#volunteertime').val() + ":00",
            vol: $('.volNeeded').val(),
            hours: $('.eventHours').val()

        };
        console.log(JSON.stringify(userInput));
        // Add user inputs to orgs table

        if(validate === '' ){
            $('#error-message').text("Please Enter the name of your organization");
            return;
        }
        if(validate2 === '') {
            $('#error-message').text("Please Enter the url of your organization");
            return;
        }
        if(validate3 === '' ){
            $('#error-message').text("Please Enter the type of activities your organization is involved with");
            return;
        }
        if(validate4 === '' ){
            $('#error-message').text("Please Enter the date of your organization's event");
            return;
        }
        if(validate5 === '' ){
            $('#error-message').text("Please Enter the time of your organization's event");
            return;
        }

        $.post('/api/orgs', userInput)
            .done(function (data) {
                console.log('JSON.stringify(data)');


                // Pop open the modal dialog
                //https://materializecss.com/modals.html
                // https://stackoverflow.com/questions/29764242/how-to-detect-materialized-js-modal-closing-event

                $('#modal1').modal('open');
                $('#userName').val("");
                $('.webAddress').val("");
                $('.activity').val("");
                $('#volunteerdate').val("");
                $('#volunteertime').val("");
            });
    });

    //Activate submit button
    $('.submitButton').on('click', function (event) {

        event.preventDefault();
        var id = $(this).attr("data-id")
        console.log("id: " + id)
        //console.log(JSON.stringify("HEYYYOYOYO"));
        //console.log($(this).parent());

        // Gather user inputs
        var userInput = {
            zip: $('#zipCode' + id).val(),//.trim() of undefined !!!
            name: $('#userName2' + id).val(),
            email: $('#emailAddress' + id).val(),

        };
        console.log(JSON.stringify(userInput));
        // Add user inputs to orgs table

        $.post('/api/vols', userInput)
            .done(function (data) {
                //console.log('JSON.stringify(data)');
                console.log(data)

                //     

                // Pop open the modal dialog
                $('#modal2').modal('open');
                // userInput.zip.val("");
                // userInput.name.val("");
                // userInput.email.val("");
            });
    });

    $('.modal').modal();
    $('.dropdown-trigger').dropdown();
    // $('#select1, #myselect').material_select();
}); 