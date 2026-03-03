# Visão Astro Diária

Aplicação React que exibe a **Imagem do Dia** (APOD) fornecida pela API da NASA.
O foco é mostrar diariamente — e atualizar automaticamente duas vezes por dia — a foto ou vídeo astronômico mais recente, incluindo título e data.

## 📦 Funcionalidades

- Consome a API NASA APOD para obter a mídia do dia
- Detecta automaticamente se o recurso é imagem ou vídeo (`.mp4`, `.webm`, etc)
- Atualização a cada 12 horas (duas vezes por dia) enquanto a aplicação estiver aberta
- Layout responsivo com header, conteúdo centralizado e footer
- Informações do autor com links para LinkedIn e GitHub
- Configuração da `api_key` via `config.json` ou variáveis de ambiente

## Tela



## 🔧 Estrutura do projeto

```
src/
├── components/
│   ├── HeaderFiles/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.css
│   │   └── Footer.css
│   └── Imagem/
│       ├── ImagemCard.tsx
│       └── ImagemCard.css
├── config/
│   └── config.json
├── services/
│   ├── NasaApiService.ts
│   └── ImagemService.ts
├── types/
│   └── ImagemNasa.ts
├── App.tsx
└── index.tsx
```

## ✍️ Autor

Desenvolvido por **Emmanuel Martins**
- LinkedIn: https://www.linkedin.com/in/emmanuelmartinsb/
- GitHub: https://github.com/EmmanuelMartins21

---

*Projeto educativo que consome dados públicos da NASA. A chave de API deve ser mantida em segurança.*
