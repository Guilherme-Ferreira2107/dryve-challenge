import React from "react";
import { Link } from "react-router-dom";

const Contacts = () => {
  return (
    <section>
      <h1>Contacts</h1>

      <Link to="/contacts-edit" className="button">
        edit contacts
      </Link>
    </section>
  );
};

export default Contacts;
