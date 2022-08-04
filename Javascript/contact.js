setTimeout(() => {
    let emailForm = document.querySelector('#email');
    let telForm = document.querySelector('#tel');
    emailForm.addEventListener('keyup', (e) => {
      e.preventDefault();
        let value = emailForm.value;
        let error = document.querySelector('.error-message-email');
        let regex = /@/;
        if (regex.test(value)) {
            error.style.display = 'none';
        } else {
            error.style.display = 'block';
        }
    });
    telForm.addEventListener('keyup', (e) => {
      e.preventDefault();
        let value = telForm.value;
        let error = document.querySelector('.error-message-tel');
        let regex = /\d/gi;
        if (regex.test(value)) {
            error.style.display = 'none';
        } else {
            error.style.display = 'block';
        }
    });
}, 1);