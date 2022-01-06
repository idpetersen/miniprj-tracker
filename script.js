//form
$(document).ready(function() {
    $("button").click(function() {
        var x = $("form").serializeArray();
        $.each(x, function(i, field) {
            $("#output").append(field.name + ":"
                    + field.value + " ");
        });
    });
});