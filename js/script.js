const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu-overlay', '.social-icons');
const social = document.querySelector('.social-icons');
const header = document.querySelector('.header');
const menuLinks = document.querySelectorAll('.menu-links a'); // Все ссылки в меню

// Открытие и закрытие меню
burger.addEventListener('click', () => {
    menu.classList.toggle('active');
    social.classList.toggle('active');
    burger.classList.toggle('active'); // Анимация бургера
});

// Закрытие меню при клике на ссылку
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        burger.classList.remove('active'); // Возвращаем бургер в исходное состояние
        social.classList.remove('active');
    });
});


// Добавление фона при скролле
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    new Swiper(".swiper-container", {
        slidesPerView: 4,
        spaceBetween: 20, 
        loop: true, 
        autoplay: {
            delay: 3000, 
            disableOnInteraction: false 
        },
        navigation: {
            nextEl: ".swiper-next img", 
            prevEl: ".swiper-prev img", 
        },
        breakpoints: {
            1024: { slidesPerView: 4 }, 
            768: { slidesPerView: 3 }, 
            480: { slidesPerView: 2 },
            320: { slidesPerView: 1 }
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");

        question.addEventListener("click", function () {
            const isOpen = item.classList.contains("active");

            // Закрываем все
            document.querySelectorAll(".faq-item").forEach(el => {
                el.classList.remove("active");
                el.querySelector(".faq-answer").style.display = "none";
            });

            
            if (!isOpen) {
                item.classList.add("active");
                answer.style.display = "block";
            }
        });
    });
});

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