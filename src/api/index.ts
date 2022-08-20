import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => axios.create({ baseURL: 'https://jsonplaceholder.typicode.com' });
