const API_URL = "https://us-central1-nabilshahid-3baff.cloudfunctions.net/api";

export function recordUserVisit() {
  let clientInfo = {};
  if (navigator) {
    clientInfo = {
      UserAgent: navigator.userAgent || "",
      Platform: navigator.platform || "",
      Languages: navigator.languages,
      LocalTime: new Date().toString(),
    };
  }

  makePostRequest("recordVisit", clientInfo);
}

function makePostRequest(method, body) {
  const options = {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  };

  // send POST request
  fetch(API_URL + "/" + method, options)
    .then((res) => res.json())
    .then((res) => console.log(res));
}
