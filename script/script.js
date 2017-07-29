'use strict';

function init() {
    var submitButton = document.getElementById('submitButton').addEventListener('click', checkForm);
    var terms = document.getElementById('terms').addEventListener('click', openTerms);
    var contact = document.getElementById('contact').addEventListener('click', openContact);
    var legal = document.getElementById('legal').addEventListener('click', openLegal);
}

function checkForm(){

    //Regex Definition
    var string = /^[a-zA-Z]*$/;
    var number = /([0-9])([xyz]{0,1})/;


    var forname = document.getElementById("forname").value;
    var surname = document.getElementById("surname").value;
    var street = document.getElementById("street").value;
    var streetNumber = document.getElementById("street-number").value;
    var zipCode = document.getElementById("zip-code").value;
    var location = document.getElementById("location").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    if (!forname.match(string)){
        alert("KEIN Name");
    }else{
        alert(forname + " ist ein gültiger Name")
    }

    if(!streetNumber.match(number)){
        alert(streetNumber + " ist KEINE Hausnummer")
    }else{
        alert(streetNumber + " ist eine gültige Hausnummer")
    }

    //Ueberpruefung der Email ohne Regex
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
        alert(email + " ist KEINE gültige Email");
        return false;
    }else {
        alert(email + " ist eine gültige Email");
    }



    alert(forname + " " + surname + " " + street + " " + streetNumber + " " + zipCode + " " + location + " " + email + " " + phone);
}

function openTerms() {
    var text =
        '<p>Bestimmungen: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>';
    var popupWindow = window.open("about:blank", "newWindow",
        "width=300,height=400,left=100,top=200");
    popupWindow.document.write(text);
    popupWindow.focus();
}

function openContact() {
    var text =
        '<p>Kontakt-Daten: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>';
    var popupWindow = window.open("about:blank", "newWindow",
        "width=300,height=400,left=100,top=200");
    popupWindow.document.write(text);
    popupWindow.focus();
}

function openLegal() {
    var text =
        '<p>Legal-Text: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>';
    var popupWindow = window.open("about:blank", "newWindow",
        "width=300,height=400,left=100,top=200");
    popupWindow.document.write(text);
    popupWindow.focus();
}

window.addEventListener('DOMContentLoaded', init);
