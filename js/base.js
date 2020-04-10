﻿
function formatNumber(numbertoformat) {
    if (!numbertoformat) return '0';
    var returnnumber = 0;
    returnnumber = Number(parseFloat(numbertoformat).toFixed(3)).toLocaleString('en', {
        minimumFractionDigits: 3
    });
    if (returnnumber.toString().endsWith('.000')) returnnumber = returnnumber.replace('.000', '');
    return returnnumber;
}