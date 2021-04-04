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

async function putQuery(uri, query) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(query),
  };
  const response = await fetch(uri, requestOptions);
  const data = await response.json();
  return {data: data, status: response.status};
}

async function deleteQuery(uri) {
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  };
  const response = await fetch(uri, requestOptions);
  const data = await response.json();
  return {data: data, status: response.status};
}

export { postQuery, putQuery, deleteQuery };
