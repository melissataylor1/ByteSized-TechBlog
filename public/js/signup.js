// Signup request
const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    //post request for new usr
    if (username && password) {
      const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/'); 
      } else {
        alert('Sign up failed. Try again.'); 
      }
    }
  };
  
  
  // Event listeners
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  