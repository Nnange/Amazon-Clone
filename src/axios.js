import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/amaclone-8e713/us-central1/api", // the API Url
});

export default instance;
