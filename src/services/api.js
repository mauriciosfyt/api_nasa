import axios from 'axios';

const BASE_URL = 'https://api.nasa.gov/planetary/apod';
const API_KEY = 'DEMO_KEY';

export const fetchNasaImageOfTheDay = async () => {
  try {
    const response = await axios.get(`${BASE_URL}?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados da API da NASA", error);
    throw error;
  }
};
