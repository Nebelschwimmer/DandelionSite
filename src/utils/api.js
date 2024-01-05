const onResponse = (res) => {
  return res.ok
    ? res.json()
    : Promise.reject('Error');
};

export const showUsers = () => {
  return fetch('https://viable-desk-production.up.railway.app/users', {
  }).then((res) => onResponse(res));
}

export const addNewUSer = (body) => {
  return fetch('https://viable-desk-production.up.railway.app/users/add', {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(body),
    
  }).then((res) => onResponse(res));
}

export const deleteUser = (_id) => {
  return fetch('https://viable-desk-production.up.railway.app/users/delete', {
    headers: {
      "Content-Type": "application/json"
    },
    method: "DELETE",
    body: JSON.stringify({_id: _id}),
    
  }).then((res) => onResponse(res));
}