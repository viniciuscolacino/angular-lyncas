# Instalação
`npm install`

# Executar o Projeto
Primeiro, é necessário rodar a fake api. No diretório raiz/json-server, execute
`json-server --watch data.json`
A api deve todar na porta 3000.

Após isso, execute o projeto
`ng serve`

# Testes unitários
Para executar os testes
`ng test`

# Funcionalidades
Busquei cumprir tudo o que foi proposto, entretanto tomei a liberdade de modificar algumas coisas. Acredito que o resultado ficou mais dinâmico e agradável, e espero que isso não afete a avaliação de minhas habilidades.

## Dashboard
Ao invés de exibir 3 painéis (com três tabelas), simplifiquei criando dois painéis: um para motoristas (que é referente às informações dos painéis 1 e 2 solicitados), e um para pedidos organizados por bairro.
Preferi fazer esse Dashboard com cards, para uma melhor visualização e responsividade, e deixei a tabela para a View "Delivery"

## Delivery
A tabela que mostra todos os registros, e permite filtros por motorista e/ou status.

# Layout
Fiz um layout simples, porém bonito e funcional.



## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
