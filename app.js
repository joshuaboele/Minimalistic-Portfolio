const items = document.querySelectorAll('.projects__item');

items.forEach(item => {
    const button = item.querySelector('.js-button');
    const description = item.querySelector('.projects__description');

    button.addEventListener('click', () => {
        description.classList.toggle('is-open');
    });
});
