import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export const fetchProducts = () => {
    return api.get('/products')
    .then(({ data }) => {
        return data;
    })
}