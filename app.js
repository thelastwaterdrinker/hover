const circle = document.querySelector('#circle');

circle.addEventListener('mouseenter', () => {
    //here ! means if circle does not contain hover when mouse is there
    if(!circle.classList.contains('hover')) {
        // we add the hover here
        circle.classList.add('hover');
    }
});

circle.addEventListener('mouseleave', () => {
    if(circle.classList.contains('hover')) {
        circle.classList.remove('hover');
    }
});