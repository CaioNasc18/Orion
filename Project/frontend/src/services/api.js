const API_URL = "http://localhost:3000";

export const getHello = async () => {
  const response = await fetch(API_URL);
  return await response.text();
};