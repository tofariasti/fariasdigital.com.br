/**
 * Carousel de Projetos
 * Controla a rotação automática e navegação do banner de projetos
 */

(function () {
  'use strict';

  if (typeof HubConfig === 'undefined' || !HubConfig.demos) return;

  const AUTOPLAY_DELAY = 5000; // 5 segundos
  let currentSlide = 0;
  let autoplayInterval = null;

  function getDominioHost() {
    if (HubConfig.dominioHost) return HubConfig.dominioHost;
    return (HubConfig.dominio || '').replace(/^https?:\/\//, '').replace(/\/$/, '');
  }

  function renderCarouselSlide(demo, index) {
    const waMsg = 'Olá! Vi o site para ' + demo.titulo + ' em ' + getDominioHost() + ' e quero algo assim para minha empresa.';
    const waUrl = 'https://wa.me/' + HubConfig.whatsappNumero + '?text=' + encodeURIComponent(waMsg);
    
    const isActive = index === 0 ? ' is-active' : '';
    
    return (
      '<div class="carousel-slide' + isActive + '">' +
        '<div class="carousel-slide__preview">' +
          '<iframe src="' + demo.url + '" title="Preview ' + demo.titulo + '" loading="' + (index === 0 ? 'eager' : 'lazy') + '" tabindex="-1"></iframe>' +
        '</div>' +
        '<div class="carousel-slide__content">' +
          '<span class="carousel-slide__badge">Pronto para personalizar</span>' +
          '<p class="carousel-slide__segment">' + demo.segmento + '</p>' +
          '<h3 class="carousel-slide__title">' + demo.titulo + '</h3>' +
          '<p class="carousel-slide__description">' + demo.descricao + '</p>' +
          '<div class="carousel-slide__actions">' +
            '<a href="' + demo.url + '" class="carousel-slide__btn carousel-slide__btn--outline" target="_blank" rel="noopener noreferrer">' +
              '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:20px;height:20px;" aria-hidden="true">' +
                '<path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>' +
              '</svg>' +
              'Ver site' +
            '</a>' +
            '<a href="' + waUrl + '" class="carousel-slide__btn carousel-slide__btn--primary" target="_blank" rel="noopener noreferrer">' +
              '<svg viewBox="0 0 24 24" fill="currentColor" style="width:20px;height:20px;" aria-hidden="true">' +
                '<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>' +
              '</svg>' +
              'Quero um assim' +
            '</a>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }

  function renderCarouselIndicator(index) {
    const isActive = index === 0 ? ' is-active' : '';
    return '<button class="carousel-indicator' + isActive + '" data-index="' + index + '" aria-label="Ir para projeto ' + (index + 1) + '"></button>';
  }

  function initCarousel() {
    const track = document.getElementById('carousel-track');
    const indicators = document.getElementById('carousel-indicators');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    const carousel = document.querySelector('.projects-carousel');

    if (!track || !indicators || !prevBtn || !nextBtn || !carousel) return;

    // Renderizar slides
    track.innerHTML = HubConfig.demos.map(renderCarouselSlide).join('');
    
    // Renderizar indicadores
    indicators.innerHTML = HubConfig.demos.map(function (demo, i) {
      return renderCarouselIndicator(i);
    }).join('');

    const slides = track.querySelectorAll('.carousel-slide');
    const indicatorButtons = indicators.querySelectorAll('.carousel-indicator');

    function goToSlide(index) {
      // Garantir que o índice está dentro dos limites
      if (index < 0) {
        index = slides.length - 1;
      } else if (index >= slides.length) {
        index = 0;
      }

      currentSlide = index;

      // Mover o track
      track.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';

      // Atualizar classes ativas
      slides.forEach(function (slide, i) {
        slide.classList.toggle('is-active', i === currentSlide);
      });

      indicatorButtons.forEach(function (btn, i) {
        btn.classList.toggle('is-active', i === currentSlide);
      });
    }

    function nextSlide() {
      goToSlide(currentSlide + 1);
    }

    function prevSlide() {
      goToSlide(currentSlide - 1);
    }

    function startAutoplay() {
      stopAutoplay();
      autoplayInterval = setInterval(nextSlide, AUTOPLAY_DELAY);
    }

    function stopAutoplay() {
      if (autoplayInterval) {
        clearInterval(autoplayInterval);
        autoplayInterval = null;
      }
    }

    // Event listeners
    prevBtn.addEventListener('click', function () {
      prevSlide();
      stopAutoplay();
      startAutoplay();
    });

    nextBtn.addEventListener('click', function () {
      nextSlide();
      stopAutoplay();
      startAutoplay();
    });

    indicatorButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const index = parseInt(this.getAttribute('data-index'), 10);
        goToSlide(index);
        stopAutoplay();
        startAutoplay();
      });
    });

    // Pausar autoplay quando o mouse está sobre o carousel
    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);

    // Suporte para navegação por teclado
    carousel.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') {
        prevSlide();
        stopAutoplay();
        startAutoplay();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
        stopAutoplay();
        startAutoplay();
      }
    });

    // Suporte para touch/swipe em dispositivos móveis
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    carousel.addEventListener('touchend', function (e) {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });

    function handleSwipe() {
      const swipeThreshold = 50;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          // Swipe left - próximo slide
          nextSlide();
        } else {
          // Swipe right - slide anterior
          prevSlide();
        }
        stopAutoplay();
        startAutoplay();
      }
    }

    // Pausar autoplay quando a aba não está visível
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        stopAutoplay();
      } else {
        startAutoplay();
      }
    });

    // Iniciar autoplay
    startAutoplay();
  }

  // Aguardar o DOM estar pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCarousel);
  } else {
    initCarousel();
  }
})();
