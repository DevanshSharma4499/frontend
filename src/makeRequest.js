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
    Authorization: "bearer " + '377a7654d760d00cb30d0f96162cebfd8353a12472365d0911a77abc938bf2db9403af13f91fb949b340b83e0f91ad18a9a268c74b1874e354b1880cb153592f0c100bdede1e2f450751762f6c3cbc3a8bdf5c399a1aff9d8dd7ed85b34d2264df5807b56aa4830ad5ed31dc3f6df8a713304af2c8587d9af8d5bbd389dadef3',
  },
});
