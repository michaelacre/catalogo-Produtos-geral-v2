(() => {
  'use strict';
  if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
  const products = window.NATAL_PRODUCTS;
  const $ = s => document.querySelector(s);
  const $$ = s => [...document.querySelectorAll(s)];
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  let filter = 'todos';
  let current = null;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const whatsapp = text => `https://wa.me/5568999314248?text=${encodeURIComponent(text)}`;


  function render() {
    const list = products.filter(p => filter === 'todos' || p.group === filter);
    $('#result-count').textContent = `${list.length} produtos`;
    $('#product-grid').innerHTML = list.map(p => `<article class="product-card" data-code="${esc(p.code)}">
      <button class="product-visual" type="button" data-product="${esc(p.code)}" aria-label="Ver detalhes de ${esc(p.name)}"><span class="product-tag">${p.group === 'linguicas' ? 'CONFRATERNIZAÇÃO' : 'SELEÇÃO PARA A CEIA'}</span><img src="${esc(p.image)}" alt="${esc(p.name)}" width="800" height="800" loading="lazy" decoding="async"><span class="visual-arrow" aria-hidden="true">↗</span></button>
      <div class="product-meta"><span>DOM PORQUITO</span><span>CÓD. ${esc(p.code)}</span></div><h3>${esc(p.name)}</h3><p>${esc(p.descricao)}</p>
    </article>`).join('');
  }

  function openProduct(code) {
    current = products.find(p => p.code === code);
    if (!current) return;
    $('#dialog-image').src = current.photo || current.image;
    $('#dialog-image').alt = current.name;
    $('#dialog-code').textContent = `${current.company} · Cód. ${current.code}`;
    $('#dialog-title').textContent = current.name;
    $('#dialog-description').textContent = current.descricao;
    $('#dialog-specs').innerHTML = [['Marca', current.brand],['Conservação', current.conservation]].filter(([,value]) => value).map(([label,value]) => `<div><dt>${esc(label)}</dt><dd>${esc(value)}</dd></div>`).join('');
    $('#dialog-contact').href = whatsapp(`Olá! Gostaria de consultar ${current.name}, código ${current.code}, para o Natal.`);
    $('#product-dialog').showModal();
  }

  const chapterCodes = ['20914','20915','20562'];
  const chapterLabels = ['PARA ACENDER A CONFRATERNIZAÇÃO','PARA REUNIR EM VOLTA DO ASSADO','PARA COMPARTILHAR A CEIA'];
  const chapterWords = ['picanha','costela','pernil'];
  let chapter = 0;
  let ignoreScrollUntil = 0;
  function showChapter(index, animate = true) {
    const item = products.find(p => p.code === chapterCodes[index]);
    if (!item || index === chapter && $('#chapter-image').dataset.ready) return;
    chapter = index;
    $('#chapter-image').dataset.ready = 'true';
    $('#chapter-image').src = item.image;
    $('#chapter-image').alt = item.name;
    $('#chapter-word').textContent = chapterWords[index];
    $('#chapter-label').textContent = chapterLabels[index];
    $('.chapter-detail h3').textContent = item.name;
    $('.chapter-detail>p:not(.chapter-label)').textContent = item.descricao;
    $('#chapter-code').textContent = `CÓD. ${item.code}`;
    $('#chapter-open').dataset.product = item.code;
    $$('[data-chapter]').forEach(button => button.setAttribute('aria-pressed', String(Number(button.dataset.chapter) === index)));
    $('#chapter-image').style.transform = '';
    $('.chapter-detail .text-link').dataset.product = item.code;
    $$('[data-chapter]').forEach(button => button.setAttribute('aria-pressed', String(Number(button.dataset.chapter) === index)));
    if (animate && !reduced.matches) {
      $('#chapter-image').animate([{opacity:.3,transform:'translateY(30px) scale(.97)'},{opacity:1,transform:'translateY(0) scale(1)'}],{duration:550,easing:'cubic-bezier(.22,.8,.25,1)'});
      $('.chapter-detail').animate([{opacity:.3,transform:'translateY(8px)'},{opacity:1,transform:'translateY(0)'}],{duration:380,easing:'ease-out'});
    }
  }

  // Scroll stays native. Only the image-led chapter section reacts to its position.
  let frame = false;
  function trackChapter() {
    if (frame || reduced.matches || Date.now() < ignoreScrollUntil) return;
    frame = true;
    requestAnimationFrame(() => {
      frame = false;
      const section = $('#destaques');
      const rect = section.getBoundingClientRect();
      const span = section.offsetHeight - innerHeight;
      if (span <= 0 || rect.top > innerHeight || rect.bottom < 0) return;
      const progress = Math.max(0, Math.min(1, -rect.top / span));
      showChapter(Math.min(2, Math.floor(progress * 3)));
    });
  }

  document.addEventListener('click', event => {
    const productButton = event.target.closest('[data-product]');
    if (productButton) openProduct(productButton.dataset.product);
    const close = event.target.closest('[data-close]');
    if (close) close.closest('dialog').close();
  });
  $$('dialog').forEach(dialog => {
    dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
    dialog.addEventListener('close', () => { if (!document.querySelector('dialog[open]')) document.body.style.overflow = ''; });
    new MutationObserver(() => { if (dialog.open) document.body.style.overflow = 'hidden'; }).observe(dialog,{attributes:true,attributeFilter:['open']});
  });
  $$('[data-filter]').forEach(button => button.addEventListener('click', () => {
    filter = button.dataset.filter;
    $$('[data-filter]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    render();
  }));
  $$('[data-chapter]').forEach(button => button.addEventListener('click', () => { ignoreScrollUntil = Date.now() + 1600; showChapter(Number(button.dataset.chapter)); }));
  window.addEventListener('scroll', trackChapter, {passive:true});
  window.addEventListener('resize', trackChapter, {passive:true});
  reduced.addEventListener('change', () => { if (reduced.matches) $('#chapter-image').getAnimations().forEach(animation => animation.cancel()); });
  render(); showChapter(0,false); trackChapter();
})();
