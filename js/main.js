// Minimal JavaScript for mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  // Close mobile menu when a link is clicked
  const navTrigger = document.getElementById('nav-trigger');
  if (navTrigger) {
    document.querySelectorAll('.site-nav .page-link').forEach(link => {
      link.addEventListener('click', () => {
        navTrigger.checked = false;
      });
    });
  }
});
