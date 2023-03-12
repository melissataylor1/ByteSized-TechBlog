//retrieve post id
const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1];
 
    
//leaves new comment with get reuwest
const newcommentFormHandler = async (event) => {
    event.preventDefault();
  
    const content = document.querySelector('#content-newcomment').value.trim();
  
    if (content) {
      const response = await fetch(`/api/comment`, {
        method: 'POST',
        body: JSON.stringify({ content, post_id }),
        headers: { 'Content-Type': 'application/json' },
      });
  //if else for comment
      if (response.ok) {
        document.location.reload(); 
      } else {
        alert('Couldnt leave comment. Try again.'); 
      }
    }
  }; 
  
//event listeners
document
.querySelector('.newcomment-form')
.addEventListener('submit', newcommentFormHandler);
