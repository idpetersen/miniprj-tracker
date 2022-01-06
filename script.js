//form
// $(document).ready(function() {
//     $("button").click(function() {
//         var x = $("form").serializeArray();
//         $.each(x, function(i, field) {
//             $("#output").append(field.name + ":"
//                     + field.value + " ");
//         });
//     });
// });

window.setInterval(function (){
    $('#currentDay').html(moment().format('ddd MM/DD/y H:mm:ss'))
}, 1000);