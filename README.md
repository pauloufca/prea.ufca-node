# prea.ufca
Sistema de Recarga do RU

# 1. Projeto de acessibilidade para a interface https://prea.ufca.edu.br

> **Observação:** Apresentação do modelo de interface, com implementação de boas práticas de acessibilidade (WCAG 2.1 nível AA), WAI-ARIA e padrões do Governo Brasileiro.

---
## 1.1 Links consultados

- https://emag.governoeletronico.gov.br/  
- https://epwg.governoeletronico.gov.br/cartilha-codificacao.html  
- https://epwg.governoeletronico.gov.br/cartilha-usabilidade.html  
- https://www.gov.br/ds/home  
- https://acervo.ceweb.br/acervos/conteudo/01dcf0ea-bfdb-4795-8c92-1cca32e5dcab  
- https://acervo.ceweb.br/acervos/conteudo/9ef3187c-fcd9-4dfd-83c9-ce79d42f396d  
- https://acervo.ceweb.br/acervos/conteudo/81415fe5-e2f1-40e4-be30-c56f6b1c27b9  
- https://www.w3.org/WAI/standards-guidelines/aria/  
- https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1  

### 1.2. Software NVDA

- https://www.nvaccess.org/download/
- Software utilizado nos testes de acessibilidade
- Carregar o software primeiramente e depois abrir a aplicação. Após isso, escutar toda a leitura.  

## 1.3. Estrutura Geral

```text
modelo/
├── controllers/
│   └── HomeController.js
├── index.js
├── package.json
├── package-lock.json
├── views/
│   └── home.js
├── public/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
└── vercel.json
```
# 2. Modelo 

## “Simples e de Alto Contraste (Fundo Claro)”

### 2.1 Objetivo:

    - Máximo contraste (branco e preto);

    - Uso de landmarks (<header>, <main>, <footer>);

    - “Skip to content” para navegação por teclado;

    - Botão “Entrar” semanticamente marcado como <a role="button"> com aria-label;

    - Suporte a NVDA: foco visível, atributos aria- mínimos para leitura correta.

### 2.2 Comentários de acessibilidade no HTML (views/home.ejs)

    - <a href="#main-content" class="skip-link">Ir para o conteúdo principal</a>: permite ao usuário de leitor de tela ou teclado “pular” banners, menus, etc. (WCAG 2.4.1).

    - <h1 class="visually-hidden">PREA UFCA – Portal de Acesso</h1>: título principal invisível (aplicado visually-hidden via CSS) para leitores de tela.

    - <section aria-labelledby="login-title"> + <h2 id="login-title" class="visually-hidden">: garante que NVDA anuncie corretamente o propósito da seção “Área de Login”.

    - <a href="/login" role="button" aria-label="Entrar no sistema de recarga do RU" class="btn-login">: link estilizado como botão; role="button" e aria-label explicam o destino ao leitor de tela (WCAG 2.5.3: área de clique ).

    - Uso de landmarks (role="banner", role="main", role="contentinfo") para orientar navegação por leitores de tela (e-MAG/Recomendação Geral de Uso de ARIA).

