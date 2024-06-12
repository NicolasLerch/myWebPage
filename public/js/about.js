document.addEventListener('DOMContentLoaded', function (){
    console.log('aboout.js linkeado');

    let htmlbtn = document.getElementById('html-css-btn')
    let htmlinfo = document.getElementById('html-css')
    let javaBtn = document.getElementById('java-btn')
    let javaInfo = document.getElementById('java')
    let pythonBtn = document.getElementById('python-btn')
    let pythonInfo = document.getElementById('python')
    let jsBtn = document.getElementById('js-btn')
    let jsInfo = document.getElementById('js')
    let languagesBtn = document.getElementById('languages-btn')
    let languagesInfo = document.getElementById('languages')
    let otherBtn = document.getElementById('others-btn')
    let otherInfo = document.getElementById('others')

    htmlbtn.addEventListener('click', function(){
        console.log('click');
        javaBtn.classList.remove('disabled')
        pythonBtn.classList.remove('disabled')
        jsBtn.classList.remove('disabled')
        languagesBtn.classList.remove('disabled')
        otherBtn.classList.remove('disabled')

        javaInfo.classList.add('hide')
        javaInfo.classList.remove('show')
        htmlinfo.classList.remove('hide')
        htmlinfo.classList.add('show')
        pythonInfo.classList.add('hide')
        pythonInfo.classList.remove('show')
        jsInfo.classList.add('hide')
        jsInfo.classList.remove('show')
        languagesInfo.classList.add('hide')
        languagesInfo.classList.remove('show')
        otherInfo.classList.add('hide')
        otherInfo.classList.remove('show')
    })

    javaBtn.addEventListener('click', function(){
        console.log('click');
        javaBtn.classList.toggle('disabled')
        htmlbtn.classList.remove('disabled')
        pythonBtn.classList.remove('disabled')
        languagesBtn.classList.remove('disabled')
        otherBtn.classList.remove('disabled')

        javaInfo.classList.add('show')
        javaInfo.classList.remove('hide')
        htmlinfo.classList.add('hide')
        htmlinfo.classList.remove('show')
        pythonInfo.classList.add('hide')
        pythonInfo.classList.remove('show')
        languagesInfo.classList.add('hide')
        languagesInfo.classList.remove('show')

        jsBtn.classList.remove('disabled')
        jsInfo.classList.add('hide')
        jsInfo.classList.remove('show')

        otherInfo.classList.add('hide')
        otherInfo.classList.remove('show')
    })

    pythonBtn.addEventListener('click', function(){
        console.log('click');
        pythonBtn.classList.toggle('disabled')
        javaBtn.classList.remove('disabled')
        languagesBtn.classList.remove('disabled')
        otherBtn.classList.remove('disabled')

        pythonInfo.classList.add('show')
        pythonInfo.classList.remove('hide')
        htmlinfo.classList.add('hide')
        htmlinfo.classList.remove('show')
        javaInfo.classList.add('hide')
        javaInfo.classList.remove('show')
        languagesInfo.classList.add('hide')
        languagesInfo.classList.remove('show')

        jsBtn.classList.remove('disabled')
        jsInfo.classList.add('hide')
        jsInfo.classList.remove('show')

        otherInfo.classList.add('hide')
        otherInfo.classList.remove('show')
    })

    jsBtn.addEventListener('click', function(){
        console.log('click');
        jsBtn.classList.add('disabled')
        javaBtn.classList.remove('disabled')
        htmlbtn.classList.remove('disabled')
        pythonBtn.classList.remove('disabled')
        languagesBtn.classList.remove('disabled')
        otherBtn.classList.remove('disabled')

        pythonInfo.classList.add('hide')
        pythonInfo.classList.remove('show')
        htmlinfo.classList.add('hide')
        htmlinfo.classList.remove('show')
        javaInfo.classList.add('hide')
        javaInfo.classList.remove('show')
        languagesInfo.classList.add('hide')
        languagesInfo.classList.remove('show')

        jsInfo.classList.remove('hide')
        jsInfo.classList.add('show')

        otherInfo.classList.add('hide')
        otherInfo.classList.remove('show')
    })

    languagesBtn.addEventListener('click', function(){
        console.log('click');
        languagesBtn.classList.toggle('disabled')
        javaBtn.classList.remove('disabled')
        htmlbtn.classList.remove('disabled')
        pythonBtn.classList.remove('disabled')
        languagesBtn.classList.remove('disabled')
        jsBtn.classList.remove('disabled')
        otherBtn.classList.remove('disabled')

        pythonInfo.classList.add('hide')
        pythonInfo.classList.remove('show')
        htmlinfo.classList.add('hide')
        htmlinfo.classList.remove('show')
        javaInfo.classList.add('hide')
        javaInfo.classList.remove('show')
        jsInfo.classList.remove('show')
        jsInfo.classList.add('hide')

        languagesInfo.classList.add('show')
        languagesInfo.classList.remove('hide')

        otherInfo.classList.add('hide')
        otherInfo.classList.remove('show')
    })

    otherBtn.addEventListener('click', function(){
        otherBtn.classList.toggle('disabled')
        javaBtn.classList.remove('disabled')
        htmlbtn.classList.remove('disabled')
        pythonBtn.classList.remove('disabled')
        languagesBtn.classList.remove('disabled')
        jsBtn.classList.remove('disabled')

        pythonInfo.classList.add('hide')
        pythonInfo.classList.remove('show')
        htmlinfo.classList.add('hide')
        htmlinfo.classList.remove('show')
        javaInfo.classList.add('hide')
        javaInfo.classList.remove('show')
        jsInfo.classList.remove('show')
        jsInfo.classList.add('hide')

        languagesInfo.classList.add('hide')
        languagesInfo.classList.remove('show')

        otherInfo.classList.add('show')
        otherInfo.classList.remove('hide')
    })
})