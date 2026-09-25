(() => {
  'use strict';

  const PAGE_SIZE = 24;
  const state = { screen:'inicio', search:'', company:'TODOS', category:'TODOS', type:'TODOS', visible:PAGE_SIZE, current:null, galleryIndex:0 };
  const $ = (s, root=document) => root.querySelector(s);
  const $$ = (s, root=document) => [...root.querySelectorAll(s)];
  const normalize = (v='') => String(v).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  const esc = (v='') => String(v).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  const catalogUrl = () => location.href.split('?')[0].split('#')[0];
  const COMPANY_LOGOS = {
    'Acreaves':'assets/logos/acreaves.png',
    'Dom Porquito':'assets/logos/dom-porquito.png',
    'Fripal':'assets/logos/fripal.jpg'
  };

  function goToScreen(name, {updateHash=true}={}){
    if(!['inicio','catalogo','contato'].includes(name)) name='inicio';
    state.screen=name;
    $$('.screen').forEach(s=>s.classList.toggle('active',s.dataset.screenName===name));
    $$('[data-screen]').forEach(b=>b.classList.toggle('active',b.dataset.screen===name));
    window.scrollTo({top:0,behavior:'auto'});
    if(updateHash && !state.current) history.replaceState(null,'',catalogUrl() + (name==='inicio'?'':`#${name}`));
    if(name==='catalogo') setTimeout(()=>bindCardImages(),0);
  }

  function unique(field){ return [...new Set(PRODUTOS.map(p=>p[field]).filter(Boolean))].sort((a,b)=>String(a).localeCompare(String(b),'pt-BR')); }
  function stats(){
    $('#stat-total').textContent=PRODUTOS.length;
    $('#stat-categorias').textContent=unique('grupo').length;
    $('#stat-marcas').textContent=unique('marca').length;
  }

  function chip(label, kind, value, active, logo=''){
    const logoHtml = logo ? `<img class="chip-logo-img" src="${esc(logo)}" alt="">` : '';
    return `<button class="chip${active?' active':''}" type="button" data-kind="${kind}" data-value="${esc(value)}">${logoHtml}${esc(label)}</button>`;
  }
  function renderFilters(){
    $('#company-chips').innerHTML = chip('Todas','company','TODOS',state.company==='TODOS') + unique('empresa').map(v=>chip(v,'company',v,state.company===v,COMPANY_LOGOS[v]||'')).join('');
    $('#category-chips').innerHTML = chip('Todas','category','TODOS',state.category==='TODOS') + unique('grupo').map(v=>chip(v,'category',v,state.category===v)).join('');
    $('#type-chips').innerHTML = chip('Todos','type','TODOS',state.type==='TODOS') + unique('tipo').map(v=>chip(v,'type',v,state.type===v)).join('');
    $$('.chip').forEach(b=>b.addEventListener('click',()=>{state[b.dataset.kind]=b.dataset.value;state.visible=PAGE_SIZE;renderFilters();renderProducts();}));
    const count=[state.company,state.category,state.type].filter(v=>v!=='TODOS').length;
    $('#filter-count').textContent=count;
    $('#filter-count').hidden=count===0;
  }

  function matchProduct(p){
    const q=normalize(state.search.trim());
    const searchable=[p.cod,p.nome,p.empresa,p.marca,p.grupo,p.tipo,p.complemento,p.peso,p.conserva,p.desc].map(normalize).join(' ');
    return (!q || searchable.includes(q)) && (state.company==='TODOS'||p.empresa===state.company) && (state.category==='TODOS'||p.grupo===state.category) && (state.type==='TODOS'||p.tipo===state.type);
  }
  function filtered(){return PRODUTOS.filter(matchProduct);}

  function productCard(p){
    const thumb = p.thumb || (p.imgs&&p.imgs[0]) || '';
    return `<article class="product-card" tabindex="0" role="button" data-code="${esc(p.cod)}" aria-label="Ver ${esc(p.nome)}">
      <div class="product-image">
        <span class="badge">Cód. ${esc(p.cod)}</span>${p.promo?'<span class="badge badge-promo">Promo</span>':''}
        <img src="${esc(thumb)}" alt="${esc(p.nome)}" loading="lazy" decoding="async" width="420" height="420">
      </div>
      <div class="product-body">
        <div class="product-kicker"><span>${esc(p.empresa)}</span><span>${esc(p.marca||'')}</span></div>
        <h3>${esc(p.nome)}</h3>
        <div class="product-details"><strong>${esc(p.grupo||p.tipo||'Produto')}</strong><span class="product-open">›</span></div>
      </div>
    </article>`;
  }
  function bindCardImages(){
    $$('.product-image img').forEach(img=>{
      const ready=()=>{img.classList.add('loaded');img.closest('.product-image')?.classList.add('ready');};
      if(img.complete) ready(); else {img.addEventListener('load',ready,{once:true});img.addEventListener('error',ready,{once:true});}
    });
  }
  function renderProducts(){
    const list=filtered();
    $('#result-count').textContent=list.length;
    const visible=list.slice(0,state.visible);
    $('#product-grid').innerHTML=visible.map(productCard).join('');
    $('#empty-state').hidden=list.length>0;
    $('#load-more').hidden=visible.length>=list.length;
    const filters=[];
    if(state.company!=='TODOS')filters.push(state.company);
    if(state.category!=='TODOS')filters.push(state.category);
    if(state.type!=='TODOS')filters.push(state.type);
    if(state.search.trim())filters.push(`Busca: “${state.search.trim()}”`);
    $('#active-context').hidden=filters.length===0;
    $('#active-context').textContent=filters.length?`Filtrando por ${filters.join(' · ')}`:'';
    bindCardImages();
    $$('.product-card').forEach(card=>{
      const open=()=>openProduct(card.dataset.code);
      card.addEventListener('click',open);
      card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open();}});
    });
  }
  function clearAll(){state.search='';state.company=state.category=state.type='TODOS';state.visible=PAGE_SIZE;$('#search').value='';renderFilters();renderProducts();}

  function modalProductList(){
    const list=filtered();
    return list.length ? list : PRODUTOS;
  }

  function navigateModalProduct(direction){
    const current=state.current;
    if(!current)return;
    const list=modalProductList();
    const index=list.findIndex(p=>String(p.cod)===String(current.cod));
    if(index<0)return;

    const nextIndex=index+direction;
    if(nextIndex<0){toast('Este é o primeiro produto.');return;}
    if(nextIndex>=list.length){toast('Este é o último produto.');return;}

    openProduct(list[nextIndex].cod);
  }

  function setupProductSwipe(){
    const modal=$('.product-modal');
    if(!modal)return;

    let startX=0,startY=0,startTime=0,tracking=false;
    const ignoreTarget=(target)=>target.closest('button,a,input,textarea,select,.modal-thumbs');

    modal.addEventListener('touchstart',e=>{
      if(e.touches.length!==1 || ignoreTarget(e.target)){tracking=false;return;}
      const t=e.touches[0];
      startX=t.clientX;startY=t.clientY;startTime=Date.now();tracking=true;
    },{passive:true});

    modal.addEventListener('touchend',e=>{
      if(!tracking || !e.changedTouches.length){tracking=false;return;}
      const t=e.changedTouches[0];
      const dx=t.clientX-startX;
      const dy=t.clientY-startY;
      const elapsed=Date.now()-startTime;
      tracking=false;

      // Exige um gesto horizontal intencional para não atrapalhar a rolagem vertical.
      if(elapsed>900 || Math.abs(dx)<70 || Math.abs(dx)<=Math.abs(dy)*1.25)return;
      navigateModalProduct(dx<0 ? 1 : -1);
    },{passive:true});

    modal.addEventListener('touchcancel',()=>{tracking=false;},{passive:true});
  }

  function spec(label,value){ if(!value)return ''; return `<div class="spec"><dt>${esc(label)}</dt><dd>${esc(value)}</dd></div>`; }
  function setGallery(index){
    const p=state.current;if(!p)return;state.galleryIndex=index;
    const img=p.imgs[index]||p.imgs[0];
    $('#modal-stage').innerHTML=`<img src="${esc(img)}" alt="${esc(p.nome)}" decoding="async">`;
    $$('.modal-thumb').forEach((b,i)=>b.classList.toggle('active',i===index));
    $('#modal-download').href=img;
    $('#modal-download').setAttribute('download',`${String(p.cod).replace(/[^a-z0-9_-]/gi,'-')}-${index+1}.webp`);
  }
  function openProduct(code){
    const p=PRODUTOS.find(x=>String(x.cod)===String(code)); if(!p)return;
    goToScreen('catalogo',{updateHash:false});
    state.current=p;state.galleryIndex=0;
    $('#modal-code').textContent=`Cód. ${p.cod}`;$('#modal-company').textContent=p.empresa||'';$('#modal-title').textContent=p.nome||'';$('#modal-description').textContent=p.desc||'';
    $('#modal-specs').innerHTML=[spec('Marca',p.marca),spec('Categoria',p.grupo),spec('Tipo',p.tipo),spec('Embalagem',p.complemento),spec('Peso',p.peso),spec('Conservação',p.conserva)].join('');
    $('#modal-thumbs').innerHTML=(p.imgs||[]).map((img,i)=>`<button class="modal-thumb${i===0?' active':''}" type="button" data-index="${i}" aria-label="Foto ${i+1}"><img src="${esc(img)}" alt="" loading="lazy" decoding="async"></button>`).join('');
    $$('.modal-thumb').forEach(b=>b.addEventListener('click',()=>setGallery(Number(b.dataset.index))));
    setGallery(0);
    const modal=$('#product-modal');modal.hidden=false;document.body.style.overflow='hidden';
    history.replaceState(null,'',`?produto=${encodeURIComponent(p.cod)}#catalogo`);
    setTimeout(()=>$('#modal-close').focus(),0);
  }
  function closeProduct(){
    const modal=$('#product-modal'); if(modal.hidden)return; modal.hidden=true;document.body.style.overflow='';state.current=null;
    history.replaceState(null,'',catalogUrl()+'#catalogo');
  }
  function productLink(p){return catalogUrl()+`?produto=${encodeURIComponent(p.cod)}#catalogo`;}
  async function shareProduct(){
    const p=state.current;if(!p)return;

    const imageUrl=(p.imgs&&p.imgs[state.galleryIndex]) || (p.imgs&&p.imgs[0]) || '';
    const link=productLink(p);
    const text=`${p.nome}\nCód. ${p.cod} · ${p.empresa}${p.marca?` · ${p.marca}`:''}\n${p.complemento?`Embalagem: ${p.complemento}\n`:''}${p.peso?`Peso: ${p.peso}\n`:''}\n${p.desc||''}\n\nVer no catálogo: ${link}`;

    // No Android/Chrome, usa o compartilhamento nativo com a FOTO anexada.
    // O usuário escolhe o WhatsApp na folha de compartilhamento do sistema.
    if(imageUrl && navigator.share){
      try{
        const response=await fetch(imageUrl,{cache:'force-cache'});
        if(!response.ok) throw new Error('Falha ao carregar imagem');
        const blob=await response.blob();
        const ext=(blob.type&&blob.type.includes('png'))?'png':(blob.type&&blob.type.includes('jpeg'))?'jpg':'webp';
        const file=new File([blob],`${String(p.cod).replace(/[^a-z0-9_-]/gi,'-')}-${state.galleryIndex+1}.${ext}`,{type:blob.type||'image/webp'});

        if(!navigator.canShare || navigator.canShare({files:[file]})){
          await navigator.share({
            title:p.nome,
            text,
            files:[file]
          });
          return;
        }
      }catch(e){
        if(e && e.name==='AbortError') return;
        console.warn('Compartilhamento com imagem indisponível; usando fallback.',e);
      }
    }

    // Fallback: abre o WhatsApp com o texto, link do produto e link da imagem.
    const fallback=`${text}${imageUrl?`\n\nImagem do produto: ${new URL(imageUrl,location.href).href}`:''}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(fallback)}`,'_blank','noopener');
  }
  async function copyProduct(){
    const p=state.current;if(!p)return;const link=productLink(p);
    try{await navigator.clipboard.writeText(link);toast('Link copiado.');}catch{prompt('Copie o link:',link);}
  }
  async function shareCatalog(){
    const url=catalogUrl(); const text='Catálogo Comercial — Acreaves, Dom Porquito e Fripal';
    if(navigator.share){try{await navigator.share({title:text,text,url});return;}catch(e){if(e.name==='AbortError')return;}}
    window.open(`https://wa.me/?text=${encodeURIComponent(text+'\n\n'+url)}`,'_blank','noopener');
  }
  function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>t.classList.remove('show'),1800);}

  function setup(){
    stats();renderFilters();renderProducts();
    $$('[data-screen]').forEach(btn=>btn.addEventListener('click',()=>goToScreen(btn.dataset.screen)));
    $('#search').addEventListener('input',e=>{state.search=e.target.value;state.visible=PAGE_SIZE;renderProducts();});
    $('#clear-search').addEventListener('click',()=>{$('#search').value='';state.search='';state.visible=PAGE_SIZE;renderProducts();$('#search').focus();});
    $('#clear-filters').addEventListener('click',clearAll);$('#empty-clear').addEventListener('click',clearAll);
    $('#filter-toggle').addEventListener('click',e=>{const f=$('#filters');const open=f.classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',String(open));});
    $('#load-more').addEventListener('click',()=>{state.visible+=PAGE_SIZE;renderProducts();});
    const sentinel=new IntersectionObserver(entries=>{if(entries[0]?.isIntersecting&&!$('#load-more').hidden&&state.screen==='catalogo'){state.visible+=PAGE_SIZE;renderProducts();}},{rootMargin:'300px'});sentinel.observe($('#load-sentinel'));
    $('#modal-close').addEventListener('click',closeProduct);$('#product-modal').addEventListener('click',e=>{if(e.target.id==='product-modal')closeProduct();});
    setupProductSwipe();
    document.addEventListener('keydown',e=>{if(e.key==='Escape')closeProduct();if(!state.current)return;if(e.key==='ArrowRight'&&state.galleryIndex<state.current.imgs.length-1)setGallery(state.galleryIndex+1);if(e.key==='ArrowLeft'&&state.galleryIndex>0)setGallery(state.galleryIndex-1);});
    $('#modal-whatsapp').addEventListener('click',shareProduct);$('#modal-copy').addEventListener('click',copyProduct);
    ['#share-catalog-top','#share-catalog-hero'].forEach(id=>$(id).addEventListener('click',shareCatalog));

    const params=new URLSearchParams(location.search);const code=params.get('produto');
    if(code){setTimeout(()=>openProduct(code),80);} else {
      const hash=location.hash.replace('#','');
      goToScreen(['catalogo','contato'].includes(hash)?hash:'inicio',{updateHash:false});
    }
    if('serviceWorker' in navigator) window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
  }
  document.addEventListener('DOMContentLoaded',setup);
})();
