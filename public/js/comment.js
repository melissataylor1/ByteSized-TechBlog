//POST COMMENT
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

    console.log(commentObj)
    fetch("/api/comments",{
        method:"POST",
        body:JSON.stringify(commentObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then (res=>{
        if(res.ok){
            console.log(res)
            alert("comment added!")
            location.reload()
        } else {
            alert("error posting comment")
        }
    })
}) 

//DELETE COMMENT
const deleteBtns = document.querySelectorAll(".commentDeleteBtn")
deleteBtns.forEach(delBtn=>{
    delBtn.addEventListener("click",e=>{
        console.log("button clicked")
        const commentId = e.target.getAttribute("comment-id")
        console.log(commentId);
        fetch(`/api/comments/${commentId}`,{
            method:"DELETE"
        }).then(res=>{
            if(res.ok){
                location.reload();
            } else {
                alert("error deleting comment")
            }
        })
    })
})