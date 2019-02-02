
$(function () {
    function ClearFields() {

        document.getElementById("cuisine-input").value = "";
    }
    var i = 0; //used for index of each textque.
    var inputs = [] //used to stores user inputs.
    var count = 0  //used to determine when the textque is completed
    var url = 'https://api.edamam.com/search?q=';
    var apiId = 'be5d1e96';
    var apiKey = '0c29a5e9ce187319b53367b2cc67256f';
    var k = $('.card').length; //helps loop determine length of our accordion list
    var j = Math.floor(Math.random() * 100000)// used to provide unique id's to each of the cards of the accordion

    // var cal_min = '0'; // Fixed value for minimum calories
    // var cal_max = '500'; // Needs to be changed based on user input

    $('#enter-button').on("click", function () {
        $('#enter-button').prop("disabled", true);
        inputs.push($('#cuisine-input').val())
        ClearFields()
        count++;
        var weatherque = ["What can I assist you with?"]
        var recipeque = ["What are you in the mood for?", "These are your choices!", 'Welcome to the Sea!\n What can I assist you with?']
        var restaurantque = ["Great, Where are you currently?", 'Welcome to the Sea! \nWhat can I assist you with?']
        var invalidque = ["Please input a valid response.", 'Welcome to the Sea!\n What can I assist you with?']
        if (inputs[0] == "recipes") {
            console.log(i)
            var srcText = recipeque[i];
        } else if (inputs[0] == "restaurants") {
            var srcText = restaurantque[i]
        } else if (isNaN(inputs[0]) == false){
            let url = "http://api.openweathermap.org/data/2.5/weather?zip=";
            let apiKey = "bd0b9c18de9f9362ac0f2bc5223f84cf";
            let zipCode = inputs[0];
            $.get(url + zipCode + ',us&units=imperial&APPID=' + apiKey)
            .done((result) => {
                var fahrenheit = result.main.temp;
                var degF = Math.floor(fahrenheit);
                var degree = '&deg;F';
                var total = degF + degree;
                total.replace(`/\s/g, ''`);
                var city = result.name;
                $('#weather').append(`${total} | ${city}`);

                // Sky Background Logic
                // var weatherCondition = result.weather[0].id.toString();
                // var weatherCon2 = weatherCondition.charAt(0);
                // Test Weather Conditions:
                var weatherCondition = "802";
                var weatherCon2 = "";

                // STORM
                if (weatherCon2 == "2"){
                    $('body').css('background-image', 'url(./img/background/storm.png)');
                    $('#captain-head').attr('src','img/captain_logo_white.png');
                    $('#gearPic').attr('src','img/wheel_white.png');
                    $('#weather').css('color','white');
                    $('#target').css('color','white');
                }
                // RAIN 1
                else if (weatherCon2 == "3"){
                    $('body').css('background-image', 'url(./img/background/rain.png)');
                    $('#captain-head').attr('src','img/captain_logo_white.png');
                    $('#gearPic').attr('src','img/wheel_white.png');
                    $('#weather').css('color','white');
                    $('#target').css('color','white');
                }
                // RAIN 2
                else if (weatherCon2 == "5"){
                    $('body').css('background-image', 'url(./img/background/rain.png)');
                    $('#captain-head').attr('src','img/captain_logo_white.png');
                    $('#gearPic').attr('src','img/wheel_white.png');
                    $('#weather').css('color','white');
                    $('#target').css('color','white');
                }
                // SNOW
                else if (weatherCon2 == "6"){
                    $('body').css('background-image', 'url(./img/background/snow.png)');
                    $('#captain-head').attr('src','img/captain_logo_white.png');
                    $('#gearPic').attr('src','img/wheel_white.png');
                    $('#weather').css('color','white');
                    $('#target').css('color','white');
                }
                // CLEAR
                else if (weatherCondition == "800"){
                    $('body').css('background-image', 'url(./img/background/clear_day.png)');
                }
                // CLOUDY
                else if (weatherCondition == "801" || "802" || "803" || "804"){
                    $('body').css('background-image', 'url(./img/background/cloudy.png)');
                }
            })
            inputs=[]
            count = 0
            var srcText = weatherque[i];
        }
        else {
            var srcText = invalidque[i]
        }
        var l = 0;//used to iterate through each letter of a string
        var result = srcText[l];
        setInterval(function () {
            if (l == srcText.length - 1) {
                clearInterval(this);
                return;
            };
            l++;
            result += srcText[l].replace("\n", "<br />")
            $("#target").html(result);
            if (srcText.length == result.length) {
                $('#enter-button').prop("disabled", false);
            }

        },
            100); // the period between every character and next one, in milliseonds.
        i++

        //resets user inputs
        if (i > recipeque.length - 1 && inputs[0] == "recipes") {
            console.log(inputs)
            i = 0
            inputs = []
            console.log(inputs)
            count = 0
        } else if (i > restaurantque.length - 1 && inputs[0] == "restaurants") {
            console.log(inputs)
            i = 0
            inputs = []
            console.log(inputs)
            count = 0
        } else if (i > invalidque.length - 1 && (inputs[0] != "restaurants" && inputs[0] != "recipes")) {
            console.log(inputs)
            i = 0
            inputs = []
            console.log(inputs)
            count = 0
        }else if(srcText == weatherque[0]){
            i=0
        }
        if (count == 2 && inputs[0] == "recipes") {
            var $recipeInputContainer = $('<div>', {
                'id': 'recipeInputContainer',
                'style': 'display:flex; flex-direction:column; justify-content:center; align-items:center'

            })
            var $recipeInputButtonContainer = $('<div>', {
                'id': 'recipeInputButtonContainer',
                'style': 'display:flex; justify-content:space-around; margin-top:3%; width:60%'

            })

            var $recipeInput = $('<input>', {
                'type': "text",
                'style': 'border:0;border-bottom:#445376 5px solid; border-radius:3px; background:none; width:80%; margin-top:5%',
                'id': 'moreRecipeInput',
                'placeholder': 'What else would you like to eat?'
            })
            var $recipeinputButton = $('<button>', {
                'id': 'recipe-button',
                'class':'hoverbutton',
                'style':'font-weight: bold; width:30%; height:15%; min-width:111px',
                'text': 'ADD'
            })
            var $randomButton = $('<button>', {
                'id': 'random-button',
                'class':'hoverbutton',
                'style':'font-weight: bold; width:30%; height:15%; min-width:111px',
                'text': `RANDOMIZE!`
            })
            if ($("#accordion-holder").find("#recipeInputContainer").length == 0){ 
                $('#accordion-holder').append($recipeInputContainer)
            }
            if( $('#recipeInputContainer').is(':empty') ) {
                $('#recipeInputContainer').append($recipeInput)
                $('#recipeInputContainer').append($recipeInputButtonContainer)
                $('#recipeInputButtonContainer').append($recipeinputButton)
                $('#recipeInputButtonContainer').append($randomButton)
            }
            // $('#recipeEmptyContainer').append($recipeInputContainer)
            
            $('#recipe-button').on("click", function () {
                k = $('.card').length
                var type = $('#moreRecipeInput').val()
                $.get(url + type + '&app_id=' + apiId + '&app_key=' + apiKey + '&from=1&to=100') //'&calories=' + cal_min + '-' + cal_max + '&health=alcohol-free')
                    .done((result) => {
                        console.log(result);
                        while (k < 12) {
                            k++
                            j++
                            let ran = Math.floor(Math.random() * 99) // randomly take one recipe

                            let $card = $('<div>', {
                                'class': "card",
                                'id': 'card' + j.toString()
                            })
                            let $cardHeader = $('<div>', {
                                'class': 'card-header',
                                'id': 'heading' + j.toString()
                            })
                            let $heading = $('<h5>', {
                                'class': 'mb-0; mr-0',
                                'id': 'h' + j.toString(),
                                'style': 'margin-right: 0%; padding: 0px; display: flex; align-items: center'
                            })
                            let $collapse = $('<div>', {
                                // 'class': 'btn btn-link',
                                'class': 'collapse-col',
                                'data-toggle': 'collapse',
                                'data-target': '#collapse' + j.toString(),
                                'aria-expanded': 'true',
                                'aria-controls': 'collapse' + j.toString(),
                                'text': result.hits[ran].recipe.label
                            })
                            let $collapseText = $('<p>',{
                                'id': 'collapseText' + j.toString(),
                                'class':'m-0'
                            })
                            let $buttonx = $('<button>', {
                                'class': 'x',
                                'text': 'x',
                                'style': 'text-align: right; margin-left: 15px; position: absolute; right: 20px;'
                            })
                            let $box2 = $('<div>', {
                                'id': 'collapse' + j.toString(),
                                'class': 'collapse', // show
                                'aria-labelledby': 'heading' + j.toString(),
                                'data-parent': '#accordion'
                            })
                            let $cardbody = $('<div>', {
                                'class': 'card-body',
                            })

                            // Setup for cards and overlay

                            var $cardBackground = $('<img>', {
                                'class': 'cardBackground',
                                'src': (result.hits[ran].recipe.image),
                            })

                            var $table = $('<ul>', {
                                'class': 'tableInfo'
                            });

                            var $tableData1 = $('<li>', {
                                'class': 'list-item',
                                'text': 'CAL COUNT: ' + Math.round(result.hits[ran].recipe.calories),
                            })
                            var $tableData2 = $('<li>', {
                                'class': 'list-item',
                                'text': 'MINUTES: ' + (result.hits[ran].recipe.totalTime),

                            })
                            var $tableData3 = $('<li>', {
                                'class': 'list-item',
                                'text': 'YIELD: ' + (result.hits[ran].recipe.yield),

                            })
                            var $tableData4 = $('<a>', {
                                'class': 'recipe_style',
                                'text': 'RECIPE',
                                'href': result.hits[ran].recipe.shareAs,
                            })
                            var $innerDiv = $('<div>', {
                                'class': 'overlayInfo'
                            });


                            // Setting up card layout (image and overlay)
                            // $table.append($tableData1)

                            $cardbody.append($cardBackground);

                            $table.append($tableData1);
                            $table.append($tableData2);
                            $table.append($tableData3);
                            $table.append($tableData4);

                            $cardbody.append($innerDiv);
                            $innerDiv.append($table);

                            $('#accordion').append($card)
                            $(`#card${j}`).append($cardHeader)
                            $(`#heading${j}`).append($heading)
                            $(`#h${j}`).append($collapseText)
                            $(`#h${j}`).append($buttonx)
                            $(`#card${j}`).append($box2)
                            $(`#collapseText${j}`).append($collapse)
                            $(`#collapse${j}`).append($cardbody)
                            $(".x").on('click', function () {
                                $(this).parents('.card').get(0).remove()
                            });
                        }
                    })
            })
            var type = inputs[1]
            $.get(url + type + '&app_id=' + apiId + '&app_key=' + apiKey + '&from=1&to=100') //'&calories=' + cal_min + '-' + cal_max + '&health=alcohol-free')
                .done((result) => {
                    console.log(result);
                    while (k < 12) {
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
                            'id': 'card' + j.toString()
                        })
                        let $cardHeader = $('<div>', {
                            'class': 'card-header',
                            'id': 'heading' + j.toString()
                        })
                        let $heading = $('<h5>', {
                            'class': 'mb-0; mr-0',
                            'id': 'h' + j.toString(),
                            'style': 'margin-right: 0%; padding: 0px; display: flex; align-items: center'
                        })
                        let $collapse = $('<div>', {
                            // 'class': 'btn btn-link',
                            'class': 'collapse-col',
                            'data-toggle': 'collapse',
                            'data-target': '#collapse' + j.toString(),
                            'aria-expanded': 'true',
                            'aria-controls': 'collapse' + j.toString(),
                            'text': result.hits[ran].recipe.label
                        })
                        let $collapseText = $('<p>',{
                            'id': 'collapseText' + j.toString(),
                            'class':'m-0'
                        })
                        let $buttonx = $('<button>', {
                            'class': 'x',
                            'text': 'x',
                            'style': 'text-align: right; margin-left: 15px; position: absolute; right: 20px;'
                        })
                        let $box2 = $('<div>', {
                            'id': 'collapse' + j.toString(),
                            'class': 'collapse', // collapse
                            'aria-labelledby': 'heading' + j.toString(),
                            'data-parent': '#accordion'
                        })
                        let $cardbody = $('<div>', {
                            'class': 'card-body',
                        })

                        // Setup for cards and overlay

                        var $cardBackground = $('<img>', {
                            'class': 'cardBackground',
                            'src': (result.hits[ran].recipe.image),
                        })

                        var $table = $('<ul>', {
                            'class': 'tableInfo'
                        });

                        var $tableData1 = $('<li>', {
                            'class': 'list-item',
                            'text': 'CAL COUNT: ' + Math.round(result.hits[ran].recipe.calories),
                        })
                        var $tableData2 = $('<li>', {
                            'class': 'list-item',
                            'text': 'MINUTES: ' + (result.hits[ran].recipe.totalTime),

                        })
                        var $tableData3 = $('<li>', {
                            'class': 'list-item',
                            'text': 'YIELD: ' + (result.hits[ran].recipe.yield),

                        })
                        var $tableData4 = $('<a>', {
                            'class': 'recipe_style',
                            'text': 'RECIPE',
                            'href': result.hits[ran].recipe.shareAs,
                        })
                        var $innerDiv = $('<div>', {
                            'class': 'overlayInfo'
                        });


                        // Setting up card layout (image and overlay)
                        // $table.append($tableData1)

                        $cardbody.append($cardBackground);

                        $table.append($tableData1);
                        $table.append($tableData2);
                        $table.append($tableData3);
                        $table.append($tableData4);

                        $cardbody.append($innerDiv);
                        $innerDiv.append($table);


                        $('#accordion').append($card)
                        $(`#card${j}`).append($cardHeader)
                        $(`#heading${j}`).append($heading)
                        $(`#h${j}`).append($collapseText)
                        $(`#h${j}`).append($buttonx)
                        $(`#card${j}`).append($box2)
                        $(`#collapseText${j}`).append($collapse)
                        $(`#collapse${j}`).append($cardbody)
                        $(".x").on('click', function () {
                            $(this).parents('.card').get(0).remove()
                        });
                    }
                    setTimeout(()=>{
                        window.location = '#accordion-holder'

                    },1250);
                    $('#enter-button').prop("disabled", false);
                })
            $('#random-button').on("click", function () {
                var length = $('.card').length;
                console.log(length)
                let x = Math.floor(Math.random() * length)
                console.log(x)
                let $cards = $('.card')
                let id = $cards[x].id
                let nums = id.replace(/[a-z]/gi, '')
                $(`#collapse${nums}`).removeClass('collapse')
            })
        }
    })
    // function myFunction(screenSize) {
    //     if (screenSize.matches) { 
    //         $('.show').classList.add("collapse")
    //     } else {
    //         $('.collapse').classList.add("show")}
    //     }
    
    // var screenSize = window.matchMedia ("(max-width: 375px)")
    // myFunction(screenSize)
    // screenSize.addListener(myFunction)
});



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


// // Media Query for Card
// function myFunction(screenSize) {
//     if (screenSize.matches) { 
//         $('.show').classList.add("collapse")
//     } else {
//         $('.collapse').classList.add("show")    }
//     }

// var screenSize = window.matchMedia ("(max-width: 375px)")
// myFunction(screenSize)
// screenSize.addListener(myFunction)
