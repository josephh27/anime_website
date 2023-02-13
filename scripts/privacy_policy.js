let navButton = document.getElementById("nav-icon-address")

navButton.addEventListener("click", () => {
    console.log("clicked")
    let topNav = document.getElementById("top-nav")
    if (topNav.className === "top-nav-class"){
        topNav.className += " responsive";
    } else {
        topNav.className = "top-nav-class"
    }
})