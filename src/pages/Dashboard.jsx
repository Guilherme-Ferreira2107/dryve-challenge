import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => (
  <section>
    <h1>Dashboard</h1>
    <p>This is the dashboard.</p>

    <Link to="/contacts" className="button">
      View contacts
    </Link>
  </section>
);

export default Dashboard;
