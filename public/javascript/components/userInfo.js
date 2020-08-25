$(() => {
  

  const $userContainer = $(`
  <div class="user_container">
  
  </div>
  `);

  window.$userContainer = $userContainer;

    function userInfo(user){
     let html =  `
   <div class="user_info_box">
   <h3>My account:  <span class="bold_name">${user.name}</span></h3>
   telephone: ${user.tel} <br>
   email: ${user.email}
   <div>
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
