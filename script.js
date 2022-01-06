
//Added event listener to Add project button
$( "#button" ).on( "click", function() {
    console.log( "hi" );
  });
  
window.setInterval(function (){
    $('#currentDay').html(moment().format('ddd MM/DD/y H:mm:ss'))
}, 1000);