import axios from "axios";
const BASEURL = "https://api.sheety.co/a39d41fd-bd44-4533-9fca-742e97e5f03a";


export default {
  search: function (query) {
    return axios.get(BASEURL + query);
  }
};