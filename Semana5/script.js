var num = 150; // Variaveis para contagem das direções
var num2 = 150;

var btnRight = document.getElementById('btnright'); // slide do btn direito

btnRight.addEventListener('click', () => {

    var limi = document.getElementById('limitador').getBoundingClientRect().left;

    var limit = Math.round(limi);

    var er = document.getElementById('btnright').getBoundingClientRect().left;

    var ref = Math.round(er);

    var slideContainer = document.getElementById('container');

    var carrossel = document.getElementById('carrossel');


    if (limit > ref) {

        slideContainer.style.transform = 'translateX(-' + num + 'px)';

        num = num + 150;

        num2 = num2 - 150;

    } else {

        var stoped = ref * slideContainer.clientWidth / carrossel.clientWidth - carrossel.clientWidth + 100;

        var stopedRound = Mtah.round(stoped);

        slideContainer.style.transform = 'translateX(-' + stopedRound + 'px)';


    }


});


var btnLeft = document.getElementById('btnleft'); // slide do btn esquerdo

btnLeft.addEventListener('click', () => {


    var limi = document.getElementById('limitador').getBoundingClientRect().left;

    var limit = Math.round(limi);

    var er = document.getElementById('btnleft').getBoundingClientRect().left;

    var ref = Math.round(er);

    var slideContainer = document.getElementById('container');

    var carrossel = document.getElementById('carrsossel');

    var slide = slideContainer.getBoundingClientRect().left;

    if (slide < ref) {

        slideContainer.style.transform = 'translateX(' + num2 + 'px)';

        num = num - 150;
        num2 = num2 + 150;

    } else {

        slideContainer.style.transform = 'translateX(0)';

        num = 150;

    }


});