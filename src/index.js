import './styles/styles.scss'

const toggelBtn = document.querySelector('.toggelBtn');
const nav = document.querySelector('.mobilNav');

toggelBtn.addEventListener('click', () => {
  nav.classList.toggle('hidden');
});

// eslint-disable-next-line no-undef
AOS.init({
  duration: 1000,
});
