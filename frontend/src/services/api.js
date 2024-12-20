// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:5000/api",
//   withCredentials: true,
// });

// export const setAuthToken = (token) => {
//   if (token) {
//     api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//   } else {
//     delete api.defaults.headers.common["Authorization"];
//   }
// };

// export const uploadFile = async (file) => {
//   try {
//     const formData = new FormData();
//     formData.append("file", file);

//     const response = await api.post("/upload", formData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//       onUploadProgress: (progressEvent) => {
//         const percentCompleted = Math.round(
//           (progressEvent.loaded * 100) / progressEvent.total
//         );
//         console.log(`Upload progress: ${percentCompleted}%`);
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("File upload error:", error);
//     throw error;
//   }
// };

// export const login = async (data) => {
//   // Correct export
//   try {
//     const response = await api.post("/auth/login", data);
//     if (response.data.token) {
//       setAuthToken(response.data.token);
//     }
//     return response.data;
//   } catch (error) {
//     throw error.response ? error.response.data : error;
//   }
// };

// export const register = async (data) => {
//   // Correct export
//   try {
//     const response = await api.post("/auth/register", data);
//     return response.data;
//   } catch (error) {
//     throw error.response ? error.response.data : error;
//   }
// };

// export default api; // Default export for the axios instance
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // Replace with your backend API URL
  withCredentials: true, // Important for cookies
});

export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

export const uploadFile = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    const response = await api.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("File upload error:", error);
    throw error;
  }
};

export default api;
