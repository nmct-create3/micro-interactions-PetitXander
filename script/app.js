let email = {},
    password = {},
    signInButton;

const isValidEmailAddress = function(emailAddress) {
    // Basis manier om e-mailadres te checken.
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};

const isEmpty = function(fieldValue) {
    return !fieldValue || !fieldValue.length;
 };

const getDOMElements = function(){
    email.field = document.querySelector(`.js-field-email`);
    email.errorMessage = document.querySelector(`.js-field-email-error-message`);
    email.input = document.querySelector(`.js-field-email-input`);
    //console.log(email);

    password.field = document.querySelector(`.js-field-password`);
    password.errorMessage = document.querySelector(`.js-field-password-error-message`);
    password.input = document.querySelector(`.js-field-password-input`);
    //console.log(password);

    signInButton = document.querySelector(`.js-sign-in-button`);
    //console.log(signInButton)
}

const addErrors = function(field,errorfield, errormessage){

    field.classList.add(`has-error`);
    errorfield.innerHTML = errormessage;
    errorfield.style.display = "block";

}

const removeErrors = function(field, errorfield){

    field.classList.remove(`has-error`);
    errorfield.innerHTML = " ";
    errorfield.style.display = "none";
}

const doubleCheckEmailAddress = function(){
    if(!isEmpty(email.input.value) && isValidEmailAddress(email.input.value)){
        removeErrors(email.field, email.errorMessage);
        email.input.removeEventListener('input', doubleCheckEmailAddress)
    }
    else{
        addErrors(email.field,email.errorMessage,"This email is incorrect")
    }
    

}

const enableListeners = function(){


    email.input.addEventListener("blur", function(){

        if(isEmpty(email.input.value) && !isValidEmailAddress(email.input.value)){
            addErrors(email.field,emailerrorMessage,"This field is required");
            //removeErrors(email.field, email.errorMessage);
            email.input.addEventListener('input', doubleCheckEmailAddress)
        }
        else{
            if(isEmpty(email.input.value)){
                removeErrors(email.field,email.errorMessage);
                email.input.removeEventListener('input', doubleCheckEmailAddress)
            }
           
        }


    });
    password.input.addEventListener("blur", function(){

        if(isEmpty(password.input.value)){
            addErrors(password.field, password.errorMessage, "This field is required" );
        }
        else{
            removeErrors(password.field, password.errorMessage);
        }


    });
    signInButton.addEventListener("click", function(){

        


    });

}

document.addEventListener("DOMContentLoaded", function (){

    getDOMElements();
    enableListeners();

})