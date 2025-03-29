document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (mobileMenuIcon && mobileMenu) {
    mobileMenuIcon.addEventListener('click', function() {
      mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
    });
  }

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
        
        // Close mobile menu after clicking a link
        if (mobileMenu) {
          mobileMenu.style.display = 'none';
        }
      }
    });
  });

  // Add animation classes on scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.product-card, .plan, .testimonial, .value');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 100) {
        element.classList.add('animate');
      }
    });
  };

  // Handle newsletter form submission
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const emailInput = this.querySelector('input[type="email"]');
      if (emailInput && emailInput.value) {
        // In a real application, you would send this to your server
        alert('Thanks for subscribing! You\'ll hear from us soon.');
        emailInput.value = '';
      } else {
        alert('Please enter a valid email address.');
      }
    });
  }

  // Add to cart functionality
  const addToCartButtons = document.querySelectorAll('.product-card .secondary-button');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
      const productCard = this.closest('.product-card');
      const productName = productCard.querySelector('h3').textContent;
      
      // In a real application, you would add this to a cart object
      alert(`${productName} added to cart!`);
      
      // Visual feedback
      this.textContent = 'Added!';
      setTimeout(() => {
        this.textContent = 'Add to Cart';
      }, 2000);
    });
  });

  // Membership plan selection
  const planButtons = document.querySelectorAll('.plan button');
  planButtons.forEach(button => {
    button.addEventListener('click', function() {
      const plan = this.closest('.plan');
      const planName = plan.querySelector('h3').textContent;
      
      // In a real application, you would redirect to a signup page
      alert(`You selected the ${planName} plan. Let's get you signed up!`);
    });
  });

  // Sticky header on scroll
  const header = document.querySelector('header');
  let lastScrollPosition = 0;
  
  const handleScroll = () => {
    const currentScrollPosition = window.pageYOffset;
    
    if (currentScrollPosition > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScrollPosition = currentScrollPosition;
  };

  // Initialize
  animateOnScroll();
  handleScroll();
  
  // Event listeners
  window.addEventListener('scroll', animateOnScroll);
  window.addEventListener('scroll', handleScroll);
}); 