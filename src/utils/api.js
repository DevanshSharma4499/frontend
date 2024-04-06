import axios from "axios";

// const API_URL = "http://localhost:1337"; // Your Strapi API URL

export const fetchOrders = async () => {
  try {
    const response = await axios.get(`http://localhost:1337/orders`);
    return response.data;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
};