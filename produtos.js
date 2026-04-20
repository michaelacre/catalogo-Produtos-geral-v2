// ============================================================
//  GRUPO DP — BASE DE PRODUTOS
//  Edite este arquivo para adicionar/remover/atualizar produtos
//  Colunas:
//    cod         → código do produto
//    nome        → nome comercial
//    empresa     → ACREAVES | Dom Porquito | Fripal
//    marca       → SABBOR | Mister Pig | (sua marca Fripal)
//    grupo       → CORTE | INTEIRO | DEFUMADOS | TEMPERADO | CONGELADO | RESFRIADO
//    tipo        → CONGELADO | RESFRIADO | TEMPERADO | DEFUMADOS | SECO
//    peso        → ex: "3,6 KG"
//    conserva    → instrução de conservação
//    desc        → descrição comercial
//    promo       → true = aparece no filtro PROMOÇÃO | false = produto normal
//    imgs        → array de URLs (até 3 fotos por produto)
// ============================================================

const PRODUTOS = [
  // ── ACREAVES / SABBOR ──────────────────────────────────────
  {
    cod: "238", nome: "SOBRECOXA CONGELADA NA BANDEJA",
    empresa: "ACREAVES", marca: "SABBOR", grupo: "CORTE", tipo: "CONGELADO",
    peso: "3,6 KG", conserva: "MANTER CONGELADO -12°C", promo: false,
    imgs: ["https://i.postimg.cc/rsmnPp2B/238-V00-SABBOR-Sobrecoxa-Congelada-mockup-243.jpg"],
    desc: "Corte suculento e macio, ideal para assados. Embalagem prática que preserva o frescor e facilita a exposição no freezer."
  },
  {
    cod: "237", nome: "PEITO CONGELADO NA BANDEJA",
    empresa: "ACREAVES", marca: "SABBOR", grupo: "CORTE", tipo: "CONGELADO",
    peso: "3,6 KG", conserva: "MANTER CONGELADO -12°C", promo: false,
    imgs: ["https://i.postimg.cc/T1w74PvZ/237-V00-SABBOR-Peito-Congelado-mockup-237.jpg"],
    desc: "O corte mais versátil da cozinha. Peito selecionado com baixo teor de gordura, perfeito para dietas equilibradas e receitas variadas."
  },
  {
    cod: "236", nome: "COXA CONGELADA DE FRANGO NA BANDEJA",
    empresa: "ACREAVES", marca: "SABBOR", grupo: "CORTE", tipo: "CONGELADO",
    peso: "3,6 KG", conserva: "MANTER CONGELADO -12°C", promo: false,
    imgs: ["https://i.postimg.cc/ZnR7MqzX/236-V00-SABBOR-Coxa-Congelada-coxa.jpg"],
    desc: "Clássico indispensável no dia a dia. Coxas de frango com textura firme e sabor marcante, prontas para o preparo."
  },
  {
    cod: "235", nome: "FRANGO A PASSARINHO CONGELADO",
    empresa: "ACREAVES", marca: "SABBOR", grupo: "CORTE", tipo: "CONGELADO",
    peso: "3,6 KG", conserva: "MANTER CONGELADO -12°C", promo: false,
    imgs: ["https://i.postimg.cc/C51PQKpX/235-V00-SABBOR-Frango-a-Passarinho-Congelado-mockup.jpg"],
    desc: "Cortes padronizados para o petisco perfeito. Facilidade total: do freezer direto para a panela ou airfryer."
  },
  {
    cod: "234", nome: "COXINHA DA ASA CONGELADA NA BANDEJA",
    empresa: "ACREAVES", marca: "SABBOR", grupo: "CORTE", tipo: "CONGELADO",
    peso: "3,6 KG", conserva: "MANTER CONGELADO -12°C", promo: false,
    imgs: ["https://i.postimg.cc/kG41p5PH/234-V00-SABBOR-Coxinha-da-Asa-Congelada-mockup.jpg"],
    desc: "O corte favorito do churrasco e do happy hour. Carnuda e saborosa, com padronização de tamanho na bandeja."
  },
  {
    cod: "233", nome: "FILÉ DA COXA CONGELADO NA BANDEJA",
    empresa: "ACREAVES", marca: "SABBOR", grupo: "CORTE", tipo: "CONGELADO",
    peso: "3,6 KG", conserva: "MANTER CONGELADO -12°C", promo: false,
    imgs: ["https://i.postimg.cc/nrzRPLfw/233-V00-SABBOR-File-de-Coxa-e-Sobrecoxa-Congelado-mockup.jpg"],
    desc: "Sabor da coxa com a praticidade do filé. Sem ossos e peles, ideal para grelhados rápidos e estrogonofe suculento."
  },
  {
    cod: "232", nome: "COXA E SOBRECOXA CONGELADA NA BANDEJA",
    empresa: "ACREAVES", marca: "SABBOR", grupo: "CORTE", tipo: "CONGELADO",
    peso: "3,6 KG", conserva: "MANTER CONGELADO -12°C", promo: false,
    imgs: ["https://i.postimg.cc/4ydLS3R8/232-V00-SABBOR-Coxa-e-Sobrecoxa-Congelada-mockup.jpg"],
    desc: "O combo perfeito de rendimento e sabor. Peças selecionadas que garantem uma refeição completa para toda a família."
  },
  {
    cod: "231", nome: "MEIO DA ASA CONGELADA NA BANDEJA",
    empresa: "ACREAVES", marca: "SABBOR", grupo: "CORTE", tipo: "CONGELADO",
    peso: "3,6 KG", conserva: "MANTER CONGELADO -12°C", promo: false,
    imgs: ["https://i.postimg.cc/QCt4yMZS/231-V00-SABBOR-Meio-da-Asa-Congelada-mockup.jpg"],
    desc: "Qualidade premium para quem busca o melhor da asa (Tulipa). Ideal para receitas especiais e preparos crocantes."
  },
  {
    cod: "230", nome: "FILÉ DE PEITO CONGELADO NA BANDEJA",
    empresa: "ACREAVES", marca: "SABBOR", grupo: "CORTE", tipo: "CONGELADO",
    peso: "3,6 KG", conserva: "MANTER CONGELADO -12°C", promo: false,
    imgs: ["https://i.postimg.cc/90M8nfHY/230-V00-SABBOR-File-de-Peito-Congelado-mockup.jpg"],
    desc: "Praticidade máxima: filés limpos e padronizados. Ideal para o consumidor que busca rapidez e zero desperdício."
  },
  {
    cod: "115", nome: "AVE NATALINA SABBOR",
    empresa: "ACREAVES", marca: "SABBOR", grupo: "INTEIRO", tipo: "TEMPERADO",
    peso: "20 KG", conserva: "MANTER CONGELADO -12°C", promo: false,
    imgs: ["https://i.postimg.cc/gjJST0bD/021-V02-SABBOR-AVE-NATALINA-mockup.jpg"],
    desc: "A estrela das celebrações. Ave selecionada com tempero especial Sabbor, garantindo carne suculenta, pele dourada e sabor inconfundível."
  },
  {
    cod: "105", nome: "GALINHA CONGELADA C/ MIÚDOS",
    empresa: "ACREAVES", marca: "SABBOR", grupo: "INTEIRO", tipo: "CONGELADO",
    peso: "18 KG", conserva: "MANTER CONGELADO -12°C", promo: false,
    imgs: ["https://i.postimg.cc/vTBqNmwf/001-V01-SABBOR-Frango-Congelado-mockup.jpg"],
    desc: "Sabor autêntico e marcante para receitas tradicionais. Ideal para caldos ricos e cozidos de cozimento lento."
  },

  // ── DOM PORQUITO / MISTER PIG ──────────────────────────────
  {
    cod: "20510", nome: "LINGUIÇA DE FRANGO FINA APIMENTADA",
    empresa: "Dom Porquito", marca: "Mister Pig", grupo: "CORTE", tipo: "CONGELADO",
    peso: "14,4 KG", conserva: "MANTER CONGELADO -12°C", promo: true,
    imgs: ["https://i.postimg.cc/3N2g4N5x/20510.jpg"],
    desc: "Equilíbrio perfeito entre a leveza do frango e o toque picante. Ideal para aperitivos rápidos e grelhados."
  },
  {
    cod: "20511", nome: "LINGUIÇA TIPO PAIO",
    empresa: "Dom Porquito", marca: "Mister Pig", grupo: "DEFUMADOS", tipo: "DEFUMADOS",
    peso: "12 KG", conserva: "LOCAL SECO E FRESCO ATÉ +22°C", promo: false,
    imgs: ["https://i.postimg.cc/rs5S0sXz/20511.jpg"],
    desc: "Sabor defumado intenso e textura firme. Ingrediente indispensável para uma feijoada de respeito ou caldos encorpados."
  },
  {
    cod: "20561", nome: "FILÉ DA PANCETA SUÍNA TEMPERADA",
    empresa: "Dom Porquito", marca: "Mister Pig", grupo: "TEMPERADO", tipo: "TEMPERADO",
    peso: "10 KG", conserva: "MANTER CONGELADO -12°C", promo: false,
    imgs: ["https://i.postimg.cc/HnbQcnDL/20561.jpg"],
    desc: "A estrela do churrasco: suculência da panceta com tempero exclusivo. Pronta para assar até atingir a pururuca perfeita."
  },
  {
    cod: "20562", nome: "PERNIL SUÍNO TEMPERADO",
    empresa: "Dom Porquito", marca: "Mister Pig", grupo: "TEMPERADO", tipo: "TEMPERADO",
    peso: "10 KG", conserva: "MANTER CONGELADO -12°C", promo: false,
    imgs: ["https://i.postimg.cc/Gtvk8twt/20562.jpg"],
    desc: "Corte clássico e macio com tempero de ervas finas. Praticidade total para o almoço de domingo ou ocasiões especiais."
  },
  {
    cod: "20618", nome: "LANCHE",
    empresa: "Dom Porquito", marca: "Mister Pig", grupo: "RESFRIADO", tipo: "RESFRIADO",
    peso: "10 KG", conserva: "MANTER RESFRIADO 0°C A +7°C", promo: false,
    imgs: ["https://i.postimg.cc/T1nrL1Mp/20618.jpg"],
    desc: "Qualidade e rendimento para o dia a dia. Ideal para fatiar e utilizar em sanduíches, pizzas e receitas rápidas."
  },
  {
    cod: "20677", nome: "MINI MORTADELA TIPO BOLOGNA",
    empresa: "Dom Porquito", marca: "Mister Pig", grupo: "DEFUMADOS", tipo: "DEFUMADOS",
    peso: "10 KG", conserva: "MANTER RESFRIADO 0°C A +7°C", promo: false,
    imgs: ["https://i.postimg.cc/D01qJ0kW/20677.jpg"],
    desc: "Tradição em formato prático. Sabor marcante e textura delicada, perfeita para tábuas de frios e lanches gourmet."
  },
  {
    cod: "20856", nome: "FRALDINHA SUÍNA TEMPERADA",
    empresa: "Dom Porquito", marca: "Mister Pig", grupo: "TEMPERADO", tipo: "TEMPERADO",
    peso: "10 KG", conserva: "MANTER RESFRIADO 0°C A +7°C", promo: true,
    imgs: ["https://i.postimg.cc/VvXjrvQr/20856.jpg"],
    desc: "Corte nobre e extremamente macio. O tempero suave realça o sabor natural da carne suína. Sucesso garantido na brasa."
  },
  {
    cod: "20901", nome: "LINGUIÇA SUÍNA FINA APIMENTADA 800G",
    empresa: "Dom Porquito", marca: "Mister Pig", grupo: "CONGELADO", tipo: "CONGELADO",
    peso: "14,4 KG", conserva: "MANTER CONGELADO -12°C", promo: false,
    imgs: ["https://i.postimg.cc/rs5S0sXR/20901.jpg"],
    desc: "Formato fino que garante cozimento uniforme e rápido. Picância na medida certa para quem busca um sabor extra."
  },
  {
    cod: "20903", nome: "LINGUIÇA SUÍNA APIMENTADA CONGELADA 800G",
    empresa: "Dom Porquito", marca: "Mister Pig", grupo: "CONGELADO", tipo: "CONGELADO",
    peso: "14,4 KG", conserva: "MANTER CONGELADO -12°C", promo: false,
    imgs: ["https://i.postimg.cc/kMSNh1VN/20903.jpg"],
    desc: "Tradicional e picante. Ideal para o churrasco entre amigos, com embalagem de tamanho ideal."
  },
  {
    cod: "20916", nome: "LOMBO SUÍNO TEMPERADO",
    empresa: "Dom Porquito", marca: "Mister Pig", grupo: "TEMPERADO", tipo: "TEMPERADO",
    peso: "10 KG", conserva: "MANTER CONGELADO -12°C", promo: false,
    imgs: ["https://i.postimg.cc/9X9PN84J/20916.jpg"],
    desc: "Carne magra, macia e já temperada. Uma opção saudável e sofisticada que vai direto do pacote para o forno."
  },
  {
    cod: "20930", nome: "BACON PALETA MISTER PIG",
    empresa: "Dom Porquito", marca: "Mister Pig", grupo: "DEFUMADOS", tipo: "DEFUMADOS",
    peso: "10 KG", conserva: "MANTER FRESCO ATÉ 25°C", promo: false,
    imgs: ["https://i.postimg.cc/MZB0rPcD/20930.jpg"],
    desc: "A qualidade Mister Pig em cada fatia. Defumação artesanal que garante aroma e sabor inigualáveis para seus pratos."
  },
  {
    cod: "20942", nome: "BISTECA SUÍNA",
    empresa: "Dom Porquito", marca: "Mister Pig", grupo: "CONGELADO", tipo: "CONGELADO",
    peso: "10 CX", conserva: "MANTER CONGELADO -12°C", promo: false,
    imgs: ["https://i.postimg.cc/2jWdXcqH/20942.jpg"],
    desc: "O corte mais tradicional do dia a dia. Carne suculenta com osso, ideal para grelhar ou fritar rapidamente."
  },
  {
    cod: "20949", nome: "LINGUIÇA SUÍNA FINA APIMENTADA 3KG",
    empresa: "Dom Porquito", marca: "Mister Pig", grupo: "CONGELADO", tipo: "CONGELADO",
    peso: "9 KG", conserva: "MANTER CONGELADO -12°C", promo: false,
    imgs: ["https://i.postimg.cc/2jWdXcqc/20949.jpg"],
    desc: "Embalagem institucional com o melhor custo-benefício. Perfeita para eventos, bares e restaurantes."
  },
  {
    cod: "20986", nome: "FRALDINHA SUÍNA TEMPERADA",
    empresa: "Dom Porquito", marca: "Mister Pig", grupo: "TEMPERADO", tipo: "TEMPERADO",
    peso: "10 KG", conserva: "MANTER CONGELADO -12°C", promo: false,
    imgs: ["https://i.postimg.cc/y6RhrQJr/20986.jpg"],
    desc: "Maciez extrema e tempero pronto para elevar o nível do seu churrasco."
  },
  {
    cod: "20948", nome: "LINGUIÇA CHURRASCO SUÍNA CONG.",
    empresa: "Dom Porquito", marca: "Mister Pig", grupo: "CONGELADO", tipo: "CONGELADO",
    peso: "16 KG", conserva: "MANTER CONGELADO -12°C", promo: false,
    imgs: ["https://i.postimg.cc/8c5y7Y7p/20948.jpg"],
    desc: "O sabor clássico do verdadeiro churrasco. Suculenta, bem temperada e com textura ideal para a brasa."
  },
  {
    cod: "20931", nome: "BACON EM MANTA MISTER PIG",
    empresa: "Dom Porquito", marca: "Mister Pig", grupo: "DEFUMADOS", tipo: "DEFUMADOS",
    peso: "15 KG", conserva: "LOCAL SECO E FRESCO ATÉ 25°C", promo: false,
    imgs: ["https://i.postimg.cc/D0ZCSNSw/20931.jpg"],
    desc: "Corte nobre com defumação artesanal superior. Proporção perfeita entre carne e gordura, garantindo muito mais sabor."
  },

  // ── FRIPAL ────────────────────────────────────────────────
  // Adicione os produtos da Fripal aqui seguindo o mesmo padrão:
  // {
  //   cod: "XXXXX", nome: "NOME DO PRODUTO",
  //   empresa: "Fripal", marca: "MARCA_FRIPAL", grupo: "CORTE", tipo: "CONGELADO",
  //   peso: "X KG", conserva: "INSTRUÇÃO", promo: false,
  //   imgs: ["URL_DA_FOTO_1", "URL_DA_FOTO_2"],
  //   desc: "Descrição comercial do produto."
  // },
];
