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
    var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    var forname = document.getElementById("forname").value;
    var surname = document.getElementById("surname").value;
    var street = document.getElementById("street").value;
    var streetNumber = document.getElementById("street-number").value;
    var zipCode = document.getElementById("zip-code").value;
    var location = document.getElementById("location").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    if (!forname.match(stringPattern)){
        var fornameError = document.createElement('li');
        errorList.appendChild(fornameError);
        fornameError.setAttribute('id','fornameError');
        document.getElementById("fornameError").className = "error";
        document.getElementById("fornameError").innerHTML = "Gülltigen Vornamen eingeben";
    }else{
        var listPoint =  document.getElementById("fornameError");
            errorList.removeChild(listPoint);
    }

    if (!surname.match(stringPattern)){
        document.getElementById("surnameError").className = "error";
        document.getElementById("surnameError").innerHTML = "Gülltigen Nachnamen eingeben";
    }else{
        document.getElementById("surnameError").className = "success";
        document.getElementById("surnameError").innerHTML = "Nachname: " + surname;
    }

    if (!street.match(stringPattern)){
        document.getElementById("streetError").className = "error";
        document.getElementById("streetError").innerHTML = "Gülltigen Straßennamen eingeben";
    }else{
        document.getElementById("streetError").className = "success";
        document.getElementById("streetError").innerHTML = "Straße: " + street;
    }

    if(!streetNumber.match(numberPattern)){
        document.getElementById("streetNumberError").className = "error";
        document.getElementById("streetNumberError").innerHTML = "Gülltige Hausnummer eingeben";
    }else{
        document.getElementById("streetNumberError").className = "success";
        document.getElementById("streetNumberError").innerHTML = "Hausnummer: " + streetNumber;
    }

    if(!zipCode.match(numberPattern)){
        document.getElementById("zipCodeError").className = "error";
        document.getElementById("zipCodeError").innerHTML = "Gülltige Postleitzahl eingeben";
    }else{
        document.getElementById("zipCodeError").className = "success";
        document.getElementById("zipCodeError").innerHTML = "Postleitzahl: " + zipCode;
    }

    if (!location.match(stringPattern)){
        document.getElementById("locationError").className = "error";
        document.getElementById("locationError").innerHTML = "Gülltigen Straßennamen eingeben";
    }else{
        document.getElementById("locationError").className = "success";
        document.getElementById("locationError").innerHTML = "Straße: " + location;
    }

    if (!email.match(emailPattern)) {
        document.getElementById("emailError").className = "error";
        document.getElementById("emailError").innerHTML = "Gülltige Email-Adresse eingeben";
    } else{
            document.getElementById("emailError").className = "success";
            document.getElementById("emailError").innerHTML = "Email: " + email;
        }

    if(!phone.match(numberPattern)){
        document.getElementById("phoneError").className = "error";
        document.getElementById("phoneError").innerHTML = "Gülltige Telefonnummer eingeben";
    }else{
        document.getElementById("phoneError").className = "success";
        document.getElementById("phoneError").innerHTML = "Telefonnummer: " + phone;
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
