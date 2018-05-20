$(document).ready(function () {
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
            console.log($(".card").find("[data-myVal]"));
            if (String(date) != String(final[i])) {
                $('#cardDiv' + (i)).hide();

            }
            else {
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
        console.log(JSON.stringify("hi or whatever"));

        // Gather user inputs
        var userInput = {
            name: $('#userName').val(),//.trim() of undefined !!!
            web: $('.webAddress').val(),
            activity: $('.activity').val(),
            date: $('#volunteerdate').val(),
            time: $('#volunteertime').val() + ":00",
            vol: $('.volNeeded').val(),
            hours: $('.eventHours').val()

        };
        console.log(JSON.stringify(userInput));
        // Add user inputs to orgs table

        $.post('/api/orgs', userInput)
            .done(function (data) {
                console.log('JSON.stringify(data)');

                //     

                // Pop open the modal dialog
                $('#modal1').modal('open');
            });

    });

    //Activate submit button
    $('#submitButton2').on('click', function (event) {
        event.preventDefault();
        console.log(JSON.stringify("HEYYYOYOYO"));

        // Gather user inputs
        var userInput = {
            zip: $('#zipCode').val(),//.trim() of undefined !!!
            name: $('#userName2').val(),
            email: $('#emailAddress').val(),

        };
        console.log(JSON.stringify(userInput));
        // Add user inputs to orgs table

        $.post('/api/vols', userInput)
            .done(function (data) {
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