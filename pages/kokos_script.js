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
        pic.src = `../pictures/kokos/${i}.png`;
        kokos_container.appendChild(picture);
    }
})

kokos_up_btn.addEventListener('click', async () => {
    kokos_up_btn.style.visibility = 'hidden';
    kokos_down_btn.style.visibility = 'visible';
    kokos_container.innerHTML = '';
})
