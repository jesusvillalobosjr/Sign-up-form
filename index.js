function passwordsCheck(e){
    if(password.value !== passwordConfirmation.value){
        passwordsMatchSpan.classList.add("passwords-not-matching");
        passwordConfirmation.setCustomValidity("Invalid field.")
    }else{
        if(passwordsMatchSpan.classList.contains("passwords-not-matching")){
            passwordsMatchSpan.classList.remove("passwords-not-matching");
        }
        passwordConfirmation.setCustomValidity("");
    }
}

const password = document.querySelector(".password");
const passwordConfirmation = document.querySelector(".password-confirmation");
const submitButton = document.querySelector(".submit-button");
const passwordsMatchSpan = document.querySelector(".form-container .form .label-input .password-confirmation + span");


passwordConfirmation.addEventListener("input",passwordsCheck);
password.addEventListener("input",passwordsCheck);