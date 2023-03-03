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


var isValid = function(s) {
    let pairs = {
        "]":"[",
        ")":"(",
        "}":"{"
    };
    let temp = [];
    for(let i = 0; i < s.length; i++){
        if ((Object.values(pairs)).includes(s[i])){
            temp.push(s[i])
        } else {
            if (temp && (temp.pop() === pairs[s[i]])){
                continue
            } else {
                return false;
            }
        }
    }
    return !(Boolean(temp));
};

let result = isValid("()");
