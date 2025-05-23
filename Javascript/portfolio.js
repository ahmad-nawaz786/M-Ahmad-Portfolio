document.addEventListener('DOMContentLoaded', function() {
    // Typewriter Effect
    const typewriterText = document.querySelector('.typewriter-text');
    const text = "Hi, I'm ";
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            typewriterText.innerHTML = text.substring(0, i+1) + '<span class="cursor">|</span>';
            i++;
            setTimeout(typeWriter, 100);
        } else {
            typewriterText.innerHTML = text + '<span class="name-highlight">M. Ahmad</span>';
        }
    }
    
    // Start typewriter after a slight delay
    setTimeout(typeWriter, 500);
    
    // Enhanced Smooth Scrolling with Active Nav Highlighting
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Smooth scroll to section when nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-section');
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const toggler = document.querySelector('.navbar-toggler');
                    toggler.click();
                }
                
                // Smooth scroll to section
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update URL without page jump
                history.pushState(null, null, `#${targetId}`);
            }
        });
    });
    
    // Highlight active nav item based on scroll position
    function updateActiveNav() {
        const scrollPosition = window.scrollY + 200;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('data-section') === sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Navbar background change on scroll
    function updateNavbar() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(26, 26, 26, 0.9)';
            navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
            navbar.style.padding = '15px 0';
        } else {
            navbar.style.background = 'transparent';
            navbar.style.boxShadow = 'none';
            navbar.style.padding = '20px 0';
        }
    }
    
    // Set initial active nav item
    updateActiveNav();
    updateNavbar();
    
    // Add scroll event listeners
    window.addEventListener('scroll', () => {
        updateActiveNav();
        updateNavbar();
    });
});




document.addEventListener('DOMContentLoaded', function() {
  const aboutSection = document.querySelector('.About-section');
  const aboutContent = document.querySelector('.About-section .row');
  
  const animateOnScroll = () => {
    const sectionPosition = aboutSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;
    
    if(sectionPosition < screenPosition) {
      aboutContent.classList.add('animated');
      
      // Create floating shapes
      const floatingShapes = document.createElement('div');
      floatingShapes.className = 'floating-shapes';
      
      for(let i = 0; i < 5; i++) {
        const shape = document.createElement('div');
        shape.className = 'shape';
        shape.style.width = `${Math.random() * 200 + 100}px`;
        shape.style.height = shape.style.width;
        shape.style.left = `${Math.random() * 100}%`;
        shape.style.top = `${Math.random() * 100}%`;
        shape.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`;
        shape.style.animationDelay = `${Math.random() * 5}s`;
        floatingShapes.appendChild(shape);
      }
      
      aboutSection.appendChild(floatingShapes);
      
      // Remove event listener after animation
      window.removeEventListener('scroll', animateOnScroll);
    }
  };
  
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Trigger on load if already in view
});














document.addEventListener('DOMContentLoaded', function() {
  const skillItems = document.querySelectorAll('.skills-section [class*="col-"]');
  
  const animateOnScroll = () => {
    skillItems.forEach(item => {
      const itemPosition = item.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
      
      if(itemPosition < screenPosition) {
        item.classList.add('animated');
      }
    });
  };
  
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Trigger on load if already in view
});











// Add this JavaScript before closing </body>
document.addEventListener('DOMContentLoaded', function() {
    const contactSection = document.querySelector('.contact-section');
    
    // Form validation
    const form = document.querySelector('.needs-validation');
    form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
    }, false);
    
    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, { threshold: 0.1 });
    
    observer.observe(contactSection);
});