// Name: Diego Diaz and Neema Mwansembo
// Date Modified: March 1st, 2023
// Description: This document contains all the functions for the website.

// create a variable that contains the error message
var errorMessage = document.getElementById("ErrorMessage");

function validateForm(){

    ContactFormValidate();

    let firstname = document.forms["registerForm"]["firstName"].value;
    let lastname = document.forms["registerForm"]["lastName"].value;
    let email = document.forms["registerForm"]["emailAddress"].value;
    let password = document.forms["registerForm"]["password"].value;
    let confirmpassword = document.forms["registerForm"]["confirmPassword"].value;

    if(firstname == ""){
        errorMessage.textContent = "First Name must be filled out";
        return false;
    }
    else if(lastname == ""){
        errorMessage.textContent = "Last Name must be filled out";
        return false;
    }
    else if(email == ""){
        errorMessage.textContent = "Email Address must be filled out";
        return false;
    }
    else if(password == ""){
        errorMessage.textContent = "Password must be filled out";
        return false;
    }
    else if(confirmpassword == ""){
        errorMessage.textContent = "You must confirm your password";
        return false;
    }
    else if(password != confirmpassword){
        errorMessage.textContent = "Your password is not matching";
        return false;
    }
    else{
        errorMessage.textContent = firstname;
        return false;
    }
}

    // select the input field by its ID
    var firstName = $('#firstName');
  
    // bind the keyup event to the input field
    firstName.on('keyup', function() {
      // get the value of the input field
      var firstName = $(this).val();
  
      // check if the length of the input value is less than 2
      if (firstName.length < 2) {
        // show an error message
        $('#errorMessage').text('Input must be at least 2 characters long');
      } else {
        // clear the error message
        $('#errorMessage').text('');
      }
    });

  

function AddContact(firstName, lastName, email) {
    let contact = new core.Contact(firstName, lastName, email)
    if (contact.serialize()) {
        let key = contact.Name.substring(0, 1) + Date.now()
        localStorage.setItem(key, contact.serialize())
    }
}

function ValidateInput(inputFieldID, regularExpression, exception) {
    let messageArea = $('#ErrorMessage').hide()

    $('#' + inputFieldID).on("blur", function() {
        let inputText = $(this).val()

        if (!regularExpression.test(inputText)) {
            // failure to match full name with regex

            $(this).trigger("focus").trigger("select")

            messageArea.addClass("alert alert-danger").text(exception).show()
        } else {
            // success in matching full name with regex

            messageArea.removeAttr("class").hide()
        }
    })
}

function ContactFormValidate() {
    let emailAddressPattern = /^[\w-\.]+@([\w-]+\.)+[\w-][\D]{2,10}$/g
    let fullNamePattern = /^([A-Z][a-z]{1,25})((\s|,|-)([A-Z][a-z]{1,25}))*(\s|-|,)*([A-Z][a-z]{1,25})*$/g

    ValidateInput("fullName", fullNamePattern, "Please enter a valid Full name which means a capitalized first name and capitalized last name")
    ValidateInput("emailAddress", emailAddressPattern, "Please enter a valid Email Address")
}