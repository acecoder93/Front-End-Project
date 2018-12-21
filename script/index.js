
$(function() {
    var i = 0;

    $('#enter-button').on("click", function(e){
            $('#enter-button').prop("disabled",true);
            var textque = ["Welcome to the Sea! What can I assist you with?", "Great, Where are you currently?","What are you in the mood for?", "These are the choices around you"]
            var srcText = textque[i];
            var j = 0;
            var result = srcText[j];
            setInterval(function() {
                    if(j == srcText.length-1) {
                        clearInterval(this);
                        return;
                    };
                    j++;
                    result += srcText[j]
                    // .replace("\n", "<br />");
                    $("#target").html( result);
                    if(srcText.length == result.length){
                        $('#enter-button').prop("disabled",false);
                    }
            },
            100); // the period between every character and next one, in milliseonds.
            i++
            if (i > textque.length-1){
                i = 0
            }

        })
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
