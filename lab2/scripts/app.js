// Name: Diego Diaz and Neema Mwansembo
// Date Modified: March 1st, 2023
// Description: This document contains all the functions for the website.

(function () {

    function DisplayHome() {
        $("#SubmitButton").on("click", function() {
            location.href = 'login.html'
        })

        $("main").addClass("container").append(`<p id="MainParagraph" class="mt-3 container">${ secondString }</p>`)
    }

    function DisplayProducts() {
        console.log("Products Page")
    }

    function DisplayServices() {
        console.log("Services Page")
    }




    function DisplayContacts() {
        console.log("Contact us Page")
               
    }



    function DisplayReferences() {
        console.log("References Page")
    }
    
    function Start() {
        console.log("App Started Successfully!")

        switch (document.title) {
            case "Home - WEBD6201 Demo":
                DisplayHome()
                break
            case "Products - WEBD6201 Demo":
                DisplayProducts()
                break
            case "Services - WEBD6201 Demo":
                DisplayServices()
                break
            case "Contact us - WEBD6201 Demo":
                DisplayContacts()
                break
            case "Register - WEBD6201 Demo":
                DisplayReferences()
                break    
        }       
    }

    window.addEventListener("load", Start)
})()