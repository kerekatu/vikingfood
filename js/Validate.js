function printError(elemId, errMessage) {
  newContent = `
  <span id="${elemId}">${errMessage}</span>
  `;

  document.getElementById('form-errors').innerHTML = newContent;
}

function validateForm() {
  const name = document.contactForm.inputName.value;
  const title = document.contactForm.inputTitle.value;
  const message = document.contactForm.inputMessage.value;

  let errorName, errorTitle, errorMessage;
  errorName = true;
  errorTitle = true;
  errorMessage = true;

  if (name === '') {
    printError('error-name', '*Please enter your name');
  } else {
    errorName = false;
  }

  if (title === '') {
    printError('error-title', '*Please enter a title');
  } else {
    errorTitle = false;
  }

  if (message === '') {
    printError('error-message', '*Please enter a message');
  } else {
    errorMessage = false;
  }

  if (errorName || errorTitle || errorMessage === true) {
    return false;
  }
}
