
const showHiddenPass = (loginPass, loginEye) => {
    const input = document.getElementById(loginPass),
        iconEye = document.getElementById(loginEye)

    iconEye.addEventListener('click', () => {
        if (input.type === 'password') {
            input.type = 'text'

            iconEye.classList.add('ri-eye-fill')
            iconEye.classList.remove('ri-eye-off-fill')
        }
        else {
            input.type = 'password'

            iconEye.classList.remove('ri-eye-fill')
            iconEye.classList.add('ri-eye-off-fill')
        }
    })
}

showHiddenPass('login-pass', 'login-eye')



var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', pass_Verify);


function validated() {
    var emailValid = email_Verify();
    var passValid = pass_Verify();

    if (emailValid && passValid) {
        return true;
    } else {
        return false;
    }
    
}
function email_Verify() {
    if (email.value.length >= 8) {
        email.style.border = "none";
        email_error.style.display = "none";
        return true;
    } else {
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }
}

function pass_Verify() {
    if (password.value.length >= 6) {
        password.style.border = "none";
        pass_error.style.display = "none";
        return true;
    } else {
        password.style.border = "1px solid red";
        pass_error.style.display = "block";
        password.focus();
        return false;
    }
}
