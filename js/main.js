/* Shared layout (header, navigation, footer) and page rendering. */
(function () {
  'use strict';
  var D = window.AVENA;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  var fmt = function (i) { return new Date(i + 'T12:00:00').toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' }); };
  var ph = function (t) { return '<span class="ph">' + esc(t || D.placeholder) + '</span>'; };
  var page = document.body.dataset.page;

  function star(cx, cy, R) {
    var p = [];
    for (var i = 0; i < 10; i++) { var r = i % 2 ? R * 0.4 : R, a = Math.PI / 5 * i - Math.PI / 2; p.push((cx + r * Math.cos(a)).toFixed(2) + ',' + (cy + r * Math.sin(a)).toFixed(2)); }
    return p.join(' ');
  }
  function flag() {
    var c = D.colour;
    return '<svg class="flag" viewBox="0 0 60 40" role="img" aria-label="Flag of Avena"><rect width="60" height="13.34" fill="' + c.red + '"/><rect y="13.33" width="60" height="13.34" fill="' + c.green + '"/><rect y="26.66" width="60" height="13.34" fill="' + c.blue + '"/><rect x="46.66" width="13.34" height="13.34" fill="#fff"/><polygon points="' + star(53.33, 6.67, 5) + '" fill="#000"/></svg>';
  }
  function toast(m) {
    var t = $('#toast');
    if (!t) { t = document.createElement('div'); t.id = 'toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
    t.textContent = m; t.classList.add('show'); clearTimeout(toast.t);
    toast.t = setTimeout(function () { t.classList.remove('show'); }, 3600);
  }
  function link(url, label, cls) {
    return url ? '<a class="' + (cls || 'btn') + '" href="' + esc(url) + '">' + esc(label) + '</a>'
      : '<button type="button" class="' + (cls === 'linkbtn' ? 'linkbtn' : 'btn') + ' pending" data-label="' + esc(label) + '">' + esc(label) + '</button>';
  }

  /* ---------- header / footer ---------- */
  function navHtml() {
    var cur = location.pathname.split('/').pop() || 'index.html';
    return D.nav.map(function (n) {
      var act = n.href.split('#')[0] === cur ? ' aria-current="page"' : '';
      if (!n.children) return '<li><a href="' + n.href + '"' + act + '>' + n.label + '</a></li>';
      return '<li class="dd"><a href="' + n.href + '"' + act + '>' + n.label + '</a><button type="button" class="ddb" aria-expanded="false" aria-label="Show ' + n.label + ' menu">&#9662;</button><ul>' +
        n.children.map(function (c) { return '<li><a href="' + c.href + '">' + c.label + '</a></li>'; }).join('') + '</ul></li>';
    }).join('');
  }
  function chrome() {
    document.body.insertAdjacentHTML('afterbegin',
      '<a class="skip" href="#main">Skip to main content</a><div class="stripe"></div>' +
      '<div class="banner"><div class="wrap"><strong>Official website</strong> of the Government of Avena. Avena is a micronation and does not claim international recognition.</div></div>' +
      '<header><div class="wrap hd"><a class="brand" href="index.html">' + flag() + '<span><b>Government of Avena</b><small>Official national website</small></span></a>' +
      '<form class="sf" role="search" action="search.html" method="get"><label class="sr" for="q">Search this website</label><input id="q" name="q" type="search" placeholder="Search Avena" autocomplete="off"><button class="btn btn-primary" type="submit">Search</button></form>' +
      '<button type="button" id="menuBtn" class="menu" aria-expanded="false" aria-controls="mainnav">Menu</button></div>' +
      '<nav id="mainnav" aria-label="Main"><div class="wrap"><ul>' + navHtml() + '</ul></div></nav></header>');
    var links = function (a) { return '<ul>' + a.map(function (x) { return '<li><a href="' + x[1] + '">' + x[0] + '</a></li>'; }).join('') + '</ul>'; };
    document.body.insertAdjacentHTML('beforeend',
      '<footer class="site"><div class="wrap"><div class="cols"><div>' + flag() + '<h2>Government of Avena</h2><p>The official national website of Avena, a micronation founded on March 5, 2023.</p></div>' +
      '<div><h2>About</h2>' + links([['About Avena', 'about.html'], ['National History', 'history.html'], ['National Symbols', 'symbols.html'], ['Territories', 'territories.html']]) + '</div>' +
      '<div><h2>Government</h2>' + links([['Government', 'government.html'], ['Laws and Constitution', 'constitution.html'], ['Citizenship', 'citizenship.html'], ['Public Services', 'services.html'], ['News', 'news.html']]) + '</div>' +
      '<div id="contact"><h2>Contact</h2><ul>' + D.contacts.map(function (c) { return '<li>' + esc(c.label) + '<br><a href="mailto:' + esc(c.email) + '">' + esc(c.email) + '</a></li>'; }).join('') + '</ul></div></div>' +
      '<div class="legal">&copy; ' + new Date().getFullYear() + ' Government of Avena. Avena is a micronation. Nothing on this website claims recognition as a sovereign state by any other government.</div></div></footer>');
    var q = new URLSearchParams(location.search).get('q');
    if (q && page === 'search') $('#q').value = q;
    $$('[data-flag]').forEach(function (e) { e.innerHTML = flag(); });
  }

  document.addEventListener('click', function (e) {
    var m = e.target.closest('#menuBtn');
    if (m) { var o = $('#mainnav').classList.toggle('open'); m.setAttribute('aria-expanded', o); return; }
    var d = e.target.closest('.ddb');
    if (d) { var li = d.parentNode, op = li.classList.toggle('open'); d.setAttribute('aria-expanded', op); return; }
    if (!e.target.closest('.dd')) $$('.dd.open').forEach(function (x) { x.classList.remove('open'); });
    var t = e.target.closest('.tg');
    if (t) { setOpen(t.closest('[data-box]'), t.getAttribute('aria-expanded') !== 'true'); return; }
    var p = e.target.closest('.pending');
    if (p) toast('"' + p.dataset.label + '" has not been published yet.');
  });
  function setOpen(box, open) {
    var b = $('.tg', box), p = $('.panel', box);
    b.setAttribute('aria-expanded', open); p.hidden = !open;
    if (b.dataset.l) b.textContent = b.dataset.l.split('|')[open ? 1 : 0];
  }
  function filters(el, items, cb) {
    el.innerHTML = items.map(function (i) { return '<button type="button" aria-pressed="' + (i[0] === items[0][0]) + '" data-v="' + esc(i[0]) + '">' + esc(i[1]) + '</button>'; }).join('');
    el.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      $$('button', el).forEach(function (x) { x.setAttribute('aria-pressed', x === b); });
      cb(b.dataset.v);
    });
  }
  function select(el, v) { $$('button', el).forEach(function (x) { x.setAttribute('aria-pressed', x.dataset.v === v); }); }
  var sortedNews = function () { return D.news.slice().sort(function (a, b) { return b.date.localeCompare(a.date); }); };
  var hashId = function () { return decodeURIComponent(location.hash.slice(1)); };

  /* ---------- page renderers ---------- */
  var R = {
    home: function () {
      $('#explore').innerHTML = D.explore.map(function (e) { return '<a class="tile" href="' + e.h + '"><h3>' + e.t + '</h3><p>' + e.d + '</p></a>'; }).join('');
      $('#latest').innerHTML = sortedNews().slice(0, 3).map(function (n) {
        return '<article class="news"><p class="meta"><time datetime="' + n.date + '">' + fmt(n.date) + '</time><span class="tag">' + esc(n.category) + '</span></p><h3><a href="news.html#' + n.id + '">' + esc(n.headline) + '</a></h3><p>' + esc(n.summary) + '</p></article>';
      }).join('');
      var s = D.site;
      $('#natinfo').innerHTML = [['Founded', fmt(s.founded)], ['Capital seat', s.capital], ['National motto', s.motto], ['National animal', s.animal], ['Government', s.government]]
        .map(function (r) { return '<div><dt>' + r[0] + '</dt><dd>' + esc(r[1]) + '</dd></div>'; }).join('');
      $('#govdept').innerHTML = D.departments.map(function (d) { return '<a class="chip" href="government.html#dept-' + d.acr + '" title="' + esc(d.name || d.acr) + '">' + d.acr + '</a>'; }).join('');
      $('#svclinks').innerHTML = D.services.reduce(function (a, g) { return a.concat(g.items); }, []).map(function (i) {
        return '<li>' + (i.url ? '<a href="' + esc(i.url) + '">' + esc(i.title) + '</a>' : link('', i.title, 'linkbtn')) + '<br><span class="small">' + esc(i.desc) + '</span></li>';
      }).join('');
    },
    about: function () {
      $('#holidays').innerHTML = D.holidays.map(function (h) { return '<div class="card"><h3>' + esc(h.name) + '</h3><p>' + esc(h.date) + '</p></div>'; }).join('');
    },
    government: function () {
      $('#officials').innerHTML = D.officials.map(function (o) { return '<div class="card"><p class="small">' + esc(o.title) + '</p><h3>' + esc(o.name) + '</h3><p>' + esc(o.note) + '</p></div>'; }).join('');
      $('#hierarchy').innerHTML = D.hierarchy.map(function (l) { return '<div class="lvl"><b>' + esc(l.label) + '</b>' + (l.note ? '<span>' + esc(l.note) + '</span>' : '') + '</div>'; }).join('');
      var box = $('#departments'), q = $('#deptq');
      function draw() {
        var t = q.value.toLowerCase();
        var l = D.departments.filter(function (d) { return (d.acr + ' ' + d.name + ' ' + d.desc).toLowerCase().indexOf(t) > -1; });
        box.innerHTML = l.length ? l.map(function (d) {
          return '<article class="card" id="dept-' + d.acr + '"><h3>' + d.acr + '</h3><p><strong>' + (d.name ? esc(d.name) : ph('Full name not yet published')) + '</strong></p><p>' + (d.desc ? esc(d.desc) : ph('Responsibilities not yet published')) + '</p><p class="small">Head: ' + (d.head ? esc(d.head) : ph('To be announced')) + '</p>' + (d.email ? '<p class="small">Email: <a href="mailto:' + esc(d.email) + '">' + esc(d.email) + '</a></p>' : '') + '</article>';
        }).join('') : '<p>No departments match your filter.</p>';
      }
      q.addEventListener('input', draw); draw();
    },
    history: function () {
      var el = $('#timeline');
      var ev = D.history.slice().sort(function (a, b) { return a.date.localeCompare(b.date); });
      function draw(era) {
        el.innerHTML = ev.filter(function (e) { return era === 'all' || e.era === era; }).map(function (e) {
          return '<li class="ev ' + e.era + '" id="' + e.id + '" data-box><button type="button" class="tg" aria-expanded="false" aria-controls="p-' + e.id + '"><time datetime="' + e.date + '">' + fmt(e.date) + '</time><b>' + esc(e.title) + '</b></button><div class="panel" id="p-' + e.id + '" hidden><p>' + esc(e.summary) + '</p><p>' + (e.detail ? esc(e.detail) : ph('A fuller account has not yet been published')) + '</p></div></li>';
        }).join('');
      }
      filters($('#erafilter'), [['all', 'All events'], ['founding', 'Founding Era'], ['expansion', 'Expansion Era']], draw);
      $('#expand').onclick = function () { $$('.ev', el).forEach(function (b) { setOpen(b, true); }); };
      $('#collapse').onclick = function () { $$('.ev', el).forEach(function (b) { setOpen(b, false); }); };
      draw('all');
      R.history.hash = function () { var b = document.getElementById(hashId()); if (b && b.classList.contains('ev')) { setOpen(b, true); b.scrollIntoView(); } };
    },
    constitution: function () {
      $('#docs').innerHTML = D.docTypes.map(function (t) {
        var l = D.documents.filter(function (d) { return d.type === t.type; });
        return '<section id="' + t.type + '"><h2>' + t.label + '</h2>' + (l.length ? l.map(function (d) {
          return '<article class="doc" id="' + d.id + '"><h3>' + esc(d.title) + '</h3><dl><div><dt>Date:</dt><dd>' + (d.date ? fmt(d.date) : ph('Date not yet published')) + '</dd></div><div><dt>Version:</dt><dd>' + (d.version ? esc(d.version) : ph('Not yet assigned')) + '</dd></div><div><dt>Status:</dt><dd>' + esc(d.status || 'Not stated') + '</dd></div></dl><p>' + esc(d.summary) + '</p>' + link(d.url, 'Read the full document') + '</article>';
        }).join('') : '<p>' + ph('No documents have been published in this category yet') + '</p>') + '</section>';
      }).join('');
      R.constitution.hash = function () { var e = document.getElementById(hashId()); if (e) e.scrollIntoView(); };
    },
    citizenship: function () {
      var l = D.services[0].items[0];
      $('#registry').innerHTML = link(l.url, 'Open the citizen registry');
    },
    symbols: function () {
      var c = D.colour;
      $('#swatches').innerHTML = [['Red', c.red], ['Green', c.green], ['Blue', c.blue], ['Navy', c.navy], ['White', c.white]].map(function (x) { return '<div class="sw"><i style="background:' + x[1] + '"></i><span>' + x[0] + '<br>' + x[1] + '</span></div>'; }).join('');
    },
    territories: function () {
      var list = $('#tlist'), det = $('#tdetail');
      list.innerHTML = D.territories.map(function (t) { return '<button type="button" data-v="' + t.id + '" aria-pressed="false">' + esc(t.name) + '</button>'; }).join('');
      function show(id) {
        var t = D.territories.filter(function (x) { return x.id === id; })[0] || D.territories[0];
        select(list, t.id);
        det.innerHTML = '<h2 style="margin-top:0">' + esc(t.name) + '</h2><p class="meta">' + esc(t.kind) + '</p>' + (t.facts.length ? '<ul>' + t.facts.map(function (f) { return '<li>' + esc(f) + '</li>'; }).join('') + '</ul>' : '') + '<p>' + ph('Further details and geographic information have not yet been published') + '</p>';
      }
      list.addEventListener('click', function (e) { var b = e.target.closest('button'); if (b) { show(b.dataset.v); history.replaceState(null, '', '#' + b.dataset.v); } });
      R.territories.hash = function () { show(hashId()); };
    },
    news: function () {
      var el = $('#newslist'), cats = ['all'].concat(D.news.map(function (n) { return n.category; }).filter(function (c, i, a) { return a.indexOf(c) === i; }));
      function draw(cat) {
        el.innerHTML = sortedNews().filter(function (n) { return cat === 'all' || n.category === cat; }).map(function (n) {
          return '<article class="news" id="' + n.id + '" data-box><p class="meta"><time datetime="' + n.date + '">' + fmt(n.date) + '</time><span class="tag">' + esc(n.category) + '</span></p><h3>' + esc(n.headline) + '</h3>' +
            (n.image ? '<img src="' + esc(n.image) + '" alt="">' : '') + '<p>' + esc(n.summary) + '</p><div class="panel" id="p-' + n.id + '" hidden>' + n.body.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('') + '</div><button type="button" class="tg" aria-expanded="false" aria-controls="p-' + n.id + '" data-l="Read full article|Hide article">Read full article</button></article>';
        }).join('') || '<p>No announcements in this category.</p>';
      }
      var f = $('#newsfilter'); filters(f, cats.map(function (c) { return [c, c === 'all' ? 'All' : c]; }), draw); draw('all');
      R.news.hash = function () {
        var n = D.news.filter(function (x) { return x.id === hashId(); })[0]; if (!n) return;
        draw('all'); select(f, 'all');
        var b = document.getElementById(n.id); setOpen(b, true); b.scrollIntoView();
      };
    },
    services: function () {
      $('#svc').innerHTML = D.services.map(function (g) {
        return '<h2>' + esc(g.group) + '</h2><div class="grid">' + g.items.map(function (i) {
          return '<article class="card" id="' + i.id + '"><h3>' + esc(i.title) + '</h3><p>' + esc(i.desc) + '</p>' + link(i.url, i.url ? 'Open' : 'Open ' + i.title) + '</article>';
        }).join('') + '</div>';
      }).join('');
    },
    search: function () {}
  };

  chrome();
  if (R[page]) { R[page](); if (R[page].hash) { R[page].hash(); window.addEventListener('hashchange', R[page].hash); } }
  if (location.hash && !(R[page] && R[page].hash)) { var t = document.getElementById(hashId()); if (t) t.scrollIntoView(); }
})();
