// ============================================================
// CONFIGURAÇÕES DO CONVITE - GIOVANA 15 ANOS
// Altere aqui seus links do Google Drive, Chave Pix e Detalhes
// ============================================================

const CONVITE_CONFIG = {
  // Nome e Idade
  nome: "Giovana",
  idade: "15 Anos",

  // Data e hora do evento (12 de Dezembro de 2026 às 19:00)
  dataEventoIso: "2026-12-12T19:00:00-03:00",

  // Chave Pix para receber presentes e contribuição do chopp
  chavePix: "06034129982", // CPF 060341299-82
  chavePixFormatada: "060341299-82",
  pixCopiaECola: "00020101021126330014br.gov.bcb.pix0111060341299825204000053039865802BR5907GIOVANA6009PIRAQUARA62070503***63041A54",

  // Links de Integração com o Google Drive
  drive: {
    // 1. Link para confirmação de presença (ex: Formulário Google Forms ou Planilha Google Sheets)
    rsvpUrl: "https://forms.google.com",

    // 2. Link para pasta do Google Drive de fotos compartilhadas do evento
    fotosAlbumUrl: "https://drive.google.com/drive/folders/1MwWXJq6Tze003JjkJFW9rQVh4MGv58e9?usp=sharing",

    // 3. Link da Lista de Presentes no Google Drive (Planilha Google Sheets ou Doc)
    listaPresentesUrl: "https://docs.google.com/spreadsheets",

    // 4. Link do Manual do Convidado / Informações (Google Drive Doc ou PDF)
    manualUrl: "https://drive.google.com"
  },

  // Configuração para envio direto ao Google Forms (Planilha Google Sheets)
  googleForms: {
    // URL de submissão do formulário
    formActionUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdTnhpeWUphsqVvLJLtUQdaF-JYlxMavaz_mWrlULKwJJ85VQ/formResponse",
    // ID do campo de Nome no formulário
    entryNomeId: "entry.425234776"
  },

  // Endereço do Evento
  endereco: {
    local: "R. Carlos Belão, 570",
    bairro: "Vila Juliana",
    cidade: "Piraquara - PR",
    cep: "83306-120"
  },

  // Link da Localização do Evento no Google Maps
  localizacaoMapsUrl: "https://www.google.com/maps/place/R.+Carlos+Bel%C3%A3o,+570+-+Vila+Juliana,+Piraquara+-+PR,+83306-120,+Brasil/@-25.4570171,-49.0714279,17z/data=!3m1!4b1!4m6!3m5!1s0x94dcf2e3a1a18ba1:0x38d1d219b84ddd6f!8m2!3d-25.457022!4d-49.068853!16s%2Fg%2F11f2sx36l8?entry=ttu&g_ep=EgoyMDI2MDkyOC4wIKXMDSoASAFQAw%3D%3D"
};

// Torna acessível globalmente no navegador
window.CONVITE_CONFIG = CONVITE_CONFIG;
