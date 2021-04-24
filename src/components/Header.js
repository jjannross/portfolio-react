import React from "react";

function Header() {

return (
    <header className="header w-100 bg-dark text-white">
      <h1>Jennifer Smith</h1>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <a
            className="nav-link bg-secondary text-white"
            id="home-tab"
            data-toggle="tab"
            href="/"
            role="tab"
            aria-controls="home"
            aria-selected="true"
            >Home</a
          >
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link bg-secondary text-white"
            id="profile-tab"
            data-toggle="tab"
            href="/projects"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
            >Portfolio</a
          >
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link active"
            id="contact-tab"
            data-toggle="tab"
            href="/contact"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
            >Contact</a
          >
        </li>
      </ul>
    </header>
    );
    }

    export default Header; 