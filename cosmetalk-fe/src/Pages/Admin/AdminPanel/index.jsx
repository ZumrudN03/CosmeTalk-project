import React from "react";
import { Helmet } from "react-helmet-async";
import "./index.scss"

function AdminPanel() {
  return (
    <>
      <Helmet>
        <title>Admin Panel</title>
      </Helmet>
      <div className="adminPanel">
        {/* <p>Hello,Admin</p> */}
      </div>
    </>
  );
}

export default AdminPanel;
