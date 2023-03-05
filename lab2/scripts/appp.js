// Creating form validation using jquery
$(function() {
    var $registerForm = $("#registration");
    if($registerForm.length){
        $registerForm.validate({
            rules: {
                firstName: {
                    required: true
                },
                lastName: {
                    required: true
                },
                emailAddress: {
                    required: true,
                    emailAddress: true
                },
                password: {
                    required: true
                },
                confirmPassword: {
                    required: true,
                    equalTo: '#password'
                },

                messages: {
                    firstName: {
                        required: 'Please enter first Name'
                    },
                    lastName: {
                        required: 'Please enter last Name'
                    },
                    emailAddress: {
                        required: 'Please enter email',
                        emailAddress: 'Please enter valid email'
                    },
                    password: {
                        required: 'Please enter password'
                    },
                    confirmPassword: {
                        required: 'Please confirm password',
                        equalTo: 'Your passwords are not matching!'
                    },

                }
            }
        })
    }
});