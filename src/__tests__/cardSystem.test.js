import getCardSystem from "../js/cardSystem";

test('4111111111111111 must be visa', () => {
    expect(getCardSystem('4111111111111111')).toBe('visa')
});

test('5111111111111111 must be mastercard', () => {
    expect(getCardSystem('5111111111111111')).toBe('mastercard')
});

test('2200111111111111 must be mir', () => {
    expect(getCardSystem('2200111111111111')).toBe('mir')
});

test('3400111111111111 must be american-express', () => {
    expect(getCardSystem('3400111111111111')).toBe('american-express')
});

test('3528111111111111 must be jcb', () => {
    expect(getCardSystem('3528111111111111')).toBe('jcb')
});

test('6228111111111111 must be unionpay', () => {
    expect(getCardSystem('6228111111111111')).toBe('unionpay')
});

test('3008111111111111 must be diners-club', () => {
    expect(getCardSystem('3008111111111111')).toBe('diners-club')
});

test('5018111111111111 must be maestro', () => {
    expect(getCardSystem('5018111111111111')).toBe('maestro')
});

test('999911111111111 must be null', () => {
    expect(getCardSystem('999911111111111')).toBe(null)
});