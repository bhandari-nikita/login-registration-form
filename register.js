function validateEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function showError(inputField, errorMessage) {
    var errorDiv = inputField.parentElement.querySelector('.valid');
    errorDiv.innerText = errorMessage;
    errorDiv.style.display = 'block';
    inputField.style.border = '1px solid red';
}

function hideError(inputField) {
  const errorDiv = inputField.parentElement.querySelector('.valid');
  if (!errorDiv) return;

  if (inputField.id === 'email') {
    if (validateEmail(inputField.value.trim())) {
      errorDiv.style.display = 'none';
      inputField.style.border = '1px solid #ccc';
    } else {
      errorDiv.style.display = 'block';
      inputField.style.border = '1px solid red';
    }
    return;
  }

  if (inputField.value.trim() !== '') {
    errorDiv.style.display = 'none';
    inputField.style.border = '1px solid #ccc';
  }
}

function validateForm() {
var nameField = document.forms['form_fill']['name'];
var emailField = document.forms['form_fill']['email'];
var passwordField = document.forms['form_fill']['password'];
var aadharField = document.forms['form_fill']['aadhar'];
var dobField = document.forms['form_fill']['dob'];
var mobField = document.forms['form_fill']['mob_no'];


    var isValid = true;

    if (nameField.value.trim() === '') {
        showError(nameField, 'Please enter your full name.');
        isValid = false;
    } else {
        hideError(nameField);
    }

    if (!validateEmail(emailField.value.trim())) {
        showError(emailField, 'Please enter a valid email.');
        isValid = false;
    } else {
        hideError(emailField);
    }

    if (passwordField.value.trim().length < 6) {
        showError(passwordField, 'Password must be at least 6 characters long.');
        isValid = false;
    } else {
        hideError(passwordField);
    }

    if (aadharField.value.trim().length !== 12) {
        showError(aadharField, 'Please enter a valid Aadhar number.');
        isValid = false;
    } else {
        hideError(aadharField);
    }
    if (dobField.value.trim() === '') {
        showError(dobField, 'Please enter your date of birth.');
        isValid = false;
    } else {
        hideError(dobField);
    }

    var mobPattern = /^[0-9]{10}$/;
    if (!mobPattern.test(mobField.value.trim())) {
        showError(mobField, 'Please enter a valid 10-digit mobile number.');
        isValid = false;
    } else {
        hideError(mobField);
    }
    return isValid;
}


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

showHiddenPass('pass', 'login-eye')




