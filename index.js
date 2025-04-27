//Mobile Menu Toggle Script 
document.addEventListener('DOMContentLoaded', function() {

    const menuButton = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navButtons = document.querySelector('.nav-buttons');
    const navbar = document.querySelector('.navbar');
    
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    
    const style = document.createElement('style');
    style.textContent = `
      /* Mobile menu container */
      .mobile-menu {
        display: none;
        position: absolute;
        top: 80px;
        left: 0;
        width: 100%;
        background-color: white;
        padding: 20px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 100;
        flex-direction: column;
      }
      
      /* Show the mobile menu */
      .mobile-menu.show {
        display: flex;
      }
      
      /* Style navigation links in mobile menu */
      .mobile-menu .nav-links {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-bottom: 20px;
      }
      
      .mobile-menu .nav-links li {
        margin-bottom: 15px;
        width: 100%;
        text-align: center;
      }
      
      .mobile-menu .nav-links a {
        font-size: 18px;
        font-weight: 600;
        color: #1E293B;
        display: block;
        padding: 0px;
      }
      
      /* Style buttons in mobile menu */
      .mobile-menu .nav-buttons {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 15px;
      }
      
      .mobile-menu .nav-buttons .btn {
        width: 100%;
        text-align: center;
      }
      
      /* Hamburger animation */
      .mobile-menu-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }
      
      .mobile-menu-toggle.active span:nth-child(2) {
        opacity: 0;
      }
      
      .mobile-menu-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px);
      }
      
      .mobile-menu-toggle span {
        transition: all 0.3s ease;
      }
      
      /* Keep original nav hidden on mobile */
      @media (max-width: 767px) {
        .navbar .nav-links,
        .navbar .nav-buttons {
          display: none;
        }
      }
    `;
    document.head.appendChild(style);
 
    const navLinksClone = navLinks.cloneNode(true);
    const navButtonsClone = navButtons.cloneNode(true);
    
    mobileMenu.appendChild(navLinksClone);
    mobileMenu.appendChild(navButtonsClone);
    
    navbar.after(mobileMenu);
    
    menuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('show');
      menuButton.classList.toggle('active');
    });
    
    mobileMenu.addEventListener('click', function(event) {
      if (event.target.tagName === 'A') {
        mobileMenu.classList.remove('show');
        menuButton.classList.remove('active');
      }
    });
  });
  
  console.log("Fixed mobile menu toggle is ready!");

// Faq toggle
document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(function (item) {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', function () {
            item.classList.toggle('active');
        });
    });
});


// Back To Top 
document.addEventListener('DOMContentLoaded', function() {
  
    const scrollTopButton = document.querySelector('.scroll-top-button');
    
    scrollTopButton.addEventListener('click', function() {
      
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      
    });
    
  });
