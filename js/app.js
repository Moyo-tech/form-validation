const firstNameValue = document.trialForm.firstName.value
const lastNameValue = document.trialForm.lastName.value
const emailValue = document.trialForm.email.value
const passwordValue = document.trialForm.password.value
const inputList = document.querySelectorAll('input')


function validateForm(){
    inputList.forEach((elem) =>{
    if (firstNameValue == ""){
        alert("First Name cannot be empty");
        document.trialForm.firstName.focus();
    }else if (lastNameValue == ""){
        alert("Last Name cannot be empty");
        document.trialForm.lastName.focus();
    } else if (emailValue == ""){
        alert("Email Name cannot be empty");
        document.trialForm.email.focus();
    } else if (passwordValue == ""){
        alert("Password Name cannot be empty");
        document.trialForm.password.focus(); 
    }else{
        alert("Thank you your details have been received")
    }
})
}
