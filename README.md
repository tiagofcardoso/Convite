# Convite Interativo Digital - Giovana 15 Anos 🌸✨

Convite digital moderno e responsivo para festa de 15 anos (Debutante), com música de fundo, transições animadas, contagem regressiva em tempo real e integração com o **Google Drive** e **Firebase Hosting**.

---

## 📁 Estrutura de Arquivos

- [`index.html`](file:///c:/Users/tiago/OneDrive/Documents/Developments/Convite/index.html) - Estrutura principal do convite interativo.
- [`config.js`](file:///c:/Users/tiago/OneDrive/Documents/Developments/Convite/config.js) - **Configuração centralizada**: links do Google Drive, chave Pix e data do evento.
- [`style.css`](file:///c:/Users/tiago/OneDrive/Documents/Developments/Convite/style.css) - Estilização completa no tema rosa com borboletas mágicas e responsividade (9:16).
- [`main.js`](file:///c:/Users/tiago/OneDrive/Documents/Developments/Convite/main.js) - Controle de páginas, áudio, cópia de Pix e temporizador.
- [`firebase.json`](file:///c:/Users/tiago/OneDrive/Documents/Developments/Convite/firebase.json) - Configuração para publicação no Firebase Hosting.
- `capa.jpg`, `pagina3.jpg`, `pagina4.jpg`, `pagina5.jpg` - Imagens das telas do convite.
- `musica.mp3` - Trilha musical de fundo.

---

## ⚙️ Como Personalizar os Links do Google Drive e Pix

Abra o arquivo [`config.js`](file:///c:/Users/tiago/OneDrive/Documents/Developments/Convite/config.js) e substitua os links pelos seus:

```javascript
const CONVITE_CONFIG = {
  nome: "Giovana",
  idade: "15 Anos",
  dataEventoIso: "2026-12-12T20:00:00-03:00", // 12/12/2026 às 20:00

  // Sua chave Pix para presentes
  chavePix: "18919333700",

  drive: {
    // 1. Link do Formulário do Google Drive para Confirmação de Presença
    rsvpUrl: "https://forms.gle/SEU_FORMULARIO",

    // 2. Link da pasta do Google Drive para upload de Fotos da festa
    fotosAlbumUrl: "https://drive.google.com/drive/folders/SUA_PASTA_FOTOS",

    // 3. Link da Lista de Presentes no Google Drive (Planilha ou Documento)
    listaPresentesUrl: "https://docs.google.com/spreadsheets/d/SUA_PLANILHA",

    // 4. Link do Manual / Informações no Google Drive
    manualUrl: "https://drive.google.com/file/d/SEU_MANUAL"
  },

  // Link do Local no Google Maps
  localizacaoMapsUrl: "https://maps.app.goo.gl/HDbWhZQsEqBhxTaR6?g_st=aw"
};
```

---

## 🚀 Como Publicar no Firebase Hosting

### Pré-requisito:
Ter o **Node.js** instalado na sua máquina.

### Passo a passo no terminal:

1. **Fazer login no Firebase** (se ainda não estiver conectado):
   ```bash
   npx firebase login
   ```

2. **Inicializar ou vincular seu projeto Firebase** (apenas na primeira vez):
   ```bash
   npx firebase use --add
   ```
   *(Selecione o projeto do Firebase que você criou no console: https://console.firebase.google.com)*

3. **Publicar online**:
   ```bash
   npx firebase deploy --only hosting
   ```

Após o comando, o Firebase fornecerá o link público do convite (ex: `https://seu-projeto.web.app`).
