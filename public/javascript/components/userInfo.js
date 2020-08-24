$(() => {
  

  const $userContainer = $(`
  <div>
  User container
  </div>
  `);

  window.$userContainer = $userContainer;

    function userInfo(user){
     let html =  `
    <h3>Information about ${user.name}</h3>
    <ul>
    <li>telephone: ${user.tel}</li>
    <li>email: ${user.email}</li>
    </ul>
    `
  $userContainer.append(html);
  };
    window.userInfo = userInfo;


    function clearUser() {
      $userContainer.empty();
    }

    function addUserInfo() {
      clearUser();
      getMyDetails().then((data) => {
        userInfo(data.user);
      });
    }
    window.addUserInfo = addUserInfo;

});
