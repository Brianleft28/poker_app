export const getDeck = async () => {
  const url = "http://localhost:3000/api/v1/deck";
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      api_key: "e95838ba4e61a1ca91b816f14ef4a3f0",
    },
  };
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
