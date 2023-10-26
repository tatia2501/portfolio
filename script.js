const kokos_container = document.getElementById('kokos_container');
const kokos_template = document.getElementById('kokos_template');
const kokos_down_btn = document.getElementById('kokos_down_btn');
const kokos_up_btn = document.getElementById('kokos_up_btn');

kokos_down_btn.addEventListener('click', async () => {
    kokos_down_btn.style.visibility = 'hidden';
    kokos_up_btn.style.visibility = 'visible';
    for (let i = 1; i < 10; i++) {
        const picture = kokos_template.content.cloneNode(true);
        let pic = picture.getElementById('kokos_imgBx');
        pic.src = `pictures/kokos/${i}.png`;
        kokos_container.appendChild(picture);
    }
})

kokos_up_btn.addEventListener('click', async () => {
    kokos_up_btn.style.visibility = 'hidden';
    kokos_down_btn.style.visibility = 'visible';
    kokos_container.innerHTML = '';
})

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
        pic.src = `pictures/quest/${i}.png`;
        quest_container.appendChild(picture);
    }
})

quest_up_btn.addEventListener('click', async () => {
    quest_up_btn.style.visibility = 'hidden';
    quest_down_btn.style.visibility = 'visible';
    quest_container.innerHTML = '';
})

const tutor_container = document.getElementById('tutor_container');
const tutor_template = document.getElementById('tutor_template');
const tutor_down_btn = document.getElementById('tutor_down_btn');
const tutor_up_btn = document.getElementById('tutor_up_btn');

tutor_down_btn.addEventListener('click', async () => {
    tutor_down_btn.style.visibility = 'hidden';
    tutor_up_btn.style.visibility = 'visible';
    for (let i = 1; i < 7; i++) {
        const picture = tutor_template.content.cloneNode(true);
        let pic = picture.getElementById('tutor_imgBx');
        pic.src = `pictures/tutor/${i}.png`;
        tutor_container.appendChild(picture);
    }
})

tutor_up_btn.addEventListener('click', async () => {
    tutor_up_btn.style.visibility = 'hidden';
    tutor_down_btn.style.visibility = 'visible';
    tutor_container.innerHTML = '';
})