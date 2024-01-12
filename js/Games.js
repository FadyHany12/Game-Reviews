import getDetails from "./Details.js";

const showGames = document.querySelector("#gamesSection .row"); // bmsk el gamesSection el fl html
export default async function getData(category) {
    const loadingIndicator = document.getElementById('loadingIndicator');


    try {
        loadingIndicator.style.display = "block";

        const options =
        {

            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'b171432d72msh783a7cf51eead35p128661jsn8839a918eda2',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        let api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category ? category : "mmorpg"}`, options);
        let result = await api.json();
        displayGames(result);
    }
    catch (error) {
        console.error('Error fetching details:', error);
    }
    finally {
        loadingIndicator.style.display = "none";
    }
}


function displayGames(array) {


    let blackBox = ""; // b3ml blackBox fdy 3lshan h7ot gwah el cards kolha 


    for (let i = 0; i < array.length; i++) // b3ml loop 3l array el mrg3haly el api
    {
        const element = array[i];

        blackBox += `
        <div class="col-md-3">

            <div class="card bg-transparent"  gameId="${element.id}">
                <img src="${element.thumbnail}" class="p-3 w-100 border-0 rounded-top-5" alt="...">
        
                <div class="card-body d-flex justify-content-between text-white py-0">
        
                <h5 class="title h6 small">${element.title}</h5>
        
                <span class="badge p-2">Free</span>
                
                </div>
        
                    <p class="short-description card-text small ps-4 opacity-50 text-white">${element.short_description}}</p>
                    <ul class="list-group list-group-flush">
                    
        
                <div class="card-footer small d-flex justify-content-between py-2">
        
                <span class="genre badge badge-color">${element.genre}</span>
                <span class="platform badge badge-color">${element.platform}</span>
                    </div>
                    </ul>
            </div>
                
            </div>`;
    }

    showGames.innerHTML = blackBox;

    showGames.addEventListener('click', (event) => {
        const card = event.target.closest(".card");
        if (card) {
            getDetails(card.getAttribute('gameId'));
        }
    });

}