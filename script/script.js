'use strict';

function init() {
    var submitButton = document.getElementById('submitButton').addEventListener('click', checkForm);
    var terms = document.getElementById('terms').addEventListener('click', openTerms);
    var contact = document.getElementById('contact').addEventListener('click', openContact);
    var legal = document.getElementById('legal').addEventListener('click', openLegal);
}

function checkForm(){

    //Elternkonten aller Listen-Elemente
    var errorList = document.getElementById("errorList");

    //Regex Definition
    var stringPattern = /^[a-zA-Z]*$/;
    var numberPattern = /([0-9])([xyz]{0,1})/;
    var emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;

    var forname = document.getElementById("forname").value;
    var surname = document.getElementById("surname").value;
    var street = document.getElementById("street").value;
    var streetNumber = document.getElementById("street-number").value;
    var zipCode = document.getElementById("zip-code").value;
    var location = document.getElementById("location").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;


    //HELFER-FUNKTION
    function validateForm(fieldName, pattern, fieldNameError, message){
         if (!fieldName.match(pattern) || fieldName == ""){
             var listPoint = document.createElement('li');
             errorList.appendChild(listPoint);
             listPoint.setAttribute('id',fieldNameError);
             document.getElementById(fieldNameError).className = "error";
             document.getElementById(fieldNameError).innerHTML = message;
         }else{
             if(document.getElementById(fieldNameError)){
                 listPoint = document.getElementById(fieldNameError);
                 errorList.removeChild(listPoint);
             }
         }
    };

    //METHODEN-AUFRUFE
    validateForm(forname, stringPattern, "fornameError", "Gülltigen Vornamen eingeben");
    validateForm(surname, stringPattern, "surnameError", "Gülltigen Nachnamen eingeben");
    validateForm(street, stringPattern, "streetError", "Gülltigen Straßennamen eingeben");
    validateForm(streetNumber, numberPattern, "streetNumberError", "Gülltige Haus-Nummer eingeben");
    validateForm(zipCode, numberPattern, "zipCodeError", "Gülltige Postletzahl eingeben");
    validateForm(location, stringPattern, "locationError", "Gülltigen Ortsnamen eingeben");
    validateForm(email, emailPattern, "emailError", "Gülltige Email-Adresse eingeben");
    validateForm(phone, numberPattern, "phoneError", "Gülltige Telefon-Nummer eingeben");
};

//-------------------------------------------------------------------------------------------------------------------

//POPUPSee
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
