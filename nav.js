const header = document.querySelector("header");
const sectionOne = document.querySelector(".ATF");
const sectionOneOptions = {
    rootMargin: "-150px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function (
    entries, sectionOneObserver
) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            header.classList.add("nav-shift")
        }else{
            header.classList.remove("nav-shift")
        }
    });
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);

