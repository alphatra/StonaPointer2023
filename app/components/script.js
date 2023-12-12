// menu item click
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function(event) {
      event.preventDefault();
      removeActiveClasses();
      this.classList.add('active');
    });
  });
  
  // language switch click
  document.querySelectorAll('.language').forEach(lang => {
    lang.addEventListener('click', function(event) {
      event.preventDefault();
      removeActiveClasses();
      this.classList.add('active');
    });
  });
  
  function removeActiveClasses() {
    document.querySelectorAll('.menu-item.active, .language.active').forEach(active => {
      active.classList.remove('active');
    });
  }
  