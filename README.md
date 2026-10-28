# Sistema de Login com Supabase

Autenticação com HTML, CSS e JavaScript usando o Supabase Auth.
Após o login, o usuário acessa uma área restrita (`dashboard.html`); sem sessão ativa, é redirecionado ao login.

## Como usar
1. Crie um projeto no Supabase e um usuário em Authentication > Users (marque Auto Confirm User).
2. Em `script.js`, preencha `SUPABASE_URL` e `SUPABASE_ANON_KEY` (Project Settings > API).
3. Abra `index.html` com Live Server.

## Arquivos
- `index.html` – tela de login
- `dashboard.html` – área restrita
- `script.js` – lógica de autenticação
- `style.css` – estilos
