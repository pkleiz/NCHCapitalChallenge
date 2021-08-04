const router = require("express").Router();

router.get("/", (req, res) => {
  const data = [
    {
      tech: "node.js",
      description: "utilizado para montar o backend",
    },
    {
      tech: "express",
      description:
        "utilizado para facilitar as requisições, o node tem essa função, porém mais difícil de usar",
    },
    {
      tech: "nodemon",
      description:
        "é um escutador que atualiza o serviço ao verificar qualquer tipo de mudança no código",
    },
    {
      tech: "react",
      description: "utilizado para frontend da aplicação",
    },
    {
      tech: "postman",
      description: "testa todos os tipos de conexões",
    },
    {
      tech: "body-parser (DEPRECATED, substituido pelo próprio express.json())",
      description: "consegue extrair dados de uma requisição post",
    },
    {
      tech: "Mongo DB Atlas",
      description:
        "é um banco de dados não relacional gratuito, não foi preciso instalar nada no pc",
    },
    {
      tech: "IP Permissions",
      description: "Seleção de quais IPs tem acesso a aplicação",
    },
    {
      tech: ".env",
      description:
        "serve para aumentar a segurança deixando todos os acessos como senhas, nome de bancos em um único arquivo acessível por todo projeto",
    },
    {
      tech: "mongoose",
      description:
        "biblioteca que serve para conectar ao mongodb, salvar e ler",
    },
    {
      tech: "slug",
      description:
        "biblioteca util para criar links friendly na barra de navegação ",
    },
    {
      tech: "heroku",
      description: "deploy da aplicação tanto front quanto back",
    },
  ];

  res.json({
    success: true,
    data: data,
  });
});

module.exports = router;
