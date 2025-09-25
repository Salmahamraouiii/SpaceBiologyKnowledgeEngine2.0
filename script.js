 document.addEventListener('DOMContentLoaded', function() {
  // Initialize all checkboxes as unchecked on page load
  function initializeCheckboxes() {
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
      checkbox.checked = false;
    });
    updateFilterCount();
  }

  // Toggle filter panel
  const filterToggle = document.getElementById('filterToggle');
  const filterPanel = document.getElementById('filterPanel');

  filterToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    filterPanel.classList.toggle('active');
  });

  // Close filter panel when clicking outside
  document.addEventListener('click', (e) => {
    if (!filterToggle.contains(e.target) && !filterPanel.contains(e.target)) {
      filterPanel.classList.remove('active');
    }
  });

  // Update filter count based on selected checkboxes
  function updateFilterCount() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const filterCount = document.querySelector('.filter-count');
    filterCount.textContent = checkboxes.length;
  }

  // Add event listeners to all checkboxes
  document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', updateFilterCount);
  });

  // Initialize on page load
  initializeCheckboxes();

  // Rocket launch animation
  const searchButton = document.getElementById('searchButton');
  const rocket = document.getElementById('rocket');
  const rocketTrail = document.getElementById('rocketTrail');
  
  searchButton.addEventListener('click', () => {
    // Launch rocket animation
    rocket.style.opacity = '1';
    rocket.style.bottom = '100vh';
    rocketTrail.style.opacity = '0.7';
    rocketTrail.style.height = '100vh';
    
    // Reset after animation
    setTimeout(() => {
      rocket.style.opacity = '0';
      rocket.style.bottom = '-100px';
      rocketTrail.style.opacity = '0';
      rocketTrail.style.height = '0';
    }, 3000);
  });

  // Create stars in the background
  function createStars() {
    const starsContainer = document.getElementById('stars');
    const starsCount = 300;
    
    for (let i = 0; i < starsCount; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      
      // Random properties for each star
      const size = Math.random() * 3;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = 2 + Math.random() * 3;
      
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${posX}%`;
      star.style.top = `${posY}%`;
      star.style.animationDelay = `${delay}s`;
      star.style.animationDuration = `${duration}s`;
      
      starsContainer.appendChild(star);
    }
  }
  
  createStars();

  // Create shooting stars
  function createShootingStars() {
    const spaceBackground = document.querySelector('.space-background');
    
    setInterval(() => {
      if (Math.random() > 0.7) { // 30% chance to create a shooting star
        const shootingStar = document.createElement('div');
        shootingStar.classList.add('shooting-star');
        
        const startX = Math.random() * 100;
        const startY = Math.random() * 30;
        const duration = 1 + Math.random() * 2;
        
        shootingStar.style.left = `${startX}%`;
        shootingStar.style.top = `${startY}%`;
        shootingStar.style.animation = `shooting-star ${duration}s linear`;
        
        spaceBackground.appendChild(shootingStar);
        
        // Remove after animation completes
        setTimeout(() => {
          shootingStar.remove();
        }, duration * 1000);
      }
    }, 2000);
  }
  
  createShootingStars();

  // Create DNA helix
  function createDNAHelix() {
    const dnaContainer = document.getElementById('dnaHelix');
    const nodes = 20;
    const radius = 100;
    
    for (let i = 0; i < nodes; i++) {
      const angle = (i / nodes) * Math.PI * 2;
      const x1 = Math.cos(angle) * radius;
      const y1 = i * 20 - (nodes * 20) / 2;
      const x2 = Math.cos(angle + Math.PI) * radius;
      const y2 = y1;
      
      // Create nodes
      const node1 = document.createElement('div');
      node1.className = 'dna-node';
      node1.style.left = `${x1 + 150}px`;
      node1.style.top = `${y1 + 250}px`;
      node1.style.animationDelay = `${i * 0.1}s`;
      
      const node2 = document.createElement('div');
      node2.className = 'dna-node';
      node2.style.left = `${x2 + 150}px`;
      node2.style.top = `${y2 + 250}px`;
      node2.style.animationDelay = `${i * 0.1 + 0.05}s`;
      
      dnaContainer.appendChild(node1);
      dnaContainer.appendChild(node2);
      
      // Create connections
      if (i < nodes - 1) {
        const nextAngle = ((i + 1) / nodes) * Math.PI * 2;
        const nextX1 = Math.cos(nextAngle) * radius;
        const nextY1 = (i + 1) * 20 - (nodes * 20) / 2;
        
        const connection1 = document.createElement('div');
        connection1.className = 'dna-connection';
        const dx = nextX1 - x1;
        const dy = nextY1 - y1;
        const length = Math.sqrt(dx * dx + dy * dy);
        const angleDeg = Math.atan2(dy, dx) * 180 / Math.PI;
        
        connection1.style.width = `${length}px`;
        connection1.style.left = `${x1 + 150}px`;
        connection1.style.top = `${y1 + 250 + 4}px`;
        connection1.style.transform = `rotate(${angleDeg}deg)`;
        
        dnaContainer.appendChild(connection1);
      }
      
      // Create horizontal connections
      const connection2 = document.createElement('div');
      connection2.className = 'dna-connection';
      const hDx = x2 - x1;
      const hDy = y2 - y1;
      const hLength = Math.sqrt(hDx * hDx + hDy * hDy);
      const hAngleDeg = Math.atan2(hDy, hDx) * 180 / Math.PI;
      
      connection2.style.width = `${hLength}px`;
      connection2.style.left = `${x1 + 150}px`;
      connection2.style.top = `${y1 + 250 + 4}px`;
      connection2.style.transform = `rotate(${hAngleDeg}deg)`;
      
      dnaContainer.appendChild(connection2);
    }
  }
  
  createDNAHelix();

  // Animate stats counting up
  function animateStats() {
    const statElements = {
      'stat-experiments': 5247,
      'stat-researchers': 12893,
      'stat-publications': 38461,
      'stat-species': 642
    };
    
    Object.keys(statElements).forEach(id => {
      const element = document.getElementById(id);
      const target = statElements[id];
      const duration = 2000;
      const steps = 60;
      const stepValue = target / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += stepValue;
        if (current >= target) {
          element.textContent = target.toLocaleString();
          clearInterval(timer);
        } else {
          element.textContent = Math.floor(current).toLocaleString();
        }
      }, duration / steps);
    });
  }
  
  setTimeout(animateStats, 1000);

  // Easter egg for HELIX
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('keyup', (e) => {
    if (e.target.value.toUpperCase() === 'HELIX') {
      document.body.classList.add('dna-mode');
      setTimeout(() => {
        document.body.classList.remove('dna-mode');
      }, 5000);
    }
  });

  // Dark/Light mode toggle
  const themeToggle = document.getElementById('themeToggle');
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    // Change gradient angle for dynamic background
    document.documentElement.style.setProperty('--gradient-angle', `${Math.floor(Math.random() * 360)}deg`);
  });

  // Add animations to result cards on scroll
  function animateOnScroll() {
    const resultCards = document.querySelectorAll('.result-card');
    const windowHeight = window.innerHeight;
    
    resultCards.forEach(card => {
      const position = card.getBoundingClientRect().top;
      
      if (position < windowHeight - 100) {
        card.style.opacity = 1;
        card.style.transform = 'translateY(0)';
      }
    });
  }

  // Set initial state for animation
  document.querySelectorAll('.result-card').forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  // Listen for scroll events
  window.addEventListener('scroll', animateOnScroll);
  // Trigger once on load
  window.addEventListener('load', animateOnScroll);
});
