document.addEventListener('DOMContentLoaded', function () {

    let langSelected = document.documentElement.lang;

    console.log(langSelected);

    let langBtns = document.querySelectorAll('.lang-button');

    if(langSelected == 'es'){
        langBtns[1].classList.add('selected');
        langBtns[0].classList.remove('selected');
    }

    langBtns[0].addEventListener('click', function(){
        langBtns[0].classList.toggle('selected');
        langBtns[1].classList.toggle('selected');
    })

    langBtns[1].addEventListener('click', function(){
        langBtns[0].classList.toggle('selected');
        langBtns[1].classList.toggle('selected');
        langSelected = 'es';
        document.documentElement.lang = 'es';
        console.log('langSelected: ' + langSelected);
        window.location.href = '/es';
    })

})