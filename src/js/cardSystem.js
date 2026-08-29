export default function getCardSystem(cardNum) {
    if (cardNum[0] === '4') { return 'visa'}
    const firstTwoDigits = Number(cardNum.slice (0,2))
    if (firstTwoDigits >= 51 && firstTwoDigits <= 55) {
        return 'mastercard'
    }
    const firstFourDigits = Number(cardNum.slice (0,4))
    if (firstFourDigits >= 2221 && firstFourDigits <= 2720) { return 'mastercard' }

    if (firstFourDigits >= 2200 && firstFourDigits <= 2204) { return 'mir' }
    if (firstTwoDigits === 34 || firstTwoDigits === 37) { return 'american-express'}
    if (firstFourDigits >= 3528 && firstFourDigits <= 3589) { return 'jcb' }
    if (firstTwoDigits === 62) { return 'unionpay' }
    const firstThreeDigits = Number (cardNum.slice (0,3))
    if ((firstThreeDigits >= 300 && firstThreeDigits <= 305) || firstFourDigits === 3095 || firstTwoDigits === 36 || (firstTwoDigits >= 38 && firstTwoDigits <= 39)) { return 'diners-club' }
    if (firstFourDigits === 5018 || firstFourDigits === 5020 || firstFourDigits === 5038 || firstFourDigits === 5893 || firstFourDigits === 6304 || firstFourDigits === 6759 || (firstFourDigits >= 6761 && firstFourDigits <= 6763)) { return 'maestro' }
    return null
}
