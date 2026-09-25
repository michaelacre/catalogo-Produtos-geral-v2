const PRODUTOS = [
  {
    "cod": "105",
    "nome": "GALINHA CONGELADA C/ MIÚDOS",
    "empresa": "Acreaves",
    "marca": "ACREAVES",
    "grupo": "INTEIRO",
    "tipo": "CONGELADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "18 kg",
    "conserva": "MANTER CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/105/1.webp"
    ],
    "desc": "Sabor autêntico e marcante para receitas tradicionais. Ideal para caldos ricos e cozidos de cozimento lento que exigem mais consistência e aroma.",
    "thumb": "assets/thumbs/105.webp"
  },
  {
    "cod": "102",
    "nome": "FRANGO RESFRIADO C/MIUDOS",
    "empresa": "Acreaves",
    "marca": "ACREAVES",
    "grupo": "INTEIRO",
    "tipo": "RESFRIADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "20 kg",
    "conserva": "MANTENHA RESFRIADO DE 0°C A 7°C",
    "promo": false,
    "imgs": [
      "assets/produtos/102/1.webp"
    ],
    "desc": "Frango inteiro selecionado, mantido em baixas temperaturas sem congelamento. Por ser resfriado, mantém a textura da carne mais macia e está pronto para o preparo imediato, facilitando o tempero e o cozimento.",
    "thumb": "assets/thumbs/102.webp"
  },
  {
    "cod": "104",
    "nome": "FRANGO CONGELADO SABBOR",
    "empresa": "Acreaves",
    "marca": "SABBOR",
    "grupo": "INTEIRO",
    "tipo": "CONGELADO",
    "complemento": "CX / CONTENDO 8 A 9 UNIDADES (PESO VARIÁVEL)",
    "peso": "Aprox. 20 kg",
    "conserva": "MANTER CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/104/1.webp"
    ],
    "desc": "Praticidade que acompanha o seu ritmo sem abrir mão do Sabbor. Da grelha ao forno, nosso frango congelado é a base perfeita para buscar saúde e versatilidade na cozinha.",
    "thumb": "assets/thumbs/104.webp"
  },
  {
    "cod": "112",
    "nome": "FRANGO CONGELADO SABBOR",
    "empresa": "Acreaves",
    "marca": "SABBOR",
    "grupo": "INTEIRO",
    "tipo": "CONGELADO",
    "complemento": "CX / CONTENDO 9 A 10 UNIDADES (PESO VARIÁVEL)",
    "peso": "Aprox. 20 kg",
    "conserva": "MANTER CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/112/1.webp"
    ],
    "desc": "Praticidade que acompanha o seu ritmo sem abrir mão do Sabbor. Da grelha ao forno, nosso frango congelado é a base perfeita para buscar saúde e versatilidade na cozinha.",
    "thumb": "assets/thumbs/112.webp"
  },
  {
    "cod": "115",
    "nome": "AVE NATALINA SABBOR",
    "empresa": "Acreaves",
    "marca": "SABBOR",
    "grupo": "INTEIRO",
    "tipo": "TEMPERADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "20 kg",
    "conserva": "MANTER CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/115/1.webp"
    ],
    "desc": "A estrela das celebrações. Ave selecionada com tempero especial Sabbor, garantindo carne suculenta, pele dourada, sabor inconfundível e termômetro para assar.",
    "thumb": "assets/thumbs/115.webp"
  },
  {
    "cod": "249",
    "nome": "COXINHA DA ASA CONGELADA NA BANDEJA",
    "empresa": "Acreaves",
    "marca": "SABBOR",
    "grupo": "BANDEJA",
    "tipo": "CONGELADO",
    "complemento": "1 kg — 14 un",
    "peso": "14 kg",
    "conserva": "MANTER CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/249/1.webp"
    ],
    "desc": "O corte favorito do churrasco e do happy hour. Carnuda e saborosa, com padronização de tamanho na bandeja.",
    "thumb": "assets/thumbs/249.webp"
  },
  {
    "cod": "248",
    "nome": "FILÉ DA COXA CONGELADO NA BANDEJA",
    "empresa": "Acreaves",
    "marca": "SABBOR",
    "grupo": "BANDEJA",
    "tipo": "CONGELADO",
    "complemento": "1 kg — 14 un",
    "peso": "14 kg",
    "conserva": "MANTER CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/248/1.webp"
    ],
    "desc": "Sabor da coxa com a praticidade do filé. Sem ossos e peles, ideal para grelhados rápidos e estrogonofe suculento.",
    "thumb": "assets/thumbs/248.webp"
  },
  {
    "cod": "247",
    "nome": "COXA E SOBRECOXA CONGELADA NA BANDEJA",
    "empresa": "Acreaves",
    "marca": "SABBOR",
    "grupo": "BANDEJA",
    "tipo": "CONGELADO",
    "complemento": "1 kg — 14 un",
    "peso": "14 kg",
    "conserva": "MANTER CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/247/1.webp"
    ],
    "desc": "O combo perfeito de rendimento e sabor. Peças selecionadas que garantem uma refeição completa para toda a família.",
    "thumb": "assets/thumbs/247.webp"
  },
  {
    "cod": "246",
    "nome": "MEIO DA ASA CONGELADA NA BANDEJA",
    "empresa": "Acreaves",
    "marca": "SABBOR",
    "grupo": "BANDEJA",
    "tipo": "CONGELADO",
    "complemento": "1 kg — 14 un",
    "peso": "14 kg",
    "conserva": "MANTER CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/246/1.webp"
    ],
    "desc": "Qualidade premium para quem busca o melhor da asa (Tulipa). Ideal para receitas especiais e preparos crocantes.",
    "thumb": "assets/thumbs/246.webp"
  },
  {
    "cod": "245",
    "nome": "FILÉ DE PEITO CONGELADO NA BANDEJA",
    "empresa": "Acreaves",
    "marca": "SABBOR",
    "grupo": "BANDEJA",
    "tipo": "CONGELADO",
    "complemento": "1 kg — 14 un",
    "peso": "14 kg",
    "conserva": "CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/245/1.webp"
    ],
    "desc": "Praticidade máxima: filés limpos e padronizados. Ideal para o consumidor que busca rapidez e zero desperdício.",
    "thumb": "assets/thumbs/245.webp"
  },
  {
    "cod": "225",
    "nome": "COXA E SOBRECOXA CONGELADA SABBOR",
    "empresa": "Acreaves",
    "marca": "SABBOR",
    "grupo": "CORTE",
    "tipo": "CONGELADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "18 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/225/1.webp"
    ],
    "desc": "Cortes de coxa e sobrecoxa de frango, congelados, ideais para diversas preparações, com suculência e sabor garantidos.",
    "thumb": "assets/thumbs/225.webp"
  },
  {
    "cod": "226",
    "nome": "FILÉ DE PEITO CONGELADO SABBOR",
    "empresa": "Acreaves",
    "marca": "SABBOR",
    "grupo": "CORTE",
    "tipo": "CONGELADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "18 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/226/1.webp"
    ],
    "desc": "Filé de peito de frango sem osso, congelado, prático e versátil, ideal para grelhados e receitas saudáveis.",
    "thumb": "assets/thumbs/226.webp"
  },
  {
    "cod": "227",
    "nome": "PEITO DE FRANGO CONGELADO SABBOR",
    "empresa": "Acreaves",
    "marca": "SABBOR",
    "grupo": "CORTE",
    "tipo": "CONGELADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "18 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/227/1.webp"
    ],
    "desc": "Peito de frango congelado, corte nobre com baixo teor de gordura, ideal para diversas preparações.",
    "thumb": "assets/thumbs/227.webp"
  },
  {
    "cod": "239",
    "nome": "COXINHA DA ASA CONGELADA SABBOR",
    "empresa": "Acreaves",
    "marca": "SABBOR",
    "grupo": "CORTE",
    "tipo": "CONGELADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "18 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/239/1.webp"
    ],
    "desc": "Coxinha da asa de frango, congelada, perfeita para frituras e petiscos crocantes.",
    "thumb": "assets/thumbs/239.webp"
  },
  {
    "cod": "240",
    "nome": "MEIO + PONTA DA ASA CONGELADA SABBOR",
    "empresa": "Acreaves",
    "marca": "SABBOR",
    "grupo": "CORTE",
    "tipo": "CONGELADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "18 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/240/1.webp"
    ],
    "desc": "Cortes de asa (meio e ponta), congelados, ideais para assados e frituras com ótimo rendimento.",
    "thumb": "assets/thumbs/240.webp"
  },
  {
    "cod": "241",
    "nome": "DORSO CONGELADO SABBOR",
    "empresa": "Acreaves",
    "marca": "SABBOR",
    "grupo": "CORTE",
    "tipo": "CONGELADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "15 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/241/1.webp"
    ],
    "desc": "Dorso de frango congelado, indicado para caldos e preparo de receitas caseiras.",
    "thumb": "assets/thumbs/241.webp"
  },
  {
    "cod": "242",
    "nome": "ASA CONGELADA SABBOR",
    "empresa": "Acreaves",
    "marca": "SABBOR",
    "grupo": "CORTE",
    "tipo": "CONGELADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "18 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/242/1.webp"
    ],
    "desc": "Asa de frango inteira, congelada, ideal para churrasco, fritura ou preparo no forno.",
    "thumb": "assets/thumbs/242.webp"
  },
  {
    "cod": "243",
    "nome": "SOBRE COXA SABBOR",
    "empresa": "Acreaves",
    "marca": "SABBOR",
    "grupo": "CORTE",
    "tipo": "CONGELADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "18 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/243/1.webp"
    ],
    "desc": "Sobrecoxa de frango, corte suculento e macio, ideal para diversas preparações do dia a dia.",
    "thumb": "assets/thumbs/243.webp"
  },
  {
    "cod": "244",
    "nome": "MEIO DA ASA CONGELADO SABBOR",
    "empresa": "Acreaves",
    "marca": "SABBOR",
    "grupo": "CORTE",
    "tipo": "CONGELADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "15 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/244/1.webp"
    ],
    "desc": "Meio da asa de frango, congelado, perfeito para fritar ou assar, com textura macia e sabor marcante.",
    "thumb": "assets/thumbs/244.webp"
  },
  {
    "cod": "320",
    "nome": "CORAÇÃO CONGELADO SABBOR",
    "empresa": "Acreaves",
    "marca": "SABBOR",
    "grupo": "CORTE",
    "tipo": "CONGELADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "10 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/320/1.webp"
    ],
    "desc": "Coração de frango congelado, ideal para churrasco e petiscos, com sabor característico e maciez.",
    "thumb": "assets/thumbs/320.webp"
  },
  {
    "cod": "323",
    "nome": "KIT DE CANJA CONGELADO SABBOR",
    "empresa": "Acreaves",
    "marca": "SABBOR",
    "grupo": "CORTE",
    "tipo": "CONGELADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "18 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/323/1.webp"
    ],
    "desc": "Kit com cortes selecionados de frango para preparo de canja, garantindo praticidade e sabor caseiro.",
    "thumb": "assets/thumbs/323.webp"
  },
  {
    "cod": "321",
    "nome": "MOELA CONGELADA SABBOR",
    "empresa": "Acreaves",
    "marca": "SABBOR",
    "grupo": "CORTE",
    "tipo": "CONGELADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "10 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/321/1.webp"
    ],
    "desc": "Moela de frango congelada, ideal para cozidos e receitas tradicionais, com textura firme e sabor intenso.",
    "thumb": "assets/thumbs/321.webp"
  },
  {
    "cod": "322",
    "nome": "PÉ DE FRANGO CONGELADO SABBOR",
    "empresa": "Acreaves",
    "marca": "SABBOR",
    "grupo": "CORTE",
    "tipo": "CONGELADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "18 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/322/1.webp"
    ],
    "desc": "Pé de frango congelado, indicado para caldos ricos e gelatinosos, muito utilizado na culinária tradicional.",
    "thumb": "assets/thumbs/322.webp"
  },
  {
    "cod": "324",
    "nome": "COXA/SOBRECOXA PORÇÃO DORSAL CONG SABBOR",
    "empresa": "Acreaves",
    "marca": "SABBOR",
    "grupo": "CORTE",
    "tipo": "CONGELADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "18 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/324/1.webp"
    ],
    "desc": "Cortes de coxa e sobrecoxa com porção dorsal, congelados, oferecendo ótimo custo-benefício e sabor.",
    "thumb": "assets/thumbs/324.webp"
  },
  {
    "cod": "256",
    "nome": "FRANGO A PASSARINHO CONGELADO MARINADO",
    "empresa": "Acreaves",
    "marca": "SABBOR",
    "grupo": "CORTE",
    "tipo": "CONGELADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "18 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/256/1.webp"
    ],
    "desc": "O petisco perfeito para qualquer momento. Cortes selecionados de frango, marinados em um tempero especial que garante suculência por dentro e crocância por fora. Pronto para o preparo, oferece agilidade na cozinha e o sabor irresistível que agrada a todos.",
    "thumb": "assets/thumbs/256.webp"
  },
  {
    "cod": "50632",
    "nome": "SALSICHA HOT DOG CONGELADA",
    "empresa": "Acreaves",
    "marca": "FRIATO",
    "grupo": "EMBUTIDOS",
    "tipo": "CONGELADO",
    "complemento": "5 kg — 4 un",
    "peso": "20 kg",
    "conserva": "MANTENHA CONGELADO -12 C OU MAIS FRIO",
    "promo": false,
    "imgs": [
      "assets/produtos/50632/1.webp"
    ],
    "desc": "Sabor e textura ideais para o hot dog perfeito. Versátil e prática, nossa salsicha mantém a suculência e o padrão de qualidade da grelha ao cozimento.",
    "thumb": "assets/thumbs/50632.webp"
  },
  {
    "cod": "20561",
    "nome": "FILÉ DA PANCETA SUÍNA TEMPERADA",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "CORTE",
    "tipo": "TEMPERADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 16 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20561/1.webp"
    ],
    "desc": "Corte nobre da panceta suína, já temperado, ideal para assados crocantes e suculentos.",
    "thumb": "assets/thumbs/20561.webp"
  },
  {
    "cod": "20562",
    "nome": "PERNIL SUÍNO TEMPERADO",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "CORTE",
    "tipo": "TEMPERADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 20 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20562/1.webp"
    ],
    "desc": "Pernil suíno selecionado e temperado, pronto para assar, garantindo maciez e sabor caseiro.",
    "thumb": "assets/thumbs/20562.webp"
  },
  {
    "cod": "20914",
    "nome": "PICANHA SUÍNA TEMPERADA",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "CORTE",
    "tipo": "TEMPERADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 10 kg",
    "conserva": "MANTENHA CONGELADA A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20914/1.webp"
    ],
    "desc": "Corte nobre suíno, já temperado, ideal para churrascos com maciez e suculência.",
    "thumb": "assets/thumbs/20914.webp"
  },
  {
    "cod": "20915",
    "nome": "COSTELA SUÍNA TEMPERADA",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "CORTE",
    "tipo": "TEMPERADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 10 kg",
    "conserva": "MANTENHA CONGELADA A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20915/1.webp"
    ],
    "desc": "Costela suína temperada, perfeita para assados lentos, garantindo sabor intenso.",
    "thumb": "assets/thumbs/20915.webp"
  },
  {
    "cod": "20916",
    "nome": "LOMBO SUÍNO TEMPERADO",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "CORTE",
    "tipo": "TEMPERADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 10 kg",
    "conserva": "MANTENHA CONGEADA A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20916/1.webp"
    ],
    "desc": "Lombo suíno selecionado, já temperado, ideal para assar ou grelhar.",
    "thumb": "assets/thumbs/20916.webp"
  },
  {
    "cod": "20986",
    "nome": "FRALDINHA SUÍNA TEMPERADA CONGELADA",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "CORTE",
    "tipo": "TEMPERADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 10 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20986/1.webp"
    ],
    "desc": "Corte suíno selecionado, já temperado, ideal para preparo rápido com sabor marcante e suculência garantida.",
    "thumb": "assets/thumbs/20986.webp"
  },
  {
    "cod": "20856",
    "nome": "FRALDINHA SUÍNA TEMPERADA",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "CORTE",
    "tipo": "TEMPERADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 10 kg",
    "conserva": "MANTER RESFRIADO 0°C A +7°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20856/1.webp"
    ],
    "desc": "Corte nobre e extremamente macio. O tempero suave realça o sabor natural da carne suína. Sucesso garantido na brasa.",
    "thumb": "assets/thumbs/20856.webp"
  },
  {
    "cod": "20227",
    "nome": "Bisteca de Carré Congelada",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "CORTES CONGELADOS",
    "tipo": "CONGELADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 20 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20227/1.webp"
    ],
    "desc": "Corte suíno congelado, com osso, ideal para grelha ou fritura, garantindo sabor e suculência.",
    "thumb": "assets/thumbs/20227.webp"
  },
  {
    "cod": "20500",
    "nome": "Carré com Costela e Barriga",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "CORTES CONGELADOS",
    "tipo": "CONGELADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 25 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20500/1.webp",
      "assets/produtos/20500/2.webp",
      "assets/produtos/20500/3.webp",
      "assets/produtos/20500/4.webp",
      "assets/produtos/20500/5.webp"
    ],
    "desc": "Corte suíno completo com costela e barriga, ideal para churrasco e assados.",
    "thumb": "assets/thumbs/20500.webp"
  },
  {
    "cod": "20569",
    "nome": "Pernil Suíno com Osso e Pele Congelado",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "CORTES CONGELADOS",
    "tipo": "CONGELADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 10 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20569/1.webp"
    ],
    "desc": "Corte tradicional com osso e pele, perfeito para assados suculentos.",
    "thumb": "assets/thumbs/20569.webp"
  },
  {
    "cod": "20577",
    "nome": "Bisteca de Carré com Pele",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "CORTES CONGELADOS",
    "tipo": "CONGELADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 10 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20577/1.webp"
    ],
    "desc": "Bisteca suína com pele, proporcionando mais sabor e crocância ao preparo.",
    "thumb": "assets/thumbs/20577.webp"
  },
  {
    "cod": "20710",
    "nome": "Filé Mignon Suíno Congelado",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "CORTES CONGELADOS",
    "tipo": "CONGELADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 10 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20710/1.webp",
      "assets/produtos/20710/2.webp",
      "assets/produtos/20710/3.webp",
      "assets/produtos/20710/4.webp",
      "assets/produtos/20710/5.webp"
    ],
    "desc": "Corte nobre, macio e suculento, ideal para receitas sofisticadas.",
    "thumb": "assets/thumbs/20710.webp"
  },
  {
    "cod": "20712",
    "nome": "Carré Suíno Congelado",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "CORTES CONGELADOS",
    "tipo": "CONGELADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 10 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20712/1.webp"
    ],
    "desc": "Corte com osso, ideal para grelha ou forno, com excelente sabor.",
    "thumb": "assets/thumbs/20712.webp"
  },
  {
    "cod": "20714",
    "nome": "Picanha Suína Congelada",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "CORTES CONGELADOS",
    "tipo": "CONGELADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 10 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20714/1.webp",
      "assets/produtos/20714/2.webp",
      "assets/produtos/20714/3.webp",
      "assets/produtos/20714/4.webp",
      "assets/produtos/20714/5.webp"
    ],
    "desc": "Corte especial, macio e suculento, ideal para churrasco.",
    "thumb": "assets/thumbs/20714.webp"
  },
  {
    "cod": "20717",
    "nome": "Pernil Suíno Congelado",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "CORTES CONGELADOS",
    "tipo": "CONGELADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 16 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20717/1.webp"
    ],
    "desc": "Corte tradicional, versátil e ideal para assados.",
    "thumb": "assets/thumbs/20717.webp"
  },
  {
    "cod": "20718",
    "nome": "Paleta Suína Congelada",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "CORTES CONGELADOS",
    "tipo": "CONGELADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 15 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20718/1.webp",
      "assets/produtos/20718/2.webp",
      "assets/produtos/20718/3.webp",
      "assets/produtos/20718/4.webp",
      "assets/produtos/20718/5.webp"
    ],
    "desc": "Corte com excelente custo-benefício, ideal para cozidos e assados.",
    "thumb": "assets/thumbs/20718.webp"
  },
  {
    "cod": "20720",
    "nome": "Bisteca de Copa Lombo Congelada",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "CORTES CONGELADOS",
    "tipo": "CONGELADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 10 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20720/1.webp"
    ],
    "desc": "Corte marmorizado, suculento e ideal para grelha.",
    "thumb": "assets/thumbs/20720.webp"
  },
  {
    "cod": "20721",
    "nome": "Pele Suína Congelada",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "CORTES CONGELADOS",
    "tipo": "CONGELADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 20 kg",
    "conserva": "MANTENHA CONGELADA A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20721/1.webp",
      "assets/produtos/20721/2.webp",
      "assets/produtos/20721/3.webp",
      "assets/produtos/20721/4.webp",
      "assets/produtos/20721/5.webp"
    ],
    "desc": "Produto ideal para preparo de torresmo e derivados.",
    "thumb": "assets/thumbs/20721.webp"
  },
  {
    "cod": "20724",
    "nome": "Costela Suína em Manta Congelada",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "CORTES CONGELADOS",
    "tipo": "CONGELADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 10 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20724/1.webp",
      "assets/produtos/20724/2.webp",
      "assets/produtos/20724/3.webp",
      "assets/produtos/20724/4.webp",
      "assets/produtos/20724/5.webp"
    ],
    "desc": "Costela inteira em manta, ideal para assados e churrasco.",
    "thumb": "assets/thumbs/20724.webp"
  },
  {
    "cod": "20725",
    "nome": "Costela Suína Congelada",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "CORTES CONGELADOS",
    "tipo": "CONGELADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 10 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20725/1.webp"
    ],
    "desc": "Corte saboroso, ideal para churrasco e forno.",
    "thumb": "assets/thumbs/20725.webp"
  },
  {
    "cod": "20732",
    "nome": "Alcatra Suína Congelada",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "CORTES CONGELADOS",
    "tipo": "CONGELADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 10 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20732/1.webp",
      "assets/produtos/20732/2.webp",
      "assets/produtos/20732/3.webp",
      "assets/produtos/20732/4.webp",
      "assets/produtos/20732/5.webp"
    ],
    "desc": "Corte nobre, macio e versátil.",
    "thumb": "assets/thumbs/20732.webp"
  },
  {
    "cod": "20738",
    "nome": "Copa Lombo Suíno Congelado",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "CORTES CONGELADOS",
    "tipo": "CONGELADOS",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 10 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20738/1.webp"
    ],
    "desc": "Corte suculento e macio, ideal para grelha.",
    "thumb": "assets/thumbs/20738.webp"
  },
  {
    "cod": "20739",
    "nome": "Ponta de Costela Congelada",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "CORTES CONGELADOS",
    "tipo": "CONGELADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 10 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20739/1.webp"
    ],
    "desc": "Parte saborosa da costela, ideal para cozidos e assados.",
    "thumb": "assets/thumbs/20739.webp"
  },
  {
    "cod": "20744",
    "nome": "Pés Suínos Congelados",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "CORTES CONGELADOS",
    "tipo": "CONGELADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 10 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20744/1.webp",
      "assets/produtos/20744/2.webp",
      "assets/produtos/20744/3.webp",
      "assets/produtos/20744/4.webp",
      "assets/produtos/20744/5.webp"
    ],
    "desc": "Produto tradicional para feijoadas e caldos.",
    "thumb": "assets/thumbs/20744.webp"
  },
  {
    "cod": "20746",
    "nome": "Máscara com Orelha Suína Congelada",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "CORTES CONGELADOS",
    "tipo": "CONGELADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 10 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20746/1.webp"
    ],
    "desc": "Corte típico para pratos regionais.",
    "thumb": "assets/thumbs/20746.webp"
  },
  {
    "cod": "20735",
    "nome": "Joelho Suíno Congelado",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "CORTES CONGELADOS",
    "tipo": "CONGELADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 10 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20735/1.webp",
      "assets/produtos/20735/2.webp",
      "assets/produtos/20735/3.webp",
      "assets/produtos/20735/4.webp",
      "assets/produtos/20735/5.webp"
    ],
    "desc": "Corte ideal para preparo de pratos típicos e assados.",
    "thumb": "assets/thumbs/20735.webp"
  },
  {
    "cod": "20763",
    "nome": "Meia Carcaça Suína Congelada",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "CORTES CONGELADOS",
    "tipo": "CONGELADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 40 kg",
    "conserva": "MANTENHA CONGELADA A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20763/1.webp"
    ],
    "desc": "Produto inteiro para cortes personalizados.",
    "thumb": "assets/thumbs/20763.webp"
  },
  {
    "cod": "20766",
    "nome": "Pernil Suíno Bolinha Congelado",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "CORTES CONGELADOS",
    "tipo": "CONGELADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 16 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20766/1.webp",
      "assets/produtos/20766/2.webp",
      "assets/produtos/20766/3.webp",
      "assets/produtos/20766/4.webp",
      "assets/produtos/20766/5.webp"
    ],
    "desc": "Corte arredondado, ideal para porcionamento.",
    "thumb": "assets/thumbs/20766.webp"
  },
  {
    "cod": "20769",
    "nome": "Costela Premium Congelada",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "CORTES CONGELADOS",
    "tipo": "CONGELADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 10 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20769/1.webp",
      "assets/produtos/20769/2.webp",
      "assets/produtos/20769/3.webp",
      "assets/produtos/20769/4.webp",
      "assets/produtos/20769/5.webp"
    ],
    "desc": "Corte selecionado com alto padrão de qualidade.",
    "thumb": "assets/thumbs/20769.webp"
  },
  {
    "cod": "20770",
    "nome": "Carré Sem Couro Inteiro Congelado",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "CORTES CONGELADOS",
    "tipo": "CONGELADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 20 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20770/1.webp"
    ],
    "desc": "Corte inteiro sem pele, ideal para assados.",
    "thumb": "assets/thumbs/20770.webp"
  },
  {
    "cod": "20772",
    "nome": "Carré Inteiro com Couro Congelado",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "CORTES CONGELADOS",
    "tipo": "CONGELADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 20 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20772/1.webp"
    ],
    "desc": "Corte completo com pele, ideal para preparos crocantes.",
    "thumb": "assets/thumbs/20772.webp"
  },
  {
    "cod": "20923",
    "nome": "Bisteca de Pernil Congelada",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "CORTES CONGELADOS",
    "tipo": "CONGELADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 10 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20923/1.webp"
    ],
    "desc": "Corte com osso, ideal para fritura e grelha.",
    "thumb": "assets/thumbs/20923.webp"
  },
  {
    "cod": "20925",
    "nome": "Barriga Suína Resfriada",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "CORTES CONGELADOS",
    "tipo": "CONGELADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 10 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20925/1.webp",
      "assets/produtos/20925/2.webp",
      "assets/produtos/20925/3.webp",
      "assets/produtos/20925/4.webp",
      "assets/produtos/20925/5.webp"
    ],
    "desc": "Corte suculento com excelente camada de gordura, ideal para preparo de torresmo, assados e receitas que valorizam sabor e maciez.",
    "thumb": "assets/thumbs/20925.webp"
  },
  {
    "cod": "20928",
    "nome": "Sobrepaleta Suína em Cubos Congelada",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "CORTES CONGELADOS",
    "tipo": "CONGELADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 20 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20928/1.webp"
    ],
    "desc": "Corte sem osso em cubos, pronto para preparo.",
    "thumb": "assets/thumbs/20928.webp"
  },
  {
    "cod": "20985",
    "nome": "Pernil Desossado com Pele Congelado",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "CORTES CONGELADOS",
    "tipo": "CONGELADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 16 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20985/1.webp"
    ],
    "desc": "Corte prático e suculento para assados.",
    "thumb": "assets/thumbs/20985.webp"
  },
  {
    "cod": "20989",
    "nome": "Paleta Suína Bolinha Congelada",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "CORTES CONGELADOS",
    "tipo": "CONGELADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 16 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20989/1.webp",
      "assets/produtos/20989/2.webp",
      "assets/produtos/20989/3.webp",
      "assets/produtos/20989/4.webp",
      "assets/produtos/20989/5.webp"
    ],
    "desc": "Corte suíno congelado, com formato arredondado e excelente rendimento, ideal para assados, cozidos e preparações diversas, garantindo sabor e suculência.",
    "thumb": "assets/thumbs/20989.webp"
  },
  {
    "cod": "20579",
    "nome": "Costela Suína Premium sem Pele Resfriada",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "CORTES RESFRIADOS",
    "tipo": "RESFRIADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 10 kg",
    "conserva": "MANTENHA RESFRIADO DE 0°C A +7°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20579/1.webp"
    ],
    "desc": "Corte selecionado, pronto para preparo.",
    "thumb": "assets/thumbs/20579.webp"
  },
  {
    "cod": "20711",
    "nome": "Filé Mignon Suíno Resfriado",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "CORTES RESFRIADOS",
    "tipo": "RESFRIADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 10 kg",
    "conserva": "MANTENHA RESFRIADO DE 0°C A +7°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20711/1.webp"
    ],
    "desc": "Corte nobre e macio, pronto para consumo.",
    "thumb": "assets/thumbs/20711.webp"
  },
  {
    "cod": "20715",
    "nome": "Picanha Suína Resfriada",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "CORTES RESFRIADOS",
    "tipo": "RESFRIADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 10 kg",
    "conserva": "MANTENHA RESFRIADO DE 0°C A +7°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20715/1.webp"
    ],
    "desc": "Corte suculento ideal para churrasco.",
    "thumb": "assets/thumbs/20715.webp"
  },
  {
    "cod": "20716",
    "nome": "Pernil Suíno Resfriado",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "CORTES RESFRIADOS",
    "tipo": "RESFRIADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 16 kg",
    "conserva": "MANTENHA RESFRIADO DE 0°C A +7°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20716/1.webp"
    ],
    "desc": "Corte tradicional pronto para preparo.",
    "thumb": "assets/thumbs/20716.webp"
  },
  {
    "cod": "20719",
    "nome": "Paleta Suína Resfriada",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "CORTES RESFRIADOS",
    "tipo": "RESFRIADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "15 kg",
    "conserva": "MANTENHA RESFRIADO DE 0°C A +7°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20719/1.webp"
    ],
    "desc": "Corte versátil com excelente sabor.",
    "thumb": "assets/thumbs/20719.webp"
  },
  {
    "cod": "20726",
    "nome": "Costela Suína Resfriada",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "CORTES RESFRIADOS",
    "tipo": "RESFRIADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "10 kg",
    "conserva": "MANTENHA RESFRIADO DE 0°C A +7°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20726/1.webp"
    ],
    "desc": "Corte ideal para churrasco.",
    "thumb": "assets/thumbs/20726.webp"
  },
  {
    "cod": "20733",
    "nome": "Alcatra Suína Resfriada",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "CORTES RESFRIADOS",
    "tipo": "RESFRIADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 10 kg",
    "conserva": "MANTENHA RESFRIADO DE 0°C A +7°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20733/1.webp"
    ],
    "desc": "Corte nobre e macio.",
    "thumb": "assets/thumbs/20733.webp"
  },
  {
    "cod": "20737",
    "nome": "Copa Lombo Suíno Resfriado",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "CORTES RESFRIADOS",
    "tipo": "RESFRIADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 10 kg",
    "conserva": "MANTENHA RESFRIADO DE 0°C A +7°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20737/1.webp"
    ],
    "desc": "Corte suculento pronto para preparo.",
    "thumb": "assets/thumbs/20737.webp"
  },
  {
    "cod": "20745",
    "nome": "Costela Suína Premium Resfriada",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "CORTES RESFRIADOS",
    "tipo": "RESFRIADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 10 kg",
    "conserva": "MANTENHA RESFRIADO DE 0°C A +7°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20745/1.webp"
    ],
    "desc": "Corte selecionado de alta qualidade.",
    "thumb": "assets/thumbs/20745.webp"
  },
  {
    "cod": "20751",
    "nome": "Lombo Suíno Resfriado",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "CORTES RESFRIADOS",
    "tipo": "RESFRIADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 10 kg",
    "conserva": "MANTENHA RESFRIADO DE 0°C A +7°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20751/1.webp"
    ],
    "desc": "Corte magro e versátil.",
    "thumb": "assets/thumbs/20751.webp"
  },
  {
    "cod": "20748",
    "nome": "Carcaça Suína Resfriada",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "CORTES RESFRIADOS",
    "tipo": "RESFRIADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 40 kg",
    "conserva": "MANTENHA RESFRIADO DE 0°C A +7°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20748/1.webp"
    ],
    "desc": "Produto inteiro para cortes diversos.",
    "thumb": "assets/thumbs/20748.webp"
  },
  {
    "cod": "20924",
    "nome": "Barriga Suína Resfriada",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "CORTES RESFRIADOS",
    "tipo": "RESFRIADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 10 kg",
    "conserva": "MANTENHA RESFRIADO DE 0°C A +7°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20924/1.webp"
    ],
    "desc": "Corte suculento, ideal para torresmo e assados.",
    "thumb": "assets/thumbs/20924.webp"
  },
  {
    "cod": "20608",
    "nome": "MORTADELA TRADICIONAL",
    "empresa": "Dom Porquito",
    "marca": "SABBOR",
    "grupo": "EMBUTIDOS",
    "tipo": "DEFUMADOS",
    "complemento": "2,5 kg — 6 un",
    "peso": "15 kg",
    "conserva": "MATENHA EM LOCAL SECO E FRESCO ATÉ +25°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20608/1.webp"
    ],
    "desc": "Mortadela tradicional, macia e saborosa, ideal para lanches e consumo diário.",
    "thumb": "assets/thumbs/20608.webp"
  },
  {
    "cod": "20609",
    "nome": "MORTADELA TRADICIONAL 400 G",
    "empresa": "Dom Porquito",
    "marca": "SABBOR",
    "grupo": "EMBUTIDOS",
    "tipo": "DEFUMADOS",
    "complemento": "400 g — 25 un",
    "peso": "10 kg",
    "conserva": "MANTENHA EM LOCAL SECO E FRESCO ATÉ +25°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20609/1.webp"
    ],
    "desc": "Mortadela tradicional em embalagem prática, perfeita para lanches rápidos e porções menores.",
    "thumb": "assets/thumbs/20609.webp"
  },
  {
    "cod": "20629",
    "nome": "SALSICHA DE FRANGO RESFRIADA",
    "empresa": "Dom Porquito",
    "marca": "SABBOR",
    "grupo": "EMBUTIDOS",
    "tipo": "RESFRIADO",
    "complemento": "3 kg — 5 un",
    "peso": "15 kg",
    "conserva": "MANTENHA RESFRIADO DE 0°C A 7°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20629/1.webp"
    ],
    "desc": "Salsicha de frango leve e saborosa, ideal para preparo rápido. Produto resfriado.",
    "thumb": "assets/thumbs/20629.webp"
  },
  {
    "cod": "20630",
    "nome": "SALSICHA HOT DOG RESFRIADA",
    "empresa": "Dom Porquito",
    "marca": "SABBOR",
    "grupo": "EMBUTIDOS",
    "tipo": "RESFRIADO",
    "complemento": "3 kg — 5 un",
    "peso": "15 kg",
    "conserva": "MANTENHA RESFRIADO DE 0°C A 7°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20630/1.webp"
    ],
    "desc": "Salsicha tipo hot dog, macia e suculenta, perfeita para lanches rápidos. Produto resfriado.",
    "thumb": "assets/thumbs/20630.webp"
  },
  {
    "cod": "20631",
    "nome": "SALSICHA HOT DOG CONGELADA",
    "empresa": "Dom Porquito",
    "marca": "SABBOR",
    "grupo": "EMBUTIDOS",
    "tipo": "CONGELADO",
    "complemento": "4 kg — 4 un",
    "peso": "16 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20631/1.webp"
    ],
    "desc": "Salsicha hot dog congelada, prática e com maior durabilidade, mantendo sabor e qualidade.",
    "thumb": "assets/thumbs/20631.webp"
  },
  {
    "cod": "20638",
    "nome": "MORTADELA TIPO BOLOGNA",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "EMBUTIDOS",
    "tipo": "DEFUMADOS",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 10 kg",
    "conserva": "MANTENHA RESFRIADO ATÉ +7°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20638/1.webp"
    ],
    "desc": "Mortadela tipo Bologna, com textura diferenciada e sabor suave, ideal para sanduíches.",
    "thumb": "assets/thumbs/20638.webp"
  },
  {
    "cod": "20615",
    "nome": "PRESUNTO COZIDO SABBOR 3.6KG",
    "empresa": "Dom Porquito",
    "marca": "SABBOR",
    "grupo": "EMBUTIDOS",
    "tipo": "RESFRIADO",
    "complemento": "3,6 kg — 3 un",
    "peso": "10,8 kg",
    "conserva": "MANTENHA RESFRIADO DE 0°C A +7°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20615/1.webp"
    ],
    "desc": "Presunto cozido de alta qualidade, sabor suave e textura macia, ideal para fatiamento.",
    "thumb": "assets/thumbs/20615.webp"
  },
  {
    "cod": "20618",
    "nome": "LANCHE",
    "empresa": "Dom Porquito",
    "marca": "SABBOR",
    "grupo": "EMBUTIDOS",
    "tipo": "RESFRIADO",
    "complemento": "2,5 kg — 4 un",
    "peso": "10 kg",
    "conserva": "MANTENHA RESFRIADO DE 0°C A +7°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20618/1.webp"
    ],
    "desc": "Produto prático para lanches, com sabor agradável e versatilidade no consumo diário.",
    "thumb": "assets/thumbs/20618.webp"
  },
  {
    "cod": "20936",
    "nome": "LOMBO TIPO CANADENSE",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "EMBUTIDOS",
    "tipo": "DEFUMADOS",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 10 kg",
    "conserva": "MANTENHA RESFRIADO DE 0°C A +7°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20936/1.webp"
    ],
    "desc": "Lombo suíno tipo canadense, defumado e com sabor suave, ideal para lanches e refeições.",
    "thumb": "assets/thumbs/20936.webp"
  },
  {
    "cod": "20677",
    "nome": "MINI MORTADELA TIPO BOLOGNA",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "EMBUTIDOS",
    "tipo": "DEFUMADOS",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 10 kg",
    "conserva": "MANTER RESFRIADO 0°C A +7°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20677/1.webp"
    ],
    "desc": "Tradição em formato prático. Sabor marcante e textura delicada, perfeita para tábuas de frios e lanches gourmet.",
    "thumb": "assets/thumbs/20677.webp"
  },
  {
    "cod": "20510",
    "nome": "LINGUIÇA DE FRANGO FINA APIMENTADA",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "LINGUIÇAS",
    "tipo": "CONGELADO",
    "complemento": "800g — 18 un",
    "peso": "14,4 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20510/1.webp"
    ],
    "desc": "Linguiça fina de frango com toque picante, perfeita para grelhar ou fritar, com textura leve e sabor intenso.",
    "thumb": "assets/thumbs/20510.webp"
  },
  {
    "cod": "20511",
    "nome": "LINGUIÇA TIPO PAIO 1 KG",
    "empresa": "Dom Porquito",
    "marca": "SABBOR",
    "grupo": "LINGUIÇAS",
    "tipo": "DEFUMADOS",
    "complemento": "1 Kg — 12 un",
    "peso": "12 kg",
    "conserva": "MANTENHA EM LOCAL SECO E FRESCO ATE +22°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20511/1.webp"
    ],
    "desc": "Linguiça tipo paio, sabor defumado tradicional, ideal para feijoadas e pratos típicos.",
    "thumb": "assets/thumbs/20511.webp"
  },
  {
    "cod": "20512",
    "nome": "LINGUIÇA TIPO PAIO 3 GOMOS",
    "empresa": "Dom Porquito",
    "marca": "SABBOR",
    "grupo": "LINGUIÇAS",
    "tipo": "DEFUMADOS",
    "complemento": "PESO VARIÁVEL",
    "peso": "10 kg",
    "conserva": "MANTENHA EM LOCAL SECO E FRESCO ATE +25°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20512/1.webp"
    ],
    "desc": "Linguiça tipo paio com sabor marcante e defumação especial, perfeita para receitas tradicionais.",
    "thumb": "assets/thumbs/20512.webp"
  },
  {
    "cod": "20603",
    "nome": "LINGUIÇA APERITIVO APIMEN. DE FRANGO RESF.",
    "empresa": "Dom Porquito",
    "marca": "SABBOR",
    "grupo": "LINGUIÇAS",
    "tipo": "RESFRIADO",
    "complemento": "2,5 kg — 8 un",
    "peso": "10 kg",
    "conserva": "MANTENHA RESFRIADA DE 0°C A +7°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20603/1.webp"
    ],
    "desc": "Linguiça de frango apimentada, pronta para consumo rápido, com sabor equilibrado. Produto resfriado.",
    "thumb": "assets/thumbs/20603.webp"
  },
  {
    "cod": "20604",
    "nome": "LINGUIÇA TIPO CALABRESA SABBOR 2,5 KG",
    "empresa": "Dom Porquito",
    "marca": "SABBOR",
    "grupo": "LINGUIÇAS",
    "tipo": "DEFUMADOS",
    "complemento": "2,5 kg — 6 un",
    "peso": "15 kg",
    "conserva": "MANTENHA EM LOCAL SECO E FRESCO ATÉ +22°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20604/1.webp"
    ],
    "desc": "Linguiça calabresa de alta qualidade, ideal para diversos preparos, com sabor defumado característico.",
    "thumb": "assets/thumbs/20604.webp"
  },
  {
    "cod": "20606",
    "nome": "LINGUIÇA TIPO CALABRESA 2 GOMOS",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "LINGUIÇAS",
    "tipo": "DEFUMADOS",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 10 kg",
    "conserva": "MANTENHA EM LOCAL SECO E FRESCO ATÉ +22°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20606/1.webp"
    ],
    "desc": "Linguiça calabresa tradicional, versátil e saborosa, indicada para churrascos e receitas variadas.",
    "thumb": "assets/thumbs/20606.webp"
  },
  {
    "cod": "20905",
    "nome": "LINGUIÇA CHURRASCO CONGELADA 800G",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "LINGUIÇAS",
    "tipo": "CONGELADO",
    "complemento": "800g — 18 un",
    "peso": "14,4 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20905/1.webp"
    ],
    "desc": "Linguiça ideal para churrasco, sabor suculento e preparo prático. Produto congelado.",
    "thumb": "assets/thumbs/20905.webp"
  },
  {
    "cod": "20907",
    "nome": "LINGUIÇA TIPO CALABRESA MISTER PIG",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "LINGUIÇAS",
    "tipo": "DEFUMADOS",
    "complemento": "2,5 kg — 6 un",
    "peso": "15 kg",
    "conserva": "MANTENHA EM LOCAL SECO E FRESCO ATÉ +22°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20907/1.webp"
    ],
    "desc": "Linguiça calabresa com padrão premium, sabor defumado intenso e excelente rendimento.",
    "thumb": "assets/thumbs/20907.webp"
  },
  {
    "cod": "20943",
    "nome": "LINGUIÇA SUÍNA APIMENTADA RESF. PCT 4 Kg",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "LINGUIÇAS",
    "tipo": "RESFRIADO",
    "complemento": "4kg — 4 un",
    "peso": "16 kg",
    "conserva": "MANTENHA RESFRIADO DE 0°C A +7°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20943/1.webp"
    ],
    "desc": "Linguiça suína apimentada em embalagem econômica, ideal para alto consumo. Produto resfriado.",
    "thumb": "assets/thumbs/20943.webp"
  },
  {
    "cod": "20944",
    "nome": "LINGUIÇA SUÍNA APIMENTADA CONG. PCT 4 Kg",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "LINGUIÇAS",
    "tipo": "CONGELADO",
    "complemento": "4 kg — 4 un",
    "peso": "16 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20944/1.webp"
    ],
    "desc": "Linguiça suína apimentada congelada, com maior durabilidade e excelente rendimento.",
    "thumb": "assets/thumbs/20944.webp"
  },
  {
    "cod": "20901",
    "nome": "LINGUIÇA SUÍNA FINA APIMENTADA 800G",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "LINGUIÇAS",
    "tipo": "CONGELADO",
    "complemento": "800 g — 18 un",
    "peso": "14,4 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20901/1.webp"
    ],
    "desc": "Linguiça suína fina com toque picante, ideal para churrascos e grelhados.",
    "thumb": "assets/thumbs/20901.webp"
  },
  {
    "cod": "20903",
    "nome": "LINGUIÇA SUÍNA APIMENTADA CONGELADA 800G",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "LINGUIÇAS",
    "tipo": "CONGELADO",
    "complemento": "800 g — 18 un",
    "peso": "14,4 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20903/1.webp"
    ],
    "desc": "Linguiça suína apimentada, congelada para maior conservação, com sabor marcante.",
    "thumb": "assets/thumbs/20903.webp"
  },
  {
    "cod": "20947",
    "nome": "LINGUIÇA SUÍNA CHURRASCO",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "LINGUIÇAS",
    "tipo": "RESFRIADO",
    "complemento": "4 kg — 3 un",
    "peso": "12 kg",
    "conserva": "MANTENHA RESFRIADO DE 0°C A +7°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20947/1.webp"
    ],
    "desc": "Linguiça suína ideal para churrasco, com sabor marcante e ótima suculência.",
    "thumb": "assets/thumbs/20947.webp"
  },
  {
    "cod": "20948",
    "nome": "LINGUIÇA CHURRASCO SUÍNA CONG.",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "LINGUIÇAS",
    "tipo": "CONGELADO",
    "complemento": "4 kg — 4 un",
    "peso": "16 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20948/1.webp"
    ],
    "desc": "Linguiça suína para churrasco, congelada para melhor conservação e praticidade.",
    "thumb": "assets/thumbs/20948.webp"
  },
  {
    "cod": "20949",
    "nome": "LINGUIÇA SUÍNA FINA APIMENTADA 3KG",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "LINGUIÇAS",
    "tipo": "CONGELADO",
    "complemento": "3 kg — 3 un",
    "peso": "9 kg",
    "conserva": "MANTENHA CONGELADA A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20949/1.webp"
    ],
    "desc": "Linguiça suína fina e apimentada em embalagem econômica, ideal para grande consumo.",
    "thumb": "assets/thumbs/20949.webp"
  },
  {
    "cod": "20503",
    "nome": "LINGUIÇA APERITIVO APIMEN. DE FRANGO CONG.",
    "empresa": "Dom Porquito",
    "marca": "SABBOR",
    "grupo": "LINGUIÇAS",
    "tipo": "CONGELADO",
    "complemento": "2,5 kg — 4 un",
    "peso": "10 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20503/1.webp"
    ],
    "desc": "Linguiça de frango levemente apimentada, prática e saborosa, ideal para petiscos e aperitivos. Produto congelado.",
    "thumb": "assets/thumbs/20503.webp"
  },
  {
    "cod": "20902",
    "nome": "LINGUIÇA SUÍNA FINA APIMENTADA RESF. 4KG",
    "empresa": "Dom Porquito",
    "marca": "SABBOR",
    "grupo": "LINGUIÇAS",
    "tipo": "RESFRIADO",
    "complemento": "4 kg — 4 un",
    "peso": "16 kg",
    "conserva": "MANTER RESFRIADO 0°C A +7°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20902/1.webp"
    ],
    "desc": "Equilíbrio perfeito entre a suculência da carne suína selecionada e um toque de pimenta na medida certa. Formato fino, ideal para grelhas, chapas ou como aperitivo diferenciado em churrascos.",
    "thumb": "assets/thumbs/20902.webp"
  },
  {
    "cod": "20768",
    "nome": "INGREDIENTES PARA FEIJOADA ESPECIAL",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "SALGADOS",
    "tipo": "SALGADOS",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 10 kg",
    "conserva": "MANTENHA RESFRIADO DE 0°C A 7°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20768/1.webp"
    ],
    "desc": "Mix de carnes selecionadas para feijoada, garantindo praticidade e sabor tradicional.",
    "thumb": "assets/thumbs/20768.webp"
  },
  {
    "cod": "20760",
    "nome": "Ponta de Costela Salgada",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "SALGADOS",
    "tipo": "SALGADOS",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 10 kg",
    "conserva": "MANTENHA EM LOCAL SECO E FRESCO ATÉ 25°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20760/1.webp"
    ],
    "desc": "Produto salgado ideal para pratos tradicionais.",
    "thumb": "assets/thumbs/20760.webp"
  },
  {
    "cod": "20753",
    "nome": "Joelho Suíno Salgado",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "SALGADOS",
    "tipo": "SALGADOS",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 10 kg",
    "conserva": "MANTENHA EM LOCAL SECO E FRESCO ATÉ 25°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20753/1.webp"
    ],
    "desc": "Produto típico para receitas regionais.",
    "thumb": "assets/thumbs/20753.webp"
  },
  {
    "cod": "20755",
    "nome": "Língua Suína Salgada",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "SALGADOS",
    "tipo": "SALGADOS",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 10 kg",
    "conserva": "MANTENHA EM LOCAL SECO E FRESCO ATÉ 25°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20755/1.webp"
    ],
    "desc": "Produto salgado para preparo tradicional.",
    "thumb": "assets/thumbs/20755.webp"
  },
  {
    "cod": "20756",
    "nome": "Rabo Suíno Salgado",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "SALGADOS",
    "tipo": "SALGADOS",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 10 kg",
    "conserva": "MANTENHA EM LOCAL SECO E FRESCO ATÉ 25°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20756/1.webp"
    ],
    "desc": "Ideal para feijoadas e pratos típicos.",
    "thumb": "assets/thumbs/20756.webp"
  },
  {
    "cod": "20757",
    "nome": "Pé Suíno Salgado",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "SALGADOS",
    "tipo": "SALGADOS",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 10 kg",
    "conserva": "MANTENHA EM LOCAL SECO E FRESCO ATÉ 25°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20757/1.webp"
    ],
    "desc": "Produto tradicional para caldos.",
    "thumb": "assets/thumbs/20757.webp"
  },
  {
    "cod": "20758",
    "nome": "Costela Suína Salgada",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "SALGADOS",
    "tipo": "SALGADOS",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 10 kg",
    "conserva": "MANTENHA EM LOCAL SECO E FRESCO ATÉ 25°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20758/1.webp"
    ],
    "desc": "Corte salgado pronto para preparo.",
    "thumb": "assets/thumbs/20758.webp"
  },
  {
    "cod": "20759",
    "nome": "Máscara Suína Salgada",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "SALGADOS",
    "tipo": "SALGADOS",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 10 kg",
    "conserva": "MANTENHA EM LOCAL SECO E FRESCO ATÉ 25°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20759/1.webp"
    ],
    "desc": "Produto típico regional.",
    "thumb": "assets/thumbs/20759.webp"
  },
  {
    "cod": "20900",
    "nome": "Pele Suína Salgada",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "SALGADOS",
    "tipo": "SALGADOS",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 10 kg",
    "conserva": "MANTENHA EM LOCAL SECO E FRESCO ATÉ 25°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20900/1.webp"
    ],
    "desc": "Ideal para preparo de torresmo.",
    "thumb": "assets/thumbs/20900.webp"
  },
  {
    "cod": "20933",
    "nome": "BACON EM PEDAÇOS",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "CORTE",
    "tipo": "DEFUMADOS",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 5 kg",
    "conserva": "MANTENHA EM LOCAL SECO E FRESCO ATÉ 25°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20933/1.webp"
    ],
    "desc": "Bacon em cubos prontos para uso, ideal para incrementar pratos com sabor defumado.",
    "thumb": "assets/thumbs/20933.webp"
  },
  {
    "cod": "20931",
    "nome": "BACON EM MANTA MISTER PIG",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "CORTE",
    "tipo": "DEFUMADOS",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 15 kg",
    "conserva": "MANTENHA EM LOCAL SECO E FRESCO ATÉ 25°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20931/1.webp"
    ],
    "desc": "Bacon em manta de alta qualidade, ideal para cortes personalizados e diversas receitas.",
    "thumb": "assets/thumbs/20931.webp"
  },
  {
    "cod": "20942",
    "nome": "BISTECA SUÍNA",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "CORTE",
    "tipo": "CONGELADO",
    "complemento": "PESO VARIÁVEL",
    "peso": "Aprox. 10 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20942/1.webp"
    ],
    "desc": "Corte tradicional suíno, versátil e saboroso, ideal para fritar ou grelhar.",
    "thumb": "assets/thumbs/20942.webp"
  },
  {
    "cod": "481",
    "nome": "BATATA CRISPY COATED PREMIUM 10mm 12kg",
    "empresa": "Fripal",
    "marca": "FARM FRITE",
    "grupo": "BATATA",
    "tipo": "CONGELADO",
    "complemento": "2 kg — 6 un",
    "peso": "12 kg",
    "conserva": "MANTENHA CONGELADO A -18°C",
    "promo": false,
    "imgs": [
      "assets/produtos/481/1.webp"
    ],
    "desc": "Batatas palito de corte super fino (7mm), garantindo uma crocância excepcional e fritura rápida. Ideais para quem busca elegância no prato e alto rendimento.",
    "thumb": "assets/thumbs/481.webp"
  },
  {
    "cod": "488",
    "nome": "BATATA FARM FRITES FRIES 7mm 12.5kg",
    "empresa": "Fripal",
    "marca": "FARM FRITE",
    "grupo": "BATATA",
    "tipo": "CONGELADO",
    "complemento": "2,5 kg — 5 un",
    "peso": "12,5 kg",
    "conserva": "MANTENHA CONGELADO A -18°C",
    "promo": false,
    "imgs": [
      "assets/produtos/488/1.webp"
    ],
    "desc": "A clássica batata palito de 10mm, com o equilíbrio perfeito entre o interior macio e a casca dourada. Versátil, é a escolha ideal para acompanhar porções e pratos principais.",
    "thumb": "assets/thumbs/488.webp"
  },
  {
    "cod": "60108",
    "nome": "BATATA FARM FRITES TRAD 10MM 12kg",
    "empresa": "Fripal",
    "marca": "FARM FRITE",
    "grupo": "BATATA",
    "tipo": "CONGELADO",
    "complemento": "2 kg — 6 un",
    "peso": "12 kg",
    "conserva": "MANTENHA CONGELADO A -18°C",
    "promo": false,
    "imgs": [
      "assets/produtos/60108/1.webp"
    ],
    "desc": "Batatas pré-fritas de 10mm que oferecem o melhor custo-benefício para o seu negócio. Mantêm a consistência e o sabor após a fritura, sendo perfeitas para delivery e lanchonetes.",
    "thumb": "assets/thumbs/60108.webp"
  },
  {
    "cod": "60109",
    "nome": "BATATA STAR FRITES 10 MM 10kg",
    "empresa": "Fripal",
    "marca": "FARM FRITE",
    "grupo": "BATATA",
    "tipo": "CONGELADO",
    "complemento": "2 kg — 5 un",
    "peso": "10 kg",
    "conserva": "MANTENHA CONGELADO A -18°C",
    "promo": false,
    "imgs": [
      "assets/produtos/60109/1.webp"
    ],
    "desc": "A qualidade Star Frites em embalagem prática de 2kg. Batatas palito de 10mm, ideais para operações menores ou controle rígido de estoque, garantindo sempre um produto fresquinho.",
    "thumb": "assets/thumbs/60109.webp"
  },
  {
    "cod": "624",
    "nome": "BACON FATIADO CONGELADO",
    "empresa": "Fripal",
    "marca": "MISTER PIG",
    "grupo": "FATIADO",
    "tipo": "CONGELADO",
    "complemento": "Aprox. 900g",
    "peso": "?",
    "conserva": "MANTER CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/624/1.webp"
    ],
    "desc": "O sabor defumado com máxima praticidade. Fatias padronizadas que garantem uniformidade no preparo e crocância irresistível. Ideal para hambúrgueres, porções e pratos gourmet.",
    "thumb": "assets/thumbs/624.webp"
  },
  {
    "cod": "274",
    "nome": "LANCHE SABBOR FATIADO",
    "empresa": "Fripal",
    "marca": "SABBOR",
    "grupo": "FATIADO",
    "tipo": "RESFRIADO",
    "complemento": "Aprox. 150g",
    "peso": "4,5 kg",
    "conserva": "MANTER RESFRIADO 0°C A +7°C",
    "promo": false,
    "imgs": [
      "assets/produtos/274/1.webp"
    ],
    "desc": "Desenvolvido para o food service. Fatias que se soltam facilmente, sabor equilibrado e excelente custo-benefício para sanduíches quentes ou frios.",
    "thumb": "assets/thumbs/274.webp"
  },
  {
    "cod": "277",
    "nome": "LINGUIÇA TIPO CALABRESA SABBOR FATIADO",
    "empresa": "Fripal",
    "marca": "SABBOR",
    "grupo": "FATIADO",
    "tipo": "RESFRIADO",
    "complemento": "Aprox. 500g",
    "peso": "4,5 kg",
    "conserva": "MANTER RESFRIADO 0°C A +7°C",
    "promo": false,
    "imgs": [
      "assets/produtos/277/1.webp"
    ],
    "desc": "A clássica calabresa Sabbor pronta para uso. Fatias com espessura ideal para coberturas de pizzas, recheios de salgados e finalização de massas.",
    "thumb": "assets/thumbs/277.webp"
  },
  {
    "cod": "276",
    "nome": "MORTADELA BOLOGNA MISTER PIG FATIADO",
    "empresa": "Fripal",
    "marca": "MISTER PIG",
    "grupo": "FATIADO",
    "tipo": "RESFRIADO",
    "complemento": "Aprox. 150g",
    "peso": "4,5 kg",
    "conserva": "MANTER RESFRIADO 0°C A +7°C",
    "promo": false,
    "imgs": [
      "assets/produtos/276/1.webp"
    ],
    "desc": "Inspirada na tradição italiana, textura macia e bouquet de especiarias único. Fatiada finamente para realçar o sabor em lanches e petiscos.",
    "thumb": "assets/thumbs/276.webp"
  },
  {
    "cod": "272",
    "nome": "PRESUNTO COZIDO SABBOR FATIADO",
    "empresa": "Fripal",
    "marca": "SABBOR",
    "grupo": "FATIADO",
    "tipo": "RESFRIADO",
    "complemento": "Aprox. 150g",
    "peso": "4,5 kg",
    "conserva": "MANTER RESFRIADO 0°C A +7°C",
    "promo": false,
    "imgs": [
      "assets/produtos/272/1.webp"
    ],
    "desc": "O clássico indispensável com a garantia Sabbor. Produzido com pernil selecionado, fatias rosadas e suculentas. Ideal para buffets, padarias e montagem de pizzas.",
    "thumb": "assets/thumbs/272.webp"
  },
  {
    "cod": "460",
    "nome": "MANTEIGA SABBOR 500G",
    "empresa": "Fripal",
    "marca": "SABBOR",
    "grupo": "MANTEIGA",
    "tipo": "RESFRIADO",
    "complemento": "500g — 12 un",
    "peso": "6 kg",
    "conserva": "MANTENHA REFRIGERADO DE 1°C A 10°C",
    "promo": false,
    "imgs": [
      "assets/produtos/460/1.webp"
    ],
    "desc": "Manteiga de qualidade superior com sabor autêntico e textura cremosa. A embalagem de 500g é ideal para famílias e transformadores que buscam rendimento e praticidade na cozinha, seja para passar no pão ou para receitas culinárias.",
    "thumb": "assets/thumbs/460.webp"
  },
  {
    "cod": "461",
    "nome": "MANTEIGA SABBOR 200G",
    "empresa": "Fripal",
    "marca": "SABBOR",
    "grupo": "MANTEIGA",
    "tipo": "RESFRIADO",
    "complemento": "200g — 24 un",
    "peso": "4,8 kg",
    "conserva": "MANTENHA REFRIGERADO DE 1°C A 10°C",
    "promo": false,
    "imgs": [
      "assets/produtos/461/1.webp"
    ],
    "desc": "A clássica Manteiga Sabbor em embalagem compacta e prática. Perfeita para o consumo diário, garante frescor e cremosidade em cada uso. Possui o equilíbrio ideal de sal para realçar o sabor dos seus cafés da manhã e lanches.",
    "thumb": "assets/thumbs/461.webp"
  },
  {
    "cod": "263",
    "nome": "QUEIJO MUSSARELA PROCESSADO EM BARRA",
    "empresa": "Fripal",
    "marca": "PURANATA",
    "grupo": "QUEIJO",
    "tipo": "RESFRIADO",
    "complemento": "4 kg — 4 un",
    "peso": "16 kg",
    "conserva": "MANTENHA RESFRIADO 1ºC A 10ºC",
    "promo": false,
    "imgs": [
      "assets/produtos/263/1.webp"
    ],
    "desc": "Opção versátil e de alto rendimento, este Queijo Mussarela Processado é a solução inteligente para o dia a dia na cozinha. Apresenta uma textura macia, ótimo custo-benefício e desempenho consistente sob aquecimento, sendo indispensável para montagem de sanduíches, salgados e gratinados rápidos.",
    "thumb": "assets/thumbs/263.webp"
  },
  {
    "cod": "603",
    "nome": "QUEIJO MUSSARELA PROCESSADO LAT VIDA",
    "empresa": "Fripal",
    "marca": "LAT VIDA",
    "grupo": "QUEIJO",
    "tipo": "RESFRIADO",
    "complemento": "3 kg — 6 un",
    "peso": "18 kg",
    "conserva": "MANTENHA RESFRIADO  1°C A 7ºC",
    "promo": false,
    "imgs": [
      "assets/produtos/603/1.webp"
    ],
    "desc": "O Queijo Mussarela Processado Lat Vida oferece o equilíbrio perfeito entre sabor suave e funcionalidade. Desenvolvido para garantir uma derretibilidade uniforme e excelente fatiamento, é ideal para o uso profissional em lanches, pizzas e preparos culinários que exigem padronização e um toque lácteo de qualidade.",
    "thumb": "assets/thumbs/603.webp"
  },
  {
    "cod": "20749",
    "nome": "MEIA CARCACA",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "CORTE",
    "tipo": "CONGELADO",
    "complemento": "PV (CX C/ 70 KG)",
    "peso": "70 kg",
    "conserva": "MANTENHA CONGELADO A -12C",
    "promo": false,
    "imgs": [
      "assets/produtos/20749/1.webp",
      "assets/produtos/20749/2.webp",
      "assets/produtos/20749/3.webp",
      "assets/produtos/20749/4.webp",
      "assets/produtos/20749/5.webp",
      "assets/produtos/20749/6.webp",
      "assets/produtos/20749/7.webp",
      "assets/produtos/20749/8.webp",
      "assets/produtos/20749/9.webp"
    ],
    "desc": "Produto de alta versatilidade, ideal para açougues, frigoríficos e indústrias de processamento. Oferece excelente rendimento, carne fresca e padrão de qualidade rigoroso para cortes personalizados.",
    "thumb": "assets/thumbs/20749.webp"
  },
  {
    "cod": "20750",
    "nome": "LOMBO SUINO CONGELADO",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "CORTE",
    "tipo": "CONGELADO",
    "complemento": "PV (CX C/ 10 KG)",
    "peso": "10 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20750/1.webp",
      "assets/produtos/20750/2.webp",
      "assets/produtos/20750/3.webp",
      "assets/produtos/20750/4.webp",
      "assets/produtos/20750/5.webp",
      "assets/produtos/20750/6.webp"
    ],
    "desc": "Corte nobre e macio, com baixo teor de gordura. Congelado individualmente para preservar o sabor, a suculência e os nutrientes. Perfeito para pratos elaborados, assados ou grelhados de alta gastronomia.",
    "thumb": "assets/thumbs/20750.webp"
  },
  {
    "cod": "20728",
    "nome": "PERNIL SUINO SEM OSSO",
    "empresa": "Dom Porquito",
    "marca": "MISTER PIG",
    "grupo": "CORTE",
    "tipo": "CONGELADO",
    "complemento": "PV (CX C/ 18 KG)",
    "peso": "18 kg",
    "conserva": "MANTENHA CONGELADO A -12°C",
    "promo": false,
    "imgs": [
      "assets/produtos/20728/1.webp",
      "assets/produtos/20728/2.webp",
      "assets/produtos/20728/3.webp",
      "assets/produtos/20728/4.webp"
    ],
    "desc": "Praticidade e economia para o seu negócio. Carne selecionada, limpa e pronta para o preparo. Ideal para assados, recheados ou para a produção de embutidos e pratos de grande escala, garantindo o melhor aproveitamento da peça.",
    "thumb": "assets/thumbs/20728.webp"
  },
  {
    "cod": "604",
    "nome": "QUEIJO MUSSARELA LAT VIDA FATIADO",
    "empresa": "Fripal",
    "marca": "LAT VIDA",
    "grupo": "FATIADO",
    "tipo": "RESFRIADO",
    "complemento": "Aprox. 150g",
    "peso": "4,5 kg",
    "conserva": "MANTER RESFRIADO 1°C A +7°C",
    "promo": false,
    "imgs": [
      "assets/produtos/604/1.webp",
      "assets/produtos/604/2.webp"
    ],
    "desc": "Mussarela selecionada com excelente derretimento e elasticidade. Fatias padronizadas para montagem de pratos, garantindo aquele visual dourado e apetitoso.",
    "thumb": "assets/thumbs/604.webp"
  },
  {
    "cod": "270",
    "nome": "QUEIJO MUSS. PROC. FAT. SABOR DE MINAS",
    "empresa": "Fripal",
    "marca": "LAT VIDA",
    "grupo": "PURANATA",
    "tipo": "RESFRIADO",
    "complemento": "Aprox. 160g",
    "peso": "4,5 kg",
    "conserva": "MANTENHA RESFRIADO  1°C A 7ºC",
    "promo": false,
    "imgs": [
      "assets/produtos/270/1.webp"
    ],
    "desc": "Leve mais sabor e praticidade para suas refeições com o Queijo Mussarela Processado Sabor Minas. Com textura macia, excelente derretimento e o delicioso sabor inspirado no tradicional queijo minas, é a escolha ideal para sanduíches, tapiocas, pizzas, lanches, salgados e diversas receitas do dia a dia.",
    "thumb": "assets/thumbs/270.webp"
  },
  {
    "cod": "443",
    "nome": "LOMBO TIPO CANADENSE DEFUMADO FATIADO",
    "empresa": "Fripal",
    "marca": "MISTER PIG",
    "grupo": "FATIADO",
    "tipo": "RESFRIADO",
    "complemento": "Aprox. 150g",
    "peso": "4,5 kg",
    "conserva": "MANTER RESFRIADO 1°C A +7°C",
    "promo": false,
    "imgs": [
      "assets/produtos/443/1.webp",
      "assets/produtos/443/2.webp"
    ],
    "desc": "Nobreza e leveza em cada fatia. Defumação cuidadosa, sabor sofisticado e baixo teor de gordura. Perfeito para tábuas de frios premium e lanches naturais.",
    "thumb": "assets/thumbs/443.webp"
  }
];
