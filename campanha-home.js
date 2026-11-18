(() => {
  'use strict';
  if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
  const products = window.NATAL_PRODUCTS;
  const $ = s => document.querySelector(s);
  const $$ = s => [...document.querySelectorAll(s)];
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const selected = new Set();
  let filter = 'todos';
  let current = null;
  let toastTimer;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const whatsapp = text => `https://wa.me/5568999314248?text=${encodeURIComponent(text)}`;

  function toast(message) {
    $('#toast').textContent = message;
    $('#toast').classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => $('#toast').classList.remove('visible'), 2700);
  }

  function render() {
    const list = products.filter(p => filter === 'todos' || p.group === filter);
    $('#result-count').textContent = `${list.length} produtos`;
    $('#product-grid').innerHTML = list.map(p => `<article class="product-card" data-code="${esc(p.code)}">
      <button class="product-visual" type="button" data-product="${esc(p.code)}" aria-label="Ver detalhes de ${esc(p.name)}"><span class="product-tag">${p.group === 'linguicas' ? 'CONFRATERNIZAÃ‡ÃƒO' : 'SELEÃ‡ÃƒO PARA A CEIA'}</span><img src="${esc(p.image)}" alt="${esc(p.name)}" width="800" height="800" loading="lazy" decoding="async"><span class="visual-arrow" aria-hidden="true">â†—</span></button>
      <div class="product-meta"><span>DOM PORQUITO</span><span>CÃ“D. ${esc(p.code)}</span></div><h3>${esc(p.name)}</h3><p>${esc(p.descricao)}</p>
      <button class="add-product" type="button" data-add="${esc(p.code)}" aria-pressed="${selected.has(p.code)}" aria-label="${selected.has(p.code) ? 'Remover' : 'Adicionar'} ${esc(p.name)} ${selected.has(p.code) ? 'da' : 'Ã '} seleÃ§Ã£o"><span>${selected.has(p.code) ? 'Na sua seleÃ§Ã£o' : 'Adicionar Ã  seleÃ§Ã£o'}</span><span aria-hidden="true">${selected.has(p.code) ? 'âœ“' : '+'}</span></button>
    </article>`).join('');
  }

  function syncSelection() {
    $('#selection-count').textContent = selected.size;
    const list = products.filter(p => selected.has(p.code));
    $('#selection-list').innerHTML = list.map(p => `<li><img src="${esc(p.image)}" width="65" height="75" alt=""><div>${esc(p.name)}<small>CÃ³d. ${esc(p.code)}</small></div><button type="button" data-remove="${esc(p.code)}" aria-label="Remover ${esc(p.name)} da seleÃ§Ã£o">Ã—</button></li>`).join('');
    $('#selection-empty').hidden = Boolean(list.length);
    $('#selection-send').hidden = !list.length;
    $('#selection-send').href = whatsapp('OlÃ¡! Gostaria de consultar estes produtos para o Natal:\n\n' + list.map(p => `â€¢ ${p.name} â€” CÃ³d. ${p.code}`).join('\n'));
    $$('#product-grid [data-add]').forEach(button => {
      const active = selected.has(button.dataset.add);
      const product = products.find(p => p.code === button.dataset.add);
      button.setAttribute('aria-pressed', String(active));
      button.setAttribute('aria-label', `${active ? 'Remover' : 'Adicionar'} ${product.name} ${active ? 'da' : 'Ã '} seleÃ§Ã£o`);
      button.innerHTML = `<span>${active ? 'Na sua seleÃ§Ã£o' : 'Adicionar Ã  seleÃ§Ã£o'}</span><span aria-hidden="true">${active ? 'âœ“' : '+'}</span>`;
    });
    if (current) $('#dialog-add').innerHTML = `${selected.has(current.code) ? 'Remover da seleÃ§Ã£o' : 'Adicionar Ã  seleÃ§Ã£o'} <span aria-hidden="true">${selected.has(current.code) ? 'âœ“' : '+'}</span>`;
  }

  function toggleProduct(code) {
    const active = selected.has(code);
    if (active) selected.delete(code); else selected.add(code);
    syncSelection();
    toast(active ? 'Produto removido da seleÃ§Ã£o.' : 'Produto adicionado Ã  sua seleÃ§Ã£o.');
  }

  function openProduct(code) {
    current = products.find(p => p.code === code);
    if (!current) return;
    $('#dialog-image').src = current.photo || current.image;
    $('#dialog-image').alt = current.name;
    $('#dialog-code').textContent = `${current.company} Â· CÃ³d. ${current.code}`;
    $('#dialog-title').textContent = current.name;
    $('#dialog-description').textContent = current.descricao;
    $('#dialog-specs').innerHTML = [['Marca', current.brand],['ConservaÃ§Ã£o', current.conservation]].filter(([,value]) => value).map(([label,value]) => `<div><dt>${esc(label)}</dt><dd>${esc(value)}</dd></div>`).join('');
    $('#dialog-contact').href = whatsapp(`OlÃ¡! Gostaria de consultar ${current.name}, cÃ³digo ${current.code}, para o Natal.`);
    syncSelection();
    $('#product-dialog').showModal();
  }

  const chapterCodes = ['20914','20915','20562'];
  const chapterLabels = ['PARA ACENDER A CONFRATERNIZAÃ‡ÃƒO','PARA REUNIR EM VOLTA DO ASSADO','PARA COMPARTILHAR A CEIA'];
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
    $('#chapter-code').textContent = `CÃ“D. ${item.code}`;
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
    const add = event.target.closest('[data-add]');
    if (add) toggleProduct(add.dataset.add);
    const remove = event.target.closest('[data-remove]');
    if (remove) {
      const index = [...selected].indexOf(remove.dataset.remove);
      selected.delete(remove.dataset.remove); syncSelection();
      const buttons = $$('#selection-list [data-remove]');
      (buttons[Math.min(index,buttons.length-1)] || $('#selection-dialog [data-close]')).focus();
    }
    const close = event.target.closest('[data-close]');
    if (close) close.closest('dialog').close();
  });
  $('#dialog-add').addEventListener('click', () => { if (current) toggleProduct(current.code); });
  $('#open-selection').addEventListener('click', () => { syncSelection(); $('#selection-dialog').showModal(); });
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
  render(); syncSelection(); showChapter(0,false); trackChapter();
})();
