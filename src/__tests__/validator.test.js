import isCardValid from "../js/validator";

test('4111111111111111 must be true', () => {
    expect(isCardValid('4111111111111111')).toBe(true)
});

test('4111111111111112 must be false', () => {
    expect(isCardValid('4111111111111112')).toBe(false)
});