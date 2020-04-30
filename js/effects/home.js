//if yOffset is bigger than viewport height, fix navbar to top
//else, no fix

var $navbar = document.querySelector('.navbar');
const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

window.addEventListener('scroll', function(e) {
    if(window.pageYOffset > vh + 10) {
        $navbar.classList.add('fixed-top');
    } else {
        $navbar.classList.remove('fixed-top');
    }
});