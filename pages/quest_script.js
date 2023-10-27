const quest_container = document.getElementById('quest_container');
const quest_template = document.getElementById('quest_template');
const quest_down_btn = document.getElementById('quest_down_btn');
const quest_up_btn = document.getElementById('quest_up_btn');

quest_down_btn.addEventListener('click', async () => {
    quest_down_btn.style.visibility = 'hidden';
    quest_up_btn.style.visibility = 'visible';
    for (let i = 1; i < 7; i++) {
        const picture = quest_template.content.cloneNode(true);
        let pic = picture.getElementById('quest_imgBx');
        pic.src = `../pictures/quest/${i}.png`;
        quest_container.appendChild(picture);
    }
})

quest_up_btn.addEventListener('click', async () => {
    quest_up_btn.style.visibility = 'hidden';
    quest_down_btn.style.visibility = 'visible';
    quest_container.innerHTML = '';
})
