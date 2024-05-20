'use sstrict'

const modals = document.querySelector('[data-modal]');
const modalTriger = document.querySelector('.main__second__section');
const modalClose = document.querySelector('[data-close]');

    modals.addEventListener('click', () => {
        modalTriger.style.display = 'flex'
    });

    modalClose.addEventListener('click', () => {
        modalTriger.style.display = 'none'
    })