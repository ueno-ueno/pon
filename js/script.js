document.addEventListener('DOMContentLoaded', function() {
  new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  // ドロップダウンメニュー
  const dropdownButtons = document.querySelectorAll('.indexContact__dropdownButton');
  
  dropdownButtons.forEach(button => {
    button.addEventListener('click', function() {
      const dropdownList = this.nextElementSibling;
      const isActive = this.classList.contains('is-active');
      
      // 他のドロップダウンを閉じる
      document.querySelectorAll('.indexContact__dropdownButton.is-active').forEach(btn => {
        if (btn !== this) {
          btn.classList.remove('is-active');
          btn.nextElementSibling.classList.remove('is-active');
        }
      });
      
      // クリックされたドロップダウンの開閉
      this.classList.toggle('is-active');
      dropdownList.classList.toggle('is-active');
    });
  });
  
  // ドロップダウン項目のクリックイベント
  document.querySelectorAll('.indexContact__dropdownItem').forEach(item => {
    item.addEventListener('click', function() {
      const value = this.dataset.value;
      const button = this.closest('.indexContact__dropdown').querySelector('.indexContact__dropdownButton');
      const text = button.querySelector('.indexContact__dropdownText');
      const input = this.closest('.indexContact__dropdown').querySelector('.indexContact__dropdownInput');
      
      text.textContent = value;
      input.value = value;
      
      button.classList.remove('is-active');
      this.closest('.indexContact__dropdownList').classList.remove('is-active');
    });
  });
  
  // ドロップダウン外のクリックで閉じる
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.indexContact__dropdown')) {
      document.querySelectorAll('.indexContact__dropdownButton.is-active').forEach(button => {
        button.classList.remove('is-active');
        button.nextElementSibling.classList.remove('is-active');
      });
    }
  });
});
