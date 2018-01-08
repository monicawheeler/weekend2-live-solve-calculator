console.log('client is ready');

$(document).ready(onReady);

function onReady() {
    console.log('jquery is loaded');
    getHistory();

    $('#submitButton').on('click', submitClick);
}

function submitClick() {
    console.log('button clicked');
    // grab numbers and send to database
    var entry = {
        firstNumber: $('#firstNumber').val(),
        secondNumber: $('#secondNumber').val(),
        operation: $('#operation').val()
    };

    $.ajax({
        method: 'POST',
        url: '/math',
        data: entry,
        success: function(response) {
            console.log('POST response', response);
            // after the post, clear the values
            $('#firstNumber').val('');
            $('#secondNumber').val('');

            // GET request should be in your success of your POST
            getHistory();
        }
    });
}

function getHistory () {
    $.ajax({
        method: 'GET',
        url: '/math',
        success: function(response){
            console.log('GET response:', response);
            $('#history').empty();
            // append with a for loop
            for (let i = 0; i < response.length; i++) {
                const element = response[i];
                $('#history').prepend('<p>' + element.firstNumber + ' ' + element.operator + ' ' + element.secondNumber + ' = ' + element.result + '</p>');
            }
        }
    });
}
