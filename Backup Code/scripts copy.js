// Enhanced script.js with responsive functionality

// Run initial animations and setup
function runAnimations() {
  // Original animations can go here
}

// Handle responsive scaling
function handleResponsiveLayout() {
  // Calculate scale factor based on viewport width
  const designWidth = 1920;
  const currentWidth = window.innerWidth;
  const scaleFactor = currentWidth / designWidth;

  // Get the content container
  const container = document.querySelector('.ui-landing-page-622');
  
  // Apply scaling to maintain aspect ratio while staying responsive
  if (currentWidth < designWidth) {
    // Adjust the height of the parent container to maintain aspect ratio
    const parentDiv = document.querySelector('.parent-div');
    if (parentDiv) {
      parentDiv.style.height = (7265 * scaleFactor) + 'px';
    }
    
    if (container) {
      container.style.minHeight = (7265 * scaleFactor) + 'px';
    }
    
    // For very small screens (mobile), make additional adjustments
    if (currentWidth < 768) {
      // Target specific sections that need special handling on mobile
      const emailSignups = document.querySelectorAll('.email-signup-co-1818, .email-signup-co-18119');
      emailSignups.forEach(signup => {
        signup.style.width = '90vw';
        signup.style.left = '5vw';
        signup.style.transform = 'none';
      });
      
      // Make videos stack on mobile
      const videoContainer = document.querySelector('.video-thumbnail-18117');
      if (videoContainer) {
        videoContainer.style.flexDirection = 'column';
      }
      
      const videos = document.querySelectorAll('.the-ending-prov-6273, .the-ending-prov-6272, .the-ending-prov-6274');
      videos.forEach(video => {
        video.style.width = '90%';
        video.style.minWidth = 'auto';
        video.style.margin = '10px auto';
      });
    }
  }
}

// Run on page load
document.addEventListener('DOMContentLoaded', function() {
  runAnimations();
  handleResponsiveLayout();
  
  // Re-run on window resize
  window.addEventListener('resize', handleResponsiveLayout);
});

// Properly scale videos and maintain aspect ratio
function setupResponsiveVideos() {
  const videos = document.querySelectorAll('video');
  videos.forEach(video => {
    video.style.maxWidth = '100%';
    video.style.height = 'auto';
  });
}

// Ensure smooth scrolling for navigation links
function setupSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// Add these additional functions to the main initialization
document.addEventListener('DOMContentLoaded', function() {
  setupResponsiveVideos();
  setupSmoothScrolling();
});