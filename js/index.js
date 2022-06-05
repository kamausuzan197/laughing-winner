const btn = document.getElementById("button")
let p = document.querySelector("p")
function formValidation() {
    let email = document.querySelector(".email").value
    let subject = document.querySelector(".subject").value
    let message = document.querySelector(".message").value
    // console.log(email)
    if (email === '' || subject === '' || message === '') {
        alert("All fields are required")
        return false
    }
    else {
        alert("form submitted")
    }
}
btn.addEventListener("click",(e)=>{
    formValidation()
    e.preventDefault()
})
p.addEventListener('mouseover', (event)=>{
    event.target.style.color = "white";
    event.target.style.pointer = 'cursor'
    setTimeout(function() {
        event.target.style.color = "";
      }, 500);
    }, false
)