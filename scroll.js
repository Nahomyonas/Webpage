const sections = document.querySelectorAll('.animate');

observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = `anim1 2s ${entry.target.dataset.delay} forwards ease-out`;
        } else {
            entry.target.style.animation = 'none';
        }
    })

})

sections.forEach(section => {
    observer.observe(section)
})
const animations = document.querySelectorAll('.animate1');

observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = `anim2 2s ${entry.target.dataset.delay} forwards ease-out`;
        } else {
            entry.target.style.animation = 'none';
        }
    })

})

animations.forEach(animation => {
    observer.observe(animation)
})


