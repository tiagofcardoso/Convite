// ============================================================
// LISTA DE PRESENTES OFICIAL WEPINK - GIOVANA 15 ANOS
// Catálogo completo integrado com links diretos para a WePink
// Padrão Repository com Bloqueio Exclusivo em Tempo Real
// Estética: Rosa Marmorizado, Ouro Rosé & Elegância Clássica
// ============================================================

(function() {
  // Ícones Vetoriais SVG Delicados em Linha Ouro Rosé
  const SVG_ICONS = {
    maquiagem: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m14 10-5.5 5.5a2.12 2.12 0 1 1-3-3L11 7"/><path d="M12 5l7 7"/><path d="m18 13-1.5-1.5"/><circle cx="17.5" cy="6.5" r="2.5"/></svg>`,
    perfume: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="8" width="14" height="13" rx="3"/><path d="M9 4h6v4H9z"/><path d="M12 2v2"/><circle cx="12" cy="14" r="2.5"/></svg>`,
    beleza: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z"/></svg>`,
    espelho: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="9" rx="7" ry="8"/><path d="M12 17v5"/><path d="M8 22h8"/></svg>`,
    presente: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>`,
    externalLink: `<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`,
    lock: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
    sparkle: `<svg class="btn-sparkle-svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z"/></svg>`
  };

  // Catálogo oficial completo WePink
  const LISTA_PRESENTES_PADRAO = [
  {
    "id": "wp_2000052687",
    "nome": "Body Splash Absolute Titanium Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-splash-absolute-titanium-200-ml---wepink-559/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165093/04.png?v=639211834567370000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_62804",
    "nome": "Body Splash Auretx Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-splash-auretx-200ml---wepink-317/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/161083/04.jpg?v=638895053069600000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052593",
    "nome": "Body Splash Authentic Azure Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-splash-authentic-azure-200ml--wepink-519/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164656/01--4-.webp?v=639161048048970000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2160",
    "nome": "Body Splash Bourbon Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-bourbon-200-ml---wepink-bsbonath-001/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164714/04.webp?v=639156592583100000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_62962",
    "nome": "Body Splash Bourbon Silver Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-bourbon-silver-200ml---wepink-332/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/161218/04.jpg?v=638911139732570000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052654",
    "nome": "Body Splash Brave Element Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-splash-brave-element-200ml---wepink-544/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165067/01--12-.png?v=639207440137600000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052568",
    "nome": "Body Splash Cassera Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-splash-cassera-desodorante-colonia-200ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164925/01.webp?v=639177328801500000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052396",
    "nome": "Body Splash Castillo Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-splash-castilho-200ml---wepink-459/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164644/04.webp?v=639155658568170000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_1717",
    "nome": "Body Splash Celebrate Life Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-celebrate-life-desodorante-colonia-200ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164494/04.webp?v=639147100784870000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_62732",
    "nome": "Body Splash Celebrate Relics Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-splash-celebrate-relics-200ml---wepink-307/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/160900/01.jpg?v=638870516670070000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_62974",
    "nome": "Body Splash Crave Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/-body-splash-crave200ml-wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/161247/04.jpg?v=638913977652100000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052362",
    "nome": "Body Splash Crave Lovely\u00c2 Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-splash--crave-lovely200ml---wepink---454/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164232/04.webp?v=639107748523870000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052191",
    "nome": "Body Splash Crimson Seraph Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-crimson-seraph-200ml---wepink-414/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163448/04.webp?v=639014223185630000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2293",
    "nome": "Body Splash Divine Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-splash-divine-200ml---wepink-185/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162241/159365-1200-auto.webp?v=638985729736770000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052404",
    "nome": "Body Splash Elowen Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-splash-elowen-200ml---wepink-462/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164851/01.webp?v=639165178829530000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052192",
    "nome": "Body Splash Ember Divinus Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-splash-ember-divinus-200ml---wepink--413/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163453/04--2-.webp?v=639014225915130000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052542",
    "nome": "Body Splash Eternal Cherish Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-splash-eternal-cherish-desodorante-colonia-200ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164643/Prancheta-2.png?v=639155645480500000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052564",
    "nome": "Body Splash Ever\u00c2 Strong\u00c2 Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/desodorante-body-splasheverstrong200-ml-508/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164908/01.webp?v=639177305763570000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052094",
    "nome": "Body Splash Fatal Black For Her Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-fatal-black-for-her-desodorante-colonia-200ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162730/161458-1200-auto.webp?v=638991598255530000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2251",
    "nome": "Body Splash Fatal Rouge Desodorante Col\u00f4nia 200 ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-splash-fatal-rouge-200-ml---wepink-182/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164719/04.webp?v=639156593805600000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052334",
    "nome": "Body Splash Fatal White Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-fatal-white-200ml---wepink---447/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163963/04.webp?v=639083039845970000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052298",
    "nome": "Body Splash Feive Celestial Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-feive-celestial-desodorante-colonia-200ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163712/04.webp?v=639066051453470000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052102",
    "nome": "Body Splash Feive Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-feive-desodorante-colonia-200ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163091/04.png?v=638996736779300000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052301",
    "nome": "Body Splash Flora Whisper Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-flora-whisper-200ml---wepink-437/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163717/04.webp?v=639066052788400000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052146",
    "nome": "Body Splash Ghadan Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-splash-ghadan-200ml---wepink-404/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162352/161727-1200-auto.webp?v=638986093608230000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052661",
    "nome": "Body Splash Ghadan Light Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-splash-gadhan-light200ml---wepink-538/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165471/04--1-.webp?v=639247444354270000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_42318",
    "nome": "Body Splash Happy New Year Desodorante Col\u00f4nia 200ml \u00e2\u0080\u0093 Wepink",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-happy-new-year-200ml--wepink-245/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162956/159460-1200-auto.webp?v=638991786719070000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052148",
    "nome": "Body Splash Haylas Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-haylas-200ml---wepink-401/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163534/04.png?v=639038101580230000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052112",
    "nome": "Body Splash Heaven Blue Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-heaven-blue-desodorante-colonia-200ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164556/04.webp?v=639149779521570000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_62735",
    "nome": "Body Splash Heaven Bride Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-heaven-bride-desodorante-colonia-200ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/160950/04.jpg?v=638881880113270000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2129",
    "nome": "Body Splash Heaven Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-splash-heaven-desodorante-colonia-200ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164734/04.jpg?v=639156596995970000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_62739",
    "nome": "Body Splash Heaven Groom\u00c2 Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-splash-heaven-groom200ml---wepink-314/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162120/160955-1200-auto.webp?v=638984740784230000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052756",
    "nome": "Body Splash Heaven Pink\u00c2 Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-splash-heaven-pink200ml---wepink-569/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165485/04.webp?v=639251802612100000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052401",
    "nome": "Body Splash Heaven Santal & Fig Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-splash-heaven-santal---fig-desodorante-colonia-200ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164247/04.webp?v=639108158091630000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_42765",
    "nome": "Body Splash Infinity Cosmik Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-splash-infinity-cosmik-200ml--wepink-285/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/160370/01.jpg.jpg?v=638792892387300000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_20703",
    "nome": "Body Splash Infinity Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-infinity-desodorante-colonia-200ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164758/04.webp?v=639156617263000000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_1838",
    "nome": "Body Splash Infinity Plim Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-infinity-plimm-desodorante-colonia-200ml-wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162932/159372-1200-auto.webp?v=638991768149400000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052198",
    "nome": "Body Splash Infinity Tawny Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-infinity-tawny-200ml---wepink-416/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163480/04.webp?v=639016656004200000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_62930",
    "nome": "Body Splash Infinity Xis\u00c2 Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-splash-infinity-xis200ml---wepink-323/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/161213/04.jpg?v=638911135628230000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_62803",
    "nome": "Body Splash King Blue Deep Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-king-blue-deep-200ml/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162130/160880-1200-auto.webp?v=638984741188170000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_725",
    "nome": "Body Splash King Blue Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-king-blue-wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164783/04.webp?v=639156719189870000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052664",
    "nome": "Body Splash King Blue Supreme Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-blue-supreme-200ml---wepink-534/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165088/04.webp?v=639211832610200000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052455",
    "nome": "Body Splash Latina Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash--latina--200ml---wepink-470/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164336/04.webp?v=639129719763970000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052356",
    "nome": "Body Splash Lauv Green Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-lauv-green200ml---wepink-456/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164203/04.webp?v=639103877466330000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_669322963",
    "nome": "Body Splash Lavanda Calm Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-splash-lavanda-calm--200-ml---wepink-214/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163338/Prancheta-1--1-.webp?v=639136974067570000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_42327",
    "nome": "Body Splash Lavanda Peace Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-splash-lavanda-peace-200ml---wepink-242/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/159516/body-splash-lavanda-peace.png?v=638714153470000000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_42326",
    "nome": "Body Splash Lavanda Relax Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-splash-lavanda-relax-200ml---wepink-243/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162889/159514-1200-auto.webp?v=638991746657800000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_41926",
    "nome": "Body Splash Lavanda Serene Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-lavanda-serene-200-ml---wepink-215/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163041/Body-Splash-Lavanda-Serene-Desodorante-Colonia-200ml---Wepink_1.webp?v=638998507399030000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_41924",
    "nome": "Body Splash Lavanda Sleep Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/-body-splash-lavanda-sleep-200-ml---wepink-213/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163368/Prancheta1-removebg-preview.png?v=639005429327730000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_1065",
    "nome": "Body Splash Libert\u00e9\u00c3\u00a9 Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-liberte-desodorante-colonia-200ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/160993/04.jpg?v=638883575351130000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052232",
    "nome": "Body Splash Libert\u00e9\u00c3\u00a9 Dor\u00c3\u00a9 Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-liberte-dore-200-ml---wepink-421/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163470/04.webp?v=639016654477100000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_62738",
    "nome": "Body Splash Libert\u00e9\u00c3\u00a9 Exclusif Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-liberte-exclusif-desodorante-colonia-200ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/160998/04.png?v=638883576041570000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_1840",
    "nome": "Body Splash Libert\u00e9\u00c3\u00a9 Nuit Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-splash-liberte-nuit-desodorante-colonia-200ml-wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/161003/04.jpg?v=638883576931470000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052233",
    "nome": "Body Splash Libert\u00e9\u00c3\u00a9 Platin\u00c3\u00a9 Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-splash-liberte-platine-200-ml---wepink-422/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163475/04.webp?v=639016655268330000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_42677",
    "nome": "Body Splash Lion Blanc Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-lion-blanc-200-ml---wepink-260/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164792/04.webp?v=639156722963330000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_1718",
    "nome": "Body Splash Lion Noir Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-lion-noir-200-ml-wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162160/159406-1200-auto.webp?v=638984759075930000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052579",
    "nome": "Body Splash Macchiato Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-macchiato-200ml---wepink-516/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164661/01--2-.webp?v=639263616132900000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052565",
    "nome": "Body Splash Mallorie Luxury Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-splash-mallorie-luxury-200ml---wepink-509/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164651/01--3-.webp?v=639194235951600000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052145",
    "nome": "Body Splash Martin Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-martin-200ml/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162115/161732-1200-auto.webp?v=638984740461800000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_42319",
    "nome": "Body Splash Merry Christmas Desodorante Col\u00f4nia 200ml \u00e2\u0080\u0093 Wepink",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-merry-christmas-200ml--wepink-246/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162821/159480-1200-auto.webp?v=638991708615700000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2158",
    "nome": "Body Splash My Trip Three Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-my-trip-three-200ml---wepink-bsmtte-ath-001/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162984/Body-Splash-My-Trip-Three-Desodorante-Colonia-200ml---Wepink_1.webp?v=639143764313170000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052360",
    "nome": "Body Splash My We Belle\u00c2 Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-my-we-belle200ml---wepink-457/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164113/04.webp?v=639090125143870000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2233",
    "nome": "Body Splash Obsessed Deluxe Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/desod-body-splash-obsessed-deluxe-200-ml---wepink-105/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162339/161013-1200-auto.webp?v=638986082590870000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_21074",
    "nome": "Body Splash Obsessed Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-obsessed-desodorante-colonia-200ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162800/161008-1200-auto--2-.webp?v=638991694649770000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_62736",
    "nome": "Body Splash Obsessed Exclusive Pink\u00c2 Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-obsessed-exclusif-pink200ml-wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162784/161233-1200-auto.webp?v=638991643721800000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_1719",
    "nome": "Body Splash Obsessed Gold Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-splash-obsessed-gold-200-ml-wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162328/160983-1200-auto.webp?v=638986077374730000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_83201",
    "nome": "Body Splash Obsessed Intense Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-obsessed-intense-desodorante-colonia-200ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162735/161463-1200-auto.webp?v=638991604125300000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052177",
    "nome": "Body Splash Obsessed Lovely Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-splash-obsessed-lovely-desodorante-colonia-200ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164449/04.webp?v=639147064236870000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_20702",
    "nome": "Body Splash One Touch Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-one-touch/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/160988/04.jpg?v=638883574146700000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052178",
    "nome": "Body Splash One Touch Latte Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-one-touch-latte-200ml---wepink-410/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163723/04.webp?v=639066620548800000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_42728",
    "nome": "Body Splash One Touch Silk Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-one-touch-silk-200ml---wepink-281/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/160658/01.jpg.jpg?v=638834452604300000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_125550374",
    "nome": "Body Splash One Touch Warm Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-splash-one-touch-warm-desodorante-colonia-200ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164743/04.png?v=639156599861070000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052657",
    "nome": "Body Splash Perfect Pear & Peach Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-splash-perfect-peach-200ml---wepink-542/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165103/01.png?v=639211847318130000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2098",
    "nome": "Body Splash Perfect Pear Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-splash-perfect-pear-200-ml-wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164753/04.webp?v=639156615572330000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_62731",
    "nome": "Body Splash Pure Pear Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-pure-pear-200ml---wepink-306/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/161717/04.jpg?v=638977637105400000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_1321",
    "nome": "Body Splash Pureblixx Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-splash-pureblixx-wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/160341/01.jpg.jpg?v=638792860917300000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_1850",
    "nome": "Body Splash Pureblixx Mauve Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-pureblixx-mauve-desodorante-colonia-200ml-wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/160285/01.jpg.jpg?v=638787659349270000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_735",
    "nome": "Body Splash Red Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-red/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164690/04.webp?v=639156582994900000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_62976",
    "nome": "Body Splash Ruby Ametist\u00c2 Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-ruby-ametist200ml---wepink-339/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162675/04.webp?v=638989761298730000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_42307",
    "nome": "Body Splash Ruby Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-ruby-we-pink-200-ml-239/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162831/159448-1200-auto.webp?v=638991713815070000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052297",
    "nome": "Body Splash Ruby Rhodolite Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-ruby-rhodolite-desodorante-colonia-200ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163733/04.png?v=639066869796100000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_62928",
    "nome": "Body Splash Scarlette Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-splash-scarlette200ml---wepink-321/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/161078/04.jpg?v=638895049727570000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052670",
    "nome": "Body Splash Scarlette Radiance Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-splash-scarlette-radiance-200-ml---wepink-536/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165098/04.png?v=639211846520600000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052540",
    "nome": "Body Splash Tyrie Royale Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-splash-tyrie-royale-200ml---wepink-496/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164479/04.webp?v=639147084270630000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052453",
    "nome": "Body Splash VF 2.7 Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash--vf-27-200ml---wepink-474/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164289/04.webp?v=639116871875200000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052764",
    "nome": "Body Splash VF 5th Anniversary\u00c2 Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-splash-vf-5th-anniversary200ml---wepink-582/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165632/04--3-.webp?v=639255863177270000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_21075",
    "nome": "Body Splash VF Aqua Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-splash-vf-aqua/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164748/04.webp?v=639156614325800000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_1837",
    "nome": "Body Splash VF Bloom Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-vf-bloom-desodorante-colonia-200ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164709/04.webp?v=639156591339570000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052345",
    "nome": "Body Splash VF Choices Delight Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-vf-choices-delight--200-ml---wepink-449/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164484/04.webp?v=639147088470400000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_1786",
    "nome": "Body Splash VF Choices Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-vf-choices-200ml-wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164700/04.webp?v=639156586892200000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_345",
    "nome": "Body Splash VF Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-splash-vf-desodorante-colonia-200ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164704/04.webp?v=639156590433930000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_42605",
    "nome": "Body Splash VF Golden Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-vf-golden-desodorante-colonia-200ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164489/04.webp?v=639147093283200000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_62929",
    "nome": "Body Splash VF Onyx Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-splash-vf-onix200ml-wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162753/161330-1200-auto.webp?v=638991627040270000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052638",
    "nome": "Body Splash VF Tropical Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-splash-vf-tropical-200ml---wepink-527/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164994/01--2-.png?v=639194234228430000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052577",
    "nome": "Body Splash Vallora Spell Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-splash-vallora-spell-200ml---wepink-512/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164670/01.jpg?v=639156470851170000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2068",
    "nome": "Body Splash Vanilla Cuddle Desodorante Col\u00f4nia 200ml \u00e2\u0080\u0093 Wepink",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-vanilla-cuddle-200ml-wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164724/com-caixa.png?v=639240409751070000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2273",
    "nome": "Body Splash Vanilla Dream Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-vanilla-dream-200-ml---wepink-189/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164739/com-caixa.webp?v=639186735392970000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2272",
    "nome": "Body Splash Vanilla Hope Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-vanilla-hope-desodorante-colonia-200ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164763/04.webp?v=639156708871200000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2085",
    "nome": "Body Splash Vanilla Hug Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-vanilla-hug-desodorante-colonia-200ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164768/04.webp?v=639156710686130000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2069",
    "nome": "Body Splash Vanilla Soft Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-splash-vanilla-soft-200ml-wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164778/04.webp?v=639156717042430000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2086",
    "nome": "Body Splash Vanilla Wish Desodorante Col\u00f4nia 200 ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-splash-vanilla-wish-200-ml-wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164773/04.webp?v=639156714392700000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052566",
    "nome": "Body Splash Velours Pourpre Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash--velours-pourpre-200ml---wepink-505/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165108/01.png?v=639211872060600000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052581",
    "nome": "Body Splash Venice Breeze Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-splash-venice-breeze-desodorante-colonia-200ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164675/04.webp?v=639156471385870000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052456",
    "nome": "Body Splash Verano Di Capri Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-splash--verano-di-capri--200ml---wepink-472/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164341/04.png?v=639129722069430000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052358",
    "nome": "Body Splash Wonbloom Charm Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-wonbloom-charm-desodorante-colonia-200ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164134/04.webp?v=639092587563370000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_62975",
    "nome": "Body Splash Wonbloom\u00c2 Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-wonbloom200ml-wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162779/161325-1200-auto.webp?v=638991642188630000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2014",
    "nome": "Body Splash Wonderful Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-wonderful-desodorante-colonia-200ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164695/04.webp?v=639156584816230000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_83202",
    "nome": "Body Splash Yahya Sadeeq Desodorante Col\u00f4nia 200ml",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 33,90 (De: R$ 115,00)",
    "preco": 33.9,
    "link": "https://www.wepink.com.br/body-splash-yahya-200ml---wepink-373/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162140/161453-1200-auto--1-.webp?v=638991600976100000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052672",
    "nome": "Kit Body Splash Aurale",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 337,00",
    "preco": 337.0,
    "link": "https://www.wepink.com.br/kit-body-splash-aurale---wepink-546/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165246/Prancheta-1.webp?v=639223867570170000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052253",
    "nome": "Kit Holiday Duo Celebration",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 199,90",
    "preco": 199.9,
    "link": "https://www.wepink.com.br/kit--holiday-duo-celebration---wepink-429/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163428/Prancheta-1-2.webp?v=639011459556300000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052110",
    "nome": "Kit Sweet Luxury Edi\u00c3\u00a7\u00c3\u00a3o Limitada \u00e2\u0080\u0093 Wepink",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 337,00",
    "preco": 337.0,
    "link": "https://www.wepink.com.br/kit-body-splash-sweet-luxury---wepink-394/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165426/Caixa.webp?v=639239650269500000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_62973",
    "nome": "Kit Zodiac Signs Edi\u00c3\u00a7\u00c3\u00a3o Limitada \u00e2\u0080\u0093 Wepink",
    "categoria": "Body Splash",
    "tipoIcone": "perfume",
    "sugestao": "R$ 103,90 (De: R$ 337,00)",
    "preco": 103.9,
    "link": "https://www.wepink.com.br/kit-zodiac-sings---wepink-344/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162764/161382-1200-auto.webp?v=638991632904670000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052686",
    "nome": "Absolute Titanium Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 329,00",
    "preco": 329.0,
    "link": "https://www.wepink.com.br/absolute-titanium-desodorante-colonia-100ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165063/Prancheta-3.webp?v=639216972158830000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_62802",
    "nome": "Auretx Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 329,00",
    "preco": 329.0,
    "link": "https://www.wepink.com.br/desod-col-auretx-100-ml---wepink-320/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/160911/Prancheta-2.jpg?v=638872645676500000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052592",
    "nome": "Authentic Azure Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/desod-col-authentic-azure-100ml---wepink-518/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164858/1.png?v=639166197181700000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2164",
    "nome": "Bourbon Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/desod-col-we-pink-bourbon-100-ml---wepink-dccbon-ath-001/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/160280/bourbon-caixa.jpg.jpg?v=638823070779900000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_62961",
    "nome": "Bourbon Silver Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/desod-col-bourbon-silver-100-ml---wepink-330/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/161946/161060-1200-auto.webp?v=638980733587070000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052655",
    "nome": "Brave Element Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/brave-element-desodorante-colonia-100ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165035/Prancheta-1--1-.webp?v=639201400509330000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052563",
    "nome": "Cassera Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/desod-col-cassera-100ml---wepink-500/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164898/01.webp?v=639173868107900000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052402",
    "nome": "Castillo Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/desod-col-castilho-100-ml---wepink-458/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164539/Prancheta-3--1-.png?v=639149700125970000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2132",
    "nome": "Celebrate Happy Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/desod-col-celebrate-happy-100-ml---wepink-00000000000023386/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162254/159772-1200-auto.webp?v=638985784284730000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_1537",
    "nome": "Celebrate Life Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/celebrate-life-desodorante-colonia-100ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/161747/159932-1600-auto.webp?v=638980612896900000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_62755",
    "nome": "Celebrate Relics Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 329,00",
    "preco": 329.0,
    "link": "https://www.wepink.com.br/desod-col-celebrate-relics-100-ml---wepink-310/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162680/Celebrate-Relics-Desodorante-Colonia-100ml_1.webp?v=638997790759070000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052113",
    "nome": "Celebrate Sunset Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/desod-col-celebrate-sunset-100ml---wepink-398/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/161760/161514-1200-auto.webp?v=638980628975100000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_62977",
    "nome": "Crave Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 329,00",
    "preco": 329.0,
    "link": "https://www.wepink.com.br/desod-col-crave-100ml---wepink-331/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162475/Crave-Desodorante-Colonia-100ml---Wepink_1.webp?v=638986863383700000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052361",
    "nome": "Crave Lovely Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 329,00",
    "preco": 329.0,
    "link": "https://www.wepink.com.br/desod-col-crave--lovely-100ml---wepink-450/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164237/Prancheta-3--2-.webp?v=639107769327530000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052189",
    "nome": "Crimson Seraph Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/desod-col-crimson-seraph-100ml---wepink-412/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163376/Prancheta-3.webp?v=639006199068230000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052807",
    "nome": "C\u00c3\u00a8dre Raffi Desodorante Col\u00f4nia 75ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/desod-col-cedre-raffi-75-ml---wepink-593/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165661/Prancheta-1--9-.webp?v=639263739952230000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_41718",
    "nome": "Divine Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 329,00",
    "preco": 329.0,
    "link": "https://www.wepink.com.br/desod-col-divine-100-ml---wepink-186/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164519/01.webp?v=639147118896470000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052403",
    "nome": "Elowen Desodorante Col\u00f4nia 75ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/desod-col-elowen-100ml---wepink-461/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164348/Prancheta-3.webp?v=639130797541900000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052190",
    "nome": "Ember Divinus Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/desod-col-ember-divinus-100ml---wepink--411/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163381/Prancheta-3--1-.webp?v=639006198723330000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052543",
    "nome": "Eternal Cherish Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/eternal-cherish-desodorante-colonia-100ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164417/WhatsApp-Image-2026-05-16-at-07.51.21--1-.webp?v=639145263281200000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052560",
    "nome": "Ever Strong Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 329,00",
    "preco": 329.0,
    "link": "https://www.wepink.com.br/desod-col-ever-strong-100ml---wepink-502/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164596/01.png?v=639153105742630000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_62978",
    "nome": "Fantasy Kids Blue Dragon Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/desod-col-fantasy-kids-blue-dragon-100ml---wepink-334/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163858/03.webp?v=639077121771730000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052397",
    "nome": "Fantasy Kids Dream Land Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/desod-col-fantasy-kids-dream-land-100ml---wepink-460/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164357/Prancheta-3.webp?v=639133159256630000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_62979",
    "nome": "Fantasy Kids Pink Castle Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/desod-col-fantasy-kids-pink-castle-100ml---wepink-335/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163846/161303-1200-auto.webp?v=639077119013200000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052229",
    "nome": "Fantasy Kids White Sorcerer Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/desod-col-fantasy-kids-white-sorcerer-100ml---wepink-424/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163527/3.webp?v=639034822270530000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_83302",
    "nome": "Fatal Black For Her Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 329,00",
    "preco": 329.0,
    "link": "https://www.wepink.com.br/fatal-black-for-her-desodorante-colonia-100ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163864/Fatal-Black-For-Her-Desodorante-Colonia-100ml_1.webp?v=639077122152670000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2250",
    "nome": "Fatal Rouge Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/desod-col-we-pink-fatal-rouge-100-ml---wepink-181/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163194/1.webp?v=638997645544430000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052333",
    "nome": "Fatal White Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/desod-col-fatal-white-100-ml---wepink-446/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164060/Prancheta-3.webp?v=639094427958800000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052299",
    "nome": "Feive Celestial Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/desod-col-feive-celestial-100ml---wepink-441/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163701/Feive-Celestial-3.webp?v=639064022762200000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052101",
    "nome": "Feive Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/desod-col-feive-100ml---wepink-388/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163838/feive-3.png?v=639097763504500000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052302",
    "nome": "Flora Whisper Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/desod-col-flora-whispser-100ml---wepink-438/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163631/Floral-Whisper-3.png?v=639058940919530000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052131",
    "nome": "Ghadan Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/desod-col-ghadan-100ml---wepink-402/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164869/Prancheta-3--2-.png?v=639181622427100000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052662",
    "nome": "Ghadan Light Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 329,00",
    "preco": 329.0,
    "link": "https://www.wepink.com.br/ghadan-light-desodorante-colonia-100ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165256/1--4-.png?v=639228184889400000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_42675",
    "nome": "Happy New Year Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 329,00",
    "preco": 329.0,
    "link": "https://www.wepink.com.br/desod-col-happy-new-year-100-ml---wepink-305/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/160694/happy-new-year-1.jpg?v=638842882220500000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052147",
    "nome": "Haylas Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 329,00",
    "preco": 329.0,
    "link": "https://www.wepink.com.br/haylas-desodorante-colonia-wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163257/Haylass-3.webp?v=638997664757400000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052114",
    "nome": "Heaven Blue Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/heaven-blue-desodorante-colonia-100ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164561/Heaven-Blue-3.webp?v=639155042980070000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_42673",
    "nome": "Heaven Bride Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/desod-col-heven-bride-100-ml---wepink-303/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/160757/heaven-bride-1.jpg?v=638851191946130000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2128",
    "nome": "Heaven Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/heaven-desodorante-colonia-100ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/160239/heaven-3.jpg.jpg?v=638780622214630000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_42674",
    "nome": "Heaven Groom Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 329,00",
    "preco": 329.0,
    "link": "https://www.wepink.com.br/desod-col-heaven-groom-100-ml---wepink-302/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/160752/heaven-groom-1.jpg?v=638856691789030000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052757",
    "nome": "Heaven Pink Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 329,00",
    "preco": 329.0,
    "link": "https://www.wepink.com.br/heaven-pink-desodorante-colonia-100ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165410/Prancheta-1.webp?v=639238046830730000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052400",
    "nome": "Heaven Santal & Fig Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/desod-col-heaven-santal-e-fig-100-ml---wepink-463/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164186/Prancheta-3--1-.png?v=639099690825970000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_42764",
    "nome": "Infinity Cosmik Desodorante Col\u00f4nia 75ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 329,00",
    "preco": 329.0,
    "link": "https://www.wepink.com.br/desod-col-infinity-cosmik-75ml---wepink-284/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163852/INFINITY-COSMIK-3.jpg?v=639144635102700000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_20683",
    "nome": "Infinity Desodorante Col\u00f4nia 75ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/perfume-infinity/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163262/Infinity-1.webp?v=639144649892170000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_1730",
    "nome": "Infinity Plim Desodorante Col\u00f4nia 75ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 329,00",
    "preco": 329.0,
    "link": "https://www.wepink.com.br/desod-col-we-pink-infinity-plim-75-ml---wepink-dcfb--ath-001/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162344/160512-1200-auto.webp?v=638986086683400000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052199",
    "nome": "Infinity Tawny Desodorante Col\u00f4nia 75ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 329,00",
    "preco": 329.0,
    "link": "https://www.wepink.com.br/infinity-tawny-desodorante-colonia-75ml-wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163252/Tawny-3.webp?v=638997664379070000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_62925",
    "nome": "Infinity Xis Desodorante Col\u00f4nia 75ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/desod-col-infinity-xis-75ml---wepink-325/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/161775/161065-1200-auto.webp?v=638980648532170000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_62740",
    "nome": "King Blue Deep Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 329,00",
    "preco": 329.0,
    "link": "https://www.wepink.com.br/desod-col-king-blue-deep--100-ml---wepink-308/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/160735/003--1-.jpg?v=638842873181600000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_20850",
    "nome": "King Blue Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/perfume-king-blue/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165082/01.webp?v=639210358511900000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052665",
    "nome": "King Blue Supreme Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/king-blue-supreme-desodorante-colonia-100ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165077/kb2.png?v=639208346771470000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052454",
    "nome": "Latina Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/desod-col--latina-100-ml---wepink-469/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164217/3--1-.webp?v=639107449263070000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052355",
    "nome": "Lauv Green Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/desod-col-lauv-green-100-ml---wepink-452/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164176/Prancheta-3.png?v=639110239394130000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_771",
    "nome": "Libert\u00e9\u00c3\u00a9 Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/liberte-desodorante-colonia-100ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163957/ChatGPT-Image-4-de-mar.-de-2026-16_31_22.png?v=639144621895630000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052230",
    "nome": "Libert\u00e9\u00c3\u00a9 Dor\u00c3\u00a9 Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/desod-col-liberte-dore-100ml---wepink-419/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164967/liberte-dore-01.png?v=639209187028470000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_42672",
    "nome": "Libert\u00e9\u00c3\u00a9 Exclusif Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 329,00",
    "preco": 329.0,
    "link": "https://www.wepink.com.br/desod-col-liberte-exclusive-100-ml---wepink-304/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163951/liberte-exclusif-1.jpg?v=639082491895630000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_1785",
    "nome": "Libert\u00e9\u00c3\u00a9 Nuit Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 329,00",
    "preco": 329.0,
    "link": "https://www.wepink.com.br/desod-col-liberte-nuit-100ml-wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/160540/liberte-nuit-1.jpg.jpg?v=638822665221800000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052231",
    "nome": "Libert\u00e9\u00c3\u00a9 Platin\u00c3\u00a9 Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 329,00",
    "preco": 329.0,
    "link": "https://www.wepink.com.br/desod-col-liberte-platine-100ml---wepink-420/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164972/3.png?v=639186924178730000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_42676",
    "nome": "Lion Blanc Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/desod-col-lion-blanc-100-ml---wepink-259/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/160627/Lion-Blanc-1.jpg.jpg?v=638836552065770000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_1408",
    "nome": "Lion Noir Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 329,00",
    "preco": 329.0,
    "link": "https://www.wepink.com.br/lion-noir-desodorante-colonia-100ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/161936/159554-1200-auto--1-.webp?v=638990003657330000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052578",
    "nome": "Macchiato Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/desod-col-macchiato-100ml---wepink-515/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165885/01-_5_.webp?v=639263656168630000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052561",
    "nome": "Mallorie Luxury Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/mallorie-luxury-desodorante-colonia-100ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164606/01.png?v=639153106564770000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052130",
    "nome": "Martin Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/desod-col-martin-100ml---wepink-403/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163310/Prancheta-3.webp?v=639099722297500000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052660",
    "nome": "Martin Magnetic Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/martin-magnetic-desodorante-colonia-100ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165231/1.webp?v=639219617845930000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_42721",
    "nome": "Merry Christmas Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/desod-col-merry-christmas-100ml---wepink-279/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/160301/Merry-Christmas-4.jpg.jpg?v=638795318000230000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_42204",
    "nome": "Moon Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/desod-col-universe-moon-100-ml-217/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162259/159354-1200-auto.webp?v=638986033644170000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052119",
    "nome": "My Kids Rawr Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/agua-de-colonia-my-kids-rawr-100-ml---wepink-386/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163464/Prancheta-3.webp?v=639015056905900000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052359",
    "nome": "My We Belle Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 329,00",
    "preco": 329.0,
    "link": "https://www.wepink.com.br/desod-col-my-we-belle-100-ml---wepink-453/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163917/Prancheta-3.png?v=639081285317900000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2232",
    "nome": "Obsessed Deluxe Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 329,00",
    "preco": 329.0,
    "link": "https://www.wepink.com.br/obsessed-deluxe-desodorante-colonia-100ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163217/Obsessed-Deluxe-4.webp?v=639011445744700000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_20849",
    "nome": "Obsessed Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/obsessed-desodorante-colonia-100ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164529/01.webp?v=639147127637600000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_62801",
    "nome": "Obsessed Exclusive Pink Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 329,00",
    "preco": 329.0,
    "link": "https://www.wepink.com.br/desod-col-obsessed-exclusif-pink-100-ml---wepink-319/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/160826/3.jpg?v=638854669115330000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_1534",
    "nome": "Obsessed Gold Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 329,00",
    "preco": 329.0,
    "link": "https://www.wepink.com.br/obsessed-gold-desodorante-colonia-100ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162323/159942-1200-auto.webp?v=638986075481900000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_63003",
    "nome": "Obsessed Intense Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 329,00",
    "preco": 329.0,
    "link": "https://www.wepink.com.br/desod-col-obsessed-intense-100ml---wepink-361/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162461/Obsessed-Intense-Desodorante-Colonia-100ml_1.webp?v=639016752706430000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052176",
    "nome": "Obsessed Lovely Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/desod-col-obsessed-lovely-100ml---wepink-407/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164006/ChatGPT-Image-11-de-mar.-de-2026-09_42_49.png?v=639094428735170000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_20616",
    "nome": "One Touch Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/desodorante-one-touch/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163222/One-Touch-3.webp?v=638998459341300000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052175",
    "nome": "One Touch Latte Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 329,00",
    "preco": 329.0,
    "link": "https://www.wepink.com.br/desod-col-one-touch-latte-100ml-wepink-408/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163540/Prancheta-3.webp?v=639038355998700000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_42727",
    "nome": "One Touch Silk Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/desod-col-one-touch-silk-100ml---wepink-280/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/160442/one-touch-silk-1.jpg.jpg?v=638814494553870000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_1732",
    "nome": "One Touch Warm Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/desod-col-we-pink-one-touch-warm-100-ml---wepink-dcotw-ath-001/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/160555/one-touch-warm-1.jpg.jpg?v=638822664906330000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052656",
    "nome": "Perfect Pear & Peach Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/desod-col-perfect-peach---wepink-541/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165072/v2peach.png?v=639208346455430000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2099",
    "nome": "Perfect Pear Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/perfect-pear-desodorante-colonia-100ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/160622/Perfect-Pear-1.jpg.jpg?v=638833002322930000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_62754",
    "nome": "Pure Pear Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/desod-col-pure-pear-100-ml---wepink-309/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163273/Prancheta-3.webp?v=639059838659730000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_41931",
    "nome": "Pureblixx Darkest Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/desod-col-pureblixx-darkest-100-ml---wepink-218/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163184/1--2-.webp?v=638998474825300000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_1064",
    "nome": "Pureblixx Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/pureblixx-desodorante-colonia-100ml-wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162318/159576-1200-auto.webp?v=638986071965870000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_21076",
    "nome": "Red Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 329,00",
    "preco": 329.0,
    "link": "https://www.wepink.com.br/perfume-colonia-red/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164958/01--4-.jpg?v=639229337006700000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_62753",
    "nome": "Red Obsidian Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/desod-col-red-obsidian-100-ml---wepink-208/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/161228/red-obsidian-4.jpg?v=638911583032800000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_62981",
    "nome": "Ruby Ametist Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 329,00",
    "preco": 329.0,
    "link": "https://www.wepink.com.br/desod-col-ruby-ametist-100ml---wepink-338/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162470/Ruby-Ametist-Desodorante-Colonia-100ml_1.webp?v=638987308488430000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_42306",
    "nome": "Ruby Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/deso-colonia-ruby-100-ml-238/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162495/Ruby-Desodorante-Colonia-100ml_1.webp?v=638991665344130000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052300",
    "nome": "Ruby Rhodolite Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/desod-col-ruby-rhodolite-100-ml---wepink-439/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163578/ruby-1.webp?v=639046788646700000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_62923",
    "nome": "Scarlette Desodorante Col\u00f4nia 50ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/desodorante-colonia-scarlette-50ml--wepink-326/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162485/Scarlette-Desodorante-Colonia-50ml_1.webp?v=639016750621770000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052663",
    "nome": "Scarlette Radiance Desodorante Col\u00f4nia 50ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 329,00",
    "preco": 329.0,
    "link": "https://www.wepink.com.br/desod-col-scarlette-radiance---wepink-535/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165009/Prancheta-2.webp?v=639198075209700000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_42346",
    "nome": "The Sunny Desodorante Col\u00f4nia 75ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/desod-col-the-sunny-75ml---wepink-226/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162277/159749-1200-auto.webp?v=638986043147570000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052541",
    "nome": "Tyrie Royale Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 329,00",
    "preco": 329.0,
    "link": "https://www.wepink.com.br/desod-col-tryrie-royale-100-ml---wepink-495/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164327/Prancheta-3.webp?v=639129915851400000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052452",
    "nome": "VF 2.7 Desodorante Col\u00f4nia 75ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 329,00",
    "preco": 329.0,
    "link": "https://www.wepink.com.br/desod-col-vf-27-75ml---wepink-473/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164252/Prancheta-3.webp?v=639109354467370000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052763",
    "nome": "VF 5th Anniversary Edition Desodorante Col\u00f4nia 75ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/desod-col-5th-anniversary--75ml---wepink-581/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165460/01--21-.webp?v=639243734848470000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_21001",
    "nome": "VF Aqua Desodorante Col\u00f4nia 75ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/perfume-vf-aqua/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164509/01.webp?v=639147106627330000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_1731",
    "nome": "VF Bloom Desodorante Col\u00f4nia 75ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/desod-col-we-pink-vf-bloom-75/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/160550/vf-bloom-1.jpg.jpg?v=638822664318700000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052346",
    "nome": "VF Choices Delight Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 329,00",
    "preco": 329.0,
    "link": "https://www.wepink.com.br/desod-col--vf-choices-delight--200-ml---wepink-448/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164322/Prancheta-3.webp?v=639140981951770000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_1532",
    "nome": "VF Choices Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 329,00",
    "preco": 329.0,
    "link": "https://www.wepink.com.br/vf-choices-desodorante-colonia-100ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162303/159387-1200-auto.webp?v=638986058266600000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_10599693",
    "nome": "VF Desodorante Col\u00f4nia 75ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/desod-colonia-vf-75-ml-svdcvf001/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163243/VF-3.webp?v=638999400653430000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_42410",
    "nome": "VF Golden Desodorante Col\u00f4nia 75ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/vf-golden-desodorante-colonia-75ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/160545/vf-golden-1.jpg.jpg?v=638822661000770000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_62924",
    "nome": "VF Onyx Desodorante Col\u00f4nia 75ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 329,00",
    "preco": 329.0,
    "link": "https://www.wepink.com.br/desod-col-vf-onyx-75ml-324/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163665/3.webp?v=639058055428130000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052613",
    "nome": "VF Tropical Desodorante Col\u00f4nia 75ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/desod-colvftropical-75-ml---wepink-526/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164837/01--2-.png?v=639161091293830000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052576",
    "nome": "Vallora Spell Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 329,00",
    "preco": 329.0,
    "link": "https://www.wepink.com.br/desod-col-vallora-spell-100ml---wepink-511/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164886/1.webp?v=639171462218670000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052562",
    "nome": "Velours Pourpre Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 329,00",
    "preco": 329.0,
    "link": "https://www.wepink.com.br/desod-col-velours-pourpre-100ml---wepink-504/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164945/01--2-.png?v=639179938150470000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052580",
    "nome": "Venice Breeze Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 329,00",
    "preco": 329.0,
    "link": "https://www.wepink.com.br/desod-col-venice-breeze---100-ml---wepink--514/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164863/1--1-.png?v=639190258997400000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052457",
    "nome": "Verano Di Capri Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 329,00",
    "preco": 329.0,
    "link": "https://www.wepink.com.br/desod-col-verano-di-capri-100-ml---wepink-471/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164222/3.webp?v=639107447204830000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052357",
    "nome": "Wonbloom Charm Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/desod-col-wonbloom-charm100ml---wepink-451/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164055/Prancheta-3--1-.webp?v=639094427272100000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_62980",
    "nome": "Wonbloom Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/desod-col-wonbloom-100ml---wepink-336/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163238/Wonbloom-5.webp?v=639046226920530000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052702",
    "nome": "Wonbloom Fever Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/desod-col--wonbloom-fever-100ml---wepink-561/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165880/01.webp?v=639263619365630000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2015",
    "nome": "Wonderful Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 329,00",
    "preco": 329.0,
    "link": "https://www.wepink.com.br/wonderful-desodorante-colonia-100ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163278/Wonderful-3.webp?v=639005409462030000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_83401",
    "nome": "Yahya Sadeeq Desodorante Col\u00f4nia 100ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 87,90 (De: R$ 329,00)",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/desod-col-yahya-100ml---wepink-362/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163931/161558-1200-auto.webp?v=639082408586670000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_41927",
    "nome": "\u00c3\u00d3\u00d3leo Essencial Lavanda Serene Oil 5ml",
    "categoria": "Perfumaria",
    "tipoIcone": "perfume",
    "sugestao": "R$ 45,90 (De: R$ 99,00)",
    "preco": 45.9,
    "link": "https://www.wepink.com.br/oleo-essencial-lavanda-5ml----wepink-211/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162016/159650-1200-auto.webp?v=638981125701870000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052547",
    "nome": "Body Butter Eternal Cherish Manteiga Corporal 250g",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 119,90",
    "preco": 119.9,
    "link": "https://www.wepink.com.br/body-butter-desodorante-eternal-cherish-250-gr---wepink-494/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165717/Prancheta 1 -1-.png?v=639257031608470000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052678",
    "nome": "Body Butter Fatal Black For Her Manteiga Corporal 250g",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 66,90 (De: R$ 119,90)",
    "preco": 66.9,
    "link": "https://www.wepink.com.br/body-butter-fatal-black-for-her-250gr---wepink-551/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165681/01.webp?v=639256817877300000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_1800",
    "nome": "Body Cream Celebrate Life Desodorante Hidratante 200ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 35,90 (De: R$ 115,00)",
    "preco": 35.9,
    "link": "https://www.wepink.com.br/body-cream-celebrate-life-200ml-wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/160052/celebrate-1.jpg.jpg?v=638886300705670000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_42335",
    "nome": "Body Cream Changes Desodorante Hidratante 200ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-cream-changes-200ml---wepink-197/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/159970/001-copy-2--3-.jpg.jpg?v=638756463786730000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2223",
    "nome": "Body Cream Choco Desodorante Hidratante 200ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 35,90 (De: R$ 115,00)",
    "preco": 35.9,
    "link": "https://www.wepink.com.br/body-cream-choco-200ml---wepink-lhcho-ath-001/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/160012/Choco-1.jpg.jpg?v=638893101404130000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052572",
    "nome": "Body Cream Fatal Black For Her Desodorante Hidratante 200ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 35,90 (De: R$ 115,00)",
    "preco": 35.9,
    "link": "https://www.wepink.com.br/body-cream-fatal-black-for-her-desodorante-hidratante-200ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164930/01.webp?v=639178179344000000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_42342",
    "nome": "Body Cream Fatal Rouge Desodorante Hidratante 200ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-cream-fatal-rouge-200ml---wepink-196/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/161866/001-copy-2.webp?v=638985672963430000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052597",
    "nome": "Body Cream Fatal White Desodorante Hidratante 200ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 35,90 (De: R$ 115,00)",
    "preco": 35.9,
    "link": "https://www.wepink.com.br/body-cream-fatal-white-200ml---wepink-523/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165048/01.png?v=639204257561670000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052546",
    "nome": "Body Cream Feive Celestial Desodorante Hidratante 200ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-cream-locao-hid-desod-feive-celestial-200-ml---wepink-497/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164936/01.webp?v=639178180929500000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052409",
    "nome": "Body Cream Feive Desodorante Hidratante 200ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 35,90 (De: R$ 115,00)",
    "preco": 35.9,
    "link": "https://www.wepink.com.br/body-cream-feive-200ml---wepink-465/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164181/Prancheta-3.webp?v=639099601578900000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052250",
    "nome": "Body Cream Ghadan Desodorante Hidratante 200ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-cream-ghadan-200ml---wepink-427/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163596/3.webp?v=639042445649770000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052249",
    "nome": "Body Cream Heaven Blue Desodorante Hidratante 200ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 35,90 (De: R$ 115,00)",
    "preco": 35.9,
    "link": "https://www.wepink.com.br/body-cream-heaven-blue-200ml---wepink-428/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163590/3--1-.webp?v=639042445048870000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052116",
    "nome": "Body Cream Heaven Bride Desodorante Hidratante 200ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 35,90 (De: R$ 115,00)",
    "preco": 35.9,
    "link": "https://www.wepink.com.br/body-cream-heaven-bride-200ml---wepink-384/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162059/161590-1200-auto.webp?v=638983970009830000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_42338",
    "nome": "Body Cream Heaven Desodorante Hidratante 200ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 35,90 (De: R$ 107,90)",
    "preco": 35.9,
    "link": "https://www.wepink.com.br/body-cream-heaven-200-ml---wepink-198/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165639/Prancheta-1.webp?v=639255935018300000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052595",
    "nome": "Body Cream Heaven Santal & Fig Desodorante Hidratante 200ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-cream-santal-e-fig-200ml---wepink-521/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165025/1--1-.webp?v=639223979827470000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_20803",
    "nome": "Body Cream Infinity Desodorante Hidratante 200ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 35,90 (De: R$ 115,00)",
    "preco": 35.9,
    "link": "https://www.wepink.com.br/body-cream-infinity/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/161919/159533-1200-auto.webp?v=638980723873930000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052758",
    "nome": "Body Cream Infinity Tawny Desodorante Hidratante 200ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 35,90 (De: R$ 115,00)",
    "preco": 35.9,
    "link": "https://www.wepink.com.br/body-cream-infinity-tawny-200ml---wepink-580/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165654/Prancheta-1--8-.webp?v=639257551299530000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052251",
    "nome": "Body Cream Infinity Xis Desodorante Hidratante 200ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 35,90 (De: R$ 115,00)",
    "preco": 35.9,
    "link": "https://www.wepink.com.br/body-cream-infinity-x-200ml-wepink-426/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163602/3--2-.webp?v=639042446265130000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_261223842",
    "nome": "Body Cream Libert\u00e9\u00c3\u00a9 Desodorante Hidratante 200ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 35,90 (De: R$ 115,00)",
    "preco": 35.9,
    "link": "https://www.wepink.com.br/body-cream-liberte-200ml-wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/161871/159532-1200-auto.webp?v=638980704723530000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052109",
    "nome": "Body Cream Libert\u00e9\u00c3\u00a9 Exclusif Desodorante Hidratante 200ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-cream-liberte-exclusif-200ml---wepink-382/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/161838/BC-Liberte-Exclusif-3.webp?v=638985666659400000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052596",
    "nome": "Body Cream My We Belle Desodorante Hidratante 200ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-cream-my-we-belle-200ml---wepink-522/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165042/01--6-.webp?v=639204018317500000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_1204",
    "nome": "Body Cream Obsessed Desodorante Hidratante 200ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 35,90 (De: R$ 115,00)",
    "preco": 35.9,
    "link": "https://www.wepink.com.br/body-cream-obsessed-desodorante-hidratante-200ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165706/obsessed-1.jpg.jpg?v=639256820944670000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_1866",
    "nome": "Body Cream Obsessed Gold Desodorante Hidratante 200ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 35,90 (De: R$ 115,00)",
    "preco": 35.9,
    "link": "https://www.wepink.com.br/body-cream-obsessed-gold-200ml-wepinkk/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/160027/gold-1.jpg.jpg?v=638918959857200000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052545",
    "nome": "Body Cream Obsessed Lovely Desodorante Hidratante 200ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-cream-obsessed-lovely-desodorante-hidratante-200ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165696/01--1-.png?v=639256820405800000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_20802",
    "nome": "Body Cream One Touch Desodorante Hidratante 200ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 35,90 (De: R$ 115,00)",
    "preco": 35.9,
    "link": "https://www.wepink.com.br/body-cream-one-touch/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/161903/159534-1200-auto.webp?v=638980720501330000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052544",
    "nome": "Body Cream One Touch Latte Desodorante Hidratante 200ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-cream-locao-hid-desod-one-touch-latte-200-ml---wepink-499/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164935/bc-one-touch-latte1.png?v=639207691162130000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052117",
    "nome": "Body Cream One Touch Silk Desodorante Hidratante 200ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 35,90 (De: R$ 115,00)",
    "preco": 35.9,
    "link": "https://www.wepink.com.br/body-cream-one-touch-silk-200ml---wepink-383/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/161765/161585-1200-auto.webp?v=638980638191900000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2245",
    "nome": "Body Cream One Touch Warm Desodorante Hidratante 200ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 35,90 (De: R$ 115,00)",
    "preco": 35.9,
    "link": "https://www.wepink.com.br/body-cream-one-touch-warm-200ml---wepink-094/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/161843/001.webp?v=638980699295830000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_42339",
    "nome": "Body Cream Perfect Pear Desodorante Hidratante 200ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 35,90 (De: R$ 115,00)",
    "preco": 35.9,
    "link": "https://www.wepink.com.br/body-cream-perfect-pear-200-ml---wepink-199/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/159965/001-copy-2--2-.jpg.jpg?v=638756463246500000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_1401",
    "nome": "Body Cream Pureblixx Desodorante Hidratante 200ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-cream-pureblixx-200-ml-wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165711/pureblixx-1.jpg.jpg?v=639256832160030000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_1140",
    "nome": "Body Cream Red Desodorante Hidratante 200ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 35,90 (De: R$ 115,00)",
    "preco": 35.9,
    "link": "https://www.wepink.com.br/body-cream-red-200ml-wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/161897/159544-1200-auto.webp?v=638980720214970000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052407",
    "nome": "Body Cream Ruby Rhodolite Desodorante Hidratante 200ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 35,90 (De: R$ 115,00)",
    "preco": 35.9,
    "link": "https://www.wepink.com.br/body-cream-ruby-rhodolite-200ml---wepink-466/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164534/Prancheta-3.webp?v=639173990310930000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052118",
    "nome": "Body Cream Scarlette Desodorante Hidratante 200ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-cream-scarlette-200ml---wepink-385/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/161833/BC-Scarelette-3.webp?v=638985666092600000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052594",
    "nome": "Body Cream VF 2.7 Desodorante Hidratante 200ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 35,90 (De: R$ 115,00)",
    "preco": 35.9,
    "link": "https://www.wepink.com.br/body-cream-vf-27-200ml---wepink-520/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165030/1.webp?v=639197322479730000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_1834",
    "nome": "Body Cream VF Choices Desodorante Hidratante 200ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-cream-vf-choices-200ml-wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/160017/Choices-1.jpg.jpg?v=638918958373670000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_20607",
    "nome": "Body Cream VF Desodorante Hidratante 200ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 35,90 (De: R$ 115,00)",
    "preco": 35.9,
    "link": "https://www.wepink.com.br/the-body-cream-vf/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/161854/159535-1200-auto.webp?v=638980703943300000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_42604",
    "nome": "Body Cream VF Golden Desodorante Hidratante 200ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 35,90 (De: R$ 115,00)",
    "preco": 35.9,
    "link": "https://www.wepink.com.br/body-cream-vf-golden-desodorante-hidratante-200ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165701/001-copy-2.jpg.jpg?v=639256820687730000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_1728",
    "nome": "Body Cream VF Honey Desodorante Hidratante 200ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-cream-vf-honey-200-ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164950/01.png?v=639182503871600000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052549",
    "nome": "Body Cream Vanilla Cuddle Desodorante Hidratante 200ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-cream-locao-hid-desod-vanilla-cuddle-200-ml---wepink-485/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164797/Prancheta-3.webp?v=639156723546670000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052550",
    "nome": "Body Cream Vanilla Dream Desodorante Hidratante 200ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 35,90 (De: R$ 115,00)",
    "preco": 35.9,
    "link": "https://www.wepink.com.br/body-cream-locao-hid-desodvanilladream-200-ml---wepink-486/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164544/Prancheta-3.webp?v=639148942865630000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052551",
    "nome": "Body Cream Vanilla Hope Desodorante Hidratante 200ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 35,90 (De: R$ 115,00)",
    "preco": 35.9,
    "link": "https://www.wepink.com.br/body-cream-locao-hid-desod-hope-200-ml---wepink-487/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164807/Prancheta-3.webp?v=639156725451870000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052548",
    "nome": "Body Cream Vanilla Hug Desodorante Hidratante 200ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 115,00",
    "preco": 115.0,
    "link": "https://www.wepink.com.br/body-cream-locao-hid-desodvanillahug-200-ml---wepink-491/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164551/Prancheta-3.webp?v=639169441233400000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052552",
    "nome": "Body Cream Vanilla Soft Desodorante Hidratante 200ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 35,90 (De: R$ 115,00)",
    "preco": 35.9,
    "link": "https://www.wepink.com.br/body-cream-locao-hid-desodvanillasoft-200-ml---wepink-489/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164802/Prancheta-3.webp?v=639156725089700000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052553",
    "nome": "Body Cream Vanilla Wish Desodorante Hidratante 200ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 35,90 (De: R$ 115,00)",
    "preco": 35.9,
    "link": "https://www.wepink.com.br/body-cream-locao-hid-desodvanillawhish-200-ml---wepink-490/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164812/Prancheta-3.webp?v=639156727369800000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052252",
    "nome": "Body Cream Yahya Sadeeq Desodorante Hidratante 200ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 35,90 (De: R$ 115,00)",
    "preco": 35.9,
    "link": "https://www.wepink.com.br/body-cream-yahya-200ml---wepink-425/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163584/3--3-.webp?v=639042444446970000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052651",
    "nome": "Body Scrub Feive Esfoliante Corporal 450g",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 59,90 (De: R$ 139,90)",
    "preco": 59.9,
    "link": "https://www.wepink.com.br/body-scrub-feive-450gr---wepink-fs1152330/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165445/Prancheta-1.webp?v=639250804171070000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052486",
    "nome": "Body Scrub Heaven Blue Esfoliante Corporal 450g",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 139,90",
    "preco": 139.9,
    "link": "https://www.wepink.com.br/body-scrub-heaven-blue-450gr---wepink-fs1152241/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164634/com-caixa.png?v=639153136283770000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_42434",
    "nome": "Body Scrub Libert\u00e9\u00c3\u00a9 Esfoliante Corporal 450g",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 59,90 (De: R$ 139,90)",
    "preco": 59.9,
    "link": "https://www.wepink.com.br/body-scrub-liberte-450-gr---wepink-220/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163344/160484-1200-auto.png?v=639005428529870000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_83002",
    "nome": "Body Scrub Libert\u00e9\u00c3\u00a9 Exclusif Esfoliante Corporal 450g",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 59,90 (De: R$ 139,90)",
    "preco": 59.9,
    "link": "https://www.wepink.com.br/body-scrub-liberte-exclusif-450gr---wepink-360/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163894/Gemini_Generated_Image_k1v26fk1v26fk1v2.png?v=639077329861100000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_42393",
    "nome": "Body Scrub Obsessed Esfoliante Corporal 450g",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 59,90 (De: R$ 139,90)",
    "preco": 59.9,
    "link": "https://www.wepink.com.br/body-scrub-obsessed-450gr---wepink-221/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165189/Prancheta-1.webp?v=639231788227730000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052650",
    "nome": "Body Scrub Obsessed Lovely Esfoliante Corporal 450g",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 59,90 (De: R$ 139,90)",
    "preco": 59.9,
    "link": "https://www.wepink.com.br/body-scrub-obessed-lovely-450gr---wepink-fs1152329/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165173/01.webp?v=639217005463630000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_83001",
    "nome": "Body Scrub VF Golden Esfoliante Corporal 450g",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 139,90",
    "preco": 139.9,
    "link": "https://www.wepink.com.br/body-scrub-vf-golden-450gr---wepink-359/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165277/VF-Golden---01.webp?v=639240426719070000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052718",
    "nome": "Espuma de Banho Shower Dream Heaven Blue 150ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 43,90 (De: R$ 99,90)",
    "preco": 43.9,
    "link": "https://www.wepink.com.br/espuma-de-banho-heaven-blue---wepink-pat11566/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165530/Prancheta-3.webp?v=639256234661500000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052716",
    "nome": "Espuma de Banho Shower Dream Libert\u00e9\u00c3\u00a9 Exclusif 150ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 43,90 (De: R$ 99,90)",
    "preco": 43.9,
    "link": "https://www.wepink.com.br/espuma-de-banho-liberte-exclusif---wepink-pat11563/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165893/Prancheta 1 -11-.png?v=639263718176000000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052573",
    "nome": "Espuma de Banho Shower Dream Vanilla Cuddle 150ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 43,90 (De: R$ 99,90)",
    "preco": 43.9,
    "link": "https://www.wepink.com.br/espuma-de-banho-vanilla-cuddle/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164399/Prancheta-3--5-.webp?v=639148899567100000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052441",
    "nome": "Espuma de Banho Shower Dream Vanilla Dream 150ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 43,90 (De: R$ 99,90)",
    "preco": 43.9,
    "link": "https://www.wepink.com.br/espuma-de-banho-vanilla-dream---wepink-pat11247/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164394/Prancheta-3--4-.webp?v=639142652758770000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052440",
    "nome": "Espuma de Banho Shower Dream Vanilla Hope 150ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 43,90 (De: R$ 99,90)",
    "preco": 43.9,
    "link": "https://www.wepink.com.br/espuma-de-banho-vanilla-hope---wepink-pat11248/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164374/Prancheta-3--1-.webp?v=639148899931300000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052439",
    "nome": "Espuma de Banho Shower Dream Vanilla Hug 150ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 99,90",
    "preco": 99.9,
    "link": "https://www.wepink.com.br/espuma-de-banho-vanilla-hug---wepink-pat11251/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164379/Prancheta-3.webp?v=639140974868870000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052438",
    "nome": "Espuma de Banho Shower Dream Vanilla Soft 150ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 43,90 (De: R$ 99,90)",
    "preco": 43.9,
    "link": "https://www.wepink.com.br/espuma-de-banho-vanilla-soft---wepink-pat11249/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164384/Prancheta-3--3-.webp?v=639148899667430000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052436",
    "nome": "Espuma de Banho Shower Dream Vanilla Wish 150ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 43,90 (De: R$ 99,90)",
    "preco": 43.9,
    "link": "https://www.wepink.com.br/espuma-de-banho-vanilla-wish---wepink-pat11246/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164389/Prancheta-3--2-.webp?v=639148900029800000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_42437",
    "nome": "Myskin Essential Body 250ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 45,90 (De: R$ 169,00)",
    "preco": 45.9,
    "link": "https://www.wepink.com.br/-myskin-body-esfoliante-acido-250-ml---wepink-210/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/159902/myskin-body--4-.jpg.jpg?v=638755052112300000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052618",
    "nome": "Sabonete em Barra Clean Bar Auretx",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 23,90 (De: R$ 39,90)",
    "preco": 23.9,
    "link": "https://www.wepink.com.br/sabonete-em-barra-auretex---wepink-prd00012/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165118/1.png?v=639214508558600000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052619",
    "nome": "Sabonete em Barra Clean Bar Celebrate Life",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 23,90 (De: R$ 39,90)",
    "preco": 23.9,
    "link": "https://www.wepink.com.br/sabonete-em-barra-celebrate-life---wepink-prd00010/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165130/1--2-.webp?v=639215225129330000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052620",
    "nome": "Sabonete em Barra Clean Bar One Touch Silk",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 23,90 (De: R$ 39,90)",
    "preco": 23.9,
    "link": "https://www.wepink.com.br/sabonete-em-barra-one-touch-silk---wepink-prd00011/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165122/1.png?v=639214509392070000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052621",
    "nome": "Sabonete em Barra Clean Bar Ruby",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 23,90 (De: R$ 39,90)",
    "preco": 23.9,
    "link": "https://www.wepink.com.br/sabonete-em-barra-ruby---wepink-prd00009/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165126/1.webp?v=639214542326670000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052720",
    "nome": "Shower Dream Espuma de Banho Ruby Rhodolite 150ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 43,90 (De: R$ 99,90)",
    "preco": 43.9,
    "link": "https://www.wepink.com.br/espuma-de-banho-ruby-rhodolite---wepink-pat11564/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165808/Prancheta-1.webp?v=639258612754170000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2070",
    "nome": "The Cream Libert\u00e9\u00c3\u00a9 Lo\u00c3\u00a7\u00c3\u00a3o Corporal 130ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 249,00",
    "preco": 249.0,
    "link": "https://www.wepink.com.br/the-cream-liberte-locao-corporal-130-ml---wepink-00000000000023316/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164075/ChatGPT-Image-11-de-mar.-de-2026-11_39_15.png?v=639231787144300000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_10599615",
    "nome": "The Cream Lo\u00c3\u00a7\u00c3\u00a3o Corporal 130ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 55,90 (De: R$ 249,00)",
    "preco": 55.9,
    "link": "https://www.wepink.com.br/the-cream-locao-corporal-130-ml/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164070/ChatGPT-Image-11-de-mar.-de-2026-11_41_54.png?v=639229344470300000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2071",
    "nome": "The Cream Obsessed Lo\u00c3\u00a7\u00c3\u00a3o Corporal 130ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 55,90 (De: R$ 249,00)",
    "preco": 55.9,
    "link": "https://www.wepink.com.br/the-cream-obsessed-locao-corporal-130-ml---wepink-00000000000023318/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162500/162026-1200-auto.webp?v=638987157330900000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_41906",
    "nome": "The Cream Perfect Pear Lo\u00c3\u00a7\u00c3\u00a3o Corporal 130ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 249,00",
    "preco": 249.0,
    "link": "https://www.wepink.com.br/the-cream-perfect-pear-locao-corporal-130-ml---wepink-205/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/161941/159564-1200-auto.webp?v=638980733569600000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_1723",
    "nome": "The Oil \u00c3\u00d3\u00d3leo Corporal Celebrate Life 120ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 99,90",
    "preco": 99.9,
    "link": "https://www.wepink.com.br/oleo-desodorante-the-oil-celebrate-life-120ml-wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/160168/celebrate-life-1.jpg.jpg?v=638918265078470000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_20751",
    "nome": "The Oil \u00c3\u00d3\u00d3leo Corporal Infinity 120ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 99,90",
    "preco": 99.9,
    "link": "https://www.wepink.com.br/the-oil-infinity/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/161976/159591-1200-auto.webp?v=638980742970670000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_1138",
    "nome": "The Oil \u00c3\u00d3\u00d3leo Corporal Libert\u00e9\u00c3\u00a9 120ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 99,90",
    "preco": 99.9,
    "link": "https://www.wepink.com.br/the-oil---liberte-120ml---we-pink-0000022324-p/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/161982/159593-1200-auto.webp?v=638980743541700000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_1024",
    "nome": "The Oil \u00c3\u00d3\u00d3leo Corporal Obsessed 120ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 99,90",
    "preco": 99.9,
    "link": "https://www.wepink.com.br/the-oil-obsessed-wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/160163/obsessed-1.jpg.jpg?v=638833459308900000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_20744",
    "nome": "The Oil \u00c3\u00d3\u00d3leo Corporal One Touch 120ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 99,90",
    "preco": 99.9,
    "link": "https://www.wepink.com.br/the-oil-one-touch/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162000/159596-1200-auto.webp?v=638980744868900000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_1139",
    "nome": "The Oil \u00c3\u00d3\u00d3leo Corporal Red 120ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 99,90",
    "preco": 99.9,
    "link": "https://www.wepink.com.br/the-oil-red-120ml-we-pink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/161994/159599-1200-auto.webp?v=638980744519900000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_20606",
    "nome": "The Oil \u00c3\u00d3\u00d3leo Corporal VF 120ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 99,90",
    "preco": 99.9,
    "link": "https://www.wepink.com.br/the-oil-vf/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/161988/159549-1200-auto.webp?v=638980744045330000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_42606",
    "nome": "The Oil \u00c3\u00d3\u00d3leo Corporal VF Golden 120ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 99,90",
    "preco": 99.9,
    "link": "https://www.wepink.com.br/the-oil-vf-golden-120-ml---wepink-272-p/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/160290/vf-golden-1.jpg.jpg?v=638787863192500000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_42436",
    "nome": "We Femme Sabonete \u00c3\u008dntimo 250ml",
    "categoria": "Corpo & Banho",
    "tipoIcone": "beleza",
    "sugestao": "R$ 45,90 (De: R$ 89,00)",
    "preco": 45.9,
    "link": "https://www.wepink.com.br/sabonete-intimo-we-femme-250-ml---wepink-237/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/159897/wefemme--4-.jpg.jpg?v=638755052548500000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_41917",
    "nome": "Cleansing Wipes Len\u00c3\u00a7o Umedecido Demaquilante 25\u00c2 un.\u00c2",
    "categoria": "Maquiagem",
    "tipoIcone": "maquiagem",
    "sugestao": "R$ 21,90 (De: R$ 34,90)",
    "preco": 21.9,
    "link": "https://www.wepink.com.br/lenco-demaquilante-exclusive----wepink-lenc-car-001/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164087/ChatGPT-Image-11-de-mar.-de-2026-11_44_22.png?v=639136947522970000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_10538979",
    "nome": "Gloss My Lips 4ml",
    "categoria": "Maquiagem",
    "tipoIcone": "maquiagem",
    "sugestao": "R$ 98,90",
    "preco": 98.9,
    "link": "https://www.wepink.com.br/gloss-labial-my-lips-wepink-4ml-sv29232/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164081/ChatGPT-Image-11-de-mar.-de-2026-11_43_00.png?v=639226574955870000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_1913",
    "nome": "Gloss My Lips Cherry 4ml",
    "categoria": "Maquiagem",
    "tipoIcone": "maquiagem",
    "sugestao": "R$ 29,90 (De: R$ 98,90)",
    "preco": 29.9,
    "link": "https://www.wepink.com.br/gloss-my-lips-cherry-4ml-wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162541/159674-1200-auto.webp?v=638987212392970000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_1829",
    "nome": "Gloss My Lips Choco 4ml",
    "categoria": "Maquiagem",
    "tipoIcone": "maquiagem",
    "sugestao": "R$ 29,90 (De: R$ 98,90)",
    "preco": 29.9,
    "link": "https://www.wepink.com.br/gloss-my-lips-choco-4ml---wepink-0000023054/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162546/159676-1200-auto.webp?v=638987212786530000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_1927",
    "nome": "Gloss My Lips Cookies 4ml",
    "categoria": "Maquiagem",
    "tipoIcone": "maquiagem",
    "sugestao": "R$ 29,90 (De: R$ 98,90)",
    "preco": 29.9,
    "link": "https://www.wepink.com.br/gloss-labial-my-lips-cookies-4-ml-wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162522/159669-1200-auto.webp?v=638987209739900000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2102",
    "nome": "Gloss My Lips Jujuba 4ml",
    "categoria": "Maquiagem",
    "tipoIcone": "maquiagem",
    "sugestao": "R$ 29,90 (De: R$ 98,90)",
    "preco": 29.9,
    "link": "https://www.wepink.com.br/gloss-labial-my-lips-jujuba---wepink-glmljj-ath001/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162555/159662-1200-auto.webp?v=638987223663230000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2104",
    "nome": "Gloss My Lips Pirulipop 4ml",
    "categoria": "Maquiagem",
    "tipoIcone": "maquiagem",
    "sugestao": "R$ 29,90 (De: R$ 98,90)",
    "preco": 29.9,
    "link": "https://www.wepink.com.br/gloss-labial-my-lips-pirulipop---wepink-glmlprp-ath001/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164369/159658-1200-auto.webp?v=639135830204070000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2105",
    "nome": "Gloss My Lips Sorvetin 4ml",
    "categoria": "Maquiagem",
    "tipoIcone": "maquiagem",
    "sugestao": "R$ 29,90 (De: R$ 98,90)",
    "preco": 29.9,
    "link": "https://www.wepink.com.br/gloss-labial-my-lips-sorvetin-wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162559/159656-1200-auto.webp?v=638987224441870000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052123",
    "nome": "Lip Oil Cookies 3,5g",
    "categoria": "Maquiagem",
    "tipoIcone": "maquiagem",
    "sugestao": "R$ 29,90 (De: R$ 108,90)",
    "preco": 29.9,
    "link": "https://www.wepink.com.br/lip-oil-35g-cookies---wepink-fs1111849/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162579/lip-oil-cookies-3.webp?v=638987235837730000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052121",
    "nome": "Lip Oil Jujuba 3,5g",
    "categoria": "Maquiagem",
    "tipoIcone": "maquiagem",
    "sugestao": "R$ 29,90 (De: R$ 108,90)",
    "preco": 29.9,
    "link": "https://www.wepink.com.br/lip-oil-35g-jujuba---wepink-fs1111847/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162599/161647-1200-auto.webp?v=638987232351530000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052122",
    "nome": "Lip Oil Marshmallow 3,5g",
    "categoria": "Maquiagem",
    "tipoIcone": "maquiagem",
    "sugestao": "R$ 29,90 (De: R$ 108,90)",
    "preco": 29.9,
    "link": "https://www.wepink.com.br/lip-oil-35g-marshmallow---wepink-fs1111848/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162604/161652-1200-auto.webp?v=638987232688170000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052120",
    "nome": "Lip Oil Pirulipop 3,5g",
    "categoria": "Maquiagem",
    "tipoIcone": "maquiagem",
    "sugestao": "R$ 108,90",
    "preco": 108.9,
    "link": "https://www.wepink.com.br/lip-oil-35g-pirulipop---wepink-fs1111846/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162594/161621-1200-auto.webp?v=638987232089070000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_312",
    "nome": "Lip Tint Glow Essencial 5,8ml",
    "categoria": "Maquiagem",
    "tipoIcone": "maquiagem",
    "sugestao": "R$ 29,90 (De: R$ 108,90)",
    "preco": 29.9,
    "link": "https://www.wepink.com.br/lip-tint-glow/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162569/159557-1200-auto.webp?v=638987226980500000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_21050",
    "nome": "L\u00c3\u00a1pis Retr\u00c3\u00a1til Boldeye All Black 0,28g",
    "categoria": "Maquiagem",
    "tipoIcone": "maquiagem",
    "sugestao": "R$ 25,90 (De: R$ 66,90)",
    "preco": 25.9,
    "link": "https://www.wepink.com.br/lapis-retratil-preto-wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162589/159518-1200-auto.webp?v=638987231878170000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_20812",
    "nome": "Weblush Quarteto de Blush 7,2g",
    "categoria": "Maquiagem",
    "tipoIcone": "maquiagem",
    "sugestao": "R$ 92,90",
    "preco": 92.9,
    "link": "https://www.wepink.com.br/weblush-quarteto/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162574/159654-1200-auto.webp?v=638987231168900000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_544",
    "nome": "Welips Batom L\u00c3\u00adquido Matte 5ml",
    "categoria": "Maquiagem",
    "tipoIcone": "maquiagem",
    "sugestao": "R$ 87,90",
    "preco": 87.9,
    "link": "https://www.wepink.com.br/batom-liquido-welips/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162637/5.webp?v=638987241033630000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052315",
    "nome": "Welumi Iluminador Corporal 55g",
    "categoria": "Maquiagem",
    "tipoIcone": "maquiagem",
    "sugestao": "R$ 60,90 (De: R$ 119,90)",
    "preco": 60.9,
    "link": "https://www.wepink.com.br/locao-iluminadora-corporal-desodorante-55g---wepink-444/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163679/2.webp?v=639063168044900000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_21021",
    "nome": "Wepink Beauty Base L\u00c3\u00adquida Premium 45ml\u00c2 -\u00c2 Wepink",
    "categoria": "Maquiagem",
    "tipoIcone": "maquiagem",
    "sugestao": "R$ 45,90 (De: R$ 218,90)",
    "preco": 45.9,
    "link": "https://www.wepink.com.br/wepink-beauty-base-liquida/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/159683/wepink-beauty.png?v=638723795396670000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052311",
    "nome": "Booster Night \u00c3\u00d3\u00d3leo Capilar 30ml",
    "categoria": "Cabelos",
    "tipoIcone": "beleza",
    "sugestao": "R$ 129,00",
    "preco": 129.0,
    "link": "https://www.wepink.com.br/oleo-booster-night-30ml---wepink-443/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165595/2.webp?v=639253538676370000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_10599402",
    "nome": "Booster Repair \u00c3\u00d3\u00d3leo Capilar 30ml",
    "categoria": "Cabelos",
    "tipoIcone": "beleza",
    "sugestao": "R$ 43,90 (De: R$ 129,00)",
    "preco": 43.9,
    "link": "https://www.wepink.com.br/booster-repair-oleo-capilar-30ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165590/booster-1.jpg.jpg?v=639253538349070000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_62921",
    "nome": "Condicionador My Hair Ultra Repair 250ml",
    "categoria": "Cabelos",
    "tipoIcone": "beleza",
    "sugestao": "R$ 48,90 (De: R$ 139,90)",
    "preco": 48.9,
    "link": "https://www.wepink.com.br/condicionador-my-hair-ultra-repair-250ml---wepink-328/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165600/161186-1200-auto.webp?v=639253539691900000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052480",
    "nome": "Hair Mist Celebrate Life Desodorante Capilar 50ml",
    "categoria": "Cabelos",
    "tipoIcone": "beleza",
    "sugestao": "R$ 28,90 (De: R$ 149,90)",
    "preco": 28.9,
    "link": "https://www.wepink.com.br/perfume-capilar-celebrate-life-50ml---wepink-pat11107/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164579/01--2-.png?v=639153079754630000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_1587688837",
    "nome": "Hair Mist Heaven Desodorante Capilar 50ml",
    "categoria": "Cabelos",
    "tipoIcone": "beleza",
    "sugestao": "R$ 28,90 (De: R$ 149,90)",
    "preco": 28.9,
    "link": "https://www.wepink.com.br/perfume-capilar-heaven-50-ml---wepink-902/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165575/hair-heaven-3.jpg?v=639253537640700000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052481",
    "nome": "Hair Mist Infinity Desodorante Capilar 50ml",
    "categoria": "Cabelos",
    "tipoIcone": "beleza",
    "sugestao": "R$ 149,90",
    "preco": 149.9,
    "link": "https://www.wepink.com.br/perfume-capilar-infinity-50ml---wepink-pat11108/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164586/01.png?v=639153103948000000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_272112",
    "nome": "Hair Mist Libert\u00e9\u00c3\u00a9 Desodorante Capilar 50ml",
    "categoria": "Cabelos",
    "tipoIcone": "beleza",
    "sugestao": "R$ 28,90 (De: R$ 149,90)",
    "preco": 28.9,
    "link": "https://www.wepink.com.br/perfume-capilar-liberte-50-ml---wepink-903/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165570/hair-liberte-3.jpg?v=639253537553330000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_62826",
    "nome": "Hair Mist Libert\u00e9\u00c3\u00a9 Exclusif Desodorante Capilar 50ml",
    "categoria": "Cabelos",
    "tipoIcone": "beleza",
    "sugestao": "R$ 28,90 (De: R$ 149,90)",
    "preco": 28.9,
    "link": "https://www.wepink.com.br/perfume-capilar-liberte-exclusif-50ml-905/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163433/hair-liberte-3.webp?v=639143015810000000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_441878728",
    "nome": "Hair Mist Obsessed Desodorante Capilar 50ml",
    "categoria": "Cabelos",
    "tipoIcone": "beleza",
    "sugestao": "R$ 28,90 (De: R$ 149,90)",
    "preco": 28.9,
    "link": "https://www.wepink.com.br/perfume-capilar-obsessed-50-ml---wepink-904/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165560/hair-obsessed-3.jpg?v=639253536694300000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052482",
    "nome": "Hair Mist One Touch Desodorante Capilar 50ml",
    "categoria": "Cabelos",
    "tipoIcone": "beleza",
    "sugestao": "R$ 28,90 (De: R$ 149,90)",
    "preco": 28.9,
    "link": "https://www.wepink.com.br/perfume-capilar-one-touch-50ml---wepink-pat11109/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164880/01--1-.png?v=639171215315830000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052479",
    "nome": "Hair Mist Perfect Pear Desodorante Capilar 50ml",
    "categoria": "Cabelos",
    "tipoIcone": "beleza",
    "sugestao": "R$ 28,90 (De: R$ 149,90)",
    "preco": 28.9,
    "link": "https://www.wepink.com.br/perfume-capilar-perfect-pear-50ml---wepink-pat11110/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164878/01--2-.png?v=639171159405100000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_1942930570",
    "nome": "Hair Mist Red Desodorante Capilar 50ml",
    "categoria": "Cabelos",
    "tipoIcone": "beleza",
    "sugestao": "R$ 149,90",
    "preco": 149.9,
    "link": "https://www.wepink.com.br/perfume-capilar-red-50-ml---wepink-901/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165580/hair-red-3.jpg?v=639253537745270000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052483",
    "nome": "Hair Mist VF Choices Desodorante Capilar 50ml",
    "categoria": "Cabelos",
    "tipoIcone": "beleza",
    "sugestao": "R$ 149,90",
    "preco": 149.9,
    "link": "https://www.wepink.com.br/perfume-capilar-vf-choices-50ml---wepink-pat11111/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164879/01.png?v=639171161324230000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052478",
    "nome": "Hair Mist VF Golden Desodorante Capilar 50ml",
    "categoria": "Cabelos",
    "tipoIcone": "beleza",
    "sugestao": "R$ 149,90",
    "preco": 149.9,
    "link": "https://www.wepink.com.br/perfume-capilar-vf-golden-50ml---wepink-pat11231/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165565/01.png?v=639253537091300000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_1182",
    "nome": "Leave-in Capilar Multifuncional 120ml",
    "categoria": "Cabelos",
    "tipoIcone": "beleza",
    "sugestao": "R$ 37,90 (De: R$ 113,90)",
    "preco": 37.9,
    "link": "https://www.wepink.com.br/leave-in-capilar-120ml-we-pink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165585/161139-1200-auto.webp?v=639253538193800000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_62922",
    "nome": "M\u00e1scara My Hair Ultra Repair 200g",
    "categoria": "Cabelos",
    "tipoIcone": "beleza",
    "sugestao": "R$ 75,90 (De: R$ 179,90)",
    "preco": 75.9,
    "link": "https://www.wepink.com.br/mascara-capilar-my-hair-ultra-repair-200g---wepink-329/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/161827/161144-1200-auto.webp?v=638980698415570000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_42633",
    "nome": "Prote\u00c3\u00adna Condicionante My Hair Ultra Repair 230ml",
    "categoria": "Cabelos",
    "tipoIcone": "beleza",
    "sugestao": "R$ 142,90",
    "preco": 142.9,
    "link": "https://www.wepink.com.br/proteina-condicionante-my-hair-ultra-repair-230ml---we-pink-292/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163804/myhair-ultra-repair-1.jpg?v=639077107987130000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_62920",
    "nome": "Shampoo My Hair Ultra Repair 250ml",
    "categoria": "Cabelos",
    "tipoIcone": "beleza",
    "sugestao": "R$ 48,90 (De: R$ 139,90)",
    "preco": 48.9,
    "link": "https://www.wepink.com.br/shampoo-my-hair-ultra-repair-250ml---wepink-327/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/161806/161180-1200-auto.webp?v=638980686667670000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052653",
    "nome": "Shampoo a Seco My Hair Spray 150ml",
    "categoria": "Cabelos",
    "tipoIcone": "beleza",
    "sugestao": "R$ 43,90 (De: R$ 82,90)",
    "preco": 43.9,
    "link": "https://www.wepink.com.br/shampoo-a-seco-wepink-my-hair-spray---wepink-9600001/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165478/Prancheta-1.webp?v=639250806040200000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_762",
    "nome": "T\u00c3\u00b4nico Capilar Hair Tonic 120ml",
    "categoria": "Cabelos",
    "tipoIcone": "beleza",
    "sugestao": "R$ 229,90",
    "preco": 229.9,
    "link": "https://www.wepink.com.br/hair-tonic-crescimento-capilar/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165606/159648-1200-auto.webp?v=639253540190200000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_10599401",
    "nome": "Cleanser Essential Sabonete Facial 120ml",
    "categoria": "Skincare",
    "tipoIcone": "espelho",
    "sugestao": "R$ 45,90 (De: R$ 112,90)",
    "preco": 45.9,
    "link": "https://www.wepink.com.br/sabonete-facial-cleanser-essential/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162190/Cleanser-Essential-Sabonete-Facial-120ml_1.webp?v=638985677531100000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_1301",
    "nome": "Creme Contorno dos Olhos Eyescare 15ml",
    "categoria": "Skincare",
    "tipoIcone": "espelho",
    "sugestao": "R$ 187,90",
    "preco": 187.9,
    "link": "https://www.wepink.com.br/eyescare-cec-ath-001/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162196/Eyescare---Creme-Contorno-dos-Olhos---15ml_1.webp?v=638985682070930000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_42394",
    "nome": "Hydracare Essential Hidratante Facial 60ml",
    "categoria": "Skincare",
    "tipoIcone": "espelho",
    "sugestao": "R$ 45,90 (De: R$ 197,90)",
    "preco": 45.9,
    "link": "https://www.wepink.com.br/creme-hidratante-facial-hydracare-60ml---wepink-251/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/160074/hydracare-5.jpg.jpg?v=638762572923800000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_1889",
    "nome": "Kit Skincare",
    "categoria": "Skincare",
    "tipoIcone": "espelho",
    "sugestao": "R$ 428,70",
    "preco": 428.7,
    "link": "https://www.wepink.com.br/kit-serum----wepink-wkts-ath-001/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/160702/kit-skincare-3.jpg?v=638839554324870000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_20819",
    "nome": "Myskin Essential Espuma Esfoliante 120ml",
    "categoria": "Skincare",
    "tipoIcone": "espelho",
    "sugestao": "R$ 197,90",
    "preco": 197.9,
    "link": "https://www.wepink.com.br/espuma-esfoliante-myskin/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162087/Myskin-Essential-Espuma-Esfoliante-120ml_1.webp?v=638984729650670000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_1613",
    "nome": "Protetor Solar FPS 50 Suncare 30ml - We\u00c2\u00adpink",
    "categoria": "Skincare",
    "tipoIcone": "espelho",
    "sugestao": "R$ 208,90",
    "preco": 208.9,
    "link": "https://www.wepink.com.br/protetor-solar-fps-50-suncare-30ml-wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162082/Protetor-Solar-FPS-50-Suncare-30ml_1.webp?v=638985682890730000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_10538981",
    "nome": "S\u00e9rum 10 em 1 - 40ml",
    "categoria": "Skincare",
    "tipoIcone": "espelho",
    "sugestao": "R$ 182,90",
    "preco": 182.9,
    "link": "https://www.wepink.com.br/serum-10-em-1-wepink-40ml/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162185/Serum-10-em-1---40ml---Wepink_1.webp?v=638985676790500000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_20618",
    "nome": "S\u00e9rum Noturno 25ml",
    "categoria": "Skincare",
    "tipoIcone": "espelho",
    "sugestao": "R$ 192,90",
    "preco": 192.9,
    "link": "https://www.wepink.com.br/serum-noturno/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/162070/Serum-Noturno-25ml_1.webp?v=638985678163700000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052202",
    "nome": "S\u00e9rum PDRN 30ml",
    "categoria": "Skincare",
    "tipoIcone": "espelho",
    "sugestao": "R$ 136,90 (De: R$ 209,00)",
    "preco": 136.9,
    "link": "https://www.wepink.com.br/serum-pdr-30-ml---wepink-417/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/163937/Serum_PDRN-7.jpg?v=639082435681370000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052688",
    "nome": "Desodorante Antitranspirante Roll-on MyProtection Absolute Titanium 50ml",
    "categoria": "Desodorantes",
    "tipoIcone": "beleza",
    "sugestao": "R$ 28,90 (De: R$ 91,90)",
    "preco": 28.9,
    "link": "https://www.wepink.com.br/desodorante-antitranspirante-roll-on-absolute-titanium-50ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165840/01 -2-.webp?v=639260248749000000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_42639",
    "nome": "Desodorante Antitranspirante Roll-on MyProtection Celebrate Life 50ml",
    "categoria": "Desodorantes",
    "tipoIcone": "beleza",
    "sugestao": "R$ 91,90",
    "preco": 91.9,
    "link": "https://www.wepink.com.br/desodorante-roll-on-celebrate-life-50-ml---wepink-294/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165733/01.webp?v=639257711977600000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052510",
    "nome": "Desodorante Antitranspirante Roll-on MyProtection Feive 50ml",
    "categoria": "Desodorantes",
    "tipoIcone": "beleza",
    "sugestao": "R$ 91,90",
    "preco": 91.9,
    "link": "https://www.wepink.com.br/desodorante-roll-on-feive-50ml---wepink-477/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165855/01 -4-.webp?v=639260251069830000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052652",
    "nome": "Desodorante Antitranspirante Roll-on MyProtection Feive Celestial 50ml",
    "categoria": "Desodorantes",
    "tipoIcone": "beleza",
    "sugestao": "R$ 91,90",
    "preco": 91.9,
    "link": "https://www.wepink.com.br/desodorante-antitranspirante-roll-on-feive-celestial-50ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165860/01.webp?v=639260257771770000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052509",
    "nome": "Desodorante Antitranspirante Roll-on MyProtection Heaven Blue 50ml",
    "categoria": "Desodorantes",
    "tipoIcone": "beleza",
    "sugestao": "R$ 91,90",
    "preco": 91.9,
    "link": "https://www.wepink.com.br/desodorante-roll-on-heaven-blue-50ml---wepink-478/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/164842/Roll-on-Heaven-Blue--2-.png?v=639162537674600000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_83203",
    "nome": "Desodorante Antitranspirante Roll-on MyProtection Heaven Bride 50ml",
    "categoria": "Desodorantes",
    "tipoIcone": "beleza",
    "sugestao": "R$ 91,90",
    "preco": 91.9,
    "link": "https://www.wepink.com.br/desodorante-roll-on-my-protec-on-heaven-bride-50-ml-369/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165753/01--1-.webp?v=639259412004370000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_42640",
    "nome": "Desodorante Antitranspirante Roll-on MyProtection Infinity 50ml",
    "categoria": "Desodorantes",
    "tipoIcone": "beleza",
    "sugestao": "R$ 28,90 (De: R$ 91,90)",
    "preco": 28.9,
    "link": "https://www.wepink.com.br/desodorante-roll-on-infinity-50-ml---wepink-295/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165728/01--2-.webp?v=639259411277070000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052150",
    "nome": "Desodorante Antitranspirante Roll-on MyProtection Infinity Cosmik 50ml",
    "categoria": "Desodorantes",
    "tipoIcone": "beleza",
    "sugestao": "R$ 91,90",
    "preco": 91.9,
    "link": "https://www.wepink.com.br/desodorante-roll-on-my-protection-infinity-cosmik-50-ml---wepink-406/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165850/01 -3-.webp?v=639260250351970000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2205",
    "nome": "Desodorante Antitranspirante Roll-on MyProtection King Blue 50ml",
    "categoria": "Desodorantes",
    "tipoIcone": "beleza",
    "sugestao": "R$ 28,90 (De: R$ 91,90)",
    "preco": 28.9,
    "link": "https://www.wepink.com.br/desodorante-roll-on-king-blue-50-ml---wepink-drkb-ath-001/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165865/01 -5-.webp?v=639260260604030000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2206",
    "nome": "Desodorante Antitranspirante Roll-on MyProtection Libert\u00e9\u00c3\u00a9 50ml",
    "categoria": "Desodorantes",
    "tipoIcone": "beleza",
    "sugestao": "R$ 28,90 (De: R$ 91,90)",
    "preco": 28.9,
    "link": "https://www.wepink.com.br/desodorante-roll-on-liberte-50-ml-drle-ath-001/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165738/01--3-.webp?v=639259411904930000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_83402",
    "nome": "Desodorante Antitranspirante Roll-on MyProtection Libert\u00e9\u00c3\u00a9 Exclusif 50ml",
    "categoria": "Desodorantes",
    "tipoIcone": "beleza",
    "sugestao": "R$ 28,90 (De: R$ 91,90)",
    "preco": 28.9,
    "link": "https://www.wepink.com.br/desodorante-roll-on-my-protec-on-liberte-exclusif-50-ml---wepink-367/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165798/01--4-.webp?v=639257750807000000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2208",
    "nome": "Desodorante Antitranspirante Roll-on MyProtection Obsessed 50ml",
    "categoria": "Desodorantes",
    "tipoIcone": "beleza",
    "sugestao": "R$ 91,90",
    "preco": 91.9,
    "link": "https://www.wepink.com.br/desodorante-roll-on-obsessed-50-ml-drod-ath-001/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165748/01--4-.webp?v=639259411715870000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_83205",
    "nome": "Desodorante Antitranspirante Roll-on MyProtection Obsessed Exclusive Pink 50ml",
    "categoria": "Desodorantes",
    "tipoIcone": "beleza",
    "sugestao": "R$ 28,90 (De: R$ 91,90)",
    "preco": 28.9,
    "link": "https://www.wepink.com.br/desodorante-roll-on-my-protec-on-obsessed-exclusive-pink-50-ml-368/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165845/01 -1-.webp?v=639260249747470000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052645",
    "nome": "Desodorante Antitranspirante Roll-on MyProtection Obsessed Lovely 50ml",
    "categoria": "Desodorantes",
    "tipoIcone": "beleza",
    "sugestao": "R$ 91,90",
    "preco": 91.9,
    "link": "https://www.wepink.com.br/desodorante-roll-on-obsessed-lovely-50ml---wepink-528/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165835/01.webp?v=639260245237570000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052646",
    "nome": "Desodorante Antitranspirante Roll-on MyProtection One Touch Latte 50ml",
    "categoria": "Desodorantes",
    "tipoIcone": "beleza",
    "sugestao": "R$ 91,90",
    "preco": 91.9,
    "link": "https://www.wepink.com.br/desodorante-roll-on-one-touch-latte-50ml---wepink-529/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165870/01 -6-.webp?v=639260261294700000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_83204",
    "nome": "Desodorante Antitranspirante Roll-on MyProtection One Touch Silk 50ml",
    "categoria": "Desodorantes",
    "tipoIcone": "beleza",
    "sugestao": "R$ 91,90",
    "preco": 91.9,
    "link": "https://www.wepink.com.br/desodorante-roll-on-my-protec-on-one-touch-silk-50-ml-363/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165743/01.webp?v=639257714310770000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_42202",
    "nome": "Desodorante Antitranspirante Roll-on MyProtection Perfect Pear 50ml",
    "categoria": "Desodorantes",
    "tipoIcone": "beleza",
    "sugestao": "R$ 28,90 (De: R$ 91,90)",
    "preco": 28.9,
    "link": "https://www.wepink.com.br/desodorante-roll-on-perfect-pear-50-ml-232/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165758/01--5-.webp?v=639257717937700000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_83403",
    "nome": "Desodorante Antitranspirante Roll-on MyProtection Pureblixx 50ml",
    "categoria": "Desodorantes",
    "tipoIcone": "beleza",
    "sugestao": "R$ 28,90 (De: R$ 91,90)",
    "preco": 28.9,
    "link": "https://www.wepink.com.br/desodorante-roll-on-my-protec-on-pureblixx-50-ml---wepink-364/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165793/01--2-.webp?v=639257750737970000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2207",
    "nome": "Desodorante Antitranspirante Roll-on MyProtection Red 50ml",
    "categoria": "Desodorantes",
    "tipoIcone": "beleza",
    "sugestao": "R$ 91,90",
    "preco": 91.9,
    "link": "https://www.wepink.com.br/desodorante-roll-on-red-50-ml-drrd-ath-001/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165763/01--6-.webp?v=639259411815700000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052511",
    "nome": "Desodorante Antitranspirante Roll-on MyProtection Ruby Rhodolite 50ml",
    "categoria": "Desodorantes",
    "tipoIcone": "beleza",
    "sugestao": "R$ 28,90 (De: R$ 91,90)",
    "preco": 28.9,
    "link": "https://www.wepink.com.br/desodorante-roll-on-ruby-rhodolite-50ml---wepink-479/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165875/01 -7-.webp?v=639260262102800000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052647",
    "nome": "Desodorante Antitranspirante Roll-on MyProtection Scarlette 50ml",
    "categoria": "Desodorantes",
    "tipoIcone": "beleza",
    "sugestao": "R$ 28,90 (De: R$ 91,90)",
    "preco": 28.9,
    "link": "https://www.wepink.com.br/desodorante-antitranspirante-roll-on-scarlette-50ml---wepink/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165773/01--3-.webp?v=639259409413770000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_42638",
    "nome": "Desodorante Antitranspirante Roll-on MyProtection VF 50ml",
    "categoria": "Desodorantes",
    "tipoIcone": "beleza",
    "sugestao": "R$ 28,90 (De: R$ 91,90)",
    "preco": 28.9,
    "link": "https://www.wepink.com.br/desodorante-roll-on-vf-50-ml---wepink-293/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165778/01--8-.webp?v=639259390189930000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_83303",
    "nome": "Desodorante Antitranspirante Roll-on MyProtection VF Golden 50ml",
    "categoria": "Desodorantes",
    "tipoIcone": "beleza",
    "sugestao": "R$ 28,90 (De: R$ 91,90)",
    "preco": 28.9,
    "link": "https://www.wepink.com.br/desodorante-roll-on-my-protec-on-vf-golden-50-ml-365/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165803/01--5-.webp?v=639257750901070000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052820",
    "nome": "Kit Heaven Blue + Body Cream + Espuma de Banho",
    "categoria": "Kits & Presentes",
    "tipoIcone": "presente",
    "sugestao": "R$ 124,90 (De: R$ 543,90)",
    "preco": 124.9,
    "link": "https://www.wepink.com.br/kit-heaven-blue--body-cream-heaven-blue--espuma-de-banho-heaven-blue---wepink-85669/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165890/KIT-1.png?v=639263659354770000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  },
  {
    "id": "wp_2000052823",
    "nome": "Kit Libert\u00e9\u00c3\u00a9 + Body Cream Libert\u00e9\u00c3\u00a9 + Espuma de Banho Libert\u00e9\u00c3\u00a9 Exclusif",
    "categoria": "Kits & Presentes",
    "tipoIcone": "presente",
    "sugestao": "R$ 124,90 (De: R$ 543,90)",
    "preco": 124.9,
    "link": "https://www.wepink.com.br/kit-liberte--body-cream-liberte--espuma-de-banho-liberte-exclusif---wepink-105564/p",
    "imagem": "https://wepink.vteximg.com.br/arquivos/ids/165898/KIT-4.png?v=639263836110400000",
    "reservado": false,
    "reservadoPor": null,
    "reservadoEm": null
  }
];

  const STORAGE_KEY = "giovana15_presentes_wepink_v4";

  // Repositório de Dados de Presentes (LocalStorage com persistência imediata)
  const GiftsRepository = {
    getAll: function() {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed) && parsed.length > 50) {
            return parsed;
          }
        }
      } catch (e) {
        console.warn("Aviso ao ler presentes do storage:", e);
      }
      this.saveAll(LISTA_PRESENTES_PADRAO);
      return LISTA_PRESENTES_PADRAO;
    },

    saveAll: function(items) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
      } catch (e) {
        console.warn("Aviso ao salvar presentes no storage:", e);
      }
    },

    reserve: function(id, guestName) {
      const items = this.getAll();
      const gift = items.find(item => item.id === id);
      if (!gift) return { success: false, message: "Presente não encontrado." };

      if (gift.reservado) {
        return { 
          success: false, 
          message: `Este presente já foi escolhido por ${gift.reservadoPor || "outro convidado"}` 
        };
      }

      gift.reservado = true;
      gift.reservadoPor = guestName.trim();
      gift.reservadoEm = new Date().toISOString();
      this.saveAll(items);

      return { success: true, gift };
    },

    resetToDefault: function() {
      this.saveAll(LISTA_PRESENTES_PADRAO);
      return LISTA_PRESENTES_PADRAO;
    }
  };

  let categoriaAtiva = "Todos";
  let termoBusca = "";
  let itemSelecionadoParaReserva = null;

  function initUI() {
    renderCategories();
    renderGiftItems();
  }

  function getCategories() {
    const items = GiftsRepository.getAll();
    const desiredOrder = [
      "Todos",
      "Body Splash",
      "Perfumaria",
      "Corpo & Banho",
      "Maquiagem",
      "Cabelos",
      "Skincare",
      "Desodorantes",
      "Kits & Presentes"
    ];
    
    const existingCats = new Set(items.map(item => item.categoria).filter(Boolean));
    const result = [];
    
    desiredOrder.forEach(cat => {
      if (cat === "Todos" || existingCats.has(cat)) {
        result.push(cat);
      }
    });

    existingCats.forEach(cat => {
      if (!result.includes(cat)) {
        result.push(cat);
      }
    });

    return result;
  }

  function renderCategories() {
    const container = document.getElementById("giftCategories");
    if (!container) return;

    const items = GiftsRepository.getAll();
    const categories = getCategories();
    
    container.innerHTML = categories.map(cat => {
      const isActive = cat === categoriaAtiva;
      const count = cat === "Todos" 
        ? items.length 
        : items.filter(i => i.categoria === cat).length;
      
      return `<button type="button" class="gift-cat-pill ${isActive ? 'active' : ''}" onclick="window.GiftsManager.filtrarCategoria('${cat}')">
        <span>${cat}</span>
        <span class="gift-cat-badge">${count}</span>
      </button>`;
    }).join("");
  }

  function getItemIconSvg(tipo) {
    return SVG_ICONS[tipo] || SVG_ICONS.presente;
  }

  function normalizeText(text) {
    return (text || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function renderGiftThumb(item, iconSvg) {
    if (!item.imagem) {
      return `<div class="gift-card-cameo">${iconSvg}</div>`;
    }
    return `
      <div class="gift-card-thumb">
        <img src="${escapeHtml(item.imagem)}" alt="${escapeHtml(item.nome)}" loading="lazy" onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='flex';" />
        <div class="gift-card-cameo" style="display:none;">${iconSvg}</div>
      </div>
    `;
  }

  function renderGiftItems() {
    const container = document.getElementById("giftItemsContainer");
    if (!container) return;

    const items = GiftsRepository.getAll();
    const query = normalizeText(termoBusca.trim());

    let filtrados = items;

    if (categoriaAtiva !== "Todos") {
      filtrados = filtrados.filter(item => item.categoria === categoriaAtiva);
    }

    if (query) {
      filtrados = filtrados.filter(item => {
        const nName = normalizeText(item.nome);
        const nCat = normalizeText(item.categoria);
        const nSug = normalizeText(item.sugestao);
        return nName.includes(query) || nCat.includes(query) || nSug.includes(query);
      });
    }

    const countBar = document.getElementById("giftCountBar");
    if (countBar) {
      if (query) {
        countBar.innerHTML = `Encontrados <strong>${filtrados.length}</strong> produtos para "<em>${escapeHtml(termoBusca)}</em>"`;
      } else if (categoriaAtiva !== "Todos") {
        countBar.innerHTML = `Mostrando <strong>${filtrados.length}</strong> produtos em <strong>${categoriaAtiva}</strong>`;
      } else {
        countBar.innerHTML = `Mostrando todos os <strong>${filtrados.length}</strong> produtos da WePink ✨`;
      }
    }

    if (filtrados.length === 0) {
      container.innerHTML = `
        <div class="gift-empty-state">
          <div class="gift-empty-icon">${SVG_ICONS.presente}</div>
          <p>Nenhum presente encontrado com os filtros atuais.</p>
          <button type="button" class="btn-clear-filter" onclick="window.GiftsManager.limparFiltros()">Ver todos os produtos</button>
        </div>
      `;
      return;
    }

    container.innerHTML = filtrados.map(item => {
      const iconSvg = getItemIconSvg(item.tipoIcone);
      const thumbHtml = renderGiftThumb(item, iconSvg);
      const productLink = item.link || "https://www.wepink.com.br/";

      const wepinkLinkBtn = `
        <a href="${escapeHtml(productLink)}" target="_blank" rel="noopener noreferrer" class="btn-wepink-link" title="Ver produto no site oficial da WePink">
          <span>Ver na WePink</span>
          ${SVG_ICONS.externalLink}
        </a>
      `;

      if (item.reservado) {
        return `
          <div class="gift-card reserved" data-id="${item.id}">
            <div class="gift-card-main">
              ${thumbHtml}
              <div class="gift-card-info">
                <span class="gift-card-tag">${item.categoria}</span>
                <h4 class="gift-card-title">${escapeHtml(item.nome)}</h4>
                <p class="gift-card-suggestion">${escapeHtml(item.sugestao || '')}</p>
              </div>
            </div>
            <div class="gift-card-footer">
              <div class="gift-status-locked">
                ${SVG_ICONS.lock}
                <span>Já escolhido por <strong>${escapeHtml(item.reservadoPor || 'Convidado')}</strong></span>
              </div>
              <div class="gift-card-actions">
                ${wepinkLinkBtn}
                <button type="button" class="btn-gift-action btn-disabled" disabled aria-disabled="true">
                  Indisponível
                </button>
              </div>
            </div>
          </div>
        `;
      } else {
        return `
          <div class="gift-card available" data-id="${item.id}">
            <div class="gift-card-main">
              ${thumbHtml}
              <div class="gift-card-info">
                <span class="gift-card-tag">${item.categoria}</span>
                <h4 class="gift-card-title">${escapeHtml(item.nome)}</h4>
                <p class="gift-card-suggestion">${escapeHtml(item.sugestao || '')}</p>
              </div>
            </div>
            <div class="gift-card-footer">
              <span class="gift-status-available">
                <span class="status-sparkle">✦</span> Disponível
              </span>
              <div class="gift-card-actions">
                ${wepinkLinkBtn}
                <button type="button" class="btn-gift-action btn-pick" onclick="window.GiftsManager.abrirConfirmacao('${item.id}')">
                  <span>Presentear</span>
                  ${SVG_ICONS.sparkle}
                </button>
              </div>
            </div>
          </div>
        `;
      }
    }).join("");
  }

  function escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function showToast(msg) {
    let toast = document.getElementById("pixToast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "pixToast";
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<span>✨</span> <span>${msg}</span>`;
    toast.classList.add("visible");
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
      toast.classList.remove("visible");
    }, 3200);
  }

  // Interface Pública
  window.GiftsManager = {
    init: initUI,
    filtrarCategoria: function(cat) {
      categoriaAtiva = cat;
      renderCategories();
      renderGiftItems();
    },

    buscar: function(termo) {
      termoBusca = termo;
      renderGiftItems();
    },

    limparFiltros: function() {
      categoriaAtiva = "Todos";
      termoBusca = "";
      const searchInput = document.getElementById("giftSearchInput");
      if (searchInput) searchInput.value = "";
      renderCategories();
      renderGiftItems();
    },

    abrirModal: function(pushHistory = true) {
      const modal = document.getElementById("giftModal");
      if (modal) {
        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");
        document.body.classList.add("modal-open");
        initUI();
        if (pushHistory && window.history && !window.location.hash.includes("lista-presentes")) {
          window.history.pushState({ modal: "gifts", page: "pg5" }, "", "#lista-presentes");
        }
      }
    },

    fecharModal: function(isPopState = false) {
      const modal = document.getElementById("giftModal");
      if (modal && modal.classList.contains("active")) {
        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");
        document.body.classList.remove("modal-open");
        if (!isPopState && window.history && window.location.hash.includes("lista-presentes")) {
          window.history.back();
        }
      }
    },

    abrirConfirmacao: function(id, pushHistory = true) {
      const items = GiftsRepository.getAll();
      const gift = items.find(i => i.id === id);
      if (!gift || gift.reservado) return;

      itemSelecionadoParaReserva = gift;

      const preview = document.getElementById("reserveItemPreview");
      if (preview) {
        const iconSvg = getItemIconSvg(gift.tipoIcone);
        const thumbHtml = gift.imagem 
          ? `<div class="reserve-thumb"><img src="${escapeHtml(gift.imagem)}" alt="${escapeHtml(gift.nome)}" /></div>`
          : `<div class="reserve-cameo">${iconSvg}</div>`;

        preview.innerHTML = `
          ${thumbHtml}
          <div class="reserve-info">
            <span class="reserve-tag">${gift.categoria}</span>
            <h4 class="reserve-name">${escapeHtml(gift.nome)}</h4>
            <p class="reserve-sub">${escapeHtml(gift.sugestao || '')}</p>
            ${gift.link ? `<a href="${escapeHtml(gift.link)}" target="_blank" rel="noopener noreferrer" class="reserve-link-wepink">Ver na WePink ${SVG_ICONS.externalLink}</a>` : ''}
          </div>
        `;
      }

      const input = document.getElementById("guestNameInput");
      if (input) {
        input.value = "";
        setTimeout(() => input.focus(), 250);
      }

      const confirmModal = document.getElementById("reserveConfirmModal");
      if (confirmModal) {
        confirmModal.classList.add("active");
        confirmModal.setAttribute("aria-hidden", "false");
        if (pushHistory && window.history && !window.location.hash.includes("confirmar-presente")) {
          window.history.pushState({ modal: "confirmar-reserva", giftId: id, page: "pg5" }, "", "#confirmar-presente");
        }
      }
    },

    fecharConfirmacao: function(isPopState = false) {
      const confirmModal = document.getElementById("reserveConfirmModal");
      if (confirmModal && confirmModal.classList.contains("active")) {
        confirmModal.classList.remove("active");
        confirmModal.setAttribute("aria-hidden", "true");
        if (!isPopState && window.history && window.location.hash.includes("confirmar-presente")) {
          window.history.back();
        }
      }
      itemSelecionadoParaReserva = null;
    },

    confirmarReserva: function() {
      if (!itemSelecionadoParaReserva) return;

      const input = document.getElementById("guestNameInput");
      const nomeRaw = input ? input.value.trim() : "";
      const nomeFinal = nomeRaw || "Convidado Especial";

      const res = GiftsRepository.reserve(itemSelecionadoParaReserva.id, nomeFinal);
      if (res.success) {
        this.fecharConfirmacao();
        renderGiftItems();
        if (nomeRaw) {
          showToast(`Presente confirmado com carinho por ${nomeRaw}! Muito obrigado! 💖`);
        } else {
          showToast("Presente confirmado com carinho! Muito obrigado! 💖");
        }
      } else {
        alert(res.message || "Não foi possível reservar este presente.");
        this.fecharConfirmacao();
        renderGiftItems();
      }
    },

    resetarLista: function() {
      if (confirm("Deseja restaurar a lista oficial da WePink para o estado inicial?")) {
        GiftsRepository.resetToDefault();
        initUI();
        showToast("Lista restaurada para o catálogo oficial WePink! ✨");
      }
    }
  };

  window.abrirListaPresentes = function() {
    window.GiftsManager.abrirModal();
  };

  window.fecharListaPresentes = function() {
    window.GiftsManager.fecharModal();
  };

  window.fecharConfirmReserva = function() {
    window.GiftsManager.fecharConfirmacao();
  };

  window.confirmarReserva = function() {
    window.GiftsManager.confirmarReserva();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initUI);
  } else {
    initUI();
  }
})();
