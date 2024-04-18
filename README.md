# Tabela FIPE Brasil

Este é um aplicativo web simples para pesquisar informações de carros usando a API da FIPE.

## Como Usar

1. Acesse o projeto online clicando [aqui](https://m4rcxs.github.io/brasilAPI/).
2. Insira o código FIPE do carro que você deseja pesquisar no campo de entrada.
3. Pressione Enter ou clique no botão de pesquisa.
4. As informações do carro serão exibidas na tabela abaixo.

## Visão Geral do Código

### Variáveis
- `carTableBody`: Representa o elemento tbody da tabela de carros.
- `carBrand`, `carValue`, `carModel`: Representam elementos com nomes de classe para marca, valor e modelo do carro, respectivamente.
- `form`: Representa o elemento de formulário.
- `input`: Representa o elemento de entrada para pesquisa.
- `fipeNum`: Armazena o código FIPE.

### Funções
- `fetchFipe`: Busca assincronamente informações do carro na API da FIPE com base no código FIPE fornecido.
- `getFipe`: Recupera e exibe informações do carro com base no código FIPE inserido pelo usuário.
- Evento de ouvinte de envio de formulário: Chama a função `getFipe` para buscar informações do carro quando o formulário é enviado.

## Tecnologias Utilizadas
- HTML
- CSS
- JavaScript

## API Utilizada
- [Brasil API - FIPE](https://brasilapi.com.br/api/fipe/preco/v1/)

Sinta-se à vontade para contribuir ou fornecer feedback!
