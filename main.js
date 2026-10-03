// ============================================================
// CONVITE INTERATIVO GIOVANA 15 ANOS - LÓGICA E INTERATIVIDADE
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  const cfg = window.CONVITE_CONFIG || {};

  const cover = document.getElementById("pdCover");
  const startBtn = document.getElementById("startBtn");
  const video = document.getElementById("video");
  const skipIntroBtn = document.getElementById("skipIntroBtn");
  const mus = document.getElementById("mus");
  const pd3 = document.getElementById("pd3");
  const pd4 = document.getElementById("pd4");
  const pd5 = document.getElementById("pd5");
  const phone = document.querySelector(".phone");

  // Aplicar link do Google Maps
  const btnMaps = document.getElementById("btnMaps");
  if (btnMaps && cfg.localizacaoMapsUrl) {
    btnMaps.href = cfg.localizacaoMapsUrl;
  }

  // Botão FOTOS (Câmera) -> Abre a pasta do Google Drive para upload de fotos
  const btnPhotos = document.getElementById("btnPhotos");
  if (btnPhotos && cfg.drive && cfg.drive.fotosAlbumUrl) {
    btnPhotos.href = cfg.drive.fotosAlbumUrl;
  }


  const btnDriveGifts = document.getElementById("btnDriveGifts");
  if (btnDriveGifts && cfg.drive && cfg.drive.listaPresentesUrl) {
    btnDriveGifts.href = cfg.drive.listaPresentesUrl;
  }

  let audioUnlocked = false;

  // Atualizar imagem de fundo borrada
  function updateBlurBg(imageSrc) {
    if (phone && imageSrc) {
      phone.style.setProperty('--yup-blur-bg', `url("${imageSrc}")`);
      phone.style.setProperty('--yup-blur-opacity', '1');
    }
  }

  // Inicializar capa como visível
  if (cover) {
    cover.style.display = 'block';
    requestAnimationFrame(() => cover.classList.add('show'));
    updateBlurBg('capa.jpg');
  }

  // Desbloqueio e reprodução do áudio de fundo
  function unlockAudio() {
    if (!mus || audioUnlocked) return;
    mus.muted = false;
    mus.volume = 1;
    const playPromise = mus.play();
    if (playPromise && typeof playPromise.then === 'function') {
      playPromise.then(() => {
        audioUnlocked = true;
      }).catch(() => {});
    }
  }

  window.addEventListener('touchstart', unlockAudio, { once: true, passive: true });
  window.addEventListener('pointerdown', unlockAudio, { once: true });

  // Pausar/retomar música quando o usuário sai/volta à página
  document.addEventListener('visibilitychange', () => {
    if (!mus || !audioUnlocked) return;
    if (document.hidden) {
      mus.pause();
    } else {
      mus.play().catch(() => {});
    }
  });

  // Ocultar todas as mídias
  function hideAllMedia() {
    if (cover) {
      cover.classList.remove("show");
      cover.style.display = "none";
    }
    if (video) {
      video.classList.remove("show");
      video.style.display = "none";
      try { video.pause(); } catch (e) {}
    }
    [pd3, pd4, pd5].forEach(el => {
      if (el) {
        el.classList.remove("show");
        el.style.display = "none";
      }
    });
  }

  // ============================================================
  // GERENCIAMENTO DE HISTÓRICO E NAVEGAÇÃO NATIVA (ANDROID / APPLE)
  // Permite que o botão Voltar do sistema volte de página/modal
  // sem sair do convite!
  // ============================================================

  let currentPage = 'capa';

  // Configurar estado base inicial no histórico
  if (window.history && window.history.replaceState && !window.location.hash) {
    window.history.replaceState({ page: 'capa' }, '', window.location.pathname + window.location.search);
  }

  // Limpar classes de página do body
  function clearPgClasses() {
    document.body.classList.remove("pg3", "pg4", "pg5");
  }

  // Mostrar Capa (inicial)
  window.mostrarCapa = function(pushHistory = false) {
    currentPage = 'capa';
    hideSkipIntroBtn();
    clearPgClasses();
    hideAllMedia();
    document.body.classList.remove("started");
    if (cover) {
      cover.style.display = 'block';
      requestAnimationFrame(() => cover.classList.add('show'));
      updateBlurBg('capa.jpg');
    }
    if (startBtn) startBtn.style.display = 'block';

    if (pushHistory && window.history) {
      window.history.pushState({ page: 'capa' }, '', window.location.pathname);
    }
  };

  // Mostrar Página 3 (Principal)
  window.mostrarPg3 = function(pushHistory = true) {
    if (pushHistory && currentPage !== 'pg3' && window.history) {
      window.history.pushState({ page: 'pg3' }, '', '#convite');
    }
    currentPage = 'pg3';
    document.body.classList.add("started");
    hideSkipIntroBtn();
    clearPgClasses();
    document.body.classList.add("pg3");
    hideAllMedia();
    if (pd3) {
      pd3.style.display = 'block';
      requestAnimationFrame(() => pd3.classList.add("show"));
      updateBlurBg('pagina3.jpg');
    }
  };

  // Mostrar Página 4 (Confirmação de Presença)
  window.mostrarPg4 = function(pushHistory = true) {
    if (pushHistory && currentPage !== 'pg4' && window.history) {
      window.history.pushState({ page: 'pg4' }, '', '#confirmacao');
    }
    currentPage = 'pg4';
    document.body.classList.add("started");
    hideSkipIntroBtn();
    clearPgClasses();
    document.body.classList.add("pg4");
    hideAllMedia();
    if (pd4) {
      pd4.style.display = 'block';
      requestAnimationFrame(() => pd4.classList.add("show"));
      updateBlurBg('pagina4.jpg?v=3');
    }
  };

  // Mostrar Página 5 (Lista de Presentes / Chave Pix)
  window.mostrarPg5 = function(pushHistory = true) {
    if (pushHistory && currentPage !== 'pg5' && window.history) {
      window.history.pushState({ page: 'pg5' }, '', '#presentes');
    }
    currentPage = 'pg5';
    document.body.classList.add("started");
    hideSkipIntroBtn();
    clearPgClasses();
    document.body.classList.add("pg5");
    hideAllMedia();
    if (pd5) {
      pd5.style.display = 'block';
      requestAnimationFrame(() => pd5.classList.add("show"));
      updateBlurBg('pagina5.jpg');
    }
  };

  // Voltar genérico utilizado pelos botões de tela (btnBackPg4, btnBackPg5, etc.)
  window.voltarNavegacao = function() {
    if (window.history && window.history.length > 1 && window.location.hash) {
      window.history.back();
    } else {
      window.mostrarPg3(false);
    }
  };

  // Ouvinte do evento 'popstate' do navegador / Android / iOS
  window.addEventListener('popstate', (e) => {
    // 1. Se o modal de confirmação de reserva estiver aberto, fecha ele
    const confirmModal = document.getElementById("reserveConfirmModal");
    if (confirmModal && confirmModal.classList.contains("active")) {
      if (window.GiftsManager && window.GiftsManager.fecharConfirmacao) {
        window.GiftsManager.fecharConfirmacao(true);
      }
      return;
    }

    // 2. Se o modal da lista de presentes estiver aberto, fecha ele
    const giftModal = document.getElementById("giftModal");
    if (giftModal && giftModal.classList.contains("active")) {
      if (window.GiftsManager && window.GiftsManager.fecharModal) {
        window.GiftsManager.fecharModal(true);
      }
      return;
    }

    // 3. Se a splash de endereço estiver aberta, fecha
    const venueSplash = document.getElementById("venueSplash");
    if (venueSplash && venueSplash.classList.contains("active")) {
      venueSplash.classList.remove("active");
      return;
    }

    // 4. Navegação entre páginas do convite
    const state = e.state;
    if (state && state.page) {
      if (state.page === 'pg3') {
        window.mostrarPg3(false);
      } else if (state.page === 'pg4') {
        window.mostrarPg4(false);
      } else if (state.page === 'pg5') {
        window.mostrarPg5(false);
      } else if (state.page === 'capa') {
        window.mostrarCapa(false);
      }
    } else {
      // Se não houver state no evento, orienta-se pela hash da URL
      const hash = window.location.hash;
      if (!hash || hash === '#' || hash === '') {
        window.mostrarCapa(false);
      } else if (hash === '#convite') {
        window.mostrarPg3(false);
      } else if (hash === '#confirmacao') {
        window.mostrarPg4(false);
      } else if (hash === '#presentes') {
        window.mostrarPg5(false);
      }
    }
  });

  // Restaurar página correta se houver hash na inicialização
  if (window.location.hash === '#convite') {
    setTimeout(() => window.mostrarPg3(false), 50);
  } else if (window.location.hash === '#confirmacao') {
    setTimeout(() => window.mostrarPg4(false), 50);
  } else if (window.location.hash === '#presentes') {
    setTimeout(() => window.mostrarPg5(false), 50);
  } else if (window.location.hash === '#lista-presentes') {
    setTimeout(() => {
      window.mostrarPg5(false);
      if (window.abrirListaPresentes) window.abrirListaPresentes();
    }, 50);
  }

  function showSkipIntroBtn() {
    if (skipIntroBtn) skipIntroBtn.style.display = "inline-flex";
  }

  function hideSkipIntroBtn() {
    if (skipIntroBtn) skipIntroBtn.style.display = "none";
  }

  // Evento ao Clicar na Capa Inicial (Start)
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      document.body.classList.add("started");
      unlockAudio();

      if (startBtn) startBtn.style.display = "none";
      if (cover) {
        cover.classList.remove("show");
        cover.style.display = "none";
      }

      // Transição para a Página 3 com registro no histórico
      window.mostrarPg3(true);
    });
  }

  // Botão Pular Abertura
  if (skipIntroBtn) {
    skipIntroBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (video) {
        try { video.pause(); } catch (err) {}
      }
      window.mostrarPg3(true);
    });
  }

  // Toast de Notificação Unificado
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
    }, 2400);
  }

  // Função Copiar Chave Pix com Toast Notificação
  window.copiarPix = function(chaveCustom) {
    const chave = chaveCustom || (window.CONVITE_CONFIG && window.CONVITE_CONFIG.chavePix) || "06034129982";
    if (!chave) return;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(chave)
        .then(() => showToast("Chave Pix copiada com sucesso!"))
        .catch(() => showToast("Chave Pix copiada!"));
    } else {
      const ta = document.createElement("textarea");
      ta.value = chave;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); } catch (e) {}
      document.body.removeChild(ta);
      showToast("Chave Pix copiada!");
    }
  };

  // Expandir / Recolher Card do Chopp na Página 4
  window.toggleChoppCard = function() {
    const card = document.getElementById("choppCard");
    const btn = document.getElementById("btnToggleChopp");
    const body = document.getElementById("choppCardBody");
    if (!card) return;

    const isExpanded = card.classList.contains("expanded");
    if (isExpanded) {
      card.classList.remove("expanded");
      if (btn) btn.setAttribute("aria-expanded", "false");
      if (body) body.setAttribute("aria-hidden", "true");
    } else {
      card.classList.add("expanded");
      if (btn) btn.setAttribute("aria-expanded", "true");
      if (body) body.setAttribute("aria-hidden", "false");
    }
  };

  // Abrir Aplicativo do Banco via Pix Copia e Cola / Intent
  window.abrirAppBanco = function(chaveCustom) {
    const pixPayload = "00020101021226330014br.gov.bcb.pix0111060341299825204000053039865802BR5907GIOVANA6009PIRAQUARA62070503***6304F2CD";
    const chave = chaveCustom || "060341299-82";

    // Copia o código Pix Copia e Cola automaticamente para o usuário
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(pixPayload).catch(() => {});
    }

    showToast("Código Pix copiado! Abrindo aplicativo do banco... ✨");

    // Tentativa de acionamento do protocolo bancário móvel
    setTimeout(() => {
      try {
        window.location.href = `pix:${pixPayload}`;
      } catch (e) {}
    }, 350);
  };

  // Contagem Regressiva em Tempo Real (12 de Dezembro de 2026 às 20h)
  function padZero(val) {
    return String(Math.max(0, Math.floor(val))).padStart(2, "0");
  }

  function updateCountdown() {
    const defaultDate = (window.CONVITE_CONFIG && window.CONVITE_CONFIG.dataEventoIso) || "2026-12-12T20:00:00-03:00";
    document.querySelectorAll(".js-countdown").forEach((el) => {
      const targetIso = el.getAttribute("data-countdown-target") || defaultDate;
      const targetMs = new Date(targetIso).getTime();
      const nowMs = Date.now();
      const diffMs = Math.max(0, targetMs - nowMs);
      const totalSeconds = Math.floor(diffMs / 1000);

      const days = Math.floor(totalSeconds / 86400);
      const hours = Math.floor((totalSeconds % 86400) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      const daysEl = el.querySelector(".cd-days");
      const hoursEl = el.querySelector(".cd-hours");
      const minsEl = el.querySelector(".cd-minutes");
      const secsEl = el.querySelector(".cd-seconds");

      if (daysEl) daysEl.textContent = padZero(days);
      if (hoursEl) hoursEl.textContent = padZero(hours);
      if (minsEl) minsEl.textContent = padZero(minutes);
      if (secsEl) secsEl.textContent = padZero(seconds);
    });
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  // Marcar Evento na Agenda do Telefone (Sem baixar arquivo .ics)
  function buildCalendarUrls() {
    const nome = cfg.nome || "Giovana";
    const idade = cfg.idade || "15 Anos";
    const dataIso = cfg.dataEventoIso || "2026-12-12T20:00:00-03:00";
    const endereco = cfg.endereco || {};
    const local = [endereco.local, endereco.bairro, endereco.cidade].filter(Boolean).join(", ") || "R. Carlos Belão, 570 - Vila Juliana, Piraquara - PR";
    const mapsUrl = cfg.localizacaoMapsUrl || "";

    const eventDate = new Date(dataIso);
    // Duração do evento: 5h30min
    const endDate = new Date(eventDate.getTime() + (5.5 * 60 * 60 * 1000));

    function toCompactUtc(d) {
      return d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
    }

    const startUtc = toCompactUtc(eventDate);
    const endUtc = toCompactUtc(endDate);

    const title = `🦋 ${nome} - ${idade}`;
    const details = `Festa de ${idade} da ${nome}! ✨\nVenha comemorar esse momento tão especial conosco!\n\nLocal: ${local}\nComo chegar: ${mapsUrl}`;

    const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=20261212T200000/20261213T010000&ctz=America/Sao_Paulo&details=${encodeURIComponent(details)}&location=${encodeURIComponent(local)}`;

    return {
      googleCalUrl,
      appleCalUrl: "convite.ics"
    };
  }

  // Detectar plataforma (iOS / Android / Desktop)
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const isCriOS = /CriOS/i.test(navigator.userAgent);

  const calUrls = buildCalendarUrls();

  // Configurar o botão da data para abrir diretamente a agenda correta
  const eventDateLabel = document.getElementById("eventDateLabel");
  if (eventDateLabel) {
    if (isIOS && !isCriOS) {
      // No Safari do iPhone, abrir convite.ics inline exibe nativamente a folha de adição da Apple Agenda
      eventDateLabel.href = calUrls.appleCalUrl;
      eventDateLabel.target = "_self";
    } else {
      // No Android e Computador, abre diretamente o Google Agenda pronto para salvar
      eventDateLabel.href = calUrls.googleCalUrl;
      eventDateLabel.target = "_blank";
      eventDateLabel.rel = "noopener";
    }

    eventDateLabel.addEventListener("click", () => {
      showToast("Abrindo na sua agenda... ✨");
    });
  }

  // Função global de contingência
  window.addToCalendar = function() {
    showToast("Abrindo na sua agenda... ✨");
    if (isIOS && !isCriOS) {
      window.location.href = calUrls.appleCalUrl;
    } else {
      window.open(calUrls.googleCalUrl, "_blank");
    }
  };
});
