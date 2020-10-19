const Axios=require("axios");

const instance=Axios.default.create({
    baseURL:"http://localhost:5001/e-clone-ca5e3/us-central1/api"  //CLOUD FUNCTION URL
});
export default instance;