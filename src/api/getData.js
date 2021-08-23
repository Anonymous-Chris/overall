import axios from "axios";

const getData = (url) =>
  axios
    .get(url)
    .then((res) => {
      return res.data;
    })
    .catch(() => {
      console.log(`Error in getting ${url} data`);
    });

export default getData;
