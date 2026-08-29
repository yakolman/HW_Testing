import '../css/styles.css';
import mir from '../image/mir.png';
import unionpay from '../image/unionpay.png';
import dinersClub from '../image/dinersclub.png';
import americanExpress from '../image/americanexp.png';
import jcb from '../image/jcb.png';
import maestro from '../image/maestro.png';
import mastercard from '../image/mastercard.png';
import visa from '../image/visa.png';
import isCardValid from './validator';
import getCardSystem from './cardSystem';

const cardImages = {
    mir,
    unionpay,
    'diners-club': dinersClub,
    'american-express': americanExpress,
    jcb,
    maestro,
    mastercard,
    visa,
};

const cardSystems = document.querySelectorAll('.card-system')
cardSystems.forEach((card) => {
    const system = card.dataset.system;
    const image = card.querySelector('.card-system-image');

    image.src = cardImages[system];
});

const form = document.querySelector('.card-form')
const input = document.querySelector('.card-number')
const textResult = document.querySelector('.result')

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const cardNum = input.value.replace(/\D/g, '');
    const cardValid = isCardValid(cardNum);
    cardSystems.forEach((card) => {
        card.classList.remove('active')
    });
    textResult.classList.remove('active')
    if (!cardNum) {textResult.textContent = 'Требуется ввести номер карты'; return}
    if (cardValid) {
        textResult.textContent = 'Номер карты корректный'
        textResult.classList.add('active')
        const cardSystem = getCardSystem(cardNum);
        const activeSystem = document.querySelector(`[data-system="${cardSystem}"]`);
        if (activeSystem) {
            activeSystem.classList.add('active')

        } 
    } else { textResult.textContent = 'Номер карты не корректный' }
})
