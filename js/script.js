
// header-section start
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navLinks.forEach(l => l.classList.remove('active')); // remove active from all
      this.classList.add('active'); // add active to clicked one
    });
  });
});

// Header-section end

// ///////// Hero section script start //////////
const carousel = document.getElementById('heroCarousel');
const heroText = document.querySelector('.hero-content h1');

carousel.addEventListener('slid.bs.carousel', function () {
  const activeSlide = document.querySelector('.carousel-item.active');
  const newText = activeSlide.getAttribute('data-text');

  // Animate out
  heroText.classList.remove('show');

  // Wait for hide animation
  setTimeout(() => {
    heroText.textContent = newText;

    // Animate in
    heroText.classList.add('show');
  }, 1000); // smooth transition delay
});

// Initial show on page load
window.addEventListener('load', () => {
  heroText.classList.add('show');
});


// ////////// Hero section script end /////////


// ///////////////////// 
const toggleBtn = document.getElementById('toggleButton');
const hiddenRow = document.getElementById('moreAwards');

toggleBtn.addEventListener('click', () => {
  hiddenRow.style.display = hiddenRow.style.display === 'none' || hiddenRow.style.display === '' ? 'flex' : 'none';
  toggleBtn.innerText = hiddenRow.style.display === 'flex' ? 'View Less' : 'View More';
});
// ////////////////////

// ////////////////////// certificates script start
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".certificate-item");
  const btn = document.getElementById("loadMoreCertificates");
  let visibleCount = 8;

  function showCertificates(count) {
    items.forEach((item, index) => {
      if (index < count) item.classList.add("visible");
      else item.classList.remove("visible");
    });
  }

  showCertificates(visibleCount);

  btn.addEventListener("click", function () {
    if (visibleCount >= items.length) {
      visibleCount = 8;
      btn.textContent = "Show More";
    } else {
      visibleCount = items.length;
      btn.textContent = "Show Less";
    }
    showCertificates(visibleCount);
  });
});
//////////////////////// certificates script end


// Counter Animation start
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  counter.innerText = '0';

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;
    const increment = target / 200;

    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(updateCounter, 10);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
// Counter Animation end



// /////////////// clint section 
const moreBtn = document.getElementById('moreBtn');
const moreClients = document.getElementById('moreClients');
let isVisible = false;

moreBtn.addEventListener('click', () => {
  isVisible = !isVisible;
  moreClients.style.display = isVisible ? 'flex' : 'none';
  moreBtn.innerText = isVisible ? 'Hide Clients ▲' : 'More Clients ➔';
});
///////////////// clint section


// ///////////// footer visitor live
let count = localStorage.getItem('visitorCount') || 65163;
count++;
document.getElementById('visitorCount').innerText = count.toString().padStart(6, '0');
localStorage.setItem('visitorCount', count);

// ///////////// footer visitor live

