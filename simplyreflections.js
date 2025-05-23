simplyreflections java script 

1. Service Text Animation (Hero Section)
Copy// Text rotation animation for services in hero section
document.addEventListener('DOMContentLoaded', function() {
  const words = ["Window Cleaning", "Power Washing", "Solar Panel Cleaning"];
  let currentIndex = 0;
  const serviceText = document.querySelector('.service-text');
  
  function rotateWords() {
    serviceText.style.opacity = 0;
    
    setTimeout(() => {
      serviceText.textContent = words[currentIndex];
      serviceText.style.opacity = 1;
      currentIndex = (currentIndex + 1) % words.length;
    }, 500);
  }
  
  // Initial text
  serviceText.textContent = words[0];
  
  // Start rotation
  setInterval(rotateWords, 3000);
});
2. Smooth Scrolling Navigation
Copy// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Offset for header
        behavior: 'smooth'
      });
    }
    
    // Close mobile menu if open
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu && mobileMenu.classList.contains('active')) {
      mobileMenu.classList.remove('active');
    }
  });
});
3. Mobile Menu Toggle
Copy// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      menuButton.classList.toggle('active');
    });
  }
});
4. Contact Form Validation & Submission
Copy// Contact form validation and submission
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Basic validation
      const name = this.querySelector('[name="name"]').value;
      const email = this.querySelector('[name="email"]').value;
      const phone = this.querySelector('[name="phone"]').value;
      const message = this.querySelector('[name="message"]').value;
      
      let isValid = true;
      
      if (!name.trim()) {
        isValid = false;
        showError(this.querySelector('[name="name"]'), 'Name is required');
      }
      
      if (!email.trim() || !isValidEmail(email)) {
        isValid = false;
        showError(this.querySelector('[name="email"]'), 'Valid email is required');
      }
      
      if (!phone.trim()) {
        isValid = false;
        showError(this.querySelector('[name="phone"]'), 'Phone number is required');
      }
      
      if (isValid) {
        // Form submission logic would go here
        // For now, just show success message
        const formElements = contactForm.querySelectorAll('input, textarea, button');
        formElements.forEach(el => el.disabled = true);
        
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.textContent = 'Thank you! Your message has been sent. We will contact you shortly.';
        contactForm.appendChild(successMessage);
        
        // Reset form after delay
        setTimeout(() => {
          contactForm.reset();
          formElements.forEach(el => el.disabled = false);
          successMessage.remove();
        }, 5000);
      }
    });
  }
  
  function showError(element, message) {
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    
    const parent = element.parentElement;
    parent.appendChild(errorElement);
    
    element.classList.add('error');
    
    // Remove error after 3 seconds
    setTimeout(() => {
      errorElement.remove();
      element.classList.remove('error');
    }, 3000);
  }
  
  function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
});
5. Scroll Animations
Copy// Reveal elements on scroll
document.addEventListener('DOMContentLoaded', function() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  
  function revealOnScroll() {
    for (let i = 0; i < revealElements.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = revealElements[i].getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        revealElements[i].classList.add('active');
      }
    }
  }
  
  window.addEventListener('scroll', revealOnScroll);
  
  // Initial check
  revealOnScroll();
});
6. Testimonial Carousel
Copy// Testimonial carousel/slider
document.addEventListener('DOMContentLoaded', function() {
  const testimonials = document.querySelectorAll('.testimonial');
  const dotsContainer = document.querySelector('.testimonial-dots');
  let currentIndex = 0;
  
  // Create navigation dots
  if (testimonials.length > 0 && dotsContainer) {
    testimonials.forEach((_, index) => {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(index));
      dotsContainer.appendChild(dot);
    });
  }
  
  function goToSlide(index) {
    testimonials.forEach(testimonial => testimonial.classList.remove('active'));
    document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
    
    testimonials[index].classList.add('active');
    document.querySelectorAll('.dot')[index].classList.add('active');
    currentIndex = index;
  }
  
  function nextSlide() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    goToSlide(currentIndex);
  }
  
  // Auto-advance slides every 5 seconds
  if (testimonials.length > 1) {
    setInterval(nextSlide, 5000);
  }
});
7. Sticky Header on Scroll
Copy// Sticky header on scroll
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');
  const scrollThreshold = 100;
  
  function handleScroll() {
    if (window.scrollY > scrollThreshold) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  }
  
  window.addEventListener('scroll', handleScroll);
  
  // Initial check
  handleScroll();
});
8. Service Tab Switching
Copy// Service tabs functionality
document.addEventListener('DOMContentLoaded', function() {
  const serviceTabs = document.querySelectorAll('.service-tab');
  const serviceContents = document.querySelectorAll('.service-content');
  
  serviceTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const target = this.getAttribute('data-target');
      
      // Remove active class from all tabs and contents
      serviceTabs.forEach(t => t.classList.remove('active'));
      serviceContents.forEach(c => c.classList.remove('active'));
      
      // Add active class to clicked tab and corresponding content
      this.classList.add('active');
      document.querySelector(`.service-content[data-id="${target}"]`).classList.add('active');
    });
  });
});
9. Complete JavaScript Bundle
You can combine all these components into a single JavaScript file for your website. Make sure to include this file at the end of your HTML body for optimal loading performance.
