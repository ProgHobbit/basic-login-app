document.addEventListener('submit', async(e) => {
    e.preventDefault(); // Prevent default form submission

    const form = e.target;
    const isLoginForm = form.id === 'loginForm';
    const endpoint = isLoginForm ? '/login' : '/signup';

    const username = form.querySelector('#username').value;
    const password = form.querySelector('#password').value;

    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const result = await response.json();

        if (response.ok) {
            alert(result.message); // Display success message
            if (isLoginForm) {
                // Redirect to dashboard or home page after login
                window.location.href = '/main.html'; // Update as needed
            } else {
                // Redirect to login page after signup
                window.location.href = './index.html';
            }
        } else {
            alert(result.error); // Display error message
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
});