async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            alert('Account created! You are logged in!');
            document.location.href = '/';
        } else {
            alert(response.statusText)
        }
    }
}

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);