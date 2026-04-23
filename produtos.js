// ============================================================
//  GRUPO DP — BASE DE PRODUTOS
//  Edite este arquivo para adicionar/remover/atualizar produtos
//
//  Campos:
//    cod        → código do produto
//    nome       → nome comercial
//    empresa    → ACREAVES | Dom Porquito | Fripal
//    marca      → SABBOR | MISTER PIG | ACREAVES | LAT VIDA
//    grupo      → CORTE | INTEIRO | LINGUIÇAS | FATIADO
//    tipo       → CONGELADO | RESFRIADO | TEMPERADO | DEFUMADOS
//   complemento  → ex: "CX C/ 6 UND"
//    peso       → ex: "6 KG"
//    conserva   → instrução de conservação
//    promo      → true = aparece no filtro PROMOÇÃO
//    imgs       → array de URLs (até 3 fotos)
//    desc       → descrição comercial
// ============================================================

const PRODUTOS = [

  // ══════════════════════════════════════════
  //  ACREAVES
  // ══════════════════════════════════════════

  {
    cod: "106",
    nome: "FRANGO RESFRIADO TEMPERADO (ASSAR) S/MÍUDOS",
    empresa: "ACREAVES",
    marca: "SABBOR",
    grupo: "INTEIRO",
    tipo: "RESFRIADO",
    complemento: "CX C/ 20 KG",
    peso: "20 KG",
    conserva: "MANTENHA RESFRIADO  DE 0°C A 7°C",
    promo: false,
    imgs: ["https://i.postimg.cc/g2TVSyBd/106.png"],
    desc: "Frango inteiro resfriado, já temperado e pronto para assar, sem miúdos, garantindo praticidade, sabor e suculência no preparo."
  },
  {
    cod: "225",
    nome: "COXA E SOBRECOXA  CONGELADA SABBOR",
    empresa: "ACREAVES",
    marca: "SABBOR",
    grupo: "CORTE",
    tipo: "CONGELADO",
    complemento: "CX C/ 18 KG",
    peso: "18 KG",
    conserva: "MANTENHA CONGELADO A -12°C",
    promo: false,
    imgs: ["https://i.postimg.cc/RFBsC77p/SABBOR-Cortes-Coxa-e-sobrecoxa-225.png"],
    desc: "Cortes de coxa e sobrecoxa de frango, congelados, ideais para diversas preparações, com suculência e sabor garantidos."
  },
  {
    cod: "226",
    nome: "FILE DE PEITO  CONGELADO SABBOR",
    empresa: "ACREAVES",
    marca: "SABBOR",
    grupo: "CORTE",
    tipo: "CONGELADO",
    complemento: "CX C/ 18 KG",
    peso: "18 KG",
    conserva: "MANTENHA CONGELADO A -12°C",
    promo: false,
    imgs: ["https://i.postimg.cc/cHBDvvTL/SABBOR-Cortes-File-de-peito-226.png"],
    desc: "Filé de peito de frango sem osso, congelado, prático e versátil, ideal para grelhados e receitas saudáveis."
  },
  {
    cod: "227",
    nome: "PEITO DE FRANGO CONGELADO SABBOR",
    empresa: "ACREAVES",
    marca: "SABBOR",
    grupo: "CORTE",
    tipo: "CONGELADO",
    complemento: "CX C/ 18 KG",
    peso: "18 KG",
    conserva: "MANTENHA CONGELADO A -12°C",
    promo: false,
    imgs: ["https://i.postimg.cc/90XLZcNM/SABBOR-Cortes-Peito-227.png"],
    desc: "Peito de frango congelado, corte nobre com baixo teor de gordura, ideal para diversas preparações."
  },
  {
    cod: "239",
    nome: "COXINHA DA ASA CONGELADA SABBOR",
    empresa: "ACREAVES",
    marca: "SABBOR",
    grupo: "CORTE",
    tipo: "CONGELADO",
    complemento: "CX C/ 18 KG",
    peso: "18 KG",
    conserva: "MANTENHA CONGELADO A - 12°C",
    promo: false,
    imgs: ["https://i.postimg.cc/pTHGVff6/SABBOR-Cortes-Coxinha-da-asa-239.png"],
    desc: "Coxinha da asa de frango, congelada, perfeita para frituras e petiscos crocantes."
  },
  {
    cod: "240",
    nome: "MEIO + PONTA DA ASA CONGELADA SABBOR",
    empresa: "ACREAVES",
    marca: "SABBOR",
    grupo: "CORTE",
    tipo: "CONGELADO",
    complemento: "CX C/ 18 KG",
    peso: "18 KG",
    conserva: "MANTENHA CONGELADO A -12°C",
    promo: false,
    imgs: ["https://i.postimg.cc/Y02dYty0/SABBOR-Cortes-Meio-ponta-da-asa-240.png"],
    desc: "Cortes de asa (meio e ponta), congelados, ideais para assados e frituras com ótimo rendimento."
  },
  {
    cod: "241",
    nome: "DORSO CONGELADO SABBOR",
    empresa: "ACREAVES",
    marca: "SABBOR",
    grupo: "CORTE",
    tipo: "CONGELADO",
    complemento: "CX C/ 15 KG",
    peso: "15 KG",
    conserva: "MANTENHA CONGELADO A -12°C",
    promo: false,
    imgs: ["https://i.postimg.cc/nzGdXXTH/SABBOR-Cortes-Dorso-241.png"],
    desc: "Dorso de frango congelado, indicado para caldos e preparo de receitas caseiras."
  },
  {
    cod: "242",
    nome: "ASA CONGELADA SABBOR",
    empresa: "ACREAVES",
    marca: "SABBOR",
    grupo: "CORTE",
    tipo: "CONGELADO",
    complemento: "CX C/ 18 KG",
    peso: "18 KG",
    conserva: "MANTENHA CONGELADO A -12°C",
    promo: false,
    imgs: ["https://i.postimg.cc/Qt34NQQn/SABBOR-Cortes-Asa-242.png"],
    desc: "Asa de frango inteira, congelada, ideal para churrasco, fritura ou preparo no forno."
  },
  {
    cod: "243",
    nome: "SOBRE COXA SABBOR",
    empresa: "ACREAVES",
    marca: "SABBOR",
    grupo: "CORTE",
    tipo: "CONGELADO",
    complemento: "CX C/ 18 KG",
    peso: "18 KG",
    conserva: "MANTENHA CONGELADO A -12°C",
    promo: false,
    imgs: ["https://i.postimg.cc/tJRBW9mn/SABBOR-Cortes-Sobrecoxa-243.png"],
    desc: "Sobrecoxa de frango, corte suculento e macio, ideal para diversas preparações do dia a dia."
  },
  {
    cod: "244",
    nome: "MEIO DA  ASA  CONGELADO SABBOR",
    empresa: "ACREAVES",
    marca: "SABBOR",
    grupo: "CORTE",
    tipo: "CONGELADO",
    complemento: "CX C/ 15 KG",
    peso: "15 KG",
    conserva: "MANTENHA CONGELADO A -12°C",
    promo: false,
    imgs: ["https://i.postimg.cc/L54xLm0m/SABBOR-Cortes-Meio-da-asa-244.png"],
    desc: "Meio da asa de frango, congelado, perfeito para fritar ou assar, com textura macia e sabor marcante."
  },
  {
    cod: "320",
    nome: "CORACAO CONGELADO SABBOR",
    empresa: "ACREAVES",
    marca: "SABBOR",
    grupo: "CORTE",
    tipo: "CONGELADO",
    complemento: "CX C/ 10 KG",
    peso: "10 KG",
    conserva: "MANTENHA CONGELADO A -12°C",
    promo: false,
    imgs: ["https://i.postimg.cc/90XLZcNG/SABBOR-Miudos-Coracao-320.png"],
    desc: "Coração de frango congelado, ideal para churrasco e petiscos, com sabor característico e maciez."
  },
  {
    cod: "323",
    nome: "KIT DE CANJA CONGELADO SABBOR",
    empresa: "ACREAVES",
    marca: "SABBOR",
    grupo: "CORTE",
    tipo: "CONGELADO",
    complemento: "CX C/ 18 KG",
    peso: "18 KG",
    conserva: "MANTENHA CONGELADO A -12°C",
    promo: false,
    imgs: ["https://i.postimg.cc/vT80fGSv/SABBOR-Miudos-Kit-Canja-323.png"],
    desc: "Kit com cortes selecionados de frango para preparo de canja, garantindo praticidade e sabor caseiro."
  },
  {
    cod: "321",
    nome: "MOELA CONGELADA SABBOR",
    empresa: "ACREAVES",
    marca: "SABBOR",
    grupo: "CORTE",
    tipo: "CONGELADO",
    complemento: "CX C/ 10 KG",
    peso: "10 KG",
    conserva: "MANTENHA CONGELADO A -12°C",
    promo: false,
    imgs: ["https://i.postimg.cc/BbZmHJwM/SABBOR-Miudos-Moela-321.png"],
    desc: "Moela de frango congelada, ideal para cozidos e receitas tradicionais, com textura firme e sabor intenso."
  },
  {
    cod: "322",
    nome: "PE DE FRANGO CONGELADO SABBOR",
    empresa: "ACREAVES",
    marca: "SABBOR",
    grupo: "CORTE",
    tipo: "CONGELADO",
    complemento: "CX C/ 18 KG",
    peso: "18 KG",
    conserva: "MANTENHA CONGELADO A -12°C",
    promo: false,
    imgs: ["https://i.postimg.cc/C5vm49Wk/SABBOR-Miudos-Pe-322.png"],
    desc: "Pé de frango congelado, indicado para caldos ricos e gelatinosos, muito utilizado na culinária tradicional."
  },
  {
    cod: "324",
    nome: "COXA/SOBRECOXA PORCAO DORSAL CONG SABBOR",
    empresa: "ACREAVES",
    marca: "SABBOR",
    grupo: "CORTE",
    tipo: "CONGELADO",
    complemento: "CX C/ 18 KG",
    peso: "18 KG",
    conserva: "MANTENHA CONGELADO A -12°C",
    promo: false,
    imgs: ["https://i.postimg.cc/MTSPZ77N/SABBOR-Cortes-Coxa-e-sobrecoxa-dorsal-324.png"],
    desc: "Cortes de coxa e sobrecoxa com porção dorsal, congelados, oferecendo ótimo custo-benefício e sabor."
  },
  {
    cod: "238", nome: "SOBRECOXA CONGELADA NA BANDEJA",
    empresa: "ACREAVES", marca: "SABBOR", grupo: "CORTE", tipo: "CONGELADO",
   complemento: "CX C/ 6 UND", peso: "6 KG",
    conserva: "MANTER CONGELADO A -12°C", promo: false,
    imgs: ["https://i.postimg.cc/rsmnPp2B/238-V00-SABBOR-Sobrecoxa-Congelada-mockup-243.jpg"],
    desc: "Corte suculento e macio, ideal para assados.complemento prática que preserva o frescor e facilita a exposição no freezer."
  },

{
    cod: "238", nome: "SOBRECOXA CONGELADA NA BANDEJA",
    empresa: "ACREAVES", marca: "SABBOR", grupo: "CORTE", tipo: "CONGELADO",
   complemento: "CX C/ 6 UND", peso: "6 KG",
    conserva: "MANTER CONGELADO A -12°C", promo: false,
    imgs: ["https://i.postimg.cc/rsmnPp2B/238-V00-SABBOR-Sobrecoxa-Congelada-mockup-243.jpg"],
    desc: "Corte suculento e macio, ideal para assados.complemento prática que preserva o frescor e facilita a exposição no freezer."
  },

  
  {
    cod: "237", nome: "PEITO CONGELADO NA BANDEJA",
    empresa: "ACREAVES", marca: "SABBOR", grupo: "CORTE", tipo: "CONGELADO",
   complemento: "CX C/ 6 UND", peso: "6 KG",
    conserva: "CONGELADO A -12°C", promo: false,
    imgs: ["https://i.postimg.cc/T1w74PvZ/237-V00-SABBOR-Peito-Congelado-mockup-237.jpg"],
    desc: "O corte mais versátil da cozinha. Peito selecionado com baixo teor de gordura, perfeito para dietas equilibradas e receitas variadas."
  },
  {
    cod: "236", nome: "COXA CONGELADA DE FRANGO NA BANDEJA",
    empresa: "ACREAVES", marca: "SABBOR", grupo: "CORTE", tipo: "CONGELADO",
   complemento: "CX C/ 6 UND", peso: "6 KG",
    conserva: "MANTER CONGELADO A -12°C", promo: false,
    imgs: ["https://i.postimg.cc/ZnR7MqzX/236-V00-SABBOR-Coxa-Congelada-coxa.jpg"],
    desc: "Clássico indispensável no dia a dia. Coxas de frango com textura firme e sabor marcante, prontas para o preparo."
  },
  {
    cod: "235", nome: "FRANGO A PASSARINHO CONGELADO NA BANDEJA",
    empresa: "ACREAVES", marca: "SABBOR", grupo: "CORTE", tipo: "CONGELADO",
   complemento: "CX C/ 6 UND", peso: "6 KG",
    conserva: "MANTER CONGELADO A -12°C", promo: false,
    imgs: ["https://i.postimg.cc/C51PQKpX/235-V00-SABBOR-Frango-a-Passarinho-Congelado-mockup.jpg"],
    desc: "Cortes padronizados para o petisco perfeito. Facilidade total: do freezer direto para a panela ou airfryer."
  },
  {
    cod: "249", nome: "COXINHA DA ASA CONGELADA NA BANDEJA",
    empresa: "ACREAVES", marca: "SABBOR", grupo: "CORTE", tipo: "CONGELADO",
   complemento: "CX C/ 6 UND", peso: "6 KG",
    conserva: "MANTER CONGELADO A -12°C", promo: false,
    imgs: ["https://i.postimg.cc/kG41p5PH/234-V00-SABBOR-Coxinha-da-Asa-Congelada-mockup.jpg"],
    desc: "O corte favorito do churrasco e do happy hour. Carnuda e saborosa, com padronização de tamanho na bandeja."
  },
  {
    cod: "248", nome: "FILÉ DA COXA CONGELADO NA BANDEJA",
    empresa: "ACREAVES", marca: "SABBOR", grupo: "CORTE", tipo: "CONGELADO",
   complemento: "CX C/ 6 UND", peso: "6 KG",
    conserva: "MANTER CONGELADO A -12°C", promo: false,
    imgs: ["https://i.postimg.cc/nrzRPLfw/233-V00-SABBOR-File-de-Coxa-e-Sobrecoxa-Congelado-mockup.jpg"],
    desc: "Sabor da coxa com a praticidade do filé. Sem ossos e peles, ideal para grelhados rápidos e estrogonofe suculento."
  },
  {
    cod: "247", nome: "COXA E SOBRECOXA CONGELADA NA BANDEJA",
    empresa: "ACREAVES", marca: "SABBOR", grupo: "CORTE", tipo: "CONGELADO",
   complemento: "CX C/ 6 UND", peso: "6 KG",
    conserva: "MANTER CONGELADO A -12°C", promo: false,
    imgs: ["https://i.postimg.cc/4ydLS3R8/232-V00-SABBOR-Coxa-e-Sobrecoxa-Congelada-mockup.jpg"],
    desc: "O combo perfeito de rendimento e sabor. Peças selecionadas que garantem uma refeição completa para toda a família."
  },
  {
    cod: "246", nome: "MEIO DA ASA CONGELADA NA BANDEJA",
    empresa: "ACREAVES", marca: "SABBOR", grupo: "CORTE", tipo: "CONGELADO",
   complemento: "CX C/ 6 UND", peso: "6 KG",
    conserva: "MANTER CONGELADO A -12°C", promo: false,
    imgs: ["https://i.postimg.cc/QCt4yMZS/231-V00-SABBOR-Meio-da-Asa-Congelada-mockup.jpg"],
    desc: "Qualidade premium para quem busca o melhor da asa (Tulipa). Ideal para receitas especiais e preparos crocantes."
  },
  {
    cod: "245", nome: "FILÉ DE PEITO CONGELADO NA BANDEJA",
    empresa: "ACREAVES", marca: "SABBOR", grupo: "CORTE", tipo: "CONGELADO",
   complemento: "CX C/ 6 UND", peso: "6 KG",
    conserva: "CONGELADO A -12°C", promo: false,
    imgs: ["https://i.postimg.cc/90M8nfHY/230-V00-SABBOR-File-de-Peito-Congelado-mockup.jpg"],
    desc: "Praticidade máxima: filés limpos e padronizados. Ideal para o consumidor que busca rapidez e zero desperdício."
  },
  {
    cod: "115", nome: "AVE NATALINA SABBOR",
    empresa: "ACREAVES", marca: "SABBOR", grupo: "INTEIRO", tipo: "TEMPERADO",
   complemento: "CX C/ 20 KG", peso: "20 KG",
    conserva: "MANTER CONGELADO A -12°C", promo: true,
    imgs: ["https://i.postimg.cc/gjJST0bD/021-V02-SABBOR-AVE-NATALINA-mockup.jpg"],
    desc: "A estrela das celebrações. Ave selecionada com tempero especial Sabbor, garantindo carne suculenta, pele dourada e sabor inconfundível."
  },
  {
    cod: "106", nome: "FRANGO RESFRIADO TEMPERADO (ASSAR) S/MIÚDOS",
    empresa: "ACREAVES", marca: "ACREAVES", grupo: "INTEIRO", tipo: "RESFRIADO",
   complemento: "CX C/ 20 KG", peso: "20 KG",
    conserva: "MANTER RESFRIADO 0°C A +7°C", promo: false,
    imgs: ["https://i.postimg.cc/g2TVSyBd/106.png"],
    desc: "Frango inteiro temperado, pronto para ir ao forno. Sem miúdos, com tempero especial que garante carne suculenta e dourada."
  },
  {
    cod: "105", nome: "GALINHA CONGELADA C/ MIÚDOS",
    empresa: "ACREAVES", marca: "ACREAVES", grupo: "CORTE", tipo: "CONGELADO",
   complemento: "CX C/ 18 KG", peso: "18 KG",
    conserva: "MANTER CONGELADO A -12°C", promo: false,
    imgs: ["https://i.postimg.cc/GthjHrXQ/105-Galinha-congelada-Acreaves-Copia-removebg-preview.png"],
    desc: "Sabor autêntico e marcante para receitas tradicionais. Ideal para caldos ricos e cozidos de cozimento lento que exigem mais consistência e aroma."
  },
      {cod: "104", nome: "FRANGO CONGELADO SABBOR",
    empresa: "ACREAVES", marca: "SABBOR", grupo: "CORTE", tipo: "CONGELADO",
   complemento: "CX C/ 18 KG", peso: "18 KG",
    conserva: "MANTER CONGELADO A -12°C", promo: false,
    imgs: ["https://i.postimg.cc/vTBqNmwf/001-V01-SABBOR-Frango-Congelado-mockup.jpg"],
    desc: "Sabor autêntico e marcante para receitas tradicionais. Ideal para caldos ricos e cozidos de cozimento lento que exigem mais consistência e aroma."
  },

  // ══════════════════════════════════════════
  //  DOM PORQUITO
  // ══════════════════════════════════════════
  //══════════════════════════════════════════  
{
    cod: "20510",
    nome: "LINGUIÇAA DE FRANGO FINA APIMENTADA",
    empresa: "Dom Porquito",
    marca: "MISTER PIG",
    grupo: "LINGUIÇAS",
    tipo: "CONGELADO",
    complemento: "(CX C/ 14,40 KG)",
    peso: "14,4 KG",
    conserva: "MANTENHA CONGELADO A -12°C",
    promo: false,
    imgs: ["https://i.postimg.cc/9Mn8j6fM/20510-V00-Mister-Pig-Linguica-de-Frango-Fina-Apimentada-800-g-Congelada-mockup.png"],
    desc: "Linguiça fina de frango com toque picante, perfeita para grelhar ou fritar, com textura leve e sabor intenso."
  },
  {
    cod: "20511",
    nome: "LINGUIÇA TIPO PAIO 12kg",
    empresa: "Dom Porquito",
    marca: "SABBOR",
    grupo: "LINGUIÇAS",
    tipo: "DEFUMADOS",
    complemento: "(CX C/ 12,00 KG)",
    peso: "12 KG",
    conserva: "MANTENHA EM LOCAL SECO E FRESCO ATE +22°C",
    promo: false,
    imgs: ["https://i.postimg.cc/rmPnLBpp/20511-V01-SABBOR-Linguica-Paio-1-kg.png"],
    desc: "Linguiça tipo paio, sabor defumado tradicional, ideal para feijoadas e pratos típicos."
  },
  {
    cod: "20512",
    nome: "LINGUIÇA TIPO PAIO 10KG",
    empresa: "Dom Porquito",
    marca: "SABBOR",
    grupo: "LINGUIÇAS",
    tipo: "DEFUMADOS",
    complemento: "(CX C/ 10,00 KG)",
    peso: "10 KG",
    conserva: "MANTENHA EM LOCAL SECO E FRESCO ATE +25°C",
    promo: false,
    imgs: ["https://i.postimg.cc/mD5XGvrk/20512-V00-SABBOR-Linguica-Paio-3-gomos-mockup.png"],
    desc: "Linguiça tipo paio com sabor marcante e defumação especial, perfeita para receitas tradicionais."
  },
  {
    cod: "20561",
    nome: "FILE DA PANCETA SUINA TEMPERADA",
    empresa: "Dom Porquito",
    marca: "MISTER PIG",
    grupo: "CORTE",
    tipo: "TEMPERADO",
    complemento: "PV (CX C/ 10 KG)",
    peso: "16 KG",
    conserva: "MANTENHA CONGELADO A -12°C",
    promo: false,
    imgs: ["https://i.postimg.cc/NF2NGdyB/20561-V01-Mister-Pig-File-de-Panceta-Suina-Temperada-Congelada-mockup.png"],
    desc: "Corte nobre da panceta suína, já temperado, ideal para assados crocantes e suculentos."
  },
  {
    cod: "20603",
    nome: "LINGUICA APERITIVO APIMEN. DE FRANGO RESF.",
    empresa: "Dom Porquito",
    marca: "SABBOR",
    grupo: "LINGUIÇAS",
    tipo: "RESFRIADO",
    complemento: "CX (8X2,5KG) 20KG",
    peso: "20 KG",
    conserva: "MANTENHA RESFRIADA  DE 0°C A +7°C",
    promo: false,
    imgs: ["https://i.postimg.cc/7hJBPKCP/20603-V01-SABBOR-Linguica-de-Frango-Fina-Apimentada-Resfriada-2-5-kg-mockup.png"],
    desc: "Linguiça de frango apimentada, pronta para consumo rápido, com sabor equilibrado. Produto resfriado."
  },
  {
    cod: "20604",
    nome: "LINGUICA TIPO CALABRESA SABBOR 2,5 KG",
    empresa: "Dom Porquito",
    marca: "SABBOR",
    grupo: "LINGUIÇAS",
    tipo: "DEFUMADOS",
    complemento: "PV (CX C/ 15 KG)",
    peso: "15 KG",
    conserva: "MANTENHA EM LOCAL SECO E FRESCO ATE +22°C",
    promo: false,
    imgs: ["https://i.postimg.cc/nr9dV3sc/20604-SABBOR-Linguica-Tipo-Calabresa-2-5-kg-mockup.png"],
    desc: "Linguiça calabresa de alta qualidade, ideal para diversos preparos, com sabor defumado característico."
  },
  {
    cod: "20606",
    nome: "LINGUICA TIPO CALABRESA",
    empresa: "Dom Porquito",
    marca: "MISTER PIG",
    grupo: "LINGUIÇAS",
    tipo: "DEFUMADOS",
    complemento: "PV (CX C/ 10 KG)",
    peso: "10 KG",
    conserva: "MANTENHA EM LOCAL SECO E FRESCO ATE +22°C",
    promo: false,
    imgs: ["https://i.postimg.cc/brS6YmGw/20606-V00-Mister-Pig-Linguica-Tipo-Calabresa-2-Gomos.png"],
    desc: "Linguiça calabresa tradicional, versátil e saborosa, indicada para churrascos e receitas variadas."
  },
  {
    cod: "20608",
    nome: "MORTADELA TRADICIONAL",
    empresa: "Dom Porquito",
    marca: "SABBOR",
    grupo: "CORTE",
    tipo: "DEFUMADOS",
    complemento: "PV (CX C/ 15 KG)",
    peso: "15 KG",
    conserva: "MATENHA EM LOCAL SECO E FRESCO ATE +25°C",
    promo: false,
    imgs: ["https://i.postimg.cc/mk1dZmcr/20608-SABBOR-Mortadela-2-5-kg-mockup.png"],
    desc: "Mortadela tradicional, macia e saborosa, ideal para lanches e consumo diário."
  },
  {
    cod: "20609",
    nome: "MORTADELA TRADICIONAL 400 G",
    empresa: "Dom Porquito",
    marca: "SABBOR",
    grupo: "CORTE",
    tipo: "DEFUMADOS",
    complemento: "PV (CX C/ 25 UN)",
    peso: "10 UN",
    conserva: "MANTENHA EM LOCAL SECO E FRESCO ATE +25°C",
    promo: false,
    imgs: ["https://i.postimg.cc/1XVWRvgf/20609-SABBOR-Mortadela-400-g-mockup.png"],
    desc: "Mortadela tradicional em embalagem prática, perfeita para lanches rápidos e porções menores."
  },
  {
    cod: "20562",
    nome: "PERNIL SUINO TEMPERADO",
    empresa: "Dom Porquito",
    marca: "MISTER PIG",
    grupo: "CORTE",
    tipo: "TEMPERADO",
    complemento: "PV (CX C/ 20 KG)",
    peso: "16 KG",
    conserva: "MANTENHA CONGELADO A -12°C",
    promo: false,
    imgs: ["https://i.postimg.cc/Vv07sKSY/20562-V01-Mister-Pig-Pernil-Suino-Temperado-Congelado.png"],
    desc: "Pernil suíno selecionado e temperado, pronto para assar, garantindo maciez e sabor caseiro."
  },
  {
    cod: "20629",
    nome: "SALSICHA DE FRANGO RESFRIADA",
    empresa: "Dom Porquito",
    marca: "SABBOR",
    grupo: "CORTE",
    tipo: "RESFRIADO",
    complemento: "PV (CX  C/ 15 KG)",
    peso: "15 KG",
    conserva: "MANTENHA RESFRIADO  DE 0°C A 7°C",
    promo: false,
    imgs: ["https://i.postimg.cc/5jcsX8vC/20629-SABBOR-Salsicha-de-Frango-Resfriada-3-kg-mockup.png"],
    desc: "Salsicha de frango leve e saborosa, ideal para preparo rápido. Produto resfriado."
  },
  {
    cod: "20630",
    nome: "SALSICHA HOT DOG RESFRIADA",
    empresa: "Dom Porquito",
    marca: "SABBOR",
    grupo: "CORTE",
    tipo: "RESFRIADO",
    complemento: "PV (CX  C/ 15 KG)",
    peso: "15 KG",
    conserva: "MANTENHA RESFRIADO  DE 0°C A 7°C",
    promo: false,
    imgs: ["https://i.postimg.cc/vDR04595/20630-V01-SABBOR-Salsicha-Resfriada-3-kg-mockup.png"],
    desc: "Salsicha tipo hot dog, macia e suculenta, perfeita para lanches rápidos. Produto resfriado."
  },
  {
    cod: "20631",
    nome: "SALSICHA HOT DOG CONGELADA",
    empresa: "Dom Porquito",
    marca: "SABBOR",
    grupo: "CORTE",
    tipo: "CONGELADO",
    complemento: "PV (CX  C/ 16 KG)",
    peso: "16 KG",
    conserva: "MANTENHA CONGELADO A -12°C",
    promo: false,
    imgs: ["https://i.postimg.cc/XXMsr9Fd/20631-SABBOR-Salsicha-Hot-Dog-Congelada-4-kg-mockup.png"],
    desc: "Salsicha hot dog congelada, prática e com maior durabilidade, mantendo sabor e qualidade."
  },
  {
    cod: "20638",
    nome: "MORTADELA TIPO BOLOGNA",
    empresa: "Dom Porquito",
    marca: "MISTER PIG",
    grupo: "CORTE",
    tipo: "DEFUMADOS",
    complemento: "PV (CX C/ 10 KG)",
    peso: "10 KG",
    conserva: "MANTENHA RESFRIADO ATE +7°C",
    promo: false,
    imgs: ["https://i.postimg.cc/c6qFvfYD/20638-V01-Mister-Pig-Mortadela-Tipo-Bologna-GRANDE.png"],
    desc: "Mortadela tipo Bologna, com textura diferenciada e sabor suave, ideal para sanduíches."
  },
  {
    cod: "20640",
    nome: "LINGUICA DE FRANGO FINA APIMENTADA 800G",
    empresa: "Dom Porquito",
    marca: "SABBOR",
    grupo: "LINGUIÇAS",
    tipo: "CONGELADO",
    complemento: "CX (18X800G) 14,40KG",
    peso: "14,4 KG",
    conserva: "MANTENHA CONGELADO A -12°C",
    promo: false,
    imgs: ["https://i.postimg.cc/XXMsr9Fm/20640-V01-SABBOR-Linguica-de-Frango-Fina-Apimentada-800-g-Congelada.png"],
    desc: "Linguiça fina de frango com leve picância, em embalagem de 800g, ideal para preparo rápido."
  },
  {
    cod: "20768",
    nome: "INGREDIENTES PARA FEIJOADA ESPECIAL",
    empresa: "Dom Porquito",
    marca: "MISTER PIG",
    grupo: "CORTE",
    tipo: "SALGADO",
    complemento: "PV (CX C/ 10 KG)",
    peso: "10 KG",
    conserva: "MANTENHA RESFRIADO DE 0°C  A  7°C",
    promo: false,
    imgs: ["https://i.postimg.cc/t70BsFPc/20768-Mister-Pig-Ingredientes-para-Feijoada-1-kg.png"],
    desc: "Mix de carnes selecionadas para feijoada, garantindo praticidade e sabor tradicional."
  },
  {
    cod: "20615",
    nome: "PRESUNTO COZIDO SABBOR 3.6KG",
    empresa: "Dom Porquito",
    marca: "SABBOR",
    grupo: "CORTE",
    tipo: "RESFRIADO",
    complemento: "PV (CX  C/ 10,80 KG)",
    peso: "10,8 KG",
    conserva: "MANTENHA RESFRIADO  DE 0°C A +7°C",
    promo: false,
    imgs: ["https://i.postimg.cc/FzkPFTfk/20615-SABBOR-Presunto-3-6-kg-mockup.png"],
    desc: "Presunto cozido de alta qualidade, sabor suave e textura macia, ideal para fatiamento."
  },
  {
    cod: "20905",
    nome: "LINGUICA CHURRASCO CONGELADA 800G",
    empresa: "Dom Porquito",
    marca: "MISTER PIG",
    grupo: "LINGUIÇAS",
    tipo: "CONGELADO",
    complemento: "PV (CX C/ 14.4 KG)",
    peso: "14,4 KG",
    conserva: "MANTENHA CONGELADO A -12°C",
    promo: false,
    imgs: ["https://i.postimg.cc/DfWFbFLy/20905-V01-Mister-Pig-Linguica-Churrasco-800-g-Congelada-mockup.png"],
    desc: "Linguiça ideal para churrasco, sabor suculento e preparo prático. Produto congelado."
  },
  {
    cod: "20907",
    nome: "LINGUICA TIPO CALABRESA MISTER PIG",
    empresa: "Dom Porquito",
    marca: "MISTER PIG",
    grupo: "LINGUIÇAS",
    tipo: "DEFUMADOS",
    complemento: "CX (6X2,5KG) 15KG",
    peso: "15 KG",
    conserva: "MANTENHA EM LOCAL SECO E FRESCO ATE +22°C",
    promo: false,
    imgs: ["https://i.postimg.cc/FFfmJm3z/20907-V02-Mister-Pig-Linguica-Tipo-Calabresa-2-5-kg.png"],
    desc: "Linguiça calabresa com padrão premium, sabor defumado intenso e excelente rendimento."
  },
  {
    cod: "20914",
    nome: "PICANHA SUINA TEMPERADA",
    empresa: "Dom Porquito",
    marca: "MISTER PIG",
    grupo: "CORTE",
    tipo: "TEMPERADO",
    complemento: "PV (CX C/ 10 KG)",
    peso: "10 KG",
    conserva: "MANTENHA CONGELADA A -12°C",
    promo: false,
    imgs: ["https://i.postimg.cc/SQXqzqCn/20914-V01-Mister-Pig-Picanha-Suina-Temperada-Congelada.png"],
    desc: "Corte nobre suíno, já temperado, ideal para churrascos com maciez e suculência."
  },
  {
    cod: "20915",
    nome: "COSTELA SUINA TEMPERADA",
    empresa: "Dom Porquito",
    marca: "MISTER PIG",
    grupo: "CORTE",
    tipo: "TEMPERADO",
    complemento: "PV (CX C/ 10 KG)",
    peso: "10 KG",
    conserva: "MANTENHA CONGELADA A -12°C",
    promo: false,
    imgs: ["https://i.postimg.cc/SQXqzqCM/20915-V01-Mister-Pig-Costela-Suina-Temperada-Congelada-mockup.png"],
    desc: "Costela suína temperada, perfeita para assados lentos, garantindo sabor intenso."
  },
  {
    cod: "20618",
    nome: "LANCHE",
    empresa: "Dom Porquito",
    marca: "SABBOR",
    grupo: "CORTE",
    tipo: "RESFRIADO",
    complemento: "PV (CX  C/ 10 KG)",
    peso: "10 KG",
    conserva: "MANTENHA RESFRIADO  DE 0°C A +7°C",
    promo: false,
    imgs: ["https://i.postimg.cc/nr9dV3s4/20618-V02-Sabbor-Lanche-188X460-(26521)-mockup.png"],
    desc: "Produto prático para lanches, com sabor agradável e versatilidade no consumo diário."
  },
  {
    cod: "20933",
    nome: "BACON EM PEDACOS",
    empresa: "Dom Porquito",
    marca: "MISTER PIG",
    grupo: "CORTE",
    tipo: "DEFUMADOS",
    complemento: "PV (CX C/ 5 KG)",
    peso: "5 KG",
    conserva: "MANTENHA EM LOCAL SECO E FRESCO ATE 25°C",
    promo: false,
    imgs: ["https://i.postimg.cc/J7ymBmZq/20933-V01-Mister-Pig-Bacon-Pedacos.png"],
    desc: "Bacon em cubos prontos para uso, ideal para incrementar pratos com sabor defumado."
  },
  {
    cod: "20936",
    nome: "LOMBO TIPO CANADENSE",
    empresa: "Dom Porquito",
    marca: "MISTER PIG",
    grupo: "CORTE",
    tipo: "DEFUMADOS",
    complemento: "PV (CX C/ 10 KG)",
    peso: "10 KG",
    conserva: "MANTENHA RESFRIADO  DE 0°C A +7°C",
    promo: false,
    imgs: ["https://i.postimg.cc/c1KZ8Zwh/20936-V01-Mister-Pig-Lombo-Tipo-Canadense.png"],
    desc: "Lombo suíno tipo canadense, defumado e com sabor suave, ideal para lanches e refeições."
  },
  {
    cod: "20943",
    nome: "LINGUICA SUINA  APIMENTADA RESF. PCT 4 Kg",
    empresa: "Dom Porquito",
    marca: "MISTER PIG",
    grupo: "LINGUIÇAS",
    tipo: "RESFRIADO",
    complemento: "PV (CX C/ 16 KG)",
    peso: "16 KG",
    conserva: "MANTENHA RESFRIADO  DE 0°C A +7°C",
    promo: false,
    imgs: ["https://i.postimg.cc/y6wKm5yX/20943-V01-Mister-Pig-Linguica-Suina-Apimentada-4-kg-Resfriada.png"],
    desc: "Linguiça suína apimentada em embalagem econômica, ideal para alto consumo. Produto resfriado."
  },
  {
    cod: "20944",
    nome: "LINGUICA SUINA  APIMENTADA CONG. PCT 4 Kg",
    empresa: "Dom Porquito",
    marca: "MISTER PIG",
    grupo: "LINGUIÇAS",
    tipo: "CONGELADO",
    complemento: "PV (CX C/ 16 KG)",
    peso: "16 KG",
    conserva: "MANTENHA CONGELADO A -12°C",
    promo: false,
    imgs: ["https://i.postimg.cc/wxSzXPQV/20944-V01-Mister-Pig-Linguica-Suina-Apimentada-4-kg.png"],
    desc: "Linguiça suína apimentada congelada, com maior durabilidade e excelente rendimento."
  },
  {
    cod: "20901",
    nome: "LINGUICA SUINA FINA APIMENTADA 800G",
    empresa: "Dom Porquito",
    marca: "MISTER PIG",
    grupo: "LINGUIÇAS",
    tipo: "CONGELADO",
    complemento: "PV (CX C/ 14.4 KG)",
    peso: "14,4 KG",
    conserva: "MANTENHA CONGELADO A -12°C",
    promo: false,
    imgs: ["https://i.postimg.cc/MXk9n1Rg/20901-V01-Mister-Pig-Linguica-Suina-Fina-Apimentada-800-g-Congelada-mockup.png"],
    desc: "Linguiça suína fina com toque picante, ideal para churrascos e grelhados."
  },
  {
    cod: "20903",
    nome: "LINGUICA SUINA  APIMENTADA CONGELADA 800G",
    empresa: "Dom Porquito",
    marca: "MISTER PIG",
    grupo: "LINGUIÇAS",
    tipo: "CONGELADO",
    complemento: "(CX C/ 14.4 KG)",
    peso: "14,4 KG",
    conserva: "MANTENHA CONGELADO A -12°C",
    promo: false,
    imgs: ["https://i.postimg.cc/PNGSC1Yk/20903-V01-Mister-Pig-Linguica-Suina-Apimentada-800-g-Congelada-mockup.png"],
    desc: "Linguiça suína apimentada, congelada para maior conservação, com sabor marcante."
  },
  {
    cod: "20916",
    nome: "LOMBO SUINO TEMPERADO",
    empresa: "Dom Porquito",
    marca: "MISTER PIG",
    grupo: "CORTE",
    tipo: "TEMPERADO",
    complemento: "PV (CX C/ 10 KG)",
    peso: "10 KG",
    conserva: "MANTENHA CONGEADA A -12°C",
    promo: false,
    imgs: ["https://i.postimg.cc/2jqmBmhd/20916-V01-Mister-Pig-Lombo-Suino-Temperado-Congelado.png"],
    desc: "Lombo suíno selecionado, já temperado, ideal para assar ou grelhar."
  },
  {
    cod: "20931",
    nome: "BACON EM MANTA MISTER PIG",
    empresa: "Dom Porquito",
    marca: "MISTER PIG",
    grupo: "CORTE",
    tipo: "DEFUMADOS",
    complemento: "PV (CX C/ 15 KG)",
    peso: "15 KG",
    conserva: "MANTENHA EM LOCAL SECO E FRESCO ATE 25°C",
    promo: false,
    imgs: ["https://i.postimg.cc/v81M6Mfv/20931-V01-Mister-Pig-Bacon-Manta.png"],
    desc: "Bacon em manta de alta qualidade, ideal para cortes personalizados e diversas receitas."
  },
  {
    cod: "20942",
    nome: "BISTECA SUINA",
    empresa: "Dom Porquito",
    marca: "MISTER PIG",
    grupo: "CORTE",
    tipo: "CONGELADO",
    complemento: "PV (CX C/ 10 KG)",
    peso: "10 CX",
    conserva: "MANTENHA CONGELADO A -12°C",
    promo: false,
    imgs: ["https://i.postimg.cc/59ZJBGS5/20942-V00-Mister-Pig-Bisteca-Suina-Congelada-mockup.png"],
    desc: "Corte tradicional suíno, versátil e saboroso, ideal para fritar ou grelhar."
  },
  

  {
    cod: "20947",
    nome: "LINGUICA SUINA CHURRASCO",
    empresa: "Dom Porquito",
    marca: "MISTER PIG",
    grupo: "LINGUIÇAS",
    tipo: "RESFRIADO",
    complemento: "PV (CX C/ 12 KG)",
    peso: "12 KG",
    conserva: "MANTENHA RESFRIADO  DE 0°C A +7°C",
    promo: false,
    imgs: ["https://i.postimg.cc/66DKrSfz/20947-V01-Mister-Pig-Linguica-Churrasco-4-kg-Resfriada.png"],
    desc: "Linguiça suína ideal para churrasco, com sabor marcante e ótima suculência."
  },
  
  {
    cod: "20948",
    nome: "LINGUICA CHURRASCO SUINA CONG.",
    empresa: "Dom Porquito",
    marca: "MISTER PIG",
    grupo: "LINGUIÇAS",
    tipo: "CONGELADO",
    complemento: "PV (CX C/ 16 KG)",
    peso: "16 KG",
    conserva: "MANTENHA CONGELADO A -12°C",
    promo: false,
    imgs: ["https://i.postimg.cc/Vs3wqTWh/20948-V01-Mister-Pig-Linguica-Churrasco-4-kg-Congelada.png"],
    desc: "Linguiça suína para churrasco, congelada para melhor conservação e praticidade."
  },
  {
    cod: "20949",
    nome: "LINGUICA SUINA FINA APIMENTADA 3KG",
    empresa: "Dom Porquito",
    marca: "MISTER PIG",
    grupo: "LINGUIÇAS",
    tipo: "CONGELADO",
    complemento: "PV (CX C/ 9 KG)",
    peso: "9 KG",
    conserva: "MANTENHA CONGELADA  A -12°C",
    promo: false,
    imgs: ["https://i.postimg.cc/CMW0Gt4T/20949-V00-Mister-Pig-Linguica-Suina-Fina-Apimentada-3-kg.png"],
    desc: "Linguiça suína fina e apimentada em embalagem econômica, ideal para grande consumo."
  },

  {
    cod: "20986",
    nome: "FRALDINHA SUINA TEMPERADA",
    empresa: "Dom Porquito",
    marca: "MISTER PIG",
    grupo: "CORTE",
    tipo: "TEMPERADO",
    complemento: "PV (CX C/ 10 KG)",
    peso: "10 KG",
    conserva: "MANTENHA CONGELADO A -12°C",
    promo: false,
    imgs: ["https://i.postimg.cc/8kqGR3bT/20986-V01-Mister-Pig-Fraldinha-Suina-Temperada-Congelada-mockup.png"],
    desc: "Corte suíno selecionado, já temperado, ideal para preparo rápido com sabor marcante e suculência garantida."
  },
  {
    cod: "20503",
    nome: "LINGUICA APERITIVO APIMEN. DE FRANGO CONG.",
    empresa: "Dom Porquito",
    marca: "SABBOR",
    grupo: "LINGUIÇAS",
    tipo: "CONGELADO",
    complemento: "CX (4X2,5KG) 10KG",
    peso: "20 KG",
    conserva: "MANTENHA CONGELADO A -12°C",
    promo: false,
    imgs: ["https://i.postimg.cc/63mjNkQp/20503-V01-SABBOR-Linguica-de-Frango-Fina-Apimentada-Congelada-2-5-kg.png"],
    desc: "Linguiça de frango levemente apimentada, prática e saborosa, ideal para petiscos e aperitivos. Produto congelado."
  },
//══════════════════════════════════════════

  {
    cod: "20510",
    nome: "LINGUICA DE FRANGO FINA APIMENTADA",
    empresa: "Dom Porquito",
    marca: "MISTER PIG",
    grupo: "LINGUIÇAS",
    tipo: "CONGELADO",
    complemento: "(CX C/ 14,40 KG)",
    peso: "0 KG",
    conserva: "",
    promo: false,
    imgs: ["https://i.postimg.cc/9Mn8j6fM/20510-V00-Mister-Pig-Linguica-de-Frango-Fina-Apimentada-800-g-Congelada-mockup.png"],
    desc: "MANTENHA CONGELADO A -12\A7C"
  },
  
  {
    cod: "20511",
    nome: "LINGUICA TIPO PAIO",
    empresa: "Dom Porquito",
    marca: "SABBOR",
    grupo: "LINGUIÇAS",
    tipo: "DEFUMADOS",
    complemento: "(CX C/ 12,00 KG)",
    peso: "0 KG",
    conserva: "MANTENHA EM LOCAL SECO E FRESCO ATE +22°C",
    promo: false,
    imgs: ["https://i.postimg.cc/rmPnLBpp/20511-V01-SABBOR-Linguica-Paio-1-kg.png"],
    desc: "Linguiça tipo paio, sabor defumado tradicional, ideal para feijoadas e pratos típicos."
  },
  {
    cod: "20561",
    nome: "FILE DA PANCETA SUINA TEMPERADA",
    empresa: "Dom Porquito",
    marca: "MISTER PIG",
    grupo: "CORTE",
    tipo: "TEMPERADO",
    complemento: "PV (CX C/ 10 KG)",
    peso: "16 KG",
    conserva: "MANTENHA CONGELADO A -12°C",
    promo: false,
    imgs: ["https://i.postimg.cc/NF2NGdyB/20561-V01-Mister-Pig-File-de-Panceta-Suina-Temperada-Congelada-mockup.png"],
    desc: "Corte nobre da panceta suína, já temperado, ideal para assados crocantes e suculentos."
  },
  {
    cod: "20562",
    nome: "PERNIL SUINO TEMPERADO",
    empresa: "Dom Porquito",
    marca: "MISTER PIG",
    grupo: "CORTE",
    tipo: "TEMPERADO",
    complemento: "PV (CX C/ 20 KG)",
    peso: "16 KG",
    conserva: "MANTENHA CONGELADO A -12°C",
    promo: false,
    imgs: ["https://i.postimg.cc/Vv07sKSY/20562-V01-Mister-Pig-Pernil-Suino-Temperado-Congelado.png"],
    desc: "Pernil suíno selecionado e temperado, pronto para assar, garantindo maciez e sabor caseiro."
  },
  {
    cod: "20615",
    nome: "PRESUNTO COZIDO SABBOR 3.6KG",
    empresa: "Dom Porquito",
    marca: "SABBOR",
    grupo: "CORTE",
    tipo: "RESFRIADO",
    complemento: "PV (CX  C/ 10,80 KG)",
    peso: "10,8 KG",
    conserva: "MANTENHA RESFRIADO  DE 0°C A +7°C",
    promo: false,
    imgs: ["https://i.postimg.cc/FzkPFTfk/20615-SABBOR-Presunto-3-6-kg-mockup.png"],
    desc: "Presunto cozido de alta qualidade, sabor suave e textura macia, ideal para fatiamento."
  },
  {
    cod: "20901",
    nome: "LINGUICA SUINA FINA APIMENTADA 800G",
    empresa: "Dom Porquito",
    marca: "MISTER PIG",
    grupo: "LINGUIÇAS",
    tipo: "CONGELADO",
    complemento: "PV (CX C/ 14.4 KG)",
    peso: "14,4 KG",
    conserva: "MANTENHA CONGELADO A -12°C",
    promo: false,
    imgs: ["https://i.postimg.cc/MXk9n1Rg/20901-V01-Mister-Pig-Linguica-Suina-Fina-Apimentada-800-g-Congelada-mockup.png"],
    desc: "Linguiça suína fina com toque picante, ideal para churrascos e grelhados."
  },
  {
    cod: "20903",
    nome: "LINGUICA SUINA  APIMENTADA CONGELADA 800G",
    empresa: "Dom Porquito",
    marca: "MISTER PIG",
    grupo: "LINGUIÇAS",
    tipo: "CONGELADO",
    complemento: "(CX C/ 14.4 KG)",
    peso: "14,4 KG",
    conserva: "MANTENHA CONGELADO A -12°C",
    promo: false,
    imgs: ["https://i.postimg.cc/PNGSC1Yk/20903-V01-Mister-Pig-Linguica-Suina-Apimentada-800-g-Congelada-mockup.png"],
    desc: "Linguiça suína apimentada, congelada para maior conservação, com sabor marcante."
  },
  {
    cod: "20916",
    nome: "LOMBO SUINO TEMPERADO",
    empresa: "Dom Porquito",
    marca: "MISTER PIG",
    grupo: "CORTE",
    tipo: "TEMPERADO",
    complemento: "PV (CX C/ 10 KG)",
    peso: "10 KG",
    conserva: "MANTENHA CONGEADA A -12°C",
    promo: false,
    imgs: ["https://i.postimg.cc/2jqmBmhd/20916-V01-Mister-Pig-Lombo-Suino-Temperado-Congelado.png"],
    desc: "Lombo suíno selecionado, já temperado, ideal para assar ou grelhar."
  },
  {
    cod: "20931",
    nome: "BACON EM MANTA MISTER PIG",
    empresa: "Dom Porquito",
    marca: "MISTER PIG",
    grupo: "CORTE",
    tipo: "DEFUMADOS",
    complemento: "PV (CX C/ 15 KG)",
    peso: "15 KG",
    conserva: "MANTENHA EM LOCAL SECO E FRESCO ATE 25°C",
    promo: false,
    imgs: ["https://i.postimg.cc/v81M6Mfv/20931-V01-Mister-Pig-Bacon-Manta.png"],
    desc: "Bacon em manta de alta qualidade, ideal para cortes personalizados e diversas receitas."
  },
  {
    cod: "20942",
    nome: "BISTECA SUINA",
    empresa: "Dom Porquito",
    marca: "MISTER PIG",
    grupo: "CORTE",
    tipo: "CONGELADO",
    complemento: "PV (CX C/ 10 KG)",
    peso: "10 CX",
    conserva: "MANTENHA CONGELADO A -12°C",
    promo: false,
    imgs: ["https://i.postimg.cc/59ZJBGS5/20942-V00-Mister-Pig-Bisteca-Suina-Congelada-mockup.png"],
    desc: "Corte tradicional suíno, versátil e saboroso, ideal para fritar ou grelhar."
  },
  {
    cod: "20948",
    nome: "LINGUICA CHURRASCO SUINA CONG.",
    empresa: "Dom Porquito",
    marca: "MISTER PIG",
    grupo: "LINGUIÇAS",
    tipo: "CONGELADO",
    complemento: "PV (CX C/ 16 KG)",
    peso: "16 KG",
    conserva: "MANTENHA CONGELADO A -12°C",
    promo: false,
    imgs: ["https://i.postimg.cc/Vs3wqTWh/20948-V01-Mister-Pig-Linguica-Churrasco-4-kg-Congelada.png"],
    desc: "Linguiça suína para churrasco, congelada para melhor conservação e praticidade."
  },
  {
    cod: "20949",
    nome: "LINGUICA SUINA FINA APIMENTADA 3KG",
    empresa: "Dom Porquito",
    marca: "MISTER PIG",
    grupo: "LINGUIÇAS",
    tipo: "CONGELADO",
    complemento: "PV (CX C/ 9 KG)",
    peso: "15 KG",
    conserva: "MANTENHA CONGELADA  A -12°C",
    promo: false,
    imgs: ["https://i.postimg.cc/CMW0Gt4T/20949-V00-Mister-Pig-Linguica-Suina-Fina-Apimentada-3-kg.png"],
    desc: "Linguiça suína fina e apimentada em embalagem econômica, ideal para grande consumo."
  },
  {
    cod: "20986",
    nome: "FRALDINHA SUINA TEMPERADA",
    empresa: "Dom Porquito",
    marca: "MISTER PIG",
    grupo: "CORTE",
    tipo: "TEMPERADO",
    complemento: "PV (CX C/ 10 KG)",
    peso: "10 KG",
    conserva: "MANTENHA CONGELADO A -12°C",
    promo: false,
    imgs: ["https://i.postimg.cc/8kqGR3bT/20986-V01-Mister-Pig-Fraldinha-Suina-Temperada-Congelada-mockup.png"],
    desc: "Corte suíno selecionado, já temperado, ideal para preparo rápido com sabor marcante e suculência garantida."
  },
  {
    cod: "20510", nome: "LINGUIÇA DE FRANGO FINA APIMENTADA",
    empresa: "Dom Porquito", marca: "MISTER PIG", grupo: "LINGUIÇAS", tipo: "CONGELADO",
   complemento: "CX C/ 14,40 KG", peso: "14,40 KG",
    conserva: "MANTER CONGELADO A -12°C", promo: false,
    imgs: ["https://i.postimg.cc/3N2g4N5x/20510.jpg"],
    desc: "Equilíbrio perfeito entre a leveza do frango e o toque picante. Ideal para aperitivos rápidos e grelhados."
  },
  {
    cod: "20511", nome: "LINGUIÇA TIPO PAIO",
    empresa: "Dom Porquito", marca: "SABBOR", grupo: "LINGUIÇAS", tipo: "DEFUMADOS",
   complemento: "CX C/ 12,00 KG", peso: "12 KG",
    conserva: "LOCAL SECO E FRESCO ATÉ +22°C", promo: false,
    imgs: ["https://i.postimg.cc/rs5S0sXz/20511.jpg"],
    desc: "Sabor defumado intenso e textura firme. Ingrediente indispensável para uma feijoada de respeito ou caldos encorpados."
  },
  {
    cod: "20561", nome: "FILÉ DA PANCETA SUÍNA TEMPERADA",
    empresa: "Dom Porquito", marca: "MISTER PIG", grupo: "CORTE", tipo: "TEMPERADO",
   complemento: "PV CX C/ 10 KG", peso: "16 KG",
    conserva: "MANTER CONGELADO A -12°C", promo: false,
    imgs: ["https://i.postimg.cc/HnbQcnDL/20561.jpg"],
    desc: "A estrela do churrasco: suculência da panceta com tempero exclusivo. Pronta para assar até atingir a pururuca perfeita."
  },
  {
    cod: "20562", nome: "PERNIL SUÍNO TEMPERADO",
    empresa: "Dom Porquito", marca: "MISTER PIG", grupo: "CORTE", tipo: "TEMPERADO",
   complemento: "PV CX C/ 20 KG", peso: "16 KG",
    conserva: "MANTER CONGELADO A -12°C", promo: false,
    imgs: ["https://i.postimg.cc/Gtvk8twt/20562.jpg"],
    desc: "Corte clássico e macio com tempero de ervas finas. Praticidade total para o almoço de domingo ou ocasiões especiais."
  },
  {
    cod: "20618", nome: "LANCHE",
    empresa: "Dom Porquito", marca: "SABBOR", grupo: "CORTE", tipo: "RESFRIADO",
   complemento: "PV CX C/ 10 KG", peso: "10 KG",
    conserva: "MANTER RESFRIADO 0°C A +7°C", promo: false,
    imgs: ["https://i.postimg.cc/T1nrL1Mp/20618.jpg"],
    desc: "Qualidade e rendimento para o dia a dia. Ideal para fatiar e utilizar em sanduíches, pizzas e receitas rápidas."
  },
  {
    cod: "20677", nome: "MINI MORTADELA TIPO BOLOGNA",
    empresa: "Dom Porquito", marca: "MISTER PIG", grupo: "CORTE", tipo: "DEFUMADOS",
   complemento: "PV CX C/ 10 KG", peso: "10 KG",
    conserva: "MANTER RESFRIADO 0°C A +7°C", promo: false,
    imgs: ["https://i.postimg.cc/D01qJ0kW/20677.jpg"],
    desc: "Tradição em formato prático. Sabor marcante e textura delicada, perfeita para tábuas de frios e lanches gourmet."
  },
  {
    cod: "20856", nome: "FRALDINHA SUÍNA TEMPERADA",
    empresa: "Dom Porquito", marca: "MISTER PIG", grupo: "CORTE", tipo: "TEMPERADO",
   complemento: "PV CX C/ 10 KG", peso: "10 KG",
    conserva: "MANTER RESFRIADO 0°C A +7°C", promo: false,
    imgs: ["https://i.postimg.cc/VvXjrvQr/20856.jpg"],
    desc: "Corte nobre e extremamente macio. O tempero suave realça o sabor natural da carne suína. Sucesso garantido na brasa."
  },
  {
    cod: "20901", nome: "LINGUIÇA SUÍNA FINA APIMENTADA 800G",
    empresa: "Dom Porquito", marca: "MISTER PIG", grupo: "LINGUIÇAS", tipo: "CONGELADO",
   complemento: "PV CX C/ 14,4 KG", peso: "14,4 KG",
    conserva: "MANTER CONGELADO A -12°C", promo: false,
    imgs: ["https://i.postimg.cc/rs5S0sXR/20901.jpg"],
    desc: "Formato fino que garante cozimento uniforme e rápido. Picância na medida certa para quem busca um sabor extra."
  },
  {
    cod: "20903", nome: "LINGUIÇA SUÍNA APIMENTADA CONGELADA 800G",
    empresa: "Dom Porquito", marca: "MISTER PIG", grupo: "LINGUIÇAS", tipo: "CONGELADO",
   complemento: "CX C/ 14,4 KG", peso: "14,4 KG",
    conserva: "MANTER CONGELADO A -12°C", promo: false,
    imgs: ["https://i.postimg.cc/kMSNh1VN/20903.jpg"],
    desc: "Tradicional e picante. Ideal para o churrasco entre amigos, comcomplemento de tamanho ideal."
  },
  {
    cod: "20916", nome: "LOMBO SUÍNO TEMPERADO",
    empresa: "Dom Porquito", marca: "MISTER PIG", grupo: "CORTE", tipo: "TEMPERADO",
   complemento: "PV CX C/ 10 KG", peso: "10 KG",
    conserva: "MANTER CONGELADO A -12°C", promo: false,
    imgs: ["https://i.postimg.cc/9X9PN84J/20916.jpg"],
    desc: "Carne magra, macia e já temperada. Uma opção saudável e sofisticada que vai direto do pacote para o forno."
  },
  
  {
    cod: "20942", nome: "BISTECA SUÍNA",
    empresa: "Dom Porquito", marca: "MISTER PIG", grupo: "CORTE", tipo: "CONGELADO",
   complemento: "PV CX C/ 10 KG", peso: "10 KG",
    conserva: "MANTER CONGELADO A -12°C", promo: false,
    imgs: ["https://i.postimg.cc/2jWdXcqH/20942.jpg"],
    desc: "O corte mais tradicional do dia a dia. Carne suculenta com osso, ideal para grelhar ou fritar rapidamente."
  },
  {
    cod: "20949", nome: "LINGUIÇA SUÍNA FINA APIMENTADA 3KG",
    empresa: "Dom Porquito", marca: "MISTER PIG", grupo: "LINGUIÇAS", tipo: "CONGELADO",
   complemento: "PV CX C/ 9 KG", peso: "15 KG",
    conserva: "MANTER CONGELADO A -12°C", promo: false,
    imgs: ["https://i.postimg.cc/2jWdXcqc/20949.jpg"],
    desc: "Embalagem institucional com o melhor custo-benefício. Perfeita para eventos, bares e restaurantes."
  },
  {
    cod: "20986", nome: "FRALDINHA SUÍNA TEMPERADA",
    empresa: "Dom Porquito", marca: "MISTER PIG", grupo: "CORTE", tipo: "TEMPERADO",
   complemento: "PV CX C/ 10 KG", peso: "10 KG",
    conserva: "MANTER CONGELADO A -12°C", promo: false,
    imgs: ["https://i.postimg.cc/y6RhrQJr/20986.jpg"],
    desc: "Maciez extrema e tempero pronto para elevar o nível do seu churrasco."
  },
  {
    cod: "20948", nome: "LINGUIÇA CHURRASCO SUÍNA CONG.",
    empresa: "Dom Porquito", marca: "MISTER PIG", grupo: "LINGUIÇAS", tipo: "CONGELADO",
   complemento: "PV CX C/ 16 KG", peso: "16 KG",
    conserva: "MANTER CONGELADO A -12°C", promo: false,
    imgs: ["https://i.postimg.cc/8c5y7Y7p/20948.jpg"],
    desc: "O sabor clássico do verdadeiro churrasco. Suculenta, bem temperada e com textura ideal para a brasa."
  },
  {
    cod: "20902", nome: "LINGUIÇA SUÍNA FINA APIMENTADA RESF. 4KG",
    empresa: "Dom Porquito", marca: "MISTER PIG", grupo: "LINGUIÇAS", tipo: "RESFRIADO",
   complemento: "PV CX C/ 16 KG", peso: "16 KG",
    conserva: "MANTER RESFRIADO 0°C A +7°C", promo: false,
    imgs: ["https://i.postimg.cc/dVx2HRSw/20902.png"],
    desc: "Equilíbrio perfeito entre a suculência da carne suína selecionada e um toque de pimenta na medida certa. Formato fino, ideal para grelhas, chapas ou como aperitivo diferenciado em churrascos."
  },
  {
    cod: "20615", nome: "PRESUNTO COZIDO SABBOR 3,6KG",
    empresa: "Dom Porquito", marca: "SABBOR", grupo: "CORTE", tipo: "RESFRIADO",
   complemento: "PV CX C/ 10,80 KG", peso: "10,8 KG",
    conserva: "MANTER RESFRIADO 0°C A +7°C", promo: false,
    imgs: ["https://i.postimg.cc/x14vxGF2/20615.png"],
    desc: "Presunto de alta qualidade com cortes selecionados, textura macia e fatiamento perfeito. Sabor suave e tradicional, ideal para lanches, tábuas de frios e receitas gastronômicas."
  },
  {
    cod: "20931", nome: "BACON EM MANTA MISTER PIG",
    empresa: "Dom Porquito", marca: "MISTER PIG", grupo: "CORTE", tipo: "DEFUMADOS",
   complemento: "PV CX C/ 15 KG", peso: "15 KG",
    conserva: "LOCAL SECO E FRESCO ATÉ 25°C", promo: false,
    imgs: ["https://i.postimg.cc/D0ZCSNSw/20931.jpg"],
    desc: "Corte nobre com defumação artesanal superior. Proporção perfeita entre carne e gordura, garantindo muito mais sabor e aroma."
  },

  // ══════════════════════════════════════════
  //  FRIPAL
  // ══════════════════════════════════════════

  {
    cod: "624", nome: "BACON FATIADO CONGELADO",
    empresa: "Fripal", marca: "MISTER PIG", grupo: "FATIADO", tipo: "CONGELADO",
   complemento: "Aprox. 900g", peso: "18 KG",
    conserva: "MANTER CONGELADO A -12°C", promo: false,
    imgs: ["https://i.postimg.cc/wjGXf5bT/Mockup-Bacon-Fatiado-fundo-624.png"],
    desc: "O sabor defumado com máxima praticidade. Fatias padronizadas que garantem uniformidade no preparo e crocância irresistível. Ideal para hambúrgueres, porções e pratos gourmet."
  },
  {
    cod: "274", nome: "LANCHE SABBOR FATIADO",
    empresa: "Fripal", marca: "SABBOR", grupo: "FATIADO", tipo: "RESFRIADO",
   complemento: "Aprox. 150g", peso: "4,5 KG",
    conserva: "MANTER RESFRIADO 0°C A +7°C", promo: false,
    imgs: ["https://i.postimg.cc/ht5Ly83t/Mockup-Lanche-Fatiado-fundo-transparente274.png"],
    desc: "Desenvolvido para o food service. Fatias que se soltam facilmente, sabor equilibrado e excelente custo-benefício para sanduíches quentes ou frios."
  },
  {
    cod: "277", nome: "LINGUIÇA TIPO CALABRESA SABBOR FATIADO",
    empresa: "Fripal", marca: "SABBOR", grupo: "FATIADO", tipo: "RESFRIADO",
   complemento: "Aprox. 500g", peso: "4,5 KG",
    conserva: "MANTER RESFRIADO 0°C A +7°C", promo: false,
    imgs: ["https://i.postimg.cc/2SKQcdX6/Mockup-Lingiuca-Calabresa-Fatiada-fundo-transparente-277.png"],
    desc: "A clássica calabresa Sabbor pronta para uso. Fatias com espessura ideal para coberturas de pizzas, recheios de salgados e finalização de massas."
  },
  {
    cod: "443", nome: "LOMBO TIPO CANADENSE DEFUMADO FATIADO",
    empresa: "Fripal", marca: "MISTER PIG", grupo: "FATIADO", tipo: "RESFRIADO",
   complemento: "Aprox. 150g", peso: "4,5 KG",
    conserva: "MANTER RESFRIADO 0°C A +7°C", promo: false,
    imgs: ["https://i.postimg.cc/y8bmQhrx/Mockup-Lombo-Canadense-fundo-transparente443.png"],
    desc: "Nobreza e leveza em cada fatia. Defumação cuidadosa, sabor sofisticado e baixo teor de gordura. Perfeito para tábuas de frios premium e lanches naturais."
  },
  {
    cod: "276", nome: "MORTADELA BOLOGNA MISTER PIG FATIADO",
    empresa: "Fripal", marca: "MISTER PIG", grupo: "FATIADO", tipo: "RESFRIADO",
   complemento: "Aprox. 150g", peso: "4,5 KG",
    conserva: "MANTER RESFRIADO 0°C A +7°C", promo: false,
    imgs: ["https://i.postimg.cc/K8HPq7sL/Mockup-Mortadela-fatiado-fundo-transparente276.png"],
    desc: "Inspirada na tradição italiana, textura macia e bouquet de especiarias único. Fatiada finamente para realçar o sabor em lanches e petiscos."
  },
  {
    cod: "604", nome: "QUEIJO MUSSARELA LAT VIDA FATIADO",
    empresa: "Fripal", marca: "LAT VIDA", grupo: "FATIADO", tipo: "RESFRIADO",
   complemento: "Aprox. 150g", peso: "4,5 KG",
    conserva: "MANTER RESFRIADO 0°C A +7°C", promo: false,
    imgs: ["https://i.postimg.cc/3xcXSjbv/Mockup-Mussarela-fundo-transparente604.png"],
    desc: "Mussarela selecionada com excelente derretimento e elasticidade. Fatias padronizadas para montagem de pratos, garantindo aquele visual dourado e apetitoso."
  },
  {
    cod: "272", nome: "PRESUNTO COZIDO SABBOR FATIADO",
    empresa: "Fripal", marca: "SABBOR", grupo: "FATIADO", tipo: "RESFRIADO",
   complemento: "Aprox. 150g", peso: "4,5 KG",
    conserva: "MANTER RESFRIADO 0°C A +7°C", promo: false,
    imgs: ["https://i.postimg.cc/wjGXf5bN/Mockup-Presunto-fundo-transparente-272.png"],
    desc: "O clássico indispensável com a garantia Sabbor. Produzido com pernil selecionado, fatias rosadas e suculentas. Ideal para buffets, padarias e montagem de pizzas."
  },

  // ══════════════════════════════════════════
  //  TEMPLATE — adicione novos produtos aqui
  // ══════════════════════════════════════════
  // {
  //   cod: "XXXXX", nome: "NOME DO PRODUTO",
  //   empresa: "Fripal",        // ACREAVES | Dom Porquito | Fripal
  //   marca: "SABBOR",          // SABBOR | MISTER PIG | ACREAVES | LAT VIDA
  //   grupo: "FATIADO",         // CORTE | INTEIRO | LINGUIÇAS | FATIADO
  //   tipo: "RESFRIADO",        // CONGELADO | RESFRIADO | TEMPERADO | DEFUMADOS
  //  complemento: "Aprox. 150g",
  //   peso: "4,5 KG",
  //   conserva: "MANTER RESFRIADO 0°C A +7°C",
  //   promo: false,
  //   imgs: ["URL_DA_FOTO"],
  //   desc: "Descrição comercial."
  // },

];
