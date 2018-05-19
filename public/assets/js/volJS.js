     $(document).ready(function () {

        //for the main carousel image
        $('.carousel').carousel();

        //for the calendar to pop up and select date
        $('.datepicker').datepicker();
        var date = $('.datepicker').val();


        var welcomeSection = $(' .welcome-section');
        setTimeout(function () {
            console.log("hi");
            welcomeSection.removeClass('content-hidden');
            console.log(welcomeSection);
        }, 500);


    });

    //this selects the value that we can compare to database date
    $("#getDate").click(function () {
        // action goes here!!
        var date = $('.datepicker').val();
        console.log(date)
    });


