import axios from "axios";
console.log("API URL:", process.env.REACT_APP_API_URL);
const api = axios.create({
  baseURL:process.env.REACT_APP_API_URL,
});

// request interceptor
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// response interceptor
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      try {
        const refresh = localStorage.getItem("refresh");

        const res = await axios.post(
          "http://127.0.0.1:8000/api/auth/token/refresh/",
          { refresh }
        );

        const newAccess = res.data.access;
        localStorage.setItem("access", newAccess);

        error.config.headers.Authorization = `Bearer ${newAccess}`;
        return api(error.config); 

      } catch {
        localStorage.clear();
      }
    }

    return Promise.reject(error);
  }
);

export default api;