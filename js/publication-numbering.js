// Count each publication category separately, newest first.
// Explicit values avoid browser differences in reversed CSS list-item counters.
document.querySelectorAll('.publication-numbered-list').forEach(function (list) {
  var items = Array.from(list.children).filter(function (element) {
    return element.tagName === 'LI';
  });

  items.forEach(function (item, index) {
    var number = items.length - index;
    item.value = number;
    item.setAttribute('data-publication-number', String(number));
  });

  list.classList.add('numbering-ready');
});
