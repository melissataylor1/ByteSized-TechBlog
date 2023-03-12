// post request for adding new blog post
const newpostFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title-newpost').value.trim();
    const content = document.querySelector('#content-newpost').value.trim();
  
    if (title && content) {
      const response = await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard'); // When successful, load the dashboard page
      } else {
        alert('Failed to create a new post.'); // When unsuccessful, show alert
      }
    }
  };
  // Event listeners
  document
    .querySelector('.newpost-form')
    .addEventListener('submit', newpostFormHandler);
  