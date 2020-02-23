import axios from "axios";

export async function requestOzone(lon, lat, time) {
  //console.log(lon, lat, time, "INSIDE OZONE");
  return await axios({
    headers:{
      "Access-Control-Allow-Origin": "*",
    },
    method: "get",
    port: "8080",
    url: "http://localhost:8080/ozone",
    params: { lon: lon, lat: lat, time: time },
  }).then(function(response) {
      console.log(console.log(response.data));
      return response;
  }).catch(function(error) {
      console.log(error);
  });
};

export async function requestAll(lon, lat, time) {
  return await axios({
    headers:{
      "Access-Control-Allow-Origin": "*",
    },
    method: "get",
    port: "8080",
    url: "http://localhost:8080/filltheus",
    params: { lon: lon, lat: lat, time: time },
  }).then(function(response) {
      //console.log(console.log(response.data));
      return response;
  }).catch(function(error) {
      console.log(error);
  });
};
