import React from "react";
import { Helmet } from "react-helmet-async";

function AdminPanel() {
  return (
    <>
      <Helmet>
        <title>Admin Panel</title>
      </Helmet>
      <div className="adminPanel"></div>
    </>
  );
}

export default AdminPanel;
