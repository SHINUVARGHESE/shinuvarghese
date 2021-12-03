
jQuery.validator.addMethod("noSpace", function (value, element) {
    return value == '' || value.trim().length != 0;
}, "No space please and don't leave it empty");
jQuery.validator.addMethod("customEmail", function (value, element) {
    return this.optional(element) || /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value);
}, "Please enter valid email address!");
$.validator.addMethod("numeric", function (value, element) {
    return this.optional(element) || value == value.match(/^[0-9]+$/);
}, "Numbers Only");
$.validator.addMethod("alphanumeric", function (value, element) {
    return this.optional(element) || value == value.match(/^[a-zA-Z\s]+$/);
}, "Letters only");

var $registrationForm = $('#submit-form');

if ($registrationForm.length) {
    $registrationForm.validate({
        rules: {
            //username is the name of the textbox
            name: {
                required: true,
                //alphanumeric is the custom method, we defined in the above
                minlength: 4,
                alphanumeric: true
            },
            mail: {
                required: true,
                customEmail: true
            },

            content: {
                required: true
            }
        },
        messages: {
            name: {
                //error message for the required field
                required: 'Please Enter Your Name'
            },
            mail: {
                required: 'Please Enter Your Email Id',
                //error message for the email field
                mail: 'Please Enter Valid Email Id'
            },

            content: {
                required: 'Please Enter Your message'
            }
        },
        submitHandler: function (form) {
            // form.submit();   //  commented this
            submitForm();       //  ADDED this call
        }
    })

}

function submitForm() {

    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbwMPmQP5c_-tIb8w6wcYyDSEBRoM2ZiTy136__iPlJDfZrSQQM/exec",
        data: $("#submit-form").serialize(),
        method: "post",
        success: function (response) {
            alert("Form submitted successfully")
            window.location.reload()
            // window.location.href="https://google.com"
        },
        error: function (err) {
            alert("Something Error")

        }
    })
}
