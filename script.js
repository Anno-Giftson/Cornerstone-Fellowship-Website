// Ensure DOM is fully loaded before running script
document.addEventListener("DOMContentLoaded", function () {

  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');
  const links = document.querySelectorAll(".nav-list a");

  links.forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault();          
      navList.classList.remove("show");  
      localStorage.setItem("menuOpen", false);

      const href = this.getAttribute("href");
      setTimeout(function() {
          window.location.href = href;
      }, 300);  // wait for slide-out animation
    });
  });

  // Restore previous menu state WITHOUT triggering animations
  const wasOpen = localStorage.getItem("menuOpen") === "true";

  if (wasOpen) {
    navList.classList.add("show", "no-animate");
    navToggle.classList.add("open", "no-animate");

    // Remove the no-animate class so future clicks animate normally
    setTimeout(() => {
      navList.classList.remove("no-animate");
      navToggle.classList.remove("no-animate");
    }, 50);
  }

  // Toggle menu open/close
  navToggle.addEventListener('click', () => {
    navList.classList.toggle('show');
    navToggle.classList.toggle('open');

    // Save menu state
    const isOpen = navList.classList.contains("show");
    localStorage.setItem("menuOpen", isOpen);
  });

  // Set current year
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // --- Google Maps fallback logic ---
  function loadMap(apiDivId, lat, lng, zoom, embedUrl) {
    const apiDiv = document.getElementById(apiDivId);
    try {
      if (!google || !google.maps) throw "API not loaded";
      new google.maps.Map(apiDiv, {
        center: { lat, lng },
        zoom: zoom
      });
    } catch (err) {
      const wrapper = apiDiv.parentElement;
      wrapper.innerHTML = `<iframe src="${embedUrl}" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    }
  }

  loadMap('delaware-map', 39.6814379, -75.6126781, 15, document.querySelector('#delaware-map').parentElement.dataset.embed);
  loadMap('pa-map', 40.1190346, -75.4250808, 15, document.querySelector('#pa-map').parentElement.dataset.embed);
  loadMap('nj-map', 40.383, -74.54, 15, document.querySelector('#nj-map').parentElement.dataset.embed);

});
























