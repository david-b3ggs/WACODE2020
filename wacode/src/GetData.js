import axios from "axios";

const backend = "localhost:8080";

export function ozoneLocation(lon, lat, time) {
  axios
    .post(backend + "ozone", null, {
      params: {
        lon,
        lat,
        time
      }
    })
    .then(response => response.status)
    .catch(err => console.warn(err));
}
