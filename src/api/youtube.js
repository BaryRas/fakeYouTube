import axios from "axios";
import { URL } from "./api";

export default axios.create({
  baseURL: URL
});
