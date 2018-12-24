
$(function () {
    var i = 0;

    $('#enter-button').on("click", function (e) {
        $('#enter-button').prop("disabled", true);
        var textque = ["Welcome to the Sea! What can I assist you with?", "Great, Where are you currently?", "What are you in the mood for?", "These are the choices around you"]
        var srcText = textque[i];
        var j = 0;
        var result = srcText[j];
        setInterval(function () {
            if (j == srcText.length - 1) {
                clearInterval(this);
                return;
            };
            j++;
            result += srcText[j]
            // .replace("\n", "<br />");
            $("#target").html(result);
            if (srcText.length == result.length) {
                $('#enter-button').prop("disabled", false);
            }
        },
            100); // the period between every character and next one, in milliseonds.
        i++
        if (i > textque.length - 1) {
            i = 0
        }

    })
});
// General EDAMAM API 
$(function () {

    $('#submit').on('click', function () {
        var url = 'https://api.edamam.com/search?q=';
        var type = $('#cuisine-input').val(); // Needs to be changed based on user input
        var apiId = 'be5d1e96';
        var apiKey = '0c29a5e9ce187319b53367b2cc67256f';
        var i = $('.card').length;
        var j = Math.floor(Math.random() * 100000)
        // var cal_min = '0'; // Fixed value for minimum calories
        // var cal_max = '500'; // Needs to be changed based on user input
        $.get(url + type + '&app_id=' + apiId + '&app_key=' + apiKey + '&from=1&to=100') //'&calories=' + cal_min + '-' + cal_max + '&health=alcohol-free')
            .done((result) => {
                console.log(result);
                while (i < 10) {
                    i++
                    j++
                    let ran = Math.floor(Math.random() * 99) // randomly take one recipe
                    // let $recipe = $('<div>', {
                    //   'text': result.hits[ran].recipe.label
                    // })
                    // let $recipeimg = $('<img>', {
                    //   'src': result.hits[ran].recipe.image
                    // })
                    // $('#information-box').append($recipe)
                    // $('#information-box').append($recipeimg)
                    let $card = $('<div>', {
                        'class': "card",
                        'style': "width:100%",
                        'id': 'card' + j.toString()
                    })
                    let $cardHeader = $('<div>', {
                        'class': 'card-header',
                        'style': 'width:100%; padding: 0px; display: inline',
                        'id': 'heading' + j.toString()
                    })
                    let $heading = $('<h5>', {
                        'class': 'mb-0',
                        'id': 'h' + j.toString()
                    })
                    let $collapse = $('<div>', {
                        // 'class': 'btn btn-link',
                        'style': 'width: 80%; text-align: center; display: inline-block',
                        'data-toggle': 'collapse',
                        'data-target': '#collapse' + j.toString(),
                        'aria-expanded': 'true',
                        'aria-controls': 'collapse' + j.toString(),
                        'text': result.hits[ran].recipe.label
                    })
                    let $buttonx = $('<button>', {
                        'class': 'x',
                        'text': 'x'
                    })
                    let $box2 = $('<div>', {
                        'id': 'collapse' + j.toString(),
                        'class': 'collapse', // show
                        'aria-labelledby': 'heading' + j.toString(),
                        'data-parent': '#accordion'
                    })
                    let $cardbody = $('<div>', {
                        'class': 'card-body',
                        'text': 'hello world'
                    })
                    $('#accordion').append($card)
                    $(`#card${j}`).append($cardHeader)
                    $(`#heading${j}`).append($heading)
                    $(`#h${j}`).append($collapse)
                    $(`#h${j}`).append($buttonx)
                    $(`#card${j}`).append($box2)
                    $(`#collapse${j}`).append($cardbody)
                    $(".x").on('click', function () {
                        $(this).parents('.card').get(0).remove()
                    });
                }
            })
    })
})





/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function openNav2() {
    document.getElementById("mySidenav2").style.width = "50%";
}

/* Set the width of the side navigation to 0 */
function closeNav2() {
    document.getElementById("mySidenav2").style.width = "0";
}
