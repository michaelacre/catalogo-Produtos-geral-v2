// Seleção sazonal: usa exclusivamente cadastros e fotos reais de produtos.js.
// Pendentes de confirmação: 105 (nome divergente), 20575 (ausente),
// 20569 (descrição divergente), 20524/20527 (códigos e nomes invertidos na lista).
const CAMPANHA_NATAL = {
  cortes: ['20914', '20915', '20916', '20986', '20561', '20562', '20520', '20522', '20523'],
  linguicas: ['20901', '20903', '20905', '20510']
};

// Textos editoriais exclusivos da campanha, baseados no cadastro existente.
// Não modificam composição, conservação ou especificações técnicas.
const NATAL_EDITORIAL = {
  '20914': { chamada: 'Picanha para celebrar', descricao: 'Picanha suína já temperada para o churrasco de fim de ano. Uma opção para reunir à mesa quem aprecia esse corte.' },
  '20915': { chamada: 'O tempo do bom assado', descricao: 'Costela suína temperada para preparar lentamente no forno. Combine com os acompanhamentos da família na ceia.' },
  '20916': { chamada: 'Lombo no centro da mesa', descricao: 'Lombo suíno já temperado, para assar ou grelhar. Sirva em fatias e monte a travessa com seus acompanhamentos natalinos.' },
  '20986': { chamada: 'Fraldinha para compartilhar', descricao: 'Fraldinha suína temperada e congelada. Uma alternativa para variar os cortes do encontro de fim de ano.' },
  '20561': { chamada: 'Panceta no seu assado', descricao: 'Filé da panceta suína já temperado, uma opção para os assados da ceia. Complete a mesa com os acompanhamentos de sua preferência.' },
  '20562': { chamada: 'Pernil com sabor de Natal', descricao: 'Pernil suíno temperado, pronto para assar. Um clássico para dividir em família e servir na travessa principal da ceia.' },
  '20520': { chamada: 'Uma manta para a ceia', descricao: 'Costela suína em manta, sem pele e já temperada. Produto cru e congelado para preparar e servir no almoço ou jantar de Natal.' },
  '20522': { chamada: 'Costela com pele e tempero', descricao: 'Costela com barriga suína e pele, dividida em duas tiras e já temperada. Uma escolha para quem procura esse corte no assado de Natal.' },
  '20523': { chamada: 'Panceta do seu jeito', descricao: 'Barriga suína sem osso e com pele, congelada. Escolha seu tempero e prepare uma receita própria para a mesa de fim de ano.' },
  '20901': { chamada: 'Um toque picante no encontro', descricao: 'Linguiça suína fina apimentada, em embalagem de 800 g. Para variar os grelhados e o churrasco das confraternizações.' },
  '20903': { chamada: 'Para quem gosta de pimenta', descricao: 'Linguiça suína apimentada e congelada, em embalagem de 800 g. Inclua uma opção picante na seleção do churrasco de fim de ano.' },
  '20905': { chamada: 'Churrasco de confraternização', descricao: 'Linguiça para churrasco, congelada, em embalagem de 800 g. Uma opção para acompanhar os cortes da reunião entre amigos e família.' },
  '20510': { chamada: 'Frango com toque apimentado', descricao: 'Linguiça fina de frango apimentada para grelhar ou fritar. Varie a seleção da confraternização com uma alternativa às linguiças suínas.' }
};

// Fotos recebidas em 18/11/2026. Códigos com identificação confirmada no cadastro.
const NATAL_FOTOS = {
  '20520': 'assets/campanha/oficiais/costela-em-manta.jpeg',
  '20522': 'assets/campanha/oficiais/costela-pururuca.jpeg'
};
