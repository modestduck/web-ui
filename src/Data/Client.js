import fetch from "node-fetch";
import log from "loglevel";

const METHOD = {
  POST: "POST",
  GET: "GET",
};

export default class Client {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async get(path) {
    log.trace("Client => get(path)", path);
    const url = `${this.baseUrl}/${path}`;
    log.debug("Client => get => url", url);
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }

  async post(path, data) {
    log.trace("Client => post(path, data)", path);
    const url = `${this.baseUrl}/${path}`;
    const options = {
      method: METHOD.POST,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    log.debug("Client => get => url, options", url, options);
    return new Promise((resolve, reject) => {
      fetch(url, options)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }
}
