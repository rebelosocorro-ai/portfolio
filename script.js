// Portfolio JavaScript functionality

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking on any nav link
    const navLinks = navMenu.querySelectorAll('.nav-link, .nav-btn-contact');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // 2. Project Filtering Tabs
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      // Add active class to clicked button
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || filterValue === category) {
          card.style.display = 'flex';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 3. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
      });

      // Toggle current item
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // 4. Copy Email to Clipboard
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const emailVal = document.getElementById('emailVal');

  if (copyEmailBtn && emailVal) {
    copyEmailBtn.addEventListener('click', () => {
      const email = emailVal.textContent.trim();
      navigator.clipboard.writeText(email).then(() => {
        const originalText = copyEmailBtn.innerHTML;
        copyEmailBtn.innerHTML = '<span>✓ Copied to Clipboard!</span>';
        copyEmailBtn.style.borderColor = 'var(--accent-emerald)';
        copyEmailBtn.style.color = 'var(--accent-emerald)';

        setTimeout(() => {
          copyEmailBtn.innerHTML = originalText;
          copyEmailBtn.style.borderColor = '';
          copyEmailBtn.style.color = '';
        }, 2500);
      }).catch(err => {
        console.error('Failed to copy: ', err);
      });
    });
  }

  // 5. Active Link Highlight on Scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});
