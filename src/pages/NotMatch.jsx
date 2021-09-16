import React from "react";
import { Link } from "react-router-dom";

const NoMatch = () => (
  <section>
    <h1>Página não encontrada.</h1>

    <Link to="/" className="button">
      Voltar para Dashboard
    </Link>
  </section>
);

export default NoMatch;
