document.addEventListener('DOMContentLoaded', () => {
  const headerBackground = document.querySelector('.header__background');
  const heroSection = document.querySelector('.hero');
  const breadSection = document.querySelector('.c-bread');

  const options = {
    root: null,
    rootMargin: '-80px 0px 0px 0px', // ヘッダーの高さ分を考慮
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.target === heroSection) {
        if (!entry.isIntersecting) {
          headerBackground.style.display = 'block';
          headerBackground.style.animation = 'slideDown 0.5s ease forwards';
        } else {
          headerBackground.style.display = 'none';
          headerBackground.style.animation = '';
        }
      } else if (entry.target === breadSection) {
        if (!entry.isIntersecting) {
          headerBackground.style.display = 'block';
          headerBackground.style.animation = 'slideDown 0.5s ease forwards';
        } else {
          headerBackground.style.display = 'none';
          headerBackground.style.animation = '';
        }
      }
    });
  }, options);

  // トップページの場合
  if (heroSection) {
    observer.observe(heroSection);
  }
  
  // 下層ページの場合
  if (breadSection) {
    observer.observe(breadSection);
  }
}); 