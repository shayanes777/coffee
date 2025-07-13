const swiper = new Swiper('.first-procuts-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 5,
      spaceBetween: 30,
      breakpoints: {
        200: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        400: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        700: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        750: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        800: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        1100: {
          slidesPerView: 4,
          spaceBetween: 20
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 30
        },
        1250: {
          slidesPerView: 5,
          spaceBetween: 30
        }
      },
      pagination: {
        el: ".first-procuts-swiper-pagination",
        clickable: true,
      },
      
      scrollbar: {
        el: '.first-procuts-swiper-scrollbar',
        enabled: false,
      },
  
    // Navigation arrows
    navigation: {
        enabled: false,
    },
    autoplay: {
        delay: 3000,
      },
  });


  const swiper2 = new Swiper(".packingSwiper", {
    effect: "cards",
    grabCursor: true,
  });


  const items = document.querySelectorAll('.faq-accordion-item');

  items.forEach(item => {
    const header = item.querySelector('.faq-accordion-header');
    const icon = item.querySelector('.faq-accordion-icon');

    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // بستن همه
      items.forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq-accordion-icon').textContent = '+';
      });

      // باز یا بسته کردن آیتم کلیک‌شده
      if (!isActive) {
        item.classList.add('active');
        icon.textContent = '×';
      }
    });
  });


  
  const swiper3 = new Swiper(".coffee-banner-swiper", {
    loop: true,
    slidesPerView: 1.2,
    autoplay: {
      delay: 4000,
      disableOnInteraction: true
    },
    spaceBetween: 20,
    centeredSlides: true,
    breakpoints: {
      500:{
        slidesPerView: 1.5,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false
        },
      },
      650:{
        slidesPerView: 2,
        spaceBetween: 50,
        centeredSlides: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
      },
      1050:{
        slidesPerView: 3,
        spaceBetween: 50,
        centeredSlides: false,
      },
      1300:{
        slidesPerView: 4,
        spaceBetween: 50,
      }
    },
    pagination: {
      el: ".coffee-banner-swiper-pagination",
      clickable: false,
    },
    
  });
