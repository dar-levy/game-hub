import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c789d0fad4ad42ebad9c53132c22609e",
  },
});
