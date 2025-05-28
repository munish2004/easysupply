import { renderNavigation } from './components/navigation.js';
import { renderHero } from './components/hero.js';
import { renderAbout } from './components/about.js';
import { renderServices } from './components/services.js';
import { renderContact } from './components/contact.js';
import { renderFooter } from './components/footer.js';
import AOS from 'aos';

// Initialize AOS animation library
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
  });
  
  const app = document.getElementById('app');
  
  // Render all components
  app.innerHTML = `
    ${renderNavigation()}
    <main>
      ${renderHero()}
      ${renderServices()}
      ${renderAbout()}
      ${renderContact()}
    </main>
    ${renderFooter()}
  `;
  
  // Handle mobile menu toggle
  const menuButton = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
  
  // Handle contact form submission
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // In a real implementation, you would send the form data to a server
      const formData = new FormData(contactForm);
      const formValues = Object.fromEntries(formData.entries());
      
      // For demo purposes, show a success message
      const contactSection = document.getElementById('contact');
      const formContainer = contactForm.parentElement;
      
      formContainer.innerHTML = `
        <div class="text-center py-10">
          <i class="fas fa-check-circle text-primary text-5xl mb-4"></i>
          <h3 class="text-2xl font-semibold mb-2">Message Sent!</h3>
          <p class="mb-6">Thank you for reaching out. We'll get back to you shortly.</p>
          <button 
            class="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
            onclick="window.location.reload()"
          >
            Back to Website
          </button>
        </div>
      `;
    });
  }
});