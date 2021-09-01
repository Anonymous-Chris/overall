import React from "react";
import "../css/home.css";
import { Trans, useTranslation } from "react-i18next";
function Home() {
  const { t, i18n } = useTranslation();
  console.log(i18n.language);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="home">
      <h1>{t("home.introduction__title")}</h1>
      <h5>
        <Trans
          i18nKey="home.introduction__text"
          components={{ b: <b />, i: <i />, p: <p /> }}
        >
          home.introduction__text
        </Trans>
      </h5>
      <h3 style={{ marginTop: "5px" }}>{t("home.localization__title")}</h3>
      <div className="navbar_language">
        <button
          className={i18n.language === "en" ? "active" : ""}
          onClick={() => changeLanguage("en")}
        >
          en
        </button>
        <button
          className={i18n.language === "np" ? "active" : ""}
          onClick={() => changeLanguage("np")}
        >
          np
        </button>
        <button
          className={i18n.language === "ru" ? "active" : ""}
          onClick={() => changeLanguage("ru")}
        >
          ru
        </button>
      </div>
    </div>
  );
}

export default Home;
