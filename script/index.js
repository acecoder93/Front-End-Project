
$(function() {
    var i = 0;

    $('#text-input').keypress(function(e){
        var key = e.which||e.keyCode;
        if (key === 13){
            var textque = ["Welcome to the Sea! What can I assist you with?", "Great, Where are you currently?","What are you in the mood for?", "These are the choices around you"]
            var srcText = textque[i];
            var j = 0;
            var result = srcText[j];
            setInterval(function() {
                    if(j == srcText.length) {
                        clearInterval(this);
                        return;
                    };
                    j++;
                    result += srcText[j].replace("\n", "<br />");
                    $("#target").html( result);
            },
            100); // the period between every character and next one, in milliseonds.
            i++
            if (i > textque.length-1){
                i = 0
        }

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