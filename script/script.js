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

    /*
    HELFER-FUNKTION

    function validateForm(fieldName, pattern, fieldNameError, message){
         if (!fieldName.match(pattern) || fieldname == ""){
             alert(fieldNameError.value);
             var listPoint = document.createElement('li');
             errorList.appendChild(listPoint);
             listPoint.setAttribute('id',fieldNameError);
             document.getElementById(fieldNameError).className = "error";
             document.getElementById(fieldNameError).innerHTML = message;
         }else{
             if(document.getElementById(fieldNameError)){
                 listPoint = document.getElementById(fieldNameError);
                 alert(listPoint);
                 errorList.removeChild(listPoint);
             }
         }
    };

    validateForm(forname, stringPattern, "fornameError", "Gülltigen Vornamen eingeben");
    validateForm(surname, stringPattern, "surnameError", "Gülltigen Nachnamen eingeben");
    */

    //------------------------------------------------------------------------------------------------
    //FORNAME
    if (!forname.match(stringPattern) || forname==""){
        var fornameError = document.createElement('li');
        errorList.appendChild(fornameError);
        fornameError.setAttribute('id','fornameError');
        document.getElementById("fornameError").className = "error";
        document.getElementById("fornameError").innerHTML = "Gülltigen Vornamen eingeben";
    }else{
        if(document.getElementById("fornameError")){
            var fornameError = document.getElementById("fornameError");
            errorList.removeChild(fornameError);
        }
    };
    //------------------------------------------------------------------------------------------------
    //SURNAMA
    if (!surname.match(stringPattern) || surname==""){
        var surnameError = document.createElement('li');
        errorList.appendChild(surnameError);
        surnameError.setAttribute('id','surnameError');
        document.getElementById("surnameError").className = "error";
        document.getElementById("surnameError").innerHTML = "Gülltigen Nachnamen eingeben";
    }else{
        if(document.getElementById("surnameError")){
            var surnameError = document.getElementById("surnameError");
            errorList.removeChild(surnameError);
        }
    };
    //------------------------------------------------------------------------------------------------
    //STREET
    if (!street.match(stringPattern) || street==""){
        var streetError = document.createElement('li');
        errorList.appendChild(streetError);
        streetError.setAttribute('id','streetError');
        document.getElementById("streetError").className = "error";
        document.getElementById("streetError").innerHTML = "Gülltigen Straßennamen eingeben";
    }else{
        if(document.getElementById("streetError")){
            var streetError = document.getElementById("streetError");
            errorList.removeChild(streetError);
        }
    };
    //------------------------------------------------------------------------------------------------
    //STREET-NUMBER
    if (!streetNumber.match(numberPattern) || streetNumber==""){
        var streetNumberError = document.createElement('li');
        errorList.appendChild(streetNumberError);
        streetNumberError.setAttribute('id','streetNumberError');
        document.getElementById("streetNumberError").className = "error";
        document.getElementById("streetNumberError").innerHTML = "Gülltige Haus-Nummer eingeben";
    }else{
        if(document.getElementById("streetNumberError")){
            var streetNumberError = document.getElementById("streetNumberError");
            errorList.removeChild(streetNumberError);
        }
    };
    //------------------------------------------------------------------------------------------------
    //ZIP-CODE
    if (!zipCode.match(numberPattern) || zipCode==""){
        var zipCodeError = document.createElement('li');
        errorList.appendChild(zipCodeError);
        zipCodeError.setAttribute('id','zipCodeError');
        document.getElementById("zipCodeError").className = "error";
        document.getElementById("zipCodeError").innerHTML = "Gülltige Postletzahl eingeben";
    }else{
        if(document.getElementById("zipCodeError")){
            var zipCodeError = document.getElementById("zipCodeError");
            errorList.removeChild(zipCodeError);
        }
    };
    //------------------------------------------------------------------------------------------------
    //LOCATION
    if (!location.match(stringPattern) || location==""){
        var locationError = document.createElement('li');
        errorList.appendChild(locationError);
        locationError.setAttribute('id','locationError');
        document.getElementById("locationError").className = "error";
        document.getElementById("locationError").innerHTML = "Gülltigen Ortsnamen eingeben";
    }else{
        if(document.getElementById("locationError")){
            var locationError = document.getElementById("locationError");
            errorList.removeChild(locationError);
        }
    };
    //------------------------------------------------------------------------------------------------
    //LOCATION
    if (!email.match(emailPattern) || email==""){
        var emailError = document.createElement('li');
        errorList.appendChild(emailError);
        emailError.setAttribute('id','emailError');
        document.getElementById("emailError").className = "error";
        document.getElementById("emailError").innerHTML = "Gülltige Email-Adresse eingeben";
    }else{
        if(document.getElementById("emailError")){
            var emailError = document.getElementById("emailError");
            errorList.removeChild(emailError);
        }
    };
    //------------------------------------------------------------------------------------------------
    //PHONE-NUMBER
    if (!phone.match(numberPattern) || phone==""){
        var phoneError = document.createElement('li');
        errorList.appendChild(phoneError);
        phoneError.setAttribute('id','phoneError');
        document.getElementById("phoneError").className = "error";
        document.getElementById("phoneError").innerHTML = "Gülltige Telefon-Nummer eingeben";
    }else{
        if(document.getElementById("phoneError")){
            var phoneError = document.getElementById("phoneError");
            errorList.removeChild(phoneError);
        }
    };
    //------------------------------------------------------------------------------------------------
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
