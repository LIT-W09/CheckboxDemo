$(() => {
    $("input").on('input', function () {
        ensureFormValidity();
    });

    $("form").on('submit', function () {
        //return false;
        //$("#newsletter").prop('disabled', false);
    });

    $("#age").on('input', function () {
        const age = parseInt($("#age").val());
        if (!age) {
            return;
        }

        if (age >= 50) {
            $("#newsletter").prop('disabled', true);
            $("#newsletter").prop('checked', true);
            $("form").append("<input type='hidden' value='true' name='SignupToNewsletter' id='hidden-newsletter' />");
        } else {
            $("#newsletter").prop('disabled', false);
            $("#hidden-newsletter").remove();
        }
    });

    function ensureFormValidity() {
        const name = $("#name").val();
        const age = $("#age").val();

        //const isValid = name != '' && age != '';
        //if (isValid) {
        //    $("#save-button").prop('disabled', false);
        //} else {
        //    $("#save-button").prop('disabled', true);
        //}
        //const ageAsNumber = parseInt(age);
        //const isValid = name && ageAsNumber && ageAsNumber >= 20 && ageAsNumber <= 60;
        const isValid = name && age;
        $("#save-button").prop('disabled', !isValid);
    }
});