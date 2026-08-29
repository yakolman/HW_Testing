export default function isCardValid (cardNum) {
    let result=0
    if (!cardNum) { return false }
    for (let i = cardNum.length - 2; i >= 0; i -= 2) {
        let doubleNum = Number(cardNum[i]) * 2;
        if (doubleNum > 9) {
            doubleNum -= 9
        }
        result += doubleNum
    }
    for (let i = cardNum.length - 1; i >= 0; i -= 2) {
        result += Number(cardNum[i])
    }
    if (result % 10 === 0) {
        return true
    } else return false
}