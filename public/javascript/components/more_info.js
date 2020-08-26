$(() => {
    const $moreContainer = $(`
    <div class="more_container">
    </div>
    `);
  
    window.$moreContainer = $moreContainer;
  
      function moreInfo(user, item){
       let html =  `
       <div class="more_info_box">
    <div class="more_info_box-left">
    <img class="more_info-img" src="https://www.catster.com/wp-content/uploads/2016/10/perfect-cat-photos-Penny-600x600.jpg" alt="cat">
    <div class="dark-header"> <button class="like-btn" id="${user.id}" value="${user.id}" data-user_id="${user.id}"><span class="heart">&#9829;</span></button></div>
    <div class="more_info-price">Price: $ ${item.price / 100.0}</div>
    <div class="more_info-city">City: ${item.city} </div>

   <div class="owner">
   <h5>Owner: ${item.name}</h5>
   <ul>
   <email:>telephone: ${item.tel}  &#9830; email: ${item.email} </li>
   </ul>
   </div>
    </div>
    
    <div class="more_info_box-right">
   <h2 class="more_info-header">${item.title}</h2>
     <div class="more_info-desc">${item.description}</div>
    

     

     </div>
     <div class="messaging">
     <div class="msg-itself">
     <div class="msg-to">
     <div class="msg-to-text">Hi, just buy it! The price is reaaly low for that unit! </div>
     <div class="empty-line"></div>
     <div class="msg-to-text">Hi, just buy it! The price is reaaly low for that unit! </div>
     <div class="empty-line"></div>
     <div class="msg-to-text">Hi, just buy it! The price is reaaly low for that unit! </div>
     <div class="empty-line"></div>
     <div class="msg-to-text">Hi, just buy it! The price is reaaly low for that unit! </div>
     <div class="empty-line"></div>
     </div>

     <div class="msg-from">
     <div class="empty-line"></div>
     <div class="msg-from-text">Hello! I really like that table</div>
     <div class="empty-line"></div>
     <div class="msg-from-text">Hello! I really like that table</div>
     <div class="empty-line"></div>
     <div class="msg-from-text">Hello! I really like that table</div>
     <div class="empty-line"></div>
     <div class="msg-from-text">Hello! I really like that table</div>
     <div class="empty-line"></div>
     <div class="msg-from-text">Hello! I really like that table</div>
     </div>
     </div> 

     <form>
     <div class="msg-send">
     <textarea rows="1" class="send_message" name="field3" placeholder="Message"></textarea> <input class="btn-send" type="submit" value="&#8593;" /></div>
     </div>
     </form>
    <div>


     </div>
      `
    $moreContainer.append(html);
    };
      window.moreInfo = moreInfo;
  
     
    


      function clearUser() {
        $moreContainer.empty();
      }
  
      function addMoreInfo(item_id) {
        clearUser();
        Promise.all([getMyDetails(), getAllListings()])
        .then((data) => {
          let itemData;
          for (const item of data[1].properties){
            if (item.id == item_id) itemData = item
          }
          console.log('ItemDAta', itemData)
          moreInfo(data[0].user, itemData);
        });
      }
      window.addMoreInfo = addMoreInfo;
  
  });