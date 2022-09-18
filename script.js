const Name = document.getElementById('name-value')
const Email = document.getElementById('email-value');
const mobNumber = document.getElementById('number-value');
const Password = document.getElementById('pwd-value');
const confirmPassword = document.getElementById('pwd-confirm');

const nameErrorLogo = document.getElementById('nameField');
const emailErrorLogo = document.getElementById('emailField');
const phoneErrorLogo = document.getElementById('phoneField');
const pwdErrorLogo = document.getElementById('pwdField');
const pwdConfirmErrorLogo = document.getElementById('pwdConfirmField');

const pwdShowButton = document.getElementById('pwdShow');
const pwdConfirmShowButton = document.getElementById('pwdConfirmShow');

const submitButton = document.getElementById('btn');

let userDetails = new Object();
//Name Field Check Function

function nameCheck() {
    let nameValue = Name.value;
    nameValue = nameValue.trim();
    if (nameValue.length == 0) {
        nameErrorLogo.innerHTML = "<i class='fa-solid fa-circle-exclamation'></i>";
        document.getElementById('nameError').innerHTML = "Enter Your Full Name";
        document.getElementById('nameError').style.color = "red";
        Name.style.border = "2px solid red";
        submitButton.disabled = true;
        submitButton.style.backgroundColor = "#b68978";
        submitButton.style.color = "#dba9a9";
        return false;
    }

    if (!nameValue.match(/^[A-Za-z]{3,}\s?[a-zA-z]*\s?[a-zA-Z]*\s?[a-zA-Z]*\s?[a-zA-Z]*\s?[a-zA-Z]*$/)) {
        nameErrorLogo.innerHTML = "<i class='fa-solid fa-circle-exclamation'></i>";
        document.getElementById('nameError').innerHTML = "Enter Your Name";
        document.getElementById('nameError').style.color = "red";
        Name.style.border = "2px solid red";
        submitButton.disabled = true;
        submitButton.style.backgroundColor = "#b68978";
        submitButton.style.color = "#dba9a9";
        return false;
    }

    nameErrorLogo.innerHTML = "<i class='fa-solid fa-circle-check'></i>";
    document.getElementById('nameError').innerHTML = "";
    Name.style.border = "2px solid green";
    submitButton.disabled = false;
    submitButton.style.backgroundColor = "orangered";
    submitButton.style.color = "white";
    return true;


}

Name.addEventListener('keyup', nameCheck);
Name.addEventListener('blur', nameCheck);

//Email Field Check Function

function emailCheck() {
    let emailValue = Email.value;
    emailValue = emailValue.trim();
    if (emailValue.length == 0) {
        emailErrorLogo.innerHTML = "<i class='fa-solid fa-circle-exclamation'></i>";
        document.getElementById('emailError').innerHTML = "Enter Your Email";
        document.getElementById('emailError').style.color = "red";
        Email.style.border = "2px solid red";
        submitButton.disabled = true;
        submitButton.style.backgroundColor = "#b68978";
        submitButton.style.color = "#dba9a9";
        return false;
    }

    if (!emailValue.match(/^[A-Za-z]+[0-9]*[\._\-]?[A-Za-z0-9]@[a-zA-z]+\.[a-z]{2,4}$/)) {
        emailErrorLogo.innerHTML = "<i class='fa-solid fa-circle-exclamation'></i>";
        document.getElementById('emailError').innerHTML = "Please Enter Valid Email";
        document.getElementById('emailError').style.color = "red";
        Email.style.border = "2px solid red";
        submitButton.disabled = true;
        submitButton.style.backgroundColor = "#b68978";
        submitButton.style.color = "#dba9a9";
        return false;
    }

    emailErrorLogo.innerHTML = "<i class='fa-solid fa-circle-check'></i>";
    document.getElementById('emailError').innerHTML = "";
    Email.style.border = "2px solid green";
    submitButton.disabled = false;
    submitButton.style.backgroundColor = "orangered";
    submitButton.style.color = "white";
    return true;

}

Email.addEventListener('keyup', emailCheck);
Email.addEventListener('blur', emailCheck);

//Mobile Number Field Check Function

function numberCheck() {
    let numberValue = mobNumber.value;
    numberValue = numberValue.trim();
    if (numberValue.length == 0) {
        phoneErrorLogo.innerHTML = "<i class='fa-solid fa-circle-exclamation'></i>";
        document.getElementById('phoneError').innerHTML = "Enter Mobile Number";
        document.getElementById('phoneError').style.color = "red";
        mobNumber.style.border = "2px solid red";
        submitButton.disabled = true;
        submitButton.style.backgroundColor = "#b68978";
        submitButton.style.color = "#dba9a9";
        return false;
    }


    if (!numberValue.match(/^[6-9][0-9]{9}$/)) {
        phoneErrorLogo.innerHTML = "<i class='fa-solid fa-circle-exclamation'></i>";
        document.getElementById('phoneError').innerHTML = "Enter Valid Mobile Number";
        document.getElementById('phoneError').style.color = "red";
        mobNumber.style.border = "2px solid red";
        submitButton.disabled = true;
        submitButton.style.backgroundColor = "#b68978";
        submitButton.style.color = "#dba9a9";
        return false;
    }


    phoneErrorLogo.innerHTML = "<i class='fa-solid fa-circle-check'></i>";
    document.getElementById('phoneError').innerHTML = "";
    mobNumber.style.border = "2px solid green";
    submitButton.disabled = false;
    submitButton.style.backgroundColor = "orangered";
    submitButton.style.color = "white";
    return true;
}

mobNumber.addEventListener('keyup', numberCheck);
mobNumber.addEventListener('blur', numberCheck);

//Password Field Check Function

const passwordButton = document.querySelectorAll("#password #pwdShow .fa-solid");

const passwordContains = document.querySelectorAll('#password #pwdRules span');


function pwdCheck() {
    let pwdValue = Password.value;
    pwdValue = pwdValue.trim();
    if (pwdValue.length == 0) {
        pwdErrorLogo.innerHTML = "<i class='fa-solid fa-circle-exclamation'></i>";
        passwordButton[0].style.visibility = "hidden";
        document.getElementById('pwdError').innerHTML = "Create Password";
        document.getElementById('pwdError').style.color = "red";
        document.getElementById('pwdRules').style.display = "none";
        Password.style.border = "2px solid red";
        submitButton.disabled = true;
        submitButton.style.backgroundColor = "#b68978";
        submitButton.style.color = "#dba9a9";
        confirmPassword.style.border = "2px solid red";
        confirmPassword.disabled = true;
        return false;
    }

    if (pwdValue.length != 0) {
        passwordButton[0].style.visibility = "visible";
        document.getElementById('pwdRules').style.display = "block";
        passwordContains[0].style.display = "block";
        passwordContains[1].style.display = "block";
        passwordContains[2].style.display = "block";
        passwordContains[3].style.display = "block";
        passwordContains[4].style.display = "block";
    }

    if (pwdValue.length >= 8) {
        passwordContains[0].style.display = "none";

    }


    if (!pwdValue.match(/^[\w\@\#\$\%\&\_]{8,}\s{0}$/)) {
        pwdErrorLogo.innerHTML = "<i class='fa-solid fa-circle-exclamation'></i>";
        document.getElementById('pwdError').innerHTML = "Password Not Valid";
        passwordButton[0].style.visibility = "visible";
        document.getElementById('pwdError').style.color = "red";
        Password.style.border = "2px solid red";
        submitButton.disabled = true;
        submitButton.style.backgroundColor = "#b68978";
        submitButton.style.color = "#dba9a9";
        confirmPassword.disabled = true;
        return false;
    }

    if (pwdValue.match(/^[^A-Z]+$/)) {
        pwdErrorLogo.innerHTML = "<i class='fa-solid fa-circle-exclamation'></i>";
        document.getElementById('pwdError').style.color = "red";
        Password.style.border = "2px solid red";
        submitButton.disabled = true;
        submitButton.style.backgroundColor = "#b68978";
        submitButton.style.color = "#dba9a9";
        confirmPassword.disabled = true;
        return false;
        
    }else {
        passwordContains[1].style.display = "none";
    }

    if (pwdValue.match(/^[^a-z]+$/)) {
        pwdErrorLogo.innerHTML = "<i class='fa-solid fa-circle-exclamation'></i>";
        document.getElementById('pwdError').style.color = "red";
        Password.style.border = "2px solid red";
        submitButton.disabled = true;
        submitButton.style.backgroundColor = "#b68978";
        submitButton.style.color = "#dba9a9";
        confirmPassword.disabled = true;
        return false;
        
    }else {
        passwordContains[2].style.display = "none";
    }

    if (pwdValue.match(/^[^0-9]+$/)) {
        pwdErrorLogo.innerHTML = "<i class='fa-solid fa-circle-exclamation'></i>";
        document.getElementById('pwdError').style.color = "red";
        Password.style.border = "2px solid red";
        submitButton.disabled = true;
        submitButton.style.backgroundColor = "#b68978";
        submitButton.style.color = "#dba9a9";
        confirmPassword.disabled = true;
        return false;
        
    }else {
        passwordContains[3].style.display = "none";
    }

    if (pwdValue.match(/^[^\@\#\$\%\&|_]+$/)) {
        pwdErrorLogo.innerHTML = "<i class='fa-solid fa-circle-exclamation'></i>";
        document.getElementById('pwdError').style.color = "red";
        Password.style.border = "2px solid red";
        submitButton.disabled = true;
        submitButton.style.backgroundColor = "#b68978";
        submitButton.style.color = "#dba9a9";
        confirmPassword.disabled = true;
        return false;
        
    }else {
        passwordContains[4].style.display = "none";
    }

    if (pwdValue.match(/^[^\s]{0}$/)) {
        pwdErrorLogo.innerHTML = "<i class='fa-solid fa-circle-exclamation'></i>";
        document.getElementById('pwdError').style.color = "red";
        Password.style.border = "2px solid red";
        submitButton.disabled = true;
        submitButton.style.backgroundColor = "#b68978";
        submitButton.style.color = "#dba9a9";
        confirmPassword.disabled = true;
        return false;
        
    }else {
        passwordContains[5].style.display = "none";
    }


    pwdErrorLogo.innerHTML = "<i class='fa-solid fa-circle-check'></i>";
    document.getElementById('pwdError').innerHTML = "";
    Password.style.border = "2px solid green";
    submitButton.disabled = false;
    submitButton.style.backgroundColor = "orangered";
    submitButton.style.color = "white";
    confirmPassword.disabled = false;
    return true;
}

Password.addEventListener('keyup', pwdCheck);
Password.addEventListener('blur', pwdCheck);

//Confirm Password Field Check Function

const passworConfirmdButton = document.querySelectorAll("#confirmPassword #pwdConfirmShow .fa-solid");

function pwdConfirmCheck() {
    let pwdValue = Password.value;
    let pwdConfirmValue = confirmPassword.value;

    pwdValue = pwdValue.trim();
    pwdConfirmValue = pwdConfirmValue.trim();

    if (pwdValue.length == 0) {
        pwdConfirmErrorLogo.innerHTML = "<i class='fa-solid fa-circle-exclamation'></i>";
        document.getElementById('pwdConfirmError').innerHTML = "Please Create Password First";
        document.getElementById('pwdConfirmError').style.color = "red";
        confirmPassword.style.border = "2px solid red";
        confirmPassword.disabled = true;
        submitButton.disabled = true;
        submitButton.style.backgroundColor = "#b68978";
        submitButton.style.color = "#dba9a9";
        return false;
    }
    if (pwdConfirmValue.length == 0) {
        pwdConfirmErrorLogo.innerHTML = "<i class='fa-solid fa-circle-exclamation'></i>";
        passworConfirmdButton[0].style.visibility = "hidden";
        document.getElementById('pwdConfirmError').innerHTML = "Enter Confirm Password";
        document.getElementById('pwdConfirmError').style.color = "red";
        confirmPassword.style.border = "2px solid red";
        submitButton.disabled = true;
        submitButton.style.backgroundColor = "#b68978";
        submitButton.style.color = "#dba9a9";
        return false;
    }

    if (pwdConfirmValue.length > 0) {
        passworConfirmdButton[0].style.visibility = "visible";
        document.getElementById('pwdConfirmError').innerHTML = "";
    }

    if (pwdConfirmValue != pwdValue) {
        pwdConfirmErrorLogo.innerHTML = "<i class='fa-solid fa-circle-exclamation'></i>";
        document.getElementById('pwdConfirmError').innerHTML = "Password Not Match";
        document.getElementById('pwdConfirmError').style.color = "red";
        confirmPassword.style.border = "2px solid red";
        submitButton.disabled = true;
        submitButton.style.backgroundColor = "#b68978";
        submitButton.style.color = "#dba9a9";
        return false;
    }

    pwdConfirmErrorLogo.innerHTML = "<i class='fa-solid fa-circle-check'></i>";
    document.getElementById('pwdConfirmError').innerHTML = "";
    confirmPassword.style.border = "2px solid green";
    submitButton.disabled = false;
    submitButton.style.backgroundColor = "orangered";
    submitButton.style.color = "white";
    return true;
}

confirmPassword.addEventListener('keyup', pwdConfirmCheck);
confirmPassword.addEventListener('blur', pwdConfirmCheck);

function submitForm(e) {
    e.preventDefault();
    if (Name.value.length == 0 || Email.value.length == 0 || mobNumber.value.length == 0 || Password.value.length == 0 || confirmPassword.value.length == 0) {
        nameCheck();
        emailCheck();
        numberCheck();
        pwdCheck();
        pwdConfirmCheck();
        return false;
    } else {
        userDetails.Name = Name.value;
        userDetails.Email = Email.value;
        userDetails.Number = mobNumber.value;
        userDetails.Password = confirmPassword.value;
        console.log(userDetails);
        alert("Form Submited");
        clearSignUpForm();

        return true;
    }
}

submitButton.addEventListener('click', submitForm);

function clearSignUpForm() {
    Name.value = "";
    Email.value = "";
    mobNumber.value = "";
    Password.value = "";
    confirmPassword.value = "";
    nameErrorLogo.innerHTML = "";
    emailErrorLogo.innerHTML = "";
    phoneErrorLogo.innerHTML = "";
    pwdErrorLogo.innerHTML = "";
    pwdConfirmErrorLogo.innerHTML = "";
    pwdShowButton.innerHTML = "";
    pwdConfirmShowButton.innerHTML = "";
    confirmPassword.style.border = "none";
    Password.style.border = "none";
    Name.style.border = "none";
    Email.style.border = "none";
    mobNumber.style.border = "none";
}


//Code for Show Password 

function pwdShowFun() {
    Password.setAttribute('type', 'text');
    passwordButton[0].style.visibility = "hidden";
    passwordButton[1].style.visibility = "visible";
}

function pwdHideFun() {
    Password.setAttribute('type', 'password');
    passwordButton[0].style.visibility = "visible";
    passwordButton[1].style.visibility = "hidden";
}

passwordButton[0].addEventListener('click', pwdShowFun);
passwordButton[1].addEventListener('click', pwdHideFun);

//Code for Show Confirm Password 

function pwdConfirmShowFun() {
    confirmPassword.setAttribute('type', 'text');
    passworConfirmdButton[0].style.visibility = "hidden";
    passworConfirmdButton[1].style.visibility = "visible";
}

function pwdConfirmHideFun() {
    confirmPassword.setAttribute('type', 'password');
    passworConfirmdButton[0].style.visibility = "visible";
    passworConfirmdButton[1].style.visibility = "hidden";
}



passworConfirmdButton[0].addEventListener('click', pwdConfirmShowFun);
passworConfirmdButton[1].addEventListener('click', pwdConfirmHideFun);


//Register Form

const Register = document.getElementById('signUp');
const login = document.getElementById('Login');

Register.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById("form").style.display = "block";
    document.getElementById("registerForm").style.display = "block";
    document.getElementById("loginForm").style.display = "none";
})

login.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById("form").style.display = "block";
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("registerForm").style.display = "none";
})

//Login Form Validation

const checkEmail = document.getElementById('verify-email-value');
const checkPwd = document.getElementById('verify-pwd-value');

const emailError = document.getElementById("emailCheckError");
const pwdError = document.getElementById("pwdCheckError");

const checkButton = document.getElementById('verifyBtn');

function loginEmailCheck() {

    if (checkEmail.value.length == 0) {
        emailError.innerHTML = "Enter email";
        return false;
    }

    if (checkEmail.value.length > 0) {
        emailError.innerHTML = "";
        return false;
    }

    else {
        return true;
    }
}

checkEmail.addEventListener('click', loginEmailCheck);
checkEmail.addEventListener('blur', loginEmailCheck);

function loginPasswordCheck() {

    if (checkPwd.value.length == 0) {
        pwdError.innerHTML = "Enter Password";
        return false;
    }

    if (checkPwd.value.length > 0) {
        pwdError.innerHTML = "";
        return false;
    }

    else {
        return true;
    }

}

checkPwd.addEventListener('click', loginPasswordCheck);
checkPwd.addEventListener('blur', loginPasswordCheck);


checkButton.addEventListener('click', (e) => {
    e.preventDefault();

    if (checkEmail.value.length == 0 || checkPwd.value.length == 0) {
        loginEmailCheck();
        loginPasswordCheck();
        return false;
    }

    if (userDetails.Email != checkEmail.value) {
        emailError.innerHTML = "Email is Wrong";
    }

    if (userDetails.Password != checkPwd.value) {
        pwdError.innerHTML = "Password is Wrong";
    }

    if (userDetails.Email == checkEmail.value && userDetails.Password == checkPwd.value) {
        alert("Login Successful");
        checkEmail.value = "";
        checkPwd.value = "";
        emailError.innerHTML = "";
        pwdError.innerHTML = "";
        return true;
    }
})

const clearSignUpFormButton = document.getElementById('Login');

clearSignUpFormButton.addEventListener('click', () => {
    clearSignUpForm();
})

const clearLoginFormButton = document.getElementById('signUp');

clearLoginFormButton.addEventListener('click', () => {
    checkEmail.value = "";
    checkPwd.value = "";
    emailError.innerHTML = "";
    pwdError.innerHTML = "";
})
