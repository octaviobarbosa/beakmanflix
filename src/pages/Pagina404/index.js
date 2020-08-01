import React from "react";
import styled from "styled-components";

import img404 from "../../assets/img/404.gif";

const Content = styled.div`
  text-align: center;
  color: var(--primary);
  font-size: 20px;

  img {
    height: 375px;
    width: 500px;
    border-radius: 20%;
    margin-top: 30px;
  }
`;

const Pagina404 = () => (
  <Content>
    <h1>
      Dan e Leo estão tentando arrumar as antenas para sintonizar página que
      você quer ir!
    </h1>
    <a href="/">
      <img src={img404} alt="Pingu Perdido"></img>
    </a>
    <p>Error 404 - Not found</p>
  </Content>
);

export default Pagina404;
