import axios from "axios";

const fetchProvinces = async () => {
  try {
    const response = await axios.get(
      "https://api.rajaongkir.com/starter/province",
      {
        headers: {
          key: "YOUR_API_KEY", // Replace with your actual API key from RajaOngkir
        },
      }
    );
    return response.data.rajaongkir.results; // Adjust according to the API response structure
  } catch (error) {
    console.error("Error fetching provinces:", error);
    throw error;
  }
};

export default fetchProvinces;
