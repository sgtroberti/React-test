# React Interview 20201202

### Introdução

Este é um desafio para testar seus conhecimentos em JavaScript e React durante nossa Tech Inverview.

O objetivo é avaliar a sua forma de estruturação e autonomia em decisões para construir algo escalável.

### Instruções iniciais obrigatórias

- Utilizar o seu github pessoal para publicar o desafio. Confirme que a visibilidade do projeto é pública (não esqueça de colocar no readme a referência a este challenge);

### Desafio / Case

Os sites do cliente Translation, Inc impactam milhões de pessoas mensalmente em diversos países e disponíveis em pelo menos 23 idiomas. 
Uma das principais características da Translation, Inc é o posicionamento orgânico no Google (SEO). 
Por isso, todos os projetos devem ser muito bem estruturados pensando em SEO, fluidez, reuso (componentes reutilizados em vários projetos) e velocidade de exibição mensurados através do Google PageSpeed (https://developers.google.com/speed/pagespeed/insights/). 
O seu objetivo é criar durante a Tech Interview um das páginas do desafio que dê atenção aos requisitos mencionados. 

### Recursos

1. Verificar a documentação do [WordPress API](https://developer.wordpress.org/rest-api/) para trabalhar com alguns conceitos, 
como [Paginação](https://developer.wordpress.org/rest-api/using-the-rest-api/pagination/), 
[Filtro](https://developer.wordpress.org/rest-api/using-the-rest-api/global-parameters/#_fields) e [Expandir elementos](https://developer.wordpress.org/rest-api/using-the-rest-api/linking-and-embedding/).
2. Consumir a REST API Wordpress de uma das páginas do Cliente: https://api.coodesh.com/wp-json/wp/v2/posts
3. O seu ambiente local rodando na porta 9045 (localhost:9045)
4. Webpack
5. React.js
7. Tailwind CSS: https://tailwindcss.com/ (poderá definir outro se achar mais conveniente). 

### Passo a Passo

#### Home Page

Ao abrir a Home deverá conter um buscador de artigos para facilitar aos usuários encontrarem conteúdos personalizados.
Deverá ser possível filtrar os artigos por: "Mais Relevantes" no topo.

Para isso, devemos usar o endpoint de busca:

- https://api.coodesh.com/wp-json/wp/v2/posts?search={{text digitado no input}} 
- https://api.coodesh.com/wp-json/wp/v2/posts?search={{text digitado no input}}&page=1&orderby=relevance

> Exemplo https://api.coodesh.com/wp-json/wp/v2/posts?search=desafios
> Exemplo https://api.coodesh.com/wp-json/wp/v2/posts?search=desafios&page=1&orderby=relevance

Exemplo de um resposta com artigos:

```
[
 {
    "id": 87,
    "slug": ...,
    ...
 },
 {..},
]
```

Resposta sem dados:

```
[]
```

Ao ter o resultado é necessário adicionar alguns elementos importantes como:

- Buscador para realizar a busca novamente
- Adicionar a quantidade de elementos encontrados

#### Tela do Single

Ao escolher a tela de artigos, trabalharemos com a exibição do conteúdo da página.

O artigo deverá conter alguns elementos básicos: título, categoria, data de publicação, conteúdo(texto para leitura), tags e nome do autor. 

> Exemplo de uma página completa: https://coodesh.com/blog/carreiras/papel-de-um-devops-quebrando-barreiras-e-integrando-equipes/

Para obter a informação por artigo, consumir o endpoint: [GET] baseURL/wp-json/wp/v2/posts/{{ID}}

> Exemplo: [GET] https://api.coodesh.com/wp-json/wp/v2/posts/484

#### Detalhes Gerais do projeto:

- Usar Conceitos de Componentização.   
- Adicionar recursos para trabalhar com meta-tags, keywords e og:tags na configuração do Server Side Rendering;
- **Configurar a página individual do artigo com as tags essenciais de SEO**;

 
## Instruções para a Apresentação: 

1. Será necessário compartilhar a tela durante a vídeo chamada;
3. Deixe os ambientes configurados e prontos para codificar; 
4. Prepara-se pois você será questionado sobre cada etapa e decisão do Challenge;
5. Prepare uma lista de perguntas, dúvidas, sugestões de melhorias e feedbacks (caso tenha).

## Suporte

Use a [nossa comunidade](https://coodesh.com/desenvolvedores#community) para tirar dúvidas sobre o processo ou envie um e-mail para contato@coodesh.com.



