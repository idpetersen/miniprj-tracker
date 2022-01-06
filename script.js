//Showing Date and time
window.setInterval(function (){
    $('#currentDay').html(moment().format('ddd MM/DD/y H:mm:ss'))
}, 1000);

//jQuery UI's datepicker with a minimum date setting in place
