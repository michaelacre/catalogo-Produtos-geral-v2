# Catálogo Comercial — versão otimizada

Projeto refeito a partir do catálogo original.

## O que mudou

- Imagens dos produtos ficam dentro do próprio projeto/repositório.
- Cards usam miniaturas WebP; a imagem maior só é carregada quando o produto é aberto.
- Catálogo renderiza em lotes de 24 produtos para reduzir carga inicial.
- Busca e filtros são gerados pelos próprios dados do `produtos.js`.
- Galeria de produto, download da foto, compartilhamento por WhatsApp e link direto por `?produto=CODIGO`.
- Layout mobile/desktop refeito sem dependência de Google Fonts ou Postimg.
- Service Worker faz cache das imagens já abertas para acelerar visitas seguintes.

## Publicação

Pode publicar em GitHub Pages, Vercel ou qualquer hospedagem estática. Mantenha a estrutura de pastas do ZIP.
