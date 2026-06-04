# 💼 MyJobs — Rastreador de Vagas

Um aplicativo PWA para acompanhar suas candidaturas de emprego em um kanban visual, simples e rápido. Funciona no celular como um app nativo.

---

## ✨ Funcionalidades

- **Kanban com 5 colunas:** Aplicado → Entrevista → Teste/Case → Oferta → Recusado
- **Dados ilimitados** via IndexedDB (armazenamento interno do navegador, sem limites práticos)
- **Funciona offline** — Service Worker faz cache de todos os assets
- **Instalável no celular** — é um PWA completo (Android e iOS)
- **Exportar JSON** — botão para baixar backup dos seus dados
- Filtros por modalidade (Remoto, Presencial, Híbrido)
- Painel de estatísticas (total, entrevistas, taxa de retorno, ofertas)
- Design dark mode otimizado para mobile

---

## 🚀 Como usar

### Opção 1 — GitHub Pages (recomendado)

1. Faça fork ou suba este repositório no GitHub
2. Vá em **Settings → Pages → Source: main branch → / (root)**
3. Acesse o link gerado (ex: `https://seuuser.github.io/myjobs`)
4. No celular, toque em **"Adicionar à tela inicial"** para instalar como app

### Opção 2 — Local

```bash
# Qualquer servidor estático funciona. Exemplos:
npx serve .
python3 -m http.server 8080
```

Acesse `http://localhost:8080` e instale no celular via Wi-Fi.

---

## 📱 Instalar no celular

**Android (Chrome):**
Acesse o site → menu (⋮) → "Adicionar à tela inicial"

**iPhone (Safari):**
Acesse o site → botão compartilhar (□↑) → "Adicionar à Tela de Início"

---

## 🗃️ Armazenamento

Os dados ficam salvos no **IndexedDB** do navegador, que:
- Não tem limite prático (geralmente GBs disponíveis)
- Persiste entre sessões
- Funciona offline
- Não é apagado pelo navegador automaticamente (diferente do localStorage)

Use o botão **⬇ Exportar** no topo para fazer backup em JSON a qualquer momento.

---

## 📁 Estrutura

```
myjobs/
├── index.html      ← App completo (HTML + CSS + JS)
├── manifest.json   ← Configuração PWA
├── sw.js           ← Service Worker (offline + cache)
├── icons/
│   ├── icon-192.png
│   └── icon-512.png
└── README.md
```

---

## 🛠️ Personalização

Todo o código está no `index.html`. Para adicionar colunas, edite o array `COLS` no JavaScript:

```js
const COLS = [
  { id: 'aplicado',   label: 'Aplicado'    },
  { id: 'entrevista', label: 'Entrevista'  },
  { id: 'teste',      label: 'Teste / Case'},
  { id: 'oferta',     label: 'Oferta'      },
  { id: 'recusado',   label: 'Recusado'    },
];
```

---

## 📄 Licença

MIT — use, modifique e distribua livremente.
