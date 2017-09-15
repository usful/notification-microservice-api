const BASE_URL = "http://localhost:8080/";
const API_PREFIX = `${BASE_URL}api/`;

let CONFIG = {
  BASE_URL,
  API_PREFIX,
};

function set(newConfig) {
  CONFIG = newConfig;
}

module.exports = {
  config: CONFIG,
  set
}