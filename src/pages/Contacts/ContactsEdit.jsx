import React from "react";
import { Link } from "react-router-dom";

const ContactsEdit = () => {
  return (
    <section>
      <h1>Contacts Edit</h1>
      <Link to="/" className="button">
        Voltar para Dashboard
      </Link>
    </section>
  );
};

export default ContactsEdit;
