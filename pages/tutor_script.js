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
        pic.src = `../pictures/tutor/${i}.png`;
        tutor_container.appendChild(picture);
    }
})

tutor_up_btn.addEventListener('click', async () => {
    tutor_up_btn.style.visibility = 'hidden';
    tutor_down_btn.style.visibility = 'visible';
    tutor_container.innerHTML = '';
})