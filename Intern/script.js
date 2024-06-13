window.addEventListener('scroll', () => {
    const nav = document.getElementById('main-nav');
    if (window.scrollY > 100) {
        nav.style.backgroundColor = '#555'; // Change background color on scroll
    } else {
        nav.style.backgroundColor = '#333'; // Default background color
    }
});
