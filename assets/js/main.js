(function () {
  'use strict';

  if (typeof HubConfig === 'undefined') return;

  function getDominioHost() {
    if (HubConfig.dominioHost) return HubConfig.dominioHost;
    return (HubConfig.dominio || '').replace(/^https?:\/\//, '').replace(/\/$/, '');
  }

  function getDominioUrl() {
    return HubConfig.dominio || ('https://' + getDominioHost());
  }

  function renderMarcaLogo(el) {
    var src = HubConfig.marcaLogo || '/assets/img/logo-header.png';
    var alt = HubConfig.marcaLogoAlt || HubConfig.marca || 'Farias Digital';
    el.textContent = '';
    el.setAttribute('aria-label', alt);
    var img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.className = 'logo__img';
    img.width = 180;
    img.height = 48;
    img.loading = 'eager';
    img.decoding = 'async';
    el.appendChild(img);
  }

  function buildWhatsAppUrl(key) {
    const msg = HubConfig.mensagensWhatsApp[key] || HubConfig.mensagensWhatsApp.geral;
    return 'https://wa.me/' + HubConfig.whatsappNumero + '?text=' + encodeURIComponent(msg);
  }

  function formatPhoneDisplay() {
    return HubConfig.whatsappExibicao;
  }

  document.querySelectorAll('[data-wa]').forEach(function (el) {
    var key = el.getAttribute('data-wa') || 'geral';
    el.setAttribute('href', buildWhatsAppUrl(key));
    if (el.classList.contains('wa-link') || el.classList.contains('wa-float') || el.classList.contains('btn--whatsapp')) {
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener noreferrer');
    }
  });

  document.querySelectorAll('[data-phone]').forEach(function (el) {
    el.textContent = formatPhoneDisplay();
  });

  document.querySelectorAll('[data-email]').forEach(function (el) {
    if (el.tagName === 'A') {
      el.setAttribute('href', 'mailto:' + HubConfig.email);
    }
    el.textContent = HubConfig.email;
  });

  document.querySelectorAll('[data-region]').forEach(function (el) {
    el.textContent = HubConfig.cidadeRegiao;
  });

  document.querySelectorAll('[data-logo]').forEach(renderMarcaLogo);

  document.querySelectorAll('[data-dominio]').forEach(function (el) {
    el.textContent = getDominioHost();
  });

  document.querySelectorAll('[data-dominio-link]').forEach(function (el) {
    el.setAttribute('href', getDominioUrl());
    if (el.hasAttribute('data-dominio') || !el.textContent.trim()) {
      el.textContent = getDominioHost();
    }
  });

  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  var toggle = document.querySelector('[data-nav-toggle]');
  var mobileNav = document.querySelector('[data-mobile-nav]');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      var open = mobileNav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  var packagesRoot = document.getElementById('packages-root');
  if (packagesRoot && HubConfig.pacotesWeb) {
    packagesRoot.innerHTML = HubConfig.pacotesWeb.map(function (pkg, i) {
      var featured = pkg.destaque ? ' package-card--featured' : '';
      var badge = pkg.destaque ? '<span class="package-card__badge">Mais pedido</span>' : '';
      var items = pkg.inclui.map(function (item) {
        return '<li>' + item + '</li>';
      }).join('');
      var note = pkg.naoInclui
        ? '<p class="package-card__note">Não inclui: ' + pkg.naoInclui + '</p>'
        : '';
      return (
        '<article class="package-card' + featured + '" data-reveal data-reveal-delay="' + (i + 1) + '">' +
          badge +
          '<h3 class="package-card__name">' + pkg.nome + '</h3>' +
          '<p class="package-card__price">' + pkg.preco + '</p>' +
          '<p class="package-card__audience">' + pkg.publico + '</p>' +
          '<ul class="package-card__list">' + items + '</ul>' +
          note +
          '<a href="' + buildWhatsAppUrl(pkg.mensagemWhatsApp) + '" class="btn btn--whatsapp btn--block" target="_blank" rel="noopener noreferrer">Pedir orçamento</a>' +
        '</article>'
      );
    }).join('');
  }

  function renderPortfolioCard(demo, i, tipo) {
    var isProjeto = tipo === 'projeto';
    var cfg = HubConfig.portfolio || {};
    var delay = (i % 3) + 1;
    var badge = demo.badge || (isProjeto ? (cfg.badgeProjeto || 'Em produção') : (cfg.badgeDemo || 'Pronto para personalizar'));
    var hasIframe = demo.preview !== false && demo.url && demo.url.indexOf('github.com') === -1;
    var previewHtml;

    if (hasIframe) {
      previewHtml = '<iframe src="' + demo.url + '" title="Preview ' + demo.titulo + '" loading="lazy" tabindex="-1"></iframe>';
    } else {
      var stack = (demo.stack || []).map(function (tag) {
        return '<span class="demo-card__tag">' + tag + '</span>';
      }).join('');
      previewHtml =
        '<div class="demo-card__project">' +
          '<svg class="demo-card__project-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">' +
            '<path d="M16 18 22 12 16 6M8 6 2 12l6 6"/>' +
          '</svg>' +
          '<div class="demo-card__stack">' + stack + '</div>' +
        '</div>';
    }

    var actionsHtml;
    if (isProjeto) {
      if (demo.url && demo.url.indexOf('github.com') === -1) {
        actionsHtml =
          '<a href="' + demo.url + '" class="btn btn--primary" target="_blank" rel="noopener noreferrer">Ver ao vivo</a>';
      } else {
        actionsHtml = '';
      }
    } else {
      var waMsg = 'Olá! Vi o site para ' + demo.titulo + ' em ' + getDominioHost() + ' e quero algo assim para minha empresa.';
      var waUrl = 'https://wa.me/' + HubConfig.whatsappNumero + '?text=' + encodeURIComponent(waMsg);
      actionsHtml =
        '<a href="' + demo.url + '" class="btn btn--outline" target="_blank" rel="noopener noreferrer">Ver site</a>' +
        '<a href="' + waUrl + '" class="btn btn--primary" target="_blank" rel="noopener noreferrer">Quero um assim</a>';
    }

    return (
      '<article class="demo-card' + (isProjeto ? ' demo-card--projeto' : ' demo-card--modelo') + '" data-reveal data-reveal-delay="' + delay + '" data-tilt>' +
        '<div class="demo-card__preview' + (hasIframe ? '' : ' demo-card__preview--project') + '">' +
          '<span class="demo-card__badge demo-card__badge--' + (isProjeto ? 'projeto' : 'modelo') + '">' + badge + '</span>' +
          previewHtml +
        '</div>' +
        '<div class="demo-card__body">' +
          '<p class="demo-card__segment">' + demo.segmento + '</p>' +
          '<h3 class="demo-card__title">' + demo.titulo + '</h3>' +
          '<p class="demo-card__desc">' + demo.descricao + '</p>' +
          (actionsHtml ? '<div class="demo-card__actions">' + actionsHtml + '</div>' : '') +
        '</div>' +
      '</article>'
    );
  }

  if (HubConfig.portfolio) {
    var p = HubConfig.portfolio;
    document.querySelectorAll('[data-portfolio-lead]').forEach(function (el) { el.textContent = p.lead; });
    if (p.nota) {
      document.querySelectorAll('[data-portfolio-nota]').forEach(function (el) {
        el.innerHTML = p.nota;
      });
    } else {
      document.querySelectorAll('[data-portfolio-nota]').forEach(function (el) {
        el.remove();
      });
    }
    if (p.grupoProjetos) {
      document.querySelectorAll('[data-portfolio-grupo-projetos-titulo]').forEach(function (el) { el.textContent = p.grupoProjetos.titulo; });
      document.querySelectorAll('[data-portfolio-grupo-projetos-lead]').forEach(function (el) { el.textContent = p.grupoProjetos.lead; });
    }
    if (p.grupoDemos) {
      document.querySelectorAll('[data-portfolio-grupo-demos-titulo]').forEach(function (el) { el.textContent = p.grupoDemos.titulo; });
      document.querySelectorAll('[data-portfolio-grupo-demos-lead]').forEach(function (el) { el.textContent = p.grupoDemos.lead; });
    }
  }

  var projetosRoot = document.getElementById('portfolio-projetos');
  if (projetosRoot && HubConfig.projetos) {
    projetosRoot.innerHTML = HubConfig.projetos.map(function (item, i) {
      return renderPortfolioCard(item, i, 'projeto');
    }).join('');
  }

  var portfolioDemosRoot = document.getElementById('portfolio-demos');
  var demosRoot = document.getElementById('demos-root');
  var demosTarget = portfolioDemosRoot || demosRoot;
  if (demosTarget && HubConfig.demos) {
    demosTarget.innerHTML = HubConfig.demos.map(function (item, i) {
      return renderPortfolioCard(item, i, 'demo');
    }).join('');
  }

  var stepsRoot = document.getElementById('steps-root');
  if (stepsRoot && HubConfig.processoWeb) {
    stepsRoot.innerHTML = HubConfig.processoWeb.map(function (step, i) {
      return (
        '<div class="step" data-reveal data-reveal-delay="' + (i + 1) + '">' +
          '<span class="step__num">' + String(step.passo).padStart(2, '0') + '</span>' +
          '<h3 class="step__title">' + step.titulo + '</h3>' +
          '<p class="step__text">' + step.texto + '</p>' +
        '</div>'
      );
    }).join('');
  }

  if (window.HubAnimations && window.HubAnimations.init) {
    window.HubAnimations.init();
  }

  if (HubConfig.googleAnalyticsId) {
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + HubConfig.googleAnalyticsId;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', HubConfig.googleAnalyticsId);
  }
})();
