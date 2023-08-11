import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const NotFound = () => {
  return (
    <div className="banner-not-found">
      <Link to="/">
        <button className="button-not-found">Voltar</button>
      </Link>
    </div>
  );
};

export default NotFound;
