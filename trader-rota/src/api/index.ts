import axios from "axios";

export const getTraderRotaInfo = () =>
  axios({
    method: "get",
    url: "http://100.90.196.20:8080/prev",
    responseType: "json",
    params: {
      format: "json",
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
