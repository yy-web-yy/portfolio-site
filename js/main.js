document.addEventListener('DOMContentLoaded', function () {
  initScrollFade();
  initBackToTopButton();
});

// ① スクロールでフェードイン
function initScrollFade() {
  const targets = document.querySelectorAll('.scroll-fade');

  if (targets.length === 0) return;

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // 一度アニメーションしたら解除（1回のみ発動）
        observer.unobserve(entry.target);
      }
    });
  }, options);

  targets.forEach(target => observer.observe(target));
}

// ② トップに戻るボタン
function initBackToTopButton() {
  const button = document.querySelector('.back-to-top-icon');
  if (!button) return;

  window.addEventListener('scroll', () => {
    button.classList.toggle('visible', window.scrollY > 300);
  });

  button.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}

// document.addEventListener('DOMContentLoaded', function () {
//   const targets = document.querySelectorAll('.scroll-fade');

//   const options = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 0.3,
//   };

//   const observer = new IntersectionObserver(function (entries, observer) {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('active');
//         observer.unobserve(entry.target);
//       }
//     });
//   }, options);

//   targets.forEach(target => {
//     observer.observe(target);
//   });

//   const backToTopButton = document.querySelector('.back-to-top-icon');

//   // スクロールして300pxを超えたらボタンを表示
//   window.addEventListener('scroll', function () {
//     if (window.scrollY > 300) {
//       backToTopButton.classList.add('visible');
//     } else {
//       backToTopButton.classList.remove('visible');
//     }
//   });

//   // ボタンクリックでトップへスムーズに戻る
//   backToTopButton.addEventListener('click', function (e) {
//     e.preventDefault();
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   });
// });