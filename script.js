document.addEventListener('DOMContentLoaded', function() {
  // Elements
  const bookCover = document.getElementById('bookCover');
  const bookContainer = document.getElementById('bookContainer');
  const openBookBtn = document.getElementById('openBook');
  const pages = document.querySelectorAll('.page');
  const nextPageBtns = document.querySelectorAll('.next-page');

  // Open book animation
  openBookBtn.addEventListener('click', function() {
    bookCover.classList.add('hidden');
    setTimeout(() => {
      bookCover.style.display = 'none';
      bookContainer.style.display = 'flex';
      bookContainer.classList.add('animate-in');
    }, 1500);
  });

  // Page turning functionality
  let currentPage = 0;
  const totalPages = document.querySelectorAll('.left-page').length;

  nextPageBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      if (currentPage < totalPages - 1) {
        // Get current left and right pages
        const currentLeft = pages[currentPage * 2];
        const currentRight = pages[currentPage * 2 + 1];
        
        // Animate page turn
        currentLeft.style.transform = 'rotateY(-180deg)';
        currentRight.style.transform = 'rotateY(-180deg)';
        
        currentPage++;
        
        // Show next pages
        const nextLeft = pages[currentPage * 2];
        const nextRight = pages[currentPage * 2 + 1];
        
        setTimeout(() => {
          nextLeft.style.zIndex = '1';
          nextRight.style.zIndex = '1';
        }, 750);
      }
    });
  });

  // Initialize first page
  pages[0].style.zIndex = '1';
  pages[1].style.zIndex = '1';
});