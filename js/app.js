// Aos

AOS.init({
    once: true,
});

// Fixed header

const header = document.querySelector('.header');
const headerLogo = document.querySelector('.header-logo img');

function checkWindowResizeForMenu() {
    window.addEventListener('scroll', function () {
        if(!window.matchMedia('(max-width: 992px)').matches) {
            if (window.scrollY > 0 || document.documentElement.scrollTop > 0) {
                header.classList.add('fixed');
                headerLogo.src = './img/logo-black.svg'
            } else {
                header.classList.remove('fixed');
                headerLogo.src = './img/logo.svg'
            }
        } else {
            if(header.classList.contains('fixed')) {
                header.classList.remove('fixed');
                headerLogo.src = './img/logo.svg'
            }
        }
    });
}

checkWindowResizeForMenu();

window.addEventListener('resize', checkWindowResizeForMenu);

// Mobile Menu

const openMenuBtn = document.querySelector('[data-burger-button]');
const mobileMenu = document.querySelector('[data-nav-menu]');

if (openMenuBtn && mobileMenu) {
    openMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        openMenuBtn.classList.toggle('active');
    })
}

// Tab

const teacherTabButtons = document.querySelectorAll('[data-teacher-button]');
const teacherTabBlocks = document.querySelectorAll('[data-teacher-block]');

if (teacherTabButtons.length && teacherTabBlocks.length) {
    teacherTabButtons.forEach(btn => {
        if (btn) {
            btn.addEventListener('click', () => {
                teacherTabButtons.forEach(button => {
                    button.classList.remove('active');
                    btn.classList.add('active');
                })
                teacherTabBlocks.forEach(block => {
                    block.classList.remove('active');
                    if (block.getAttribute('data-teacher-block') === btn.getAttribute('data-teacher-button')) {
                        block.classList.add('active');
                    }
                })
            })
        }
    })
}

// Scroll

const windowMedia = window.matchMedia('(max-width: 480px)');

document.querySelectorAll("[data-scroll-link]").forEach((e => {
    if (e) {
        e.addEventListener("click", (t => {
            mobileMenu.classList.remove('active');
            openMenuBtn.classList.remove('active');
            t.preventDefault();
            if (windowMedia.matches) {
                const o = e.getAttribute("href"), i = document.querySelector(o);
                if (i) {
                    const e = i.getBoundingClientRect(), t = window.pageYOffset + e.top, o = window.innerHeight,
                        l = Math.max(0, t - o / 2 + e.height / 2) + 220;
                    window.scrollTo({top: l, behavior: "smooth"})
                }
            } else {
                const o = e.getAttribute("href"), i = document.querySelector(o);
                if (i) {
                    const e = i.getBoundingClientRect(), t = window.pageYOffset + e.top, o = window.innerHeight,
                        l = Math.max(0, t - o / 2 + e.height / 2) + 150;
                    window.scrollTo({top: l, behavior: "smooth"})
                }
            }
        }))
    }
}));

// Modal

const modals = document.querySelectorAll('[data-modal]')
const openModalButtons = document.querySelectorAll('[data-modal-open]');
const closeModalButtons = document.querySelectorAll('[data-modal-close]');


openModalButtons.forEach(btn => {
    if (btn) {
        btn.addEventListener('click', (ev) => {
            ev.preventDefault();
            modals.forEach(modal => {
                if (modal) {
                    if (modal.getAttribute('data-modal') === btn.getAttribute('data-modal-open')) {
                        modal.classList.add('active');
                    }
                }
            })
        })
    }
})

closeModalButtons.forEach(btn => {
    if (btn) {
        btn.addEventListener('click', (ev) => {
            ev.preventDefault();
            modals.forEach(modal => {
                if (modal) {
                    if (modal.getAttribute('data-modal') === btn.getAttribute('data-modal-close')) {
                        modal.classList.remove('active');
                    }
                }
            })
        })
    }
})

document.addEventListener('click', (ev) => {
    modals.forEach(modal => {
        if (modal) {
            if (ev.target === modal) {
                modal.classList.remove('active');
            }
        }
    })
})

// Slider

const swiper1 = new Swiper('.services-slider', {
    slidesPerGroup: 1,
    spaceBetween: 20,
    speed: 1000,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    autoHeight: true,
    navigation: {
        nextEl: '.services-button-next',
        prevEl: '.services-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: '1',
        },
        480: {
            slidesPerView: '2',
        },
        768: {
            slidesPerView: '3',
        },
        992: {
            slidesPerView: '4',
        },
    }
});








