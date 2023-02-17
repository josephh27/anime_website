let navButton = document.getElementById("nav-icon-address")
let nameInput = document.querySelector("[name='name']")
let emailInput = document.querySelector("[name='email']")
let nameLabel = document.querySelector("[for='name']")
let emailLabel = document.querySelector("[for='email']")

navButton.addEventListener("click", () => {
    console.log("clicked")
    let topNav = document.getElementById("top-nav")
    if (topNav.className === "top-nav-class"){
        topNav.className += " responsive";
    } else {
        topNav.className = "top-nav-class"
    }
})

