// Seeker Start LP：スマホメニュー、固定LINEボタン、スクロール表示
(function () {
  // スマホメニューの開閉
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    var setOpen = function (open) {
      nav.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
    };
    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setOpen(false);
    });
  }

  // 固定LINEボタン：ヒーローを過ぎたら表示、最後の申し込み欄では隠す
  var sticky = document.querySelector('.sticky-cta');
  var hero = document.querySelector('.hero');
  var cta = document.getElementById('apply');
  if (sticky && hero && 'IntersectionObserver' in window) {
    var heroVisible = true, ctaVisible = false;
    var update = function () { sticky.classList.toggle('is-visible', !heroVisible && !ctaVisible); };
    new IntersectionObserver(function (es) { heroVisible = es[0].isIntersecting; update(); }).observe(hero);
    if (cta) new IntersectionObserver(function (es) { ctaVisible = es[0].isIntersecting; update(); }).observe(cta);
  } else if (sticky) {
    sticky.classList.add('is-visible');
  }

  // スクロールでふわっと表示
  var targets = document.querySelectorAll('.section .section-title, .walls li, .stage, .session, .goals li, .reason, .compare, .coach, .price-card, .price-sets, .flow li, .faq details');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    targets.forEach(function (el) { el.classList.add('reveal'); io.observe(el); });
  }
})();
