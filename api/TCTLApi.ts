const TCTLApi = {
  async post(url, body) {
    return await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};

export default TCTLApi;
