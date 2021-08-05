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
    {
      tech: "concurrently",
      description:
        "como backend e frontend são servidores diferentes, para evitar roda-los em dois terminais, essa biblioteca faz com que só seja necessário um comando para ambos",
    },
    {
      tech: "http-proxy-middleware",
      description:
        "utilizado para que o frontend consiga se conectar ao backend para que assim os dados possam ser passados",
    },
    {
      tech: "react-google-charts",
      description: "utilizado para plotagem de gráficos de diversos tipos",
    },
    {
      tech: "components",
      description:
        "Basicamente serve para reaproveitar trechos de código separados em componentes que podem ser chamados de maneira prática",
    },
    {
      tech: "Styled Components",
      description: "utilizado para estilizar os components",
    },
    {
      tech: "react-router-dom",
      description:
        "usado para criação de links (como se fosse a tag 'a' do html)",
    },
  ];

  res.json({
    success: true,
    data: data,
  });
});

module.exports = router;
