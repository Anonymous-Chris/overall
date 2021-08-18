import axios from "axios";

const tableapi = (url) =>
  axios
    .get(url)
    .then((res) => {
      return res.data;
    })
    .catch(() => {
      console.log("Error in getting api data");
    });

export default tableapi;
