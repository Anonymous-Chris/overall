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
      <div className="home__homeimage row m-0">
        {" "}
        <img
          className="col-12 col-sm-12 col-md-12 col-lg-6 p-1"
          src={t("home.homeimg1")}
          alt="home_image1"
        />
        <img
          className="col-12 col-sm-12 col-md-12 col-lg-6 p-1"
          src={t("home.homeimg2")}
          alt="home_image2"
        />
      </div>
    </div>
  );
}

export default Home;
