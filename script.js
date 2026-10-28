// ===== CONFIGURAÇÃO: cole aqui os dados do SEU projeto Supabase =====
const SUPABASE_URL = 'https://SEU_PROJECT_ID.supabase.co';
const SUPABASE_ANON_KEY = 'COLE_SUA_ANON_KEY_AQUI';
// ====================================================================

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ---------- Página de login ----------
const form = document.getElementById('login-form');
if (form) {
  // se já estiver logado, vai direto para a área restrita
  supabaseClient.auth.getSession().then(({ data }) => {
    if (data.session) window.location.href = 'dashboard.html';
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const msg = document.getElementById('mensagem');
    msg.textContent = 'Entrando...';

    const { error } = await supabaseClient.auth.signInWithPassword({
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
    });

    if (error) {
      msg.textContent = 'E-mail ou senha incorretos.';
      return;
    }
    window.location.href = 'dashboard.html';
  });
}

// ---------- Área restrita ----------
const area = document.getElementById('area-restrita');
if (area) {
  (async () => {
    const { data: { session } } = await supabaseClient.auth.getSession();
    if (!session) {
      window.location.href = 'index.html'; // não logado: volta ao login
      return;
    }
    document.getElementById('user-email').textContent = session.user.email;
    area.hidden = false; // só mostra o conteúdo se houver sessão
  })();

  document.getElementById('logout').addEventListener('click', async () => {
    await supabaseClient.auth.signOut();
    window.location.href = 'index.html';
  });
}
