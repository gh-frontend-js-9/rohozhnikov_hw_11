export function isFilled(...inputs) {
    return !inputs.some(input => input.style.borderColor === 'red')
}

export function validEmail(input) {
    if (!isValidEmail(input.value) && input.style.borderColor !== 'red') {
        required(input, 'Email must be greater than 8 and less than 255');

    } else if (input.style.borderColor === 'red') {
        input.style.border = '1px solid black';
        input.nextSibling.remove()

    }
}

export function validPassword(input) {
    if (input.value.length < 8 && input.style.borderColor !== 'red') {
        required(input, 'Password must be greater than 8 and less than 255');

    } else if (input.style.borderColor === 'red') {
        input.style.border = '1px solid black';
        input.nextSibling.remove()
    }
}

export function validName(input) {
    if (!input.value && input.style.borderColor !== 'red') {
        required(input, 'Must be filled')

    } else if (input.style.borderColor === 'red') {
        input.style.border = '1px solid black';
        input.nextSibling.remove()
    }
}

export function validPasswords(password, confirmationPassword) {
    if (password.value !== confirmationPassword.value && confirmationPassword.style.borderColor !== 'red') {
        required(confirmationPassword, 'Does not match password')

    } else if (confirmationPassword.style.borderColor === 'red') {
        confirmationPassword.style.border = '1px solid black';
        confirmationPassword.nextSibling.remove()
    }

}

function required(element, text) {
    element.style.border = '1px solid red';
    let explanation = document.createElement('p');
    explanation.style.color = 'red';
    explanation.style.fontSize = '12px';
    explanation.textContent = text
    element.after(explanation)
}

function isValidEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email) && 8 < email.length && email.length < 255;
}