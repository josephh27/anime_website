const navButton = document.getElementById("nav-icon-address")


navButton.addEventListener("click", () => {
    console.log("clicked")
    let topNav = document.getElementById("top-nav")
    if (topNav.className === "top-nav-class"){
        topNav.className += " responsive";
    } else {
        topNav.className = "top-nav-class"
    }
})

const animeGrid = document.querySelector("[data-anime-template]")
const animeGridContainer = document.querySelector("[data-anime-template-container]")
const searchInput = document.querySelector("[anime-search]")

let animes = []
searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    animes.forEach(anime => {
        const isVisible = anime.name.toLowerCase().includes(value) 
        anime.element.classList.toggle("hide", !isVisible)
    })
})
fetch("anime_titles.json")
    .then(res => res.json())
    .then(data => {
        data = data.sort((first_anime, second_anime) => {
            let x = first_anime.title.toLowerCase()
            let y = second_anime.title.toLowerCase()
            if (x>y){return 1}
            if (x<y){return -1}
            return 0;
        })
        console.log(data)
        animes = data.map(anime => {
            const animeItem = animeGrid.content.cloneNode(true).children[0]
            let animeImage = animeItem.querySelector("[anime-image]")
            let animeName = animeItem.querySelector("[anime-title]")
            animeImage.src = anime.image
            animeName.textContent = anime.title
            animeName.href = anime.link
            animeGridContainer.append(animeItem)
            return {name : anime.title, element: animeItem}
            }   
        )  
})

