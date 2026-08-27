import axious from "axious";


const baseUrl =process.env.VITE_API_BASE_URL;

const api = axious.create({
    baseURL:baseaUrl
})
api.interceptors.request.use((config)=>{
const token = localStorage.getItem("token");

config.headers.Authorization =`Bearer ${token}`;

return config;
}) 

export default api;