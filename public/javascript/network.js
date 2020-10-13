function getMyDetails() {
  return $.ajax({
    url: "/users/me",
  });
}

function logOut() {
  return $.ajax({
    method: "POST",
    url: "/users/logout",
  })
}

function logIn(data) {
  return $.ajax({
    method: "POST",
    url: "/users/login",
    data
  });
}

function signUp(data) {
  return $.ajax({
    method: "POST",
    url: "/users",
    data
  });
}

function getAllListings(params) {
  let url = "/api/items";
  if (params) {
    url += "?" + params;
  }
  return $.ajax({
    url,
  });
}

function addAllItems() {
  let url = "/api/reservations";
  return $.ajax({
    url,
  });
}

function addtoFavs(data) {
  return $.ajax({
    method: "POST",
    url: "/api/favorites",
    data,
  });
}

function addNewMessage(data) {
  return $.ajax({
    method: "POST",
    url: "/api/messages",
    data,
  });
}

function removeFromFavs(data) {
  return $.ajax({
    method: "POST",
    url: "/api/favorites/delete",
    data,
  });
}

function getAllMessages() {
  let url = "/api/messages";
  return $.ajax({
    url,
  });
}

const submitProperty = function(data) {
  return $.ajax({
    method: "POST",
    url: "/api/items",
    data,
  });
}