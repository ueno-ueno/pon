document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.header__humburger');
  const nav = document.querySelector('.header__nav');
  const mask = document.querySelector('.header__mask');
  const body = document.body;

  // ハンバーガーメニューのクリックイベント
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    nav.classList.toggle('is-active');
    mask.classList.toggle('is-active');
    body.classList.toggle('is-fixed');
  });

  // マスクのクリックイベント
  mask.addEventListener('click', () => {
    hamburger.classList.remove('is-active');
    nav.classList.remove('is-active');
    mask.classList.remove('is-active');
    body.classList.remove('is-fixed');
  });

  // トップに戻るボタンの処理
  const toTopButton = document.querySelector('.c-toTop__button');
  const toTopElement = document.querySelector('.c-toTop');
  const serviceSection = document.querySelector('.service');
  
  if (toTopButton && serviceSection) {
    // スクロールイベントの監視
    window.addEventListener('scroll', () => {
      const servicePosition = serviceSection.getBoundingClientRect().top;
      
      // serviceセクションが表示されたらボタンを表示
      if (servicePosition <= window.innerHeight) {
        toTopElement.classList.add('is-visible');
      } else {
        toTopElement.classList.remove('is-visible');
      }
    });

    // クリックイベントの処理
    toTopButton.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  if (toTopButton) {
    // スクロールイベントの監視
    window.addEventListener('scroll', () => {
      // スクロール位置が800pxを超えたらボタンを表示
      if (window.scrollY > 800) {
        toTopElement.classList.add('is-visible');
      } else {
        toTopElement.classList.remove('is-visible');
      }
    });

    // クリックイベントの処理
    toTopButton.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}); 