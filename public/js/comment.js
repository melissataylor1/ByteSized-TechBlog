//adding comment to blog
const commentForm=document.querySelector('#commentForm');
commentForm.addEventListener("submit", e=> {
    e.preventDefault();
    console.log(`Prevented Default`)
    const comment_text= document.querySelector('#comment_text').value
    const blog_id=document.querySelector('.new-comment-form').dataset.blogid

    const commentObj = {
        blog_id:blog_id,
        comment_text:comment_text
    }


  if (comment_text) {
      const response = await fetch(`/api/comments`, {
          method: 'POST',
          body: JSON.stringify({
              blog_id,
              comment_text
          }),
          headers: {
              'Content-Type': 'application/json'
          }
      });

      if (response.ok) {
          document.location.reload();
      } else {
          alert(response.statusText);
      }
  }
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);