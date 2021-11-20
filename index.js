const container = document.getElementById("container");

function aboutMe() {
    container.classList.add("page2")
}

function home(){
    container.classList.remove("page2")
}

function showSkills(){
    Array.from(document.querySelectorAll('[data-element=leaf__skills]')).forEach(leaf => {
        let classAnimate = leaf.getAttribute("data-identifier");
        leaf.style.animation = 'none';
        leaf.offsetHeight;
        leaf.style.animation = null;
    });
}