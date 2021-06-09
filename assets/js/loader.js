//variables globales
var davst = {
    menuHide: true,
    screenY: 0,
    menuStarted: false,
    menuColorTime: 0.6,
    showedProject: 0,
}
var davst_menuMove = null;
/*Menu Button*/
document.querySelector("#hamb-menu").onclick = () => {

    menuHideShow();
};
/*Scrolling*/
window.onscroll = () => {
    davst.screenY = window.scrollY;
    console.log(davst.screenY)
    colorMenu();
    showProjects();
    if (!davst.menuHide) {
        menuHideShow();
    }
};


const menuHideShow = () => {

    if (!davst.menuStarted) {
        davst_menuMove = gsap.to("#nav-mobile", {
            x: -screen.width,
            duration: 0.5
        });
        gsap.set("#nav-mobile", {
            className: "+=mob-menu-davst"
        });
        davst.menuStarted = true;
    }

    if (davst.menuHide) {
        davst.menuHide = false;
        colorMenu("bg_tr")
        davst_menuMove.play();

    } else {
        davst.menuHide = true;
        davst_menuMove.reverse();
        colorMenu();
    }
};

const colorMenu = (color) => {
    if (color == null) {
        if (davst.screenY > 20 && davst.menuHide) {
            color = "Color_1"
        } else {
            color = "transparent"
        }
    }
    switch (color) {
        case "transparent":
            gsap.to("#header-davst", {
                backgroundColor: "transparent",
                duration: davst.menuColorTime
            });
            break;
        case "Color_1":
            gsap.to("#header-davst", {
                backgroundColor: "#1D1996",
                duration: davst.menuColorTime
            });
            break;
        default:
            gsap.to("#header-davst", {
                backgroundColor: "#1b262cf0",
                duration: davst.menuColorTime
            });
            break;
    }
}
const showProjects = () => {
    if (davst.screenY >= 0) {
        if (davst.showedProject < 1) {
            gsap.from("#davst_project-1", {
                x: 100,
                duration: 1,
            });
            gsap.to("#davst_project-1", {
                opacity: 1
            });
            davst.showedProject++;
        }
    }
    if (davst.screenY > 650) {
        if (davst.showedProject < 2) {
            gsap.from("#davst_project-2", {
                x: 100,
                duration: 1,
            });
            gsap.to("#davst_project-2", {
                opacity: 1
            });
            davst.showedProject++;
        }
    }
    if (davst.screenY > 1150) {
        if (davst.showedProject < 3) {
            gsap.from("#davst_project-3", {
                x: 100,
                duration: 1,
            });
            gsap.to("#davst_project-3", {
                opacity: 1
            });
            davst.showedProject++;
        }
        //Aqui para los skillss

    }
}
const startWith = () => {

    showProjects();

    gsap.from("#davst_first-title", {
        y: -50,
        duration: 1,
        opacity: 0
    });
    gsap.from("#davst_second-title", {
        y: -50,
        duration: 1,
        opacity: 0,
        delay: 0.5
    });
    gsap.from("#davst_download-cv", {
        y: -50,
        duration: 1,
        opacity: 0,
        delay: 0.8
    });
    gsap.from("#davst_photo-hero", {
        x: 50,
        duration: 1,
        opacity: 0,
        delay: 0.3
    });

    if (screen.width <= 768) {


    }
}








//para ejecutar al iniciar
startWith()