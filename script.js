let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let eform = document.querySelector("input");
let form = document.querySelector(".sign-up");
let thanks = document.querySelector(".thanks");
let errorMsg = document.querySelector(".error-msg");
let user = document.querySelector("span");

function validateForm() {
    eform.value.trim();
    if (!eform.value.match(emailRegex)) {
        errorMsg.style.display = "block";
        eform.classList.add("error");
    }
    else {
        errorMsg.style.display = "none";
        eform.classList.remove("error");
        user.innerHTML = eform.value;
        form.classList.add("hide");
        thanks.classList.add("show");
    }
}
function dismiss() {
    window.location.reload()
}