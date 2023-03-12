// Logout 
const logout = async () => {
    const response = await fetch('/api/user/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
// Event listeners
document
  .querySelector('#logout')
  .addEventListener('click', logout);
