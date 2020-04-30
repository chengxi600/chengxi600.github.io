let $arrow = document.querySelector('.up-arrow');

window.addEventListener('scroll', function(e) {
    if(window.pageYOffset > 50) {
        $arrow.classList.add('block-display');
        $arrow.classList.remove('no-display');
    } else {
        $arrow.classList.add('no-display');
        $arrow.classList.remove('block-display');
    }
});