
$(function () {
    function ClearFields() {

        document.getElementById("cuisine-input").value = "";
    }  
    var i = 0;
    var inputs = []
    var count = 0
    var url = 'https://api.edamam.com/search?q=';
    var apiId = 'be5d1e96';
    var apiKey = '0c29a5e9ce187319b53367b2cc67256f';
    var k = $('.card').length;
    var j = Math.floor(Math.random() * 100000)
    // var cal_min = '0'; // Fixed value for minimum calories
    // var cal_max = '500'; // Needs to be changed based on user input

    $('#enter-button').on("click", function () {
        $('#enter-button').prop("disabled", true);
        inputs.push($('#cuisine-input').val())
        ClearFields()
        count++;
        var recipeque = ["Great, Where are you currently located?", "What are you in the mood for?", "These are your choices!",'Welcome to the Sea! What can I assist you with?'];
        var weatherque = ["Great, where are you currently located?"]
        var restaurantque = ["Great, Where are you currently located?", 'Welcome to the Sea! What can I assist you with?'];
        var invalidque = ["Please input a valid response.", 'Welcome to the Sea! What can I assist you with?'];
        if(inputs[0] == "recipes"){
            var srcText = recipeque[i];
        }else if (inputs[0] == "restaurants"){
            var srcText = restaurantque[i]
        }else if (inputs[0] == "weather"){
            var srcText = weatherque[i]
        }
        else{
            var srcText = invalidque[i]
        }


    // // Weather Api;
    // $(function(){
    //     var url = "http://api.openweathermap.org/data/2.5/weather?q=";
    //     var apiKey = "ad8af1d7fbacdeceed6e31526ea1682a";
    //     var toFah = function(temp){
    //     var cel = temp - 273.15
    //     var fah = Math.floor(cel * 1.8 + 32)
    //     return fah
    // }

    // $('#submit').on('click',function(){
    //     $('main').empty()
    //     var userInput = $('#city-input').val()
    //     var $weatherbox = $('<div>',{
    //         'id': 'weatherbox',
    //         'text': userInput,
    //     })

    //     $.get(url + userInput + '&appid=' + apiKey)
    //     .done((result)=>{
    // var $temperature = $('<div>',{
    // 'id': 'temperature',
    // 'text': toFah(result.main.temp) + String.fromCharCode(176) + "F"
    // })
    //         var $mintemp = $('<div>',{
    //             "id": 'mintemp',
    //             'text': 'Min Temp: ' + toFah(result.main.temp_min) + String.fromCharCode(176) + "F"
    //         })
    //         var $maxtemp = $('<div>',{
    //             "id": 'maxtemp',
    //             'text': 'Max Temp: ' + toFah(result.main.temp_max) + String.fromCharCode(176) + "F"
    //         })
    //         var $elements = $('<div>',{
    //             "id": 'elements',
    //             'text':  result.weather[0].description
    //         })
    //         console.log(result)
    //         $('main').append($weatherbox)
    //         $('#weatherbox').append($temperature)
    //         $('#weatherbox').append($elements)
    //         $('#weatherbox').append($mintemp)
    //         $('#weatherbox').append($maxtemp)

    //     })
    // })

    // })

        var l = 0;
        var result = srcText[l];
        setInterval(function () {
            if (l== srcText.length - 1) {
                clearInterval(this);
                return;
            };
            l++;
            result += srcText[l]
            $("#target").html(result);
            if (srcText.length == result.length) {
                $('#enter-button').prop("disabled", false);
            }
            
        },
            100); // the period between every character and next one, in milliseonds.
        i++
        if (i > recipeque.length - 1 && inputs[0] == "recipes") {
            console.log(inputs)
            i = 0
            inputs = []
            console.log(inputs)
            count = 0
        } else if (i > restaurantque.length - 1 && inputs[0] == "restaurants"){
            console.log(inputs)
            i = 0
            inputs = []
            console.log(inputs)
            count = 0
        } else if (i > invalidque.length - 1 && (inputs[0] != "restaurants" && inputs[0] != "recipes" )){
            console.log(inputs)
            i = 0
            inputs = []
            console.log(inputs)
            count = 0
        } 

        var type = inputs[2] // Needs to be changed based on user input
        if (count == 3 && inputs[0] == "recipes"){
            $.get(url + type + '&app_id=' + apiId + '&app_key=' + apiKey + '&from=1&to=100') //'&calories=' + cal_min + '-' + cal_max + '&health=alcohol-free')
            .done((result) => {
                console.log(result);
                while (k < 10) {
                    k++
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
                window.location = '#accordion'
                $('#enter-button').prop("disabled", false);
                // count = 0
            })
        }
    })
});
// General EDAMAM API 
// $(function () {

//     $('#submit').on('click', function () {
//         var url = 'https://api.edamam.com/search?q=';
//         var type = $('#cuisine-input').val(); // Needs to be changed based on user input
//         var apiId = 'be5d1e96';
//         var apiKey = '0c29a5e9ce187319b53367b2cc67256f';
//         var i = $('.card').length;
//         var j = Math.floor(Math.random() * 100000)
//         // var cal_min = '0'; // Fixed value for minimum calories
//         // var cal_max = '500'; // Needs to be changed based on user input
//         $.get(url + type + '&app_id=' + apiId + '&app_key=' + apiKey + '&from=1&to=100') //'&calories=' + cal_min + '-' + cal_max + '&health=alcohol-free')
//             .done((result) => {
//                 console.log(result);
//                 while (i < 10) {
//                     i++
//                     j++
//                     let ran = Math.floor(Math.random() * 99) // randomly take one recipe
//                     // let $recipe = $('<div>', {
//                     //   'text': result.hits[ran].recipe.label
//                     // })
//                     // let $recipeimg = $('<img>', {
//                     //   'src': result.hits[ran].recipe.image
//                     // })
//                     // $('#information-box').append($recipe)
//                     // $('#information-box').append($recipeimg)
//                     let $card = $('<div>', {
//                         'class': "card",
//                         'style': "width:100%",
//                         'id': 'card' + j.toString()
//                     })
//                     let $cardHeader = $('<div>', {
//                         'class': 'card-header',
//                         'style': 'width:100%; padding: 0px; display: inline',
//                         'id': 'heading' + j.toString()
//                     })
//                     let $heading = $('<h5>', {
//                         'class': 'mb-0',
//                         'id': 'h' + j.toString()
//                     })
//                     let $collapse = $('<div>', {
//                         // 'class': 'btn btn-link',
//                         'style': 'width: 80%; text-align: center; display: inline-block',
//                         'data-toggle': 'collapse',
//                         'data-target': '#collapse' + j.toString(),
//                         'aria-expanded': 'true',
//                         'aria-controls': 'collapse' + j.toString(),
//                         'text': result.hits[ran].recipe.label
//                     })
//                     let $buttonx = $('<button>', {
//                         'class': 'x',
//                         'text': 'x'
//                     })
//                     let $box2 = $('<div>', {
//                         'id': 'collapse' + j.toString(),
//                         'class': 'collapse', // show
//                         'aria-labelledby': 'heading' + j.toString(),
//                         'data-parent': '#accordion'
//                     })
//                     let $cardbody = $('<div>', {
//                         'class': 'card-body',
//                         'text': 'hello world'
//                     })
//                     $('#accordion').append($card)
//                     $(`#card${j}`).append($cardHeader)
//                     $(`#heading${j}`).append($heading)
//                     $(`#h${j}`).append($collapse)
//                     $(`#h${j}`).append($buttonx)
//                     $(`#card${j}`).append($box2)
//                     $(`#collapse${j}`).append($cardbody)
//                     $(".x").on('click', function () {
//                         $(this).parents('.card').get(0).remove()
//                     });
//                 }
//                 window.location = '#accordion'
//             })
//     })
// })





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