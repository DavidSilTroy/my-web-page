//variables globales
var davst = {
    menuHide: true,
    screenY: 0,
    menuStarted: false,
    menuColorTime: 0.6,
    showedProject: 0,
}

//Runing Javascript once the page if fully loaded
document.addEventListener("DOMContentLoaded", function(){
    // /*Scrolling*/
    window.onscroll = () => {
        console.log(window.scrollY);
        // davst.screenY = window.scrollY;
        // console.log(davst.screenY)
        // colorMenu();
        // showProjects();
        // showSkills();
        // showExperience();
        // if (!davst.menuHide) {
        //     menuHideShow();
        // }
    };
    window.addEventListener('scroll', function() {
        // console.log(window.scrollY);
        // if (window.scrollY > 50) {
        //   document.getElementById('navbar_top').classList.add('fixed-top');
        //   // add padding top to show content behind navbar
        //   navbar_height = document.querySelector('.navbar').offsetHeight;
        //   document.body.style.paddingTop = navbar_height + 'px';
        // } else {
        //   document.getElementById('navbar_top').classList.remove('fixed-top');
        //    // remove padding top from body
        //   document.body.style.paddingTop = '0';
        // } 
    });

    const cardTitles = document.querySelectorAll('.card-title');
    const cardTexts = document.querySelectorAll('.card-text');
    const maxTitleLines = 2; // Número máximo de líneas deseado
    const maxTextLines = 4; // Número máximo de líneas deseado

    function clampTextLines(elements, maxCharts) {
      elements.forEach(element => { 
        const text = element.textContent.trim();
        if(text && text.length> maxCharts)
        {
          element.textContent = text.substring(0, maxCharts - 3) + '...';
        }  
      });
    }
    if(cardTexts)
    {
      clampTextLines(cardTexts, 150);
    }
    if(cardTitles)
    {
      clampTextLines(cardTitles, 50);
    }

    const imageContainer = document.getElementById('image-container-internship');
    if (imageContainer) {
      const textColumn = imageContainer.parentNode.previousElementSibling;
      const textHeight = textColumn.offsetHeight;
      imageContainer.style.height = textHeight + 'px';
    }

    /* Enable popover bootstrap */
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

    

  }); 


// var davst_menuMove = null;
// /*Menu Button*/
// document.querySelector("#hamb-menu").onclick = () => {

//     menuHideShow();
// };


// const menuHideShow = () => {

//     if (!davst.menuStarted) {
//         davst_menuMove = gsap.to("#nav-mobile", {
//             x: -screen.width,
//             duration: 0.5
//         });
//         gsap.set("#nav-mobile", {
//             className: "+=mob-menu-davst"
//         });
//         davst.menuStarted = true;
//     }

//     if (davst.menuHide) {
//         davst.menuHide = false;
//         colorMenu("bg_tr")
//         davst_menuMove.play();

//     } else {
//         davst.menuHide = true;
//         davst_menuMove.reverse();
//         colorMenu();
//     }
// };
// const colorMenu = (color) => {
//     if (color == null) {
//         if (davst.screenY > 20 && davst.menuHide) {
//             color = "Color_1"
//         } else {
//             color = "transparent"
//         }
//     }
//     switch (color) {
//         case "transparent":
//             gsap.to("#header-davst", {
//                 backgroundColor: "transparent",
//                 duration: davst.menuColorTime
//             });
//             break;
//         case "Color_1":
//             gsap.to("#header-davst", {
//                 backgroundColor: "#1D1996",
//                 duration: davst.menuColorTime
//             });
//             break;
//         default:
//             gsap.to("#header-davst", {
//                 backgroundColor: "#1b262cf0",
//                 duration: davst.menuColorTime
//             });
//             break;
//     }
// }
// const showProjects = () => {
//     var px1 = 0;
//     var px2 = 0;
//     var px3 = 0;
//     var delay_1 = 0.3;
//     var delay_2 = 0.6;
//     var delay_3 = 0.9;
//     if (screen.width < 994) {
//         px2 = 300;
//         px3 = 600;
//         delay_1 = 0.3;
//         delay_2 = 0;
//         delay_3 = 0;
//     }

//     if (davst.screenY >= px1) {

//         if (davst.showedProject < 1) {
//             gsap.from("#davst_project-1", {
//                 y: 100,
//                 duration: 1,
//                 delay: delay_1
//             });
//             gsap.to("#davst_project-1", {
//                 opacity: 1,
//                 duration: 1,
//                 delay: delay_1
//             });
//             davst.showedProject++;
//         }
//     }
//     if (davst.screenY >= px2) {
//         if (davst.showedProject < 2) {
//             gsap.from("#davst_project-2", {
//                 y: 100,
//                 duration: 1,
//                 delay: delay_2
//             });
//             gsap.to("#davst_project-2", {
//                 opacity: 1,
//                 duration: 1,
//                 delay: delay_2
//             });
//             davst.showedProject++;
//         }
//     }
//     if (davst.screenY >= px3) {
//         if (davst.showedProject < 3) {
//             gsap.from("#davst_project-3", {
//                 x: 100,
//                 duration: 1,
//                 delay: delay_3
//             });
//             gsap.to("#davst_project-3", {
//                 opacity: 1,
//                 duration: 1,
//                 delay: delay_3
//             });
//             davst.showedProject++;
//         }

//     }
// }
// const showSkills = () => {
//     var delay_1 = 0.3;
//     var px1 = 450;

//     if (screen.width < 994) {
//         px1 = 1450;
//     }
//     if (davst.screenY >= px1) {
//         if (davst.showedProject < 4) {
//             gsap.from("#skills-showed", {
//                 y: 100,
//                 duration: 1,
//                 delay: delay_1
//             });
//             gsap.to("#skills-showed", {
//                 opacity: 1,
//                 duration: 1,
//                 delay: delay_1
//             });
//             davst.showedProject++;
//         }
//     }
// }
// const showExperience = () => {
//     var delay_1 = 0.3;
//     var px1 = 600;
//     if (screen.width < 994) {
//         px1 = 1700;
//     }
//     if (davst.screenY >= px1) {
//         if (davst.showedProject < 5) {
//             gsap.from("#exp-youtube", {
//                 x: -100,
//                 duration: 1,
//                 delay: delay_1
//             });
//             gsap.to("#exp-youtube", {
//                 opacity: 1,
//                 duration: 1,
//                 delay: delay_1
//             });
//             gsap.from("#exp-github", {
//                 y: 100,
//                 duration: 1,
//                 delay: delay_1
//             });
//             gsap.to("#exp-github", {
//                 opacity: 1,
//                 duration: 1,
//                 delay: delay_1
//             });
//             gsap.from("#exp-instagram", {
//                 x: 100,
//                 duration: 1,
//                 delay: delay_1
//             });
//             gsap.to("#exp-instagram", {
//                 opacity: 1,
//                 duration: 1,
//                 delay: delay_1
//             });
//             davst.showedProject++;
//         }
//     }
// }

// const startWith = () => {
//     var t1 = gsap.timeline();
//     t1.from("#davst_first-title", {
//             y: -50,
//             duration: 1,
//             opacity: 0
//         })
//         .from("#davst_second-title", {
//             y: -50,
//             duration: 1,
//             opacity: 0,
//         }, "-=0.5")
//         .from("#davst_download-cv", {
//             y: -50,
//             duration: 1,
//             opacity: 0,
//         }, "-=0.5")
//         .from("#davst_photo-hero", {
//             x: 50,
//             duration: 1,
//             opacity: 0,
//         }, "-=0.5");
//     if (screen.width >= 994) {
//         for (let i = 0; i < 3; i++) {
//             showProjects();
//             console.log(davst.showedProject);
//         }
//     } else {
//         showProjects();
//     }
// }








// //para ejecutar al iniciar
// startWith()