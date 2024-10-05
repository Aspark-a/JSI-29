window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    if (scrollPosition > 200) {
        document.querySelector('.scroll-up').style.display = 'block';
    } else {
        document.querySelector('.scroll-up').style.display = 'none';
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}