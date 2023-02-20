

// MENU SCROLL
function scrollHeader() {
    let header = document.querySelector('header');
    let menuScroll = document.querySelector('header .header__top')
    let heightHeader = header.clientHeight;
    document.addEventListener('scroll', function () {
        let scrollY = window.pageYOffset;
        if (scrollY > heightHeader) {
            menuScroll.classList.add('active');
        } else {
            menuScroll.classList.remove('active')
        }
    })
}
scrollHeader();

// EFFECT MENUSCROLL
let menuScroll = document.querySelector('header .header__top')

function scrollEffect() {
    let menuBottom = document.querySelector('header .container .header__menu.--bottom');
    let menuBtPosition = menuBottom.offsetTop;
    let menuBtHeight = menuBottom.offsetHeight;
    document.addEventListener('scroll', function () {
        if (scrollY > menuBtPosition &&
            scrollY < menuBtHeight + menuBtPosition) {
            menuScroll.style.transform = "translateY(-72px)";
        } else {
            menuScroll.style.transform = "translateY(0)";
        }


    })
}
scrollEffect();


// MENU NAV 
function menuNavMobile() {
    let btnMenu = document.querySelector('header .header__top .container .btnmenu');
    let navMenu = document.querySelector('header .nav');

    btnMenu.addEventListener('click', function () {
        btnMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    })

    function removeNav() {
        btnMenu.classList.remove('active');
        navMenu.classList.remove('active');
    }

    window.addEventListener('resize', function () {
        let windowWidth = this.window.innerWidth;
        if (windowWidth > 990) {
            removeNav();
        }
    })
}

menuNavMobile();



const sliderProject = ()=>{
    window.addEventListener('DOMContentLoaded', () => {
        $(".projectDetail__list").flickity({
            cellAlign: 'left',
            contain: true,
            fullscreen:true,
            prevNextButtons: false,
            pageDots: false,
            wrapAround: true,
        });
        $(".projectDetail__top .fullScreen").on("click", function () { 
        $(".projectDetail__list").flickity("viewFullscreen"); 
        }); 
        
       

    })
};

sliderProject();



// SLIDER STUDIO DETAIL
const sliderStudio = () => { 
    // let iconFullScreen = ".flickity-button-icon" 
    window.addEventListener('DOMContentLoaded', () => {
        $(".studioDetail__slider").flickity({ 
            cellAlign: "left", 
            contain: true, 
            wrapAround: true, 
            prevNextButtons: false, 
            pageDots: false, 
            fullscreen: true, 
            autoPlay: 3000,
            }); 
            $(".fullScreen").on("click", function () { 
            $(".studioDetail__slider").flickity("viewFullscreen"); 
            }); 
            $('.btnctr.--reverse').on("click", function () { 
            $(".studioDetail__slider").flickity("previous"); 
            }); 
            $('.btnctr.--next').on("click", function () { 
            $(".studioDetail__slider").flickity("next"); 
            }); 

    } )
   
    
    // $(iconFullScreen).on("click", function () { 
    // console.log(1); 
    // header.classList.remove('active'); 
    // }) 
    
};
 sliderStudio();



    const sliderCafe = ()=>{
        window.addEventListener('DOMContentLoaded',()=> {
            $('.gallery__slider').flickity({
                cellAlign: "center", 
                contain: true, 
                wrapAround: true, 
                prevNextButtons: false, 
                pageDots: false, 
                watch: true,
            
            
            });
            $('.gallery .btnctr.--reverse').on('click',function(){
                $('.gallery__slider').flickity('previous');
            });
            $('.gallery .btnctr.--next').on('click',function(){
                $('.gallery__slider').flickity('next');
            });

        });

    };

    sliderCafe();

// FANCYBOX GALLERY
// Fancybox.bind('[data-fancybox="image"]', {
//     infinite: true,
    
// });

// const mainCarousel = new Carousel(document.querySelector(".gallery__slider"), {
//     Dots: false,
//   });

