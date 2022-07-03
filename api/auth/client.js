import { create } from "apisauce";

const apiClient = create({
    baseURL: "http://192.168.8.164:4000/user",
});;

// const get = apiClient.get;
// apiClient.get = async (url,params, axiosConfig) => {
//     const response = await get(url, params,axiosConfig);

//     if(response.ok){

//     }
// }

export default apiClient;