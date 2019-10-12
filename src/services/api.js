import axios from 'axios';

const api = axios.create({
  baseURL: "https://ddragon.leagueoflegends.com/cdn/9.3.1/data/pt_BR/champion.json",
});

export default api;
