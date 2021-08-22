import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import FadeLoader from "react-spinners/FadeLoader";
import React from "react";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  border-color: blue;
  margin-left: auto;
  margin-right: auto;
  margin-top: 42vh;
`;

function Loader(props) {
  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setLoading(props.loading);
    setColor("#ffffff");
  }, [props.loading]);

  return (
    <div className="sweet-loading" style={{background:'black'}}>
      {loading && (
        <FadeLoader color={color} loading={loading} css={override} size={150} />
      )}
    </div>
  );
}

export default Loader;
