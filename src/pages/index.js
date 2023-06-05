
const version = document.getElementById("version");
// const menu = document.getElementById("menu");
// let versionIsOpen = false; 

const clickMenu = (event) => {
    const target = event.target;
    const targetSibling = event.target.nextElementSibling;

    target.classList.add("header__ul__version__dropdown");
    // target.firstChild.classList.add("header__ul__version__dropdown");
    targetSibling.classList.add("header__ul__version--hover");

    // versionIsOpen = true;
}



version.addEventListener('click', clickMenu);
// menu.addEventListener('click', clickMenu);


// CORRECTION ---------------------------

window.document.addEventListener("click", (event) => {
//     // console.dir(event.target)
//     // if (versionIsOpen) {
//     //     return;
//     // }
    // const version2 = document.getElementById("version2");
    const target = event.target;
    const au_revoir = document.getElementById("au_revoir");

    if (target.classList === "version2") {
        au_revoir.classList.remove("header__ul__version--hover");
    } else {
        au_revoir.classList.remove("header__ul__version--hover");
    }
})

// ----------------------------------------





