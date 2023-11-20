const games_container = document.getElementById('games_container');
const games_template = document.getElementById('games_template');
const games_down_btn = document.getElementById('games_down_btn');
const games_up_btn = document.getElementById('games_up_btn');

games_down_btn.addEventListener('click', async () => {
    games_down_btn.style.visibility = 'hidden';
    games_up_btn.style.visibility = 'visible';
    for (let i = 1; i < 2; i++) {
        const picture = games_template.content.cloneNode(true);
        let pic = picture.getElementById('games_imgBx');
        pic.src = `../pictures/games/${i}.jpg`;
        games_container.appendChild(picture);
    }
})

games_up_btn.addEventListener('click', async () => {
    games_up_btn.style.visibility = 'hidden';
    games_down_btn.style.visibility = 'visible';
    games_container.innerHTML = '';
})
