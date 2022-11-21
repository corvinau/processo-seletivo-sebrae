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

## Explicação da estrutura dos diretórios

Dentro da pasta `src` tem o arquivo de `index` do projeto, que é a primeira página que vai ser aberta pela aplicação.

Seguindo isso, fiz o arquivo `types` nessa mesma pasta para todo o projeto ter acesso aos tipos criados ali, sem que eu precise importar em cada arquivo que for utilizar.

Para manter a organização do projeto existem duas pastas principais. A pasta `services` armazena todos os possiveis acessos a APIs que a aplicação utiliza, e na pasta `pages`, ficam armazendas todas as páginas que o usuário tem acesso.

## Observações

Não consegui fazer a tarefa do CRUD, tive alguns problemas com outras coisas e nessas 4 horas de trabalho percebi que mesmo que começasse não conseguiria terminar, então achei melhor não fazer e focar nas outras tarefas passadas.

Também tive alguns problemas com meu Gitlab, tentei resolver o problema, criei uma nova chave ssh e tudo mais, mas não entendi o que aconteceu. E pra não perder mais tempo e focar no desenvolvimento, acabei não fazendo o versionamento no Gitlab e nem criando as branchs de trabalho baseado no gitflow. Foi apenas um problema isoladdo.
