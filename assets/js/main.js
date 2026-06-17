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

  var WHATSAPP_ICON_PATH =
    'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z';

  function createWhatsAppIcon(className) {
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'currentColor');
    svg.setAttribute('aria-hidden', 'true');
    svg.classList.add(className || 'wa-icon');
    var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', WHATSAPP_ICON_PATH);
    svg.appendChild(path);
    return svg;
  }

  function injectWhatsAppIcons(root) {
    var scope = root || document;
    scope.querySelectorAll('.btn--whatsapp, .wa-float').forEach(function (el) {
      if (el.querySelector('.wa-icon')) return;
      var icon = createWhatsAppIcon('wa-icon');
      if (el.classList.contains('wa-float')) {
        el.textContent = '';
        el.appendChild(icon);
        return;
      }
      el.insertBefore(icon, el.firstChild);
    });
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
    injectWhatsAppIcons(packagesRoot);
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

  injectWhatsAppIcons();

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
