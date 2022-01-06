
var saveChanges = $('#saveChanges')
//Added event listener to Add project button
// $( "#button" ).on( "click", function() {
//     console.log( "hi" );
//   });


//Showing Date and time
window.setInterval(function (){
    $('#currentDay').html(moment().format('ddd MM/DD/y H:mm:ss'))
}, 1000);

$( function() {
    $( "#datepicker" ).datepicker();
  } );

console.log(saveChanges)

