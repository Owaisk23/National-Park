function dmode() {
    var container = document.getElementById("container");
    var dark = document.getElementById("moon");
    var light = document.getElementById("sun");
    var navbar = document.getElementById("nav")
    var card1 = document.getElementById("card1")
    var card2 = document.getElementById("card2")
    var card3 = document.getElementById("card3")
    var card4 = document.getElementById("card4")
    var card5 = document.getElementById("card5")
    var card6 = document.getElementById("card6")
    var card7 = document.getElementById("card7")
    
    var footer = document.getElementById("footer")
    var dw = document.getElementById("dw")
    var dw1 = document.getElementById("dw1")
    var dw2 = document.getElementById("dw2")
    var dw3 = document.getElementById("dw3")
    var dw4 = document.getElementById("dw4")
    
    
    
    
    container.style.backgroundColor = "black";
    container.style.color = "white";
    navbar.style.backgroundColor = "black"
    navbar.style.textDecorationColor = "green"
    card1.style.backgroundColor = "black"
    card1.style.color = "white"
    card2.style.backgroundColor = "black"
    card2.style.color = "white"
    card3.style.backgroundColor = "black"
    card3.style.color = "white"
    card4.style.color = "white"
    card4.style.backgroundColor = "black"
    card5.style.backgroundColor = "black"
    card5.style.color = "white"
    card6.style.backgroundColor = "black"
    card6.style.color = "white"
    card7.style.backgroundColor = "black"
    card7.style.color = "white"
    footer.style.backgroundColor = "black"
    dw.style.color = "white";
    dw1.style.color = "white";
    dw2.style.color = "white";
    dw3.style.color = "white";
    dw4.style.color = "white";
    
    
    
    dark.style.display = "none";
    light.style.display = "inline";
    
}
//Light Mode
function lmode() {
    var container = document.getElementById("container");
    var dark = document.getElementById("moon");
    var light = document.getElementById("sun");
    var navbar = document.getElementById("nav")
    var card1 = document.getElementById("card1")
    var card2 = document.getElementById("card2")
    var card3 = document.getElementById("card3")
    var card4 = document.getElementById("card4")
    var card5 = document.getElementById("card5")
    var card6 = document.getElementById("card6")
    var card7 = document.getElementById("card7")
    
    
    
    var dw = document.getElementById("dw")
    var dw1 = document.getElementById("dw1")
    var dw2 = document.getElementById("dw2")
    var dw3 = document.getElementById("dw3")
    var dw4 = document.getElementById("dw4")
    
    
    
    
    container.style.backgroundColor = "white";
    container.style.color = "black";
    navbar.style.backgroundColor = "white"
    navbar.style.textDecorationColor = "green"
    card1.style.backgroundColor = "white"
    card1.style.color = "black"
    card2.style.backgroundColor = "white"
    card2.style.color = "black"
    card3.style.backgroundColor = "white"
    card3.style.color = "black"
    card4.style.backgroundColor = "white"
    card4.style.color = "black"
    card5.style.backgroundColor = "white"
    card5.style.color = "black"
    card6.style.backgroundColor = "white"
    card6.style.color = "black"
    card7.style.backgroundColor = "White"
    card7.style.color = "Black"
    
    dw.style.color = "black";
    dw1.style.color = "black";
    dw2.style.color = "black";
    dw3.style.color = "black";
    dw4.style.color = "black";
   


    dark.style.display = "inline";
    light.style.display = "none";

}

// Dark Mode Text

function applydmode() {

    var dmodetext = document.getElementById("dmodetext")

    dmodetext.innerText = "Apply Dark Mode"
    dmodetext.style.position = "absolute"
}

//Dark Mode Text Remove
function notapplydmode() {

    var dmodetext = document.getElementById("dmodetext")

    dmodetext.innerText = ""
    dmodetext.style.position = "absolute"

}

//Light Mode Text
function applylmode() {
    var lmodetext = document.getElementById("lmodetext")

    lmodetext.innerText = "Apply Light Mode"
    lmodetext.style.position = "absolute"
}

//Light Mode Text Remove
function notapplylmode() {
    var lmodetext = document.getElementById("lmodetext")

    lmodetext.innerText = ""
    lmodetext.style.position = "absolute"
} 