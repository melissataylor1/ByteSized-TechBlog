const blogForm=document.querySelector('#blogForm');
blogForm.addEventListener("submit", e=> {
    e.preventDefault();
    console.log(`Prevents Default`)
    const blog_title= document.querySelector('#blog-title').value
    const blog_content=document.querySelector('#blog-content').value

    const blogObj = {
        title:blog_title,
        content: blog_content

    }
    



  const response = await fetch(`/api/blogs`, {
      method: 'POST',
      body: JSON.stringify({
          title,
          blog_text
      }),
      headers: {
          'Content-Type': 'application/json'
      }
  });

  if (response.ok) {
      document.location.replace('/dashboard');
  } else {
      alert(response.statusText);
  }
}

document.querySelector('.new-blog-form').addEventListener('submit', newFormHandler);