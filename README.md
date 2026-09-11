# Visualizador de Perfil do GitHub

Aplicação web simples em HTML, CSS e JavaScript para buscar um usuário do GitHub e exibir seu perfil, número de seguidores, quantidade de repositórios e os principais repositórios públicos.

## Descrição

Este projeto consome a API pública do GitHub para pesquisar um usuário e apresentar informações relevantes em uma interface amigável e responsiva.

A aplicação permite:

- Buscar qualquer usuário pelo nome de usuário do GitHub
- Exibir avatar, nome, bio e contadores de seguidores e seguindo
- Listar repositórios públicos com informações como estrelas, forks e linguagem principal
- Abrir cada repositório em uma nova aba

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- API REST do GitHub

## Estrutura do projeto

- index.html: estrutura principal da página
- src/css: arquivos de estilo e responsividade
- src/js: lógica da aplicação e consumo da API

## Como executar

1. Clone este repositório em sua máquina.
2. Abra a pasta do projeto no VS Code ou em qualquer editor de texto.
3. Inicie um servidor local para evitar problemas com módulos e fetch em alguns navegadores.
4. Acesse a página em um navegador.

Opção mais simples:

- No terminal, dentro da pasta do projeto, execute:

python -m http.server 8000

- Em seguida, abra no navegador:

http://localhost:8000

Também é possível abrir diretamente o arquivo index.html, mas o uso de um servidor local é recomendado.

## Como usar

- Digite o nome de usuário do GitHub no campo de busca.
- Clique no botão Buscar ou pressione Enter.
- A aplicação consulta a API e exibe o perfil e os repositórios do usuário.

## Arquivos principais

- src/js/githubAPI.js: funções para consultar a API do GitHub
- src/js/index.js: controle da busca e eventos da interface
- src/js/profileView.js: renderização do perfil e dos repositórios na tela

## Observações

- A API do GitHub tem limites de requisições para usuários sem autenticação.
- Apenas repositórios públicos são exibidos.
- Caso o usuário não exista, a aplicação mostra uma mensagem de erro.

## Licença

Este projeto foi desenvolvido como exercício de estudo e pode ser usado livremente para fins educacionais.
