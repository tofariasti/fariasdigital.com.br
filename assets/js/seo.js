(function () {
  'use strict';

  if (typeof HubConfig === 'undefined' || !HubConfig.seo) return;

  var seo = HubConfig.seo;
  var page = document.documentElement.getAttribute('data-seo-page') || 'home';
  var dominio = HubConfig.dominio || 'https://fariasdigital.com.br';

  function injectJsonLd(data) {
    var script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }

  function businessEntity() {
    return {
      '@type': 'LocalBusiness',
      '@id': dominio + '/#business',
      name: HubConfig.marca || 'Farias Digital',
      alternateName: HubConfig.nome,
      url: dominio,
      image: seo.ogImage,
      logo: dominio + '/assets/img/logo.png',
      description: seo.descriptionDefault,
      email: HubConfig.email,
      telephone: '+55-51-99121-3724',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        addressLocality: seo.local.cidade,
        addressRegion: seo.local.uf,
        addressCountry: 'BR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: seo.geo.latitude,
        longitude: seo.geo.longitude,
      },
      areaServed: seo.local.areaServed.map(function (city) {
        return { '@type': 'City', name: city + ', RS' };
      }),
      founder: {
        '@type': 'Person',
        name: HubConfig.nomeCompleto,
        url: dominio + '/sobre/',
      },
      sameAs: seo.sameAs,
      knowsAbout: [
        'Desenvolvimento de sites',
        'E-commerce',
        'Automação WhatsApp',
        'SEO',
        'Captação aérea com drone',
      ],
    };
  }

  function breadcrumb(items) {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map(function (item, index) {
        return {
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url,
        };
      }),
    };
  }

  if (page === 'home') {
    injectJsonLd({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': dominio + '/#website',
          url: dominio,
          name: HubConfig.marca,
          description: seo.paginas.home.description,
          inLanguage: 'pt-BR',
          publisher: { '@id': dominio + '/#business' },
        },
        businessEntity(),
        {
          '@type': 'FAQPage',
          '@id': dominio + '/#faq',
          mainEntity: seo.faq.map(function (item) {
            return {
              '@type': 'Question',
              name: item.pergunta,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.resposta,
              },
            };
          }),
        },
      ],
    });
  }

  if (page === 'sites') {
    injectJsonLd({
      '@context': 'https://schema.org',
      '@graph': [
        businessEntity(),
        breadcrumb([
          { name: 'Início', url: dominio + '/' },
          { name: 'Sites e lojas online', url: dominio + '/sites/' },
        ]),
        {
          '@type': 'Service',
          name: 'Criação de sites e lojas online',
          provider: { '@id': dominio + '/#business' },
          areaServed: seo.local.cidade + ', RS',
          description: seo.paginas.sites.description,
          offers: HubConfig.pacotesWeb.map(function (pkg) {
            return {
              '@type': 'Offer',
              name: pkg.nome,
              priceCurrency: 'BRL',
              description: pkg.preco + ' — ' + pkg.publico,
            };
          }),
        },
      ],
    });
  }

  if (page === 'drone') {
    injectJsonLd({
      '@context': 'https://schema.org',
      '@graph': [
        businessEntity(),
        breadcrumb([
          { name: 'Início', url: dominio + '/' },
          { name: 'Imagens aéreas com drone', url: dominio + '/drone/' },
        ]),
        {
          '@type': 'Service',
          name: 'Captação aérea com drone',
          provider: { '@id': dominio + '/#business' },
          areaServed: seo.local.cidade + ', RS',
          description: seo.paginas.drone.description,
          offers: {
            '@type': 'Offer',
            name: HubConfig.pacoteDrone.nome,
            priceCurrency: 'BRL',
            description: HubConfig.pacoteDrone.publico,
          },
        },
      ],
    });
  }

  if (page === 'sobre') {
    injectJsonLd({
      '@context': 'https://schema.org',
      '@graph': [
        breadcrumb([
          { name: 'Início', url: dominio + '/' },
          { name: 'Sobre', url: dominio + '/sobre/' },
        ]),
        {
          '@type': 'Person',
          name: HubConfig.nomeCompleto,
          alternateName: HubConfig.nome,
          url: dominio + '/sobre/',
          jobTitle: 'Desenvolvedor web e operador de drone',
          worksFor: { '@id': dominio + '/#business' },
          email: HubConfig.email,
          telephone: '+55-51-99121-3724',
          address: {
            '@type': 'PostalAddress',
            addressLocality: seo.local.cidade,
            addressRegion: seo.local.uf,
            addressCountry: 'BR',
          },
          sameAs: seo.sameAs,
        },
        businessEntity(),
      ],
    });
  }

  var faqRoot = document.getElementById('faq-root');
  if (faqRoot && seo.faq.length) {
    faqRoot.innerHTML = seo.faq.map(function (item, i) {
      return (
        '<details class="faq-item" data-reveal data-reveal-delay="' + ((i % 3) + 1) + '">' +
          '<summary class="faq-item__question">' + item.pergunta + '</summary>' +
          '<p class="faq-item__answer">' + item.resposta + '</p>' +
        '</details>'
      );
    }).join('');
  }
})();
