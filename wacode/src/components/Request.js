import axios from "axios";

export const requestOzone = (lon, lat, time) => {
  axios({
    method: "get",
    url: "localhost:8080/ozone",
    params: { lon: lon, lat: lat, time: time },
  }).then(function(response) {
      console.log(console.log(response.data));
  }).catch(function(e) {
      console.log(error);
  });
};
