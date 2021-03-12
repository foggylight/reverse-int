module.exports = function reverse (n) {
    let num = n;
    if (n < 0) num = -n;
    return +`${num}`.split('').reverse().join('');
}
