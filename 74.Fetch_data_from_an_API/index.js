//  fetch = function used for making HTTP requests to fetch resources.
//          (JSON style data, images, files)
//          Simplifies asynchronous data fetching in JS and used for interacting with APIs to retrieve and send data asynchronously over the web.
//          fetch(url, {options})

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(response => {
//     if(!response.ok){
//         throw new Error("Could not fetch resource");
//     }
//     else {
//         return response.json();
//     }
// }).then(data => console.log(data))
// .catch(error => console.error(error));

const myTextBox = document.getElementById("myTextBox");
const myImg = document.getElementById("pokemonSprite");
let pokemonName;

async function fetchData() {
    
    try {
        pokemonName = myTextBox.value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) {
            throw new Error("could not fetch resource");
        } 
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        
        myImg.src = pokemonSprite;
        myImg.style.display = "block";

        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

// fetchData();