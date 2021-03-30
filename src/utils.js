async function postQuery(uri, query) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(query),
  };
  const response = await fetch(uri, requestOptions);
  const data = await response.json();
  return data;
}

export { postQuery };
