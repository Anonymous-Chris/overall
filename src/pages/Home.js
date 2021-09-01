import React from "react";
import "../css/home.css";
function Home() {
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
    </div>
  );
}

export default Home;
