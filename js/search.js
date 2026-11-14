/* Website-wide search: builds an index from data.js at runtime. */
(function () {
  var D = window.AVENA;
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function fmt(i) { return new Date(i + 'T12:00:00').toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' }); }
  function build() {
    var o = [];
    D.pages.forEach(function (p) { o.push({ type: 'Page', title: p.title, url: p.url, text: p.text }); });
    D.departments.forEach(function (d) { o.push({ type: 'Department', title: d.acr + (d.name ? ' - ' + d.name : ''), url: 'government.html#dept-' + d.acr, text: [d.name, d.desc, d.head].join(' ') }); });
    D.contacts.forEach(function (c) { o.push({ type: 'Contact', title: c.label, url: 'index.html#contact', text: c.email + ' email contact' }); });
    D.officials.forEach(function (p) { o.push({ type: 'Government', title: p.title + ': ' + p.name, url: 'government.html#office', text: p.note }); });
    D.history.forEach(function (e) { o.push({ type: 'History', title: e.title, url: 'history.html#' + e.id, text: fmt(e.date) + ' ' + e.summary + ' ' + e.detail }); });
    D.documents.forEach(function (d) { o.push({ type: 'Document', title: d.title, url: 'constitution.html#' + d.id, text: d.type + ' ' + d.summary + ' ' + (d.date ? fmt(d.date) : '') }); });
    D.news.forEach(function (n) { o.push({ type: 'News', title: n.headline, url: 'news.html#' + n.id, text: fmt(n.date) + ' ' + n.category + ' ' + n.summary + ' ' + n.body.join(' ') }); });
    D.territories.forEach(function (t) { o.push({ type: 'Territory', title: t.name, url: 'territories.html#' + t.id, text: t.kind + ' ' + t.facts.join(' ') }); });
    D.services.forEach(function (g) { g.items.forEach(function (s) { o.push({ type: 'Service', title: s.title, url: 'services.html#' + s.id, text: s.desc }); }); });
    D.holidays.forEach(function (h) { o.push({ type: 'Tradition', title: h.name, url: 'about.html#traditions', text: h.date + ' national holiday' }); });
    return o;
  }
  function run(q) {
    var terms = q.toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length) return [];
    return build().map(function (r) {
      var t = r.title.toLowerCase(), x = (r.text || '').toLowerCase(), s = 0;
      for (var i = 0; i < terms.length; i++) {
        var a = t.indexOf(terms[i]) > -1, b = x.indexOf(terms[i]) > -1;
        if (!a && !b) return null;
        s += a ? 5 : 1;
      }
      return { r: r, s: s };
    }).filter(Boolean).sort(function (a, b) { return b.s - a.s; }).map(function (o) { return o.r; });
  }
  window.AvenaSearch = { run: run };

  if (document.body.dataset.page === 'search') {
    var q = new URLSearchParams(location.search).get('q') || '';
    var input = document.getElementById('sq'), out = document.getElementById('results');
    input.value = q;
    if (!q.trim()) { out.innerHTML = '<p>Enter a word or phrase to search pages, departments, history, documents, news and citizenship information.</p>'; return; }
    var res = run(q);
    out.innerHTML = '<p role="status">' + res.length + ' result' + (res.length === 1 ? '' : 's') + ' for <strong>' + esc(q) + '</strong></p>' +
      (res.length ? res.map(function (r) {
        return '<div class="result"><h3><a href="' + r.url + '">' + esc(r.title) + '</a></h3><p class="meta">' + r.type + '</p><p>' + esc((r.text || '').slice(0, 170)) + '</p></div>';
      }).join('') : '<p>No matches. Try a different word, such as a department acronym, a place or a year.</p>');
  }
})();
