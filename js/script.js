window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });
});

const button = document.querySelector('.menu__btn'),
    login = document.querySelector('.login'),
    closeElem = document.querySelector('.close');

button.addEventListener('click', () => {
    login.classList.add('active');
});

closeElem.addEventListener('click', () => {
    login.classList.remove('active');
});


const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
    
        const blockID = anchor.getAttribute('href').substr(1)
    
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

// $(document).ready(function(){
//     $('.carousel__inner').slick(
//         {
//             infinite: true,
//             speed: 300,
//             slidesToShow: 4,
//             slidesToScroll: 2,
//             autoplay: true,
//             autoplaySpeed: 1500,
//             arrows: false,
//             pauseOnHover:false,
//             prevArrow: '<button type="button" class="slick-prev"><img src="../icons/carousel/prev.png"></button>',
//             nextArrow: '<button type="button" class="slick-next"><img src="../icons/carousel/next.png"></button>',
//             responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 1,
//                 infinite: true,
//                 dots: false
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 2
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//                 }
//             }
//             ]
//         }
//     );
// });



// var modal = document.getElementById("myModal");
// var btn = document.getElementById("myBtn");
// var span = document.getElementsByClassName("modal-close")[0];

// btn.onclick = function() {
//     modal.style.display = "block";
// }

// span.onclick = function() {
//     modal.style.display = "none";
// }

// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
