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
