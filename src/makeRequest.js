import axios from "axios";
const params = {
  headers: {
    Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
  },
};

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(
        process.env.REACT_APP_API_URL_UPLOAD + url,
      params
    );
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
export const makeRequest = axios.create({
  baseURL: 'http://localhost:1337/api',
  headers: {
    Authorization: "bearer " + '83f7fed96d560ed14345ce0ebca6f8b2c41af9767f59b8b8d662ab5601fd1eac9b147eafc8050301d19bd855b0c5100c1740bde409d57cea93df03ed9fd893a5af09643333611bba0daced5476257e8d364390d1f695be1018ebe94e9187c2cc619ecaac491363648efb5e255a9fe1ca5f87e2bae3eec139bff2e1c4778e43d5',
  },
});
