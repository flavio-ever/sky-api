<h3 align="center">
  API SKY
</h3>

### :rocket: Sobre o desafio
Backend completo de um serviço "cadastro, login e busca" utilizando as seguintes tecnologias:
-   [Yarn](https://yarnpkg.com/lang/en/)
-   [Node.js](https://nodejs.org/en/)
-   [Express](https://expressjs.com/)
-   [Nodemon](https://nodemon.io/)
-   [Sucrase](https://github.com/alangpierce/sucrase)
-   [Mongoose](https://mongoosejs.com/)
-   [JWT](https://jwt.io/)
-   [Bcrypt](https://www.npmjs.com/package/bcrypt)
-   [Yup](https://www.npmjs.com/package/yup)
-   [date-fns](https://date-fns.org/)
-   [DotEnv](https://www.npmjs.com/package/dotenv)
-   [Insominia Rest](https://insomnia.rest/download/)
-  Styleguide com Eslint, Prettier e EditorConfig - VSCODE

### Tempo de desenvolvimento
- 6 horas corridas

### Instalando as dependencias
``yarn install``

### Iniciando a aplicação
``yarn dev`` / ``yarn dev:debug`` / ``yarn build``/ ``yarn start``

### Rotas
Na pasta **rest/** é possível encontrar o arquivo de configuração do Insominia Rest, mas sinta-se a vontade para utilizar o que quiser.

- `POST /signup`: Criação de usuário;

```js
{
	"nome": "Flavio Everton",
	"email": "admin@admin.com",
	"senha": "123456",
	"telefones": [
		{
			"numero": "930004800",
			"ddd": "11"
		}
	]
}
```

- `POST /signin`: Login de usuário (Sessão);

```js
{
	"email":"admin@admin.com",
	"senha":"123456"
}
```

- `GET /user`: Busca de usuário a partir do token (Bearer):


### :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Feito com ♥ by [Flavio Ever](https://linkedin.com/in/flavio-ever)

