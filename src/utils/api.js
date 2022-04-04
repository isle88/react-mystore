import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export const fetchProducts = () => {
    return api.get('/products')
    .then(({ data }) => {
        return data;
    })
    .catch(error => {
      console.log(error.response.data.error)
    })
}

export const fetchProduct = (id) => {
  return api.get(`/products/${id}`)
  .then(({ data }) => {
    return data;
  })
  .catch(error => {
    console.log(error.response.data.error)
  })
}