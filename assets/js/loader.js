//variables globales
var davst = {
    menuHide: true,
    screenY: 0,
    menuColorTime: 0.6,
    showedProject: 0,
}
document.querySelector("#hamb-menu").onclick = () => {
    menuHideShow();

};
window.onscroll = () => {
    davst.screenY = window.scrollY;
    console.log(davst.screenY)
    colorMenu();
    showProjects();
};




const menuHideShow = () => {

    if (davst.menuHide) {
        showMenu();
    } else {
        hideMenu();
    }
};
const menuTrasparent = () => {
    gsap.to("#header-davst", {
        backgroundColor: "transparent",
        duration: davst.menuColorTime
    });
}
const menuColor1 = () => {
    gsap.to("#header-davst", {
        backgroundColor: "#1D1996",
        duration: davst.menuColorTime
    });
}
const menuColorBg_tr = () => {
    gsap.to("#header-davst", {
        backgroundColor: "#1b262cf0",
        duration: davst.menuColorTime
    });
}
const showMenu = () => {
    gsap.set("#nav-mobile", {
        className: "+=mob-menu-davst"
    });
    switch (screen.width) {
        case 375:
            gsap.to("#nav-mobile", {
                x: -375,
                duration: 1
            });
            break;
        case 425:
            gsap.to("#nav-mobile", {
                x: -425,
                duration: 1
            });
            break;
        default:
            gsap.to("#nav-mobile", {
                x: -320,
                duration: 1
            });
            break;
    }
    menuColorBg_tr();
    davst.menuHide = false;

}
const hideMenu = () => {
    gsap.to("#nav-mobile", {
        className: "+=right hide-on-med-and-down",
        delay: 0.35
    });
    gsap.to("#nav-mobile", {
        x: 0,
        duration: 0.35
    });
    if (davst.screenY > 39) {
        menuColor1();
    } else {
        menuTrasparent();
    }
    davst.menuHide = true;
}
const colorMenu = () => {
    if (davst.screenY > 20) {
        menuColor1();
    } else {
        menuTrasparent();
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
    if (davst.screenY > 250) {
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
    if (davst.screenY > 650) {
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
}








//para ejecutar al iniciar
startWith()