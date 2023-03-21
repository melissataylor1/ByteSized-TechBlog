const loginForm = document.querySelector("#login");
loginForm.addEventListener("submit", e => {
    e.preventDefault();
    console.log('PREVENTED DEFAULT!')
    const userObj = {
        username: document.querySelector("#loginUser").value,
        password: document.querySelector("#loginPassword").value,
    }
    fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify(userObj),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        if (res.ok) {
            alert("logged in!")
            location.replace("/")
        } else {
            alert("error logging in")
        }
    })
})

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);