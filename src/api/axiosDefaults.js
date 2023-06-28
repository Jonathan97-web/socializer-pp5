import axios from "axios";

axios.defaults.baseURL =
  "https://socializer-pp5-api-aa36f444d240.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;
