export default async function getDetails(id) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b171432d72msh783a7cf51eead35p128661jsn8839a918eda2',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
    const result = await api.json();
    displayDetails(result);
}


function displayDetails(element) {
    const closeBtn = document.querySelector('.btn-close');
    const gameList = document.querySelector('#gameList');
    const showDetails = document.querySelector("#details .row");
    const details = document.querySelector('#details');
    const elementDetails = element;
    let blackBox = `<div class="col-md-4">
        <img src="${element.thumbnail}" class="w-100" alt="">
    </div>
    
    <div class="col-md-8">  
        <div class="title text-white">
        <h3 class="title">${elementDetails.title}</h3>
        <p>Category: <span class="badge bg-info text-black">${elementDetails.genre}</span></p>
        <p>Platform: <span class="badge bg-info text-black">${elementDetails.platform}</span></p>
        <p>Status: <span class="badge bg-info text-black">${elementDetails.status}</span></p>
        <p>${elementDetails.description}</p>
        </div>
        <a class=" btn showBtn btn-outline-warning text-white" href="${elementDetails.freetogame_profile_url}">Show Games</a>
    // </div>`;

    showDetails.innerHTML = blackBox;

    details.classList.remove('d-none');
    gameList.classList.add('d-none');
    closeBtn.addEventListener('click', () => {
        details.classList.add('d-none');
        gameList.classList.remove('d-none');
    });
}

