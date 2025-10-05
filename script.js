// script.js - robust admin popup + session login

document.addEventListener('DOMContentLoaded', () => {
  console.log('script.js loaded — DOM ready');

  // Elements (tolerant selectors)
  const adminBtn = document.getElementById('admin-btn'); // invisible trigger (contact page)
  const adminPopup = document.getElementById('admin-popup');
  const closePopup = document.getElementById('close-popup') || document.querySelector('#admin-popup button[type="button"]');
  const adminForm = document.getElementById('admin-form') || document.getElementById('admin-login-form') || document.querySelector('#admin-popup form');
  const navAdmin = document.getElementById('nav-admin'); // admin nav link (hidden default)
  const logoutBtn = document.getElementById('logout-btn'); // optional floating logout

  if (!adminPopup) {
    console.error('admin-popup element not found. Make sure the HTML contains <div id="admin-popup">...</div>');
    // we can still continue for session logic
  }

  // open/close helpers
  function openAdminPopup() {
    if (!adminPopup) return;
    adminPopup.classList.add('show');
    adminPopup.style.display = 'block';
    adminPopup.setAttribute('aria-hidden', 'false');
    // autofocus first input if present
    const first = adminPopup.querySelector('input');
    if (first) first.focus();
    console.log('admin popup opened');
  }

  function closeAdminPopup() {
    if (!adminPopup) return;
    adminPopup.classList.remove('show');
    adminPopup.style.display = 'none';
    adminPopup.setAttribute('aria-hidden', 'true');
    // clear form inputs if present
    if (adminForm) {
      const inputs = adminForm.querySelectorAll('input');
      inputs.forEach(i => i.value = '');
    }
    console.log('admin popup closed and inputs cleared');
  }

  // Open popup when adminBtn is clicked (only exists on contact page)
  if (adminBtn) {
    adminBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openAdminPopup();
    });
    console.log('adminBtn listener attached');
  } else {
    console.log('adminBtn not present on this page (only on contact page).');
  }

  // Close popup when clicking the close button
  if (closePopup) {
    closePopup.addEventListener('click', (e) => {
      e.preventDefault();
      closeAdminPopup();
    });
    console.log('closePopup listener attached');
  } else {
    console.log('closePopup button not found inside popup (expected id="close-popup" or a button[type=button])');
  }

  // Click outside popup to close
  document.addEventListener('click', (e) => {
    if (!adminPopup) return;
    if (!adminPopup.classList.contains('show')) return;
    if (adminPopup.contains(e.target)) return; // clicked inside popup
    if (adminBtn && adminBtn.contains(e.target)) return; // clicked the trigger
    // otherwise clicked outside
    closeAdminPopup();
  });

  // Escape to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && adminPopup && adminPopup.classList.contains('show')) {
      closeAdminPopup();
    }
  });

  // Login form handling (tolerant field selectors)
  if (adminForm) {
    // locate username/password inputs inside the form
    const usernameInput = adminForm.querySelector('#username, #admin-username, input[name="username"], input[type="text"]');
    const passwordInput = adminForm.querySelector('#password, #admin-password, input[type="password"]');

    adminForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = usernameInput ? usernameInput.value.trim() : '';
      const password = passwordInput ? passwordInput.value.trim() : '';
      console.log('admin form submit:', { username: username ? '***' : '(empty)', password: password ? '***' : '(empty)' });

      // Simple credential check (placeholder)
      if (username === 'admin' && password === '1234') {
        // set session (cleared on tab close)
        sessionStorage.setItem('isLoggedIn', 'true');

        // reveal nav Admin link if present
        if (navAdmin) navAdmin.classList.remove('hidden');

        // reveal floating logout if present
        if (logoutBtn) logoutBtn.classList.remove('hidden');

        closeAdminPopup();

        // redirect to admin page
        window.location.href = 'admin.html';
      } else {
        alert('Incorrect username or password.');
        // keep popup open for retry and clear password field
        if (passwordInput) passwordInput.value = '';
      }
    });

    console.log('adminForm submit listener attached');
  } else {
    console.warn('admin form not found in DOM. Ensure you have <form id="admin-form"> or form inside #admin-popup.');
  }

  // On load, restore UI based on session
  if (sessionStorage.getItem('isLoggedIn') === 'true') {
    if (navAdmin) navAdmin.classList.remove('hidden');
    if (logoutBtn) logoutBtn.classList.remove('hidden');
    // Also ensure invisible admin trigger is hidden once logged in
    if (adminBtn) adminBtn.style.display = 'none';
    console.log('session found: admin UI shown');
  } else {
    if (navAdmin) navAdmin.classList.add('hidden');
    if (logoutBtn) logoutBtn.classList.add('hidden');
    if (adminBtn) adminBtn.style.display = 'block'; // show trigger on contact page if not logged in
    console.log('no session: admin UI hidden');
  }
});


















