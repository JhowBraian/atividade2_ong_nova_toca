**Projeto Nova Toca - ONG de Resgate de Coelhos**

**Descrição do Projeto**

Plataforma web para a ONG "Projeto Nova Toca", focada no resgate, reabilitação e adoção de coelhos. O site é voltado para visitantes, adotantes, voluntários e doadores, com foco nos projetos da ONG e no engajamento da comunidade.

Desenvolvido com HTML5 semântico, CSS3 moderno (Flexbox, Grid, Variáveis) e JavaScript, o projeto é totalmente responsivo (mobile-first), priorizando acessibilidade, performance e uma experiência de usuário interativa.

**Acesse o site**

Versão publicada: https://jhowbraian.github.io/atividade2_ong_nova_toca/

**Estrutura de Pastas**

O projeto está organizado da seguinte forma:

-   `/` (Raiz)
    -   `index.html`
    -   `projetos.html`
    -   `cadastro.html`
-   `/css`
    -   `styler.css` (Folha de estilos principal)
-   `/js`
    -   `main.js` (Script global do site)
-   `/imagens`
    -   (Todas as imagens do projeto)

**Páginas do Projeto**

* **index.html** – Página inicial com informações sobre o "Projeto Nova Toca", números de impacto e links para os trabalhos da ONG.
* **projetos.html** – Apresenta os principais projetos (Resgate, Adoção Consciente, Educação).
* **cadastro.html** – Formulário de cadastro de voluntários com máscaras de input e validação.

**Tecnologias e Recursos (Foco da Entrega II)**

Esta versão do projeto implementa um robusto sistema de CSS3 e JavaScript para criar uma interface moderna e funcional.

### 1. HTML5
* **HTML Semântico:** Uso correto de tags como `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>` e `<article>` para melhor estrutura e acessibilidade.

_

### 2. CSS3 (em `css/styler.css`)
* **Design System com Variáveis CSS:**
    * **Paleta de Cores:** Definição de cores primárias, secundárias, de acento e neutras em variáveis (`:root`) para fácil manutenção.
    * **Tipografia Hierárquica:** Múltiplos tamanhos de fonte (`--font-size-sm`, `--font-size-base`, `--font-size-lg`, etc.) para títulos e parágrafos.
    * **Espaçamento Modular:** Sistema de espaçamento baseado em `rem` (equivalente a 8px, 16px, 24px, etc.) para consistência visual.

* **Leiautes Responsivos (Mobile-First):**
    * **CSS Grid:** Usado para o layout principal de componentes como `.impact-grid`, `.work-grid` e `footer`.
    * **Flexbox:** Usado para alinhamento interno de componentes, como o `<header>` e grupos de formulário.
    * **Breakpoints:** Implementação de 5 breakpoints (`1200px`, `992px`, `768px`, `576px`, `480px`) para adaptar o layout a diferentes tamanhos de tela.
    * **Sistema de 12 Colunas:** Os leiautes em grid (`.impact-grid`, `.work-grid`) são baseados em um sistema de 12 colunas.

* **Componentes de Interface (UI):**
    * **Menu Hambúrguer:** Navegação totalmente responsiva que se transforma em um menu "hambúrguer" (☰) em dispositivos móveis.
    * **Cards Responsivos:** Componentes de card (`.work-card`, `.project-item`) que se adaptam ao layout, empilhando em telas menores.
    * **Botões com Estados:** Botões (`.cta-button`) com estilos visuais claros para os estados `:hover`, `:focus` e `:active`.
    * **Formulários Estilizados:** Formulários com campos (`<input>`, `<fieldset>`) estilizados e validação visual (`:invalid`, `:valid`).
    * **Componentes de Feedback:** Mensagens de `.success` e `.error` estilizadas para o envio do formulário.

### 3. JavaScript (em `js/main.js`)
* **DOM Manipulation:**
    * **Menu Hambúrguer:** Script que controla o clique no botão para adicionar/remover a classe `.is-active` e exibir/ocultar o menu mobile.
* **Eventos e Formulários:**
    * **Máscaras de Input:** Funções que aplicam máscaras em tempo real para os campos de CPF, Telefone e CEP.
    * **Consumo de API (ViaCEP):** Script que utiliza `fetch` para buscar o endereço automaticamente após o preenchimento do CEP.
    * **Validação de Formulário:** Script que intercepta o evento `submit`, verifica a validade (`form.checkValidity()`) e exibe as mensagens de sucesso ou erro.