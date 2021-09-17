import React from "react";
import { Link } from "react-router-dom";

const ContactsEdit = () => {
  return (
    <section>
      <h1>Contacts Edit</h1>
      <Link to="/contatos" className="button">
        Voltar para Contato
      </Link>
    </section>
  );
};

export default ContactsEdit;
