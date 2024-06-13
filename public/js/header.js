document.addEventListener('DOMContentLoaded', function () {
    console.log('JS linkeado');

    let menubtn = document.getElementById('menu-button');
    let menu = document.getElementById('dropdown-menu');
    let body = document.body;

    let langBtns = document.querySelectorAll('.lang-button');
    console.log(langBtns);
    menubtn.addEventListener('click', function(){
        console.log("se hizo click");
        menu.classList.toggle('show');
        body.classList.toggle('no-scroll');
    })

    langBtns[0].addEventListener('click', function(){
        console.log("se hizo click");
        langBtns[0].classList.toggle('selected');
        langBtns[1].classList.toggle('selected');
    })

    langBtns[1].addEventListener('click', function(){
        console.log("se hizo click");
        langBtns[0].classList.toggle('selected');
        langBtns[1].classList.toggle('selected');
    })
});