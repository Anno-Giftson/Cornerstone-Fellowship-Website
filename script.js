// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
navToggle.addEventListener('click', () => {
  navList.classList.toggle('show');
});

// Set year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Admin Login (contact page only)
const adminBtn = document.getElementById('admin-btn');
const adminPopup = document.getElementById('admin-popup');
const closePopup = document.getElementById('close-popup');
const adminForm = document.getElementById('admin-form');
const navAdmin = document.getElementById('nav-admin');

if(adminBtn){
  adminBtn.addEventListener('click', () => {
    adminPopup.style.display = 'block';
  });
}

if(closePopup){
  closePopup.addEventListener('click', () => {
    adminPopup.style.display = 'none';
    adminForm.reset();
  });
}

if(adminForm){
  adminForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username === "admin" && password === "1234"){
      // Show Admin button
      if(navAdmin) navAdmin.classList.remove('hidden');

      // Show Logout button
      showLogoutButton();

      // Hide popup
      adminPopup.style.display = 'none';
      adminForm.reset();

      // Redirect to admin page
      window.location.href = "admin.html";
    } else {
      alert("Incorrect username or password.");
      adminForm.reset();
    }
  });
}

// Logout button functions
function showLogoutButton(){
  if(!document.getElementById('nav-logout')){
    const logoutLi = document.createElement('li');
    const logoutA = document.createElement('a');
    logoutA.href = "#";
    logoutA.id = 'nav-logout';
    logoutA.textContent = 'Logout';
    logoutA.addEventListener('click', ()=>{
      if(navAdmin) navAdmin.classList.add('hidden');
      removeLogoutButton();
    });
    logoutLi.appendChild(logoutA);
    document.querySelector('.nav-list').appendChild(logoutLi);
  }
}

function removeLogoutButton(){
  const logoutBtn = document.getElementById('nav-logout');
  if(logoutBtn) logoutBtn.parentElement.remove();
}








