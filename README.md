
<div align="center">

<img src="https://github.com/Orna-Brasil/Assets/blob/main/logobr.png?raw=true" alt="Orna BR logo" width="200px" />

## Orwik


</div>


## Sobre o Projeto

**Orwik** é um site no estilo documentação que contém informações detalhadas sobre o jogo Orna Geo-RPG. Neste repositório, você encontrará dicas, informações sobre edifícios, guias, atalhos e muito mais, tudo projetado para melhorar sua experiência no mundo de Orna. 

## Como Usar

Você pode acessar a documentação em [Orwik](https://orwik.noxian.dev/), onde encontrará informações sobre:

- Dicas para Iniciantes
- Descrições de Edifícios
- Guias
- Atalhos

## Contribuindo

Agradecemos qualquer contribuição para melhorar esta documentação. Se você quiser adicionar informações, corrigir erros ou melhorar o layout, siga estas etapas:

1. Faça um fork deste repositório.
2. Crie uma nova branch com uma descrição significativa: `git checkout -b sua-nova-feature`.
3. Faça suas alterações e documente-as adequadamente.
4. Envie suas alterações: `git push origin sua-nova-feature`.
5. Abra uma solicitação pull descrevendo suas alterações.

## Estrutura do projeto

Dentro do seu projeto Astro + Starlight, você verá as seguintes pastas e arquivos:

```
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   │   └── config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

O Starlight procura por arquivos `.md` ou `.mdx` no diretório `src/content/docs/`. Cada arquivo é exposto como uma rota com base em seu nome de arquivo.

Imagens podem ser adicionadas em `src/assets/` e incorporadas em Markdown com um link relativo.

Recursos estáticos, como favicons, podem ser colocados no diretório `public/`.

## Comandos

Todos os comandos são executados a partir da raiz do projeto, em um terminal:

| Comando                   | Ação                                             |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala as dependências                          |
| `npm run dev`             | Inicia o servidor de desenvolvimento local em `localhost:4321`|
| `npm run build`           | Constrói o seu site produção em `./dist/`        |
| `npm run preview`         | Pré-visualize a sua compilação localmente, antes de implantar |
| `npm run astro ...`       | Execute comandos da CLI como `astro add`, `astro check` |
| `npm run astro -- --help` | Obtenha ajuda usando a CLI do Astro                     |


## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE) - consulte o arquivo LICENSE.md para obter detalhes.
