var slides = document.querySelectorAll('.slider');
var languages = document.querySelectorAll('.language');
var arrLanguages = Array.from(languages);
var arrSiles = Array.from(slides);
setInterval(function(){
    var i = Math.floor(Math.random()*arrSiles.length);
    document.querySelector('.slider.active').classList.remove('active');
    arrSiles[i].classList.add('active');
},2000)

setInterval(function(){
    var j = Math.floor(Math.random()*arrLanguages.length);
    document.querySelector('.language.active_language').classList.remove('active_language');
    arrLanguages[j].classList.add('active_language');
},2000)
