{REPROGRAMA} - Semana 14 - Projeto Guiado 

Esse projeto teve por objetivo a construção de uma API, onde tivesse 3 estúdios de filmes e seus referentes títutos. 


**Requisitos**
 "/titulos/marvel" Deverá retornar todos os títulos com o estudio Marvel

 "/titulos/ghibli" Deverá retornar todos os títulos com o estudio Ghibli

 "/titulos/pixar" Deverá retornar todos os títulos com o estudio Pixar

 "/estudios" Deverá retornar todos os estudios cadastrados

 "/titulos" Deverá retornar todos os títulos cadastrados, cada um fazendo referencia ao seu respectivo estudio

 "/estudios" Deverá criar um estudio

 "/titulos" Deverá criar um título

 "/titulos/[ID]" Deverá deletar titulo por id específico e retorna mensagem amigável

 "/estudios/[ID]" Deverá deletar estudio por id específico e retorna mensagem amigável

 "/titulos/[ID]" Deverá alterar informação específica dentro de um titulo por id específico e retorna o título alterado

 "/estudios/[ID]" Deverá alterar informação específica dentro de um estudio por id específico e retorna o título alterado

**Regras de negócio**
 Não deverá ser possível criar estudio com o mesmo nome
 Não deverá ser possível criar título com o mesmo nome
 Para criar um novo título, deverá vincular no momento da criação a um estudio já existente no sistema, utilizando o numero do id do estudio correspondente no corpo da requisição


**Dados para Collection Estudios**
id: autogerado e obrigatório
nome: texto e obrigatório
criadoEm: data gerada automaticamente e obrigatório

---
**Dados para Collection Titulos**
id: autogerado e obrigatório
nome: texto e obrigatório
genero: texto e obrigatório
descricao: texto e obrigatório
criadoEm: data gerada automaticamente e obrigatório
estudio: referencia do estudio cadastrado previamente obrigatório

---
**Entregavel**
Crie seu repositório contendo:
um readme com os maiores aprendizados nesse projeto e copiando todas as informações sobre o projeto
cumprimento total do contrato (requisitos e regras de negócios
realizar testes no Postman e verificar se os dados estão persistindo com o mongoDB (ROBO 3T)

Considerações finais: 

Com esse projeto pude compreender melhor como fazer um CRUD integrado ao banco e dados e com certeza, todo  o aprenzado extraído dessa atividade irá me ajudar na construção do meu projeto final. 
