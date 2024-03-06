import axios from "axios";

const url = "http://localhost:3000/user";
const loginHandler = {
    async get() {
        return axios.get(url).then((result) => result.data);
    },
}

export default loginHandler