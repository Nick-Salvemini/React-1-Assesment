function addCommas(num) {
    return new Intl.NumberFormat('en-US', { maximumFractionDigits: 20 }).format(num);
}

module.exports = addCommas;