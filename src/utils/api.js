const onResponse = (res) => {
  return res.ok
    ? res.json()
    : Promise.reject('Error');
};

export const showUsers = () => {
  return fetch('/users', {
  }).then((res) => onResponse(res));
}

export const addNewUSer = (body) => {
  return fetch('/users/add', {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(body),
    
  }).then((res) => onResponse(res));
}

export const deleteUser = (_id) => {
  return fetch('/users/delete', {
    headers: {
      "Content-Type": "application/json"
    },
    method: "DELETE",
    body: JSON.stringify({_id: _id}),
    
  }).then((res) => onResponse(res));
}