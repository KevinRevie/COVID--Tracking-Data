
function formatNumber(numbertoformat) {
    if (!numbertoformat) return '0';
    var returnnumber = 0;
    returnnumber = Number(parseFloat(numbertoformat).toFixed(3)).toLocaleString('en', {
        minimumFractionDigits: 3
    });
    returnnumber = returnnumber.replace('.000', '');
    return returnnumber;
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

$(document).ready(function () {
    var url = window.location;
    $('.fb-share-button').attr('data-href', url);
    //console.log('test:'+url);
});