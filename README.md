# SlothUI - Design System For Gen Z

A modern, responsive landing page template designed for Gen Z audiences with a focus on clean UI and interactive components.

![SlothUI Preview](images/soluthi.png)

## 📋 Features

- **Fully Responsive Design** - Looks great on all devices from mobile to desktop
- **Interactive Components** - Including FAQ accordions, testimonial cards, and feature highlights
- **Mobile Navigation** - Hamburger menu with smooth animations for mobile devices
- **Modern UI Elements** - Clean, contemporary design elements appealing to Gen Z
- **Optimized Performance** - Fast-loading and efficient code structure
- **Easy to Customize** - Well-organized code with clear comments

## 🚀 Getting Started

### Prerequisites

- Basic knowledge of HTML, CSS, and JavaScript
- A code editor (VS Code, Sublime Text, etc.)

### Installation

1. Clone or download this repository
2. Open the project in your code editor
3. Customize the content in `index.html` to match your needs
4. Modify the styles in `style.css` to match your brand
5. Deploy to your web hosting service

## 📁 Project Structure

\`\`\`
slothui/
├── index.html          # Main HTML file
├── style.css           # Main stylesheet
├── index.js            # JavaScript functionality
└── images/             # Image assets
\`\`\`

## 🧩 Components

### Mobile Menu

The mobile menu is automatically generated from your navigation links and buttons. It includes:

- Hamburger icon animation
- Smooth slide-in animation
- Automatic cloning of navigation items

\`\`\`javascript
// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navButtons = document.querySelector('.nav-buttons');
  const navbar = document.querySelector('.navbar');
  
  // Creates mobile menu dynamically
  const mobileMenu = document.createElement('div');
  mobileMenu.className = 'mobile-menu';
  
  // Clone navigation for mobile
  const navLinksClone = navLinks.cloneNode(true);
  const navButtonsClone = navButtons.cloneNode(true);
  
  mobileMenu.appendChild(navLinksClone);
  mobileMenu.appendChild(navButtonsClone);
  
  navbar.after(mobileMenu);
  
  // Toggle menu visibility
  menuButton.addEventListener('click', function() {
    mobileMenu.classList.toggle('show');
    menuButton.classList.toggle('active');
  });
});
\`\`\`

### FAQ Accordion

Interactive FAQ section with expandable/collapsible answers:

\`\`\`javascript
// FAQ toggle functionality
document.addEventListener('DOMContentLoaded', function () {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(function (item) {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', function () {
      item.classList.toggle('active');
    });
  });
});
\`\`\`

### Back to Top Button

Smooth scrolling back-to-top functionality:

\`\`\`javascript
// Back to top functionality
document.addEventListener('DOMContentLoaded', function() {
  const scrollTopButton = document.querySelector('.scroll-top-button');
  
  scrollTopButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
\`\`\`

## 📱 Responsive Breakpoints

The template includes responsive designs for the following screen sizes:

- Extra large devices (1200px and above)
- Large devices (992px to 1199px)
- Medium devices (768px to 991px)
- Small devices (576px to 767px)
- Extra small devices (less than 576px)

## 🎨 Customization

### Colors

The primary colors used in this template are:

- Primary: `#4F46E5` (Indigo)
- Text: `#475569` (Slate)
- Headings: `#1E293B` (Slate Dark)
- Background: `#FFFFFF` (White)
- Secondary Background: `#EEF2FF` (Indigo Light)

To change the color scheme, search for these color codes in the CSS file and replace them with your preferred colors.

### Typography

The template uses the 'Inter' font family from Google Fonts. To change the font:

1. Update the Google Fonts link in the `<head>` section of `index.html`
2. Modify the font-family property in the CSS

## 📄 License

This template is available for personal and commercial use.

## 🤝 Support

For questions or support, please open an issue in the GitHub repository.

---

Made with ❤️ for modern web design
\`\`\`

