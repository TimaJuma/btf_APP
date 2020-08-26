$(() => {
    const $moreContainer = $(`
    <div class="more_container">
    </div>
    `);
  
    window.$moreContainer = $moreContainer;
  
      function moreInfo(user){
       let html =  `
       <div class="more_info_box">
    <div class="more_info_box-left">
    <img class="more_info-img" src="https://www.catster.com/wp-content/uploads/2016/10/perfect-cat-photos-Penny-600x600.jpg" alt="cat">
    </div>
    
    <div class="more_info_box-right">
     <h2 class="more_info-header">Table</h2>
     <div class="more_info-desc">Description: Such a wonderful table to buy! Used, but looks like new! The price is really low right now. </div>
     <div class="more_info-city">City: Vancouver </div>
     <div class="more_info-price">Price: $ 100 CAD </div>
     <button class="like-btn more_info-heart><span class="more_info-heart">&#9829;</span></button>

     <h2>Owner info:</h2>
     <ul>
     <li> name: ${user.name} </li>
     <li>telephone: ${user.tel}  </li>
     <li>email: ${user.email} </li>
     </ul>

     </div>
     
[<div>


     </div>
      `
    $moreContainer.append(html);
    };
      window.moreInfo = moreInfo;
  
  
    


      function clearUser() {
        $moreContainer.empty();
      }
  
      function addMoreInfo() {
        clearUser();
        getMyDetails().then((data) => {
          moreInfo(data.user);
        });
      }
      window.addMoreInfo = addMoreInfo;
  
  });