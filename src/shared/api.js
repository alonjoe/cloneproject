import axios from "axios";

const Api = axios.create({
    baseURL: "https://virtserver.swaggerhub.com/Ohjinwoo/clone/1.0.0",
});

const subApi = axios.create({
  baseURL: "https://624ff4c4e3e5d24b34192201.mockapi.io/",
});

Api.defaults.headers.common["authorization"] = `Bearer ${localStorage.getItem(
    "token"
)}`;

export const Apis = {
  loadDetail: (productId) => Api.get(`api/product/detail/productId`),
  loadReview: (productId) => subApi.get(`review`),
};