// Gallery filter buttons. Without JavaScript every bus is shown,
// so the buttons stay hidden until this script runs.
(function () {
  var bar = document.querySelector('[data-filters]');
  if (!bar) return;

  var buttons = Array.prototype.slice.call(bar.querySelectorAll('button[data-filter]'));
  var cards = Array.prototype.slice.call(document.querySelectorAll('.card[data-type]'));
  var empty = document.querySelector('[data-empty]');

  bar.hidden = false;

  bar.addEventListener('click', function (event) {
    var button = event.target.closest('button[data-filter]');
    if (!button) return;

    var filter = button.getAttribute('data-filter');
    buttons.forEach(function (b) {
      b.setAttribute('aria-pressed', String(b === button));
    });

    var shown = 0;
    cards.forEach(function (card) {
      var match = filter === 'all' || card.getAttribute('data-type') === filter;
      card.hidden = !match;
      if (match) shown++;
    });

    if (empty) empty.hidden = shown !== 0;
  });
})();
