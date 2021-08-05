import React from "react";
import AreaChart from "../components/AreaChart";
import LineChart from "../components/LineChart";
import TreeMapChart from "../components/TreeMapChart";
import DonutChart from "../components/DonutChart";
import { About, PageConfiguration } from "../styles";

const Main = () => {
  return (
    <div>
      <PageConfiguration>
        <About>
          <div>
            <h2>Gráfico de Rentabilidade</h2>
            <h3>
              Esse Gráfico foi gerado usando uma biblioteca chamada react google
              charts e diferentemente do Power BI, ele não vem de forma nativa
              os controles inteligentes, fazendo com que somente seja possível
              tal interação com desenvolvimento personalizado em cima da
              ferramenta (averiguar mais a fundo). Todos os outros gráficos
              também foram gerados a partir do .xlms após um pequeno ETL
              utilizando uma função do Javascript
            </h3>
          </div>
          <LineChart />
        </About>
        <About>
          <TreeMapChart />
          <div>
            <h2>Gráfico de exposição por setor</h2>
            <h3>
              Um backend foi criado em node.js para inserção de dados e
              consultas do frontend em react. Após o ETL, uma rota específica
              para cada tabela foi criada, onde de maneira automática, todos os
              dados foram carregados no banco de dados Mongo. Após isso, o
              frontend começou a ser criado.
              <p>
                OBS: Ao clicar no gráfico ao lado, para voltar é necessário
                clicar com o botão direito
              </p>
            </h3>
          </div>
        </About>
        <About>
          <div>
            <h2>Gráfico DrawDown</h2>
            <h3>
              Todas as tecnologias utilizadas nesse desenvolvimento foram
              documentadas com uma breve descrição, o código está disponível no
              <span>
                <a href="https://github.com/pkleiz/NCHCapitalChallenge">
                  github{" "}
                </a>
              </span>
              . O projeto todo foi feito em Javascript/Jode.js/React.js. Só por
              curiosidade, é possivel modificar o layout do site utilizando
              templates prontos se necessário.
            </h3>
          </div>
          <AreaChart />
        </About>
        <About>
          <DonutChart />
          <div>
            <h2>Gráfico do PL em Donut</h2>
            <h3>
              A parte do backend foi hospedada no{" "}
              <span>
                <a href="https://desafionch.herokuapp.com/">Heroku</a>
              </span>{" "}
              que também tem disponibilidade para o frontend(finalizando isso
              nesse momento)
            </h3>
          </div>
        </About>
      </PageConfiguration>
    </div>
  );
};

export default Main;
