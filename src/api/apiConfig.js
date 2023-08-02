import axios from "axios";
import { sounds } from "../assets";

export const baseURL = "https://famous-bear-kimono.cyclic.app";

const playSoundEffect = () => {
  const scriptURL = new URL(import.meta.url);

  const soundURL = new URL(sounds.interfaceSound, scriptURL).toString();

  const audio = new Audio(soundURL);
  audio.play();
};

export const callApi = async (method, url, data = null, headers = {}) => {
  try {
    if (method.toUpperCase() === "POST") {
      // Play sound effect for POST method
      playSoundEffect();
    }

    const response = await axios({
      method,
      url: baseURL + url,
      data,
      headers,
    });

    return response.data;
  } catch (error) {
    // Handle error here
    // console.error("API call error:", error);
    throw error.response.data || error;
  }
};
