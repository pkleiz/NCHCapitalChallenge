import React from "react";
import { Image, Navigation, StyledLinks } from "../styles";
import { Link } from "react-router-dom";

const Nav = () => {
  const menuOptions = {
    techs: "Tecnologias",
    site: "Site Oficial",
  };
  return (
    <div>
      <div>
        <Navigation>
          <Image>
            <img src="https://media.graphcms.com/LhTZr5eQCa5hyvsiYlcW"></img>
          </Image>
          <StyledLinks>
            <ul>
              <li>
                <a href="https://nchbrasil.com.br/">site Oficial</a>
              </li>
            </ul>
          </StyledLinks>
        </Navigation>
      </div>
    </div>
  );
};

export default Nav;
