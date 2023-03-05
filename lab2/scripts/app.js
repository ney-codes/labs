// Name: Diego Diaz and Neema Mwansembo
// Date Modified: March 1st, 2023
// Description: This document contains all the functions for the website.

// create a variable that contains the error message

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
    const firstNamePattern =  /^([A-Z][a-z]{2,25})$/g 
         ValidateInput("firstName", firstNamePattern, "Please Enter a Valid First Name (First Letter MUST BE Capitalized!)")
    const lastNamePattern =  /^([A-Z][a-z]{2,25})$/g 
         ValidateInput("lastName", lastNamePattern, "Please Enter a Valid Last Name (First Letter MUST BE Capitalized!)")
    const emailPattern = /^[\w-.]{8,}@([\w-]+.)+[\w-][^\d]{1,10}$/;
        ValidateInput("emailAddress", emailPattern, "Please Enter a Valid Email (Minimum Length Must be 8 characters)")
    const passwordPattern = /^.{6,}$/g
         ValidateInput("password", passwordPattern, "Please Enter a Valid Password (Minimum Length Must be 6 characters)", "confirmPassword", "Confirm password Must be Equal to Password" )
}