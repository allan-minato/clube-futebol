Desenvolvi o backend dockerizado para o FC, um site informativo de futebol, utilizando Sequelize para modelagem de dados e adotando a prática de Test-Driven Development (TDD). Implementei uma API com regras de negócio que exigem autenticação para manipulação de partidas, integrando-a com o frontend através do docker-compose.

O backend, iniciado a partir de server.ts, opera na porta 3001 e interage com um banco de dados MySQL contido em um container Docker. As regras de negócio garantem a correta população da tabela disponível no frontend, que se comunica com o backend por meio de endpoints customizados.

Destaco a implementação do sistema de autenticação por token, necessário para adicionar partidas, e a construção de relacionamentos entre as tabelas teams e matches. Além disso, atentei para a correta execução dos testes, utilizando Puppeteer para simular a interação do usuário com o frontend.

O projeto inclui três entidades principais: o banco de dados MySQL, o backend em Node.js com Express, e o frontend já concluído. O docker-compose unifica esses serviços, permitindo a execução fácil do projeto completo. Ao implementar cada requisito no backend, validei sua funcionalidade acessando a página correspondente no frontend.

Em resumo, este projeto demonstra minha habilidade no desenvolvimento backend utilizando Docker, Sequelize, TDD e integração eficaz com o frontend, contribuindo para um sistema coeso e funcional no contexto do FC.
