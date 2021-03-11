const validMethods = ["GET", "POST", "PUT", "PATCH", "DELETE"];

export default function fetchData(method, whatIsIt="", name="", body="", id="") {
  if (!validMethods.includes(method)) {
    return;
  }

  if (method === "GET") {
    return fetch(`https://travel-app-back-113.herokuapp.com/api/${whatIsIt}/${name}`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return fetch(`https://travel-app-back-113.herokuapp.com/api/${whatIsIt}/${id}`, {
    method: method,
    body: body,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
