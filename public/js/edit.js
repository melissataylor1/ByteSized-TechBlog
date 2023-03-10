// gets post ID
const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1];
   
// updates post with changes
const updatepostFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title-updatepost').value.trim();
    const content = document.querySelector('#content-updatepost').value.trim();
  
    if (title && content) {
      const response = await fetch(`/api/post/${post_id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard'); 
      } else {
        alert('Failed to update a post.'); 
      }
    }
  };

  // deletes post
const deletepostFormHandler = async (event) => {
    event.preventDefault();
  
    const response = await fetch(`/api/post/${post_id}`, {
      method: 'DELETE',
    });
  //if else for delete request. if ok then returns post panel page
    if (response.ok) {
        document.location.replace('/dashboard'); 
      } else {
        alert('couldnt delete post'); 
      }
  };
  
  // Event listeners
document
.querySelector('.updatepost-form')
.addEventListener('submit', updatepostFormHandler);

document
.querySelector('.deletepost-form')
.addEventListener('submit', deletepostFormHandler);
