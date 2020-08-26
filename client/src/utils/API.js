import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const BASEURL2 = "&projection=lite&key=" + process.env.REACT_APP_apiKey;

export default {
  search: function(query) {
    return axios.get(BASEURL + query + BASEURL2);
  }
};