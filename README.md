# Sobre o projeto

Este projeto foi desenvolvido para o processo seletivo da empresa Sebrae.

## Rodando o projeto localmente

Clone o projeto na sua máquina.

Depois disso, é preciso instalar os pacotes do projeto.

Rode o comando abaixo

```bash
npm install
```

Com os pacotes instalados basta rodar o comando abaixo para inicializar o projeto:

```bash
npm start
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado.

Depois disso basta testar.

## Acessando o projeto em um servidor

Para visualizar o projeto rodando em um servidor da [`Vercel`](https://vercel.com/), acesse: [https://prova-sebrae.vercel.app/](https://prova-sebrae.vercel.app/)

## Explicação da estrutura dos diretórios

Dentro da pasta `src` tem o arquivo de `index` do projeto, que é a primeira página que vai ser aberta pela aplicação.

Seguindo isso, fiz o arquivo `types` nessa mesma pasta para todo o projeto ter acesso aos tipos criados ali, sem que eu precise importar em cada arquivo que for utilizar.

Para manter a organização do projeto existem duas pastas principais. A pasta `services` armazena todos os possiveis acessos a APIs que a aplicação utiliza, e na pasta `pages`, ficam armazendas todas as páginas que o usuário tem acesso.

## Observações

Não consegui fazer a tarefa do CRUD que foi solicitada, tive alguns problemas técnicos e no tempo disponibilizado percebi que mesmo que começasse não conseguiria terminar, então achei melhor focar nas outras tarefas passadas e aprimorar o máximo possível dentro do que foi pedido.
