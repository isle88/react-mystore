import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export async function fetchProducts() {
  try {
    let res = await api.get(`/products`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchProduct(id) {
  try {
    let res = await api.get(`/products/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function postProduct(input) {
  try {
    let res = await api.post(`/products`, input);
    return res.data.id;
  } catch (error) {
    console.log(error);
  }
}
