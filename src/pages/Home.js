import React, { useState } from "react";
import "../css/home.css";
import { useTranslation } from "react-i18next";
function Home() {
  const [active, setActive] = useState(1);
  const { i18n } = useTranslation();

  const changeLanguage = (e, lng) => {
    i18n.changeLanguage(lng);
    setActive(e);
  };
  return (
    <div className="home">
      <h1>Introduction</h1>
      <h5>
        This project has few of the features I wanted to learn on the process
        and which might be essential in future. It also uses different
        environment variables for test, dev and prod.
        <p>
          {" "}
          Below is an implementation of
          <b>
            <i> Localization/Internalization</i>
          </b>{" "}
          feature.
        </p>
      </h5>
      <h3>Localization (Change language from the following)</h3>
      <div className="navbar_language">
        <button
          className={active === 1 ? "active" : ""}
          onClick={(e) => changeLanguage(1, "en")}
        >
          en
        </button>
        <button
          className={active === 2 ? "active" : ""}
          onClick={(e) => changeLanguage(2, "np")}
        >
          np
        </button>
        <button
          className={active === 3 ? "active" : ""}
          onClick={(e) => changeLanguage(3, "ru")}
        >
          ru
        </button>
      </div>
    </div>
  );
}

export default Home;
