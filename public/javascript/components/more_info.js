$(() => {
    const $moreContainer = $(`
    <div class="more_container">
    </div>
    `);
  
    window.$moreContainer = $moreContainer;
  
      function moreInfo(user, item, messages){
        let render_image;

    let html = `
    <div class="more_info_box">
      <!-- info owner + pic  -->
      <div class="more_info_box-left">
      <img class="more_info-img" src="https://www.catster.com/wp-content/uploads/2016/10/perfect-cat-photos-Penny-600x600.jpg" alt="cat">
      <div class="dark-header"> <button class="like-btn" id="${user.id}" value="${user.id}" data-user_id="${user.id}"><span class="heart">&#9829;</span></button></div>
      <div class="more_info-price">Price: $ ${item.price / 100.0}</div>
      <div class="more_info-city">City: ${item.city} </div>   
      
      <div class="owner">
      <h5>Owner: ${item.name}</h5>
        <ul>
          <li>telephone: ${item.tel}  &#9830; email: ${item.email} </li>
        </ul>
      </div>

      </div> 
  
  
      <!-- Item INFO  -->
        <div class="more_info_box-right">
        <h2 class="more_info-header">${item.title}</h2>
          <div class="more_info-desc">${item.description}</div>
        </div>


      <!-- Messages  -->
      <div class="messaging">
        <form>
          <div class="msg-send">
            <textarea rows="1" class="send_message" name="field3" placeholder="Message"></textarea> <input class="btn-send" type="submit" value="&#8593;" /></div>
      </form>
      
      <div class="msg-itself">
      </div>

      </div>

    </div>
    `;




    $moreContainer.append(html);
    
    // iterate over messages and append proper message form to messaging box
        const msgBox = document.querySelector('.msg-itself');

    for (message of messages) {
      if (message.sender_id == user.id) {
        const div = document.createElement('div')
        div.classList.add("msg-from")
        let rightMsg = 
        `

        <div class="msg-from-text">${message.message}</div>

        `;
      div.innerHTML = rightMsg;
      msgBox.append(div)
      }
      else {
        const div = document.createElement('div')
        div.classList.add("msg-to")
        let leftMsg = 
        `
            <div class="msg-to-text">${message.message}</div>
        `;
        div.innerHTML = leftMsg;
        msgBox.append(div);
      }
    }

    };
      window.moreInfo = moreInfo;
  
     
    


      function clearUser() {
        $moreContainer.empty();
      }
  
      function addMoreInfo(item_id) {
        clearUser();
        Promise.all([getMyDetails(), getAllListings(), getAllMessages()])
        .then((data) => {
          let itemData;
          for (const item of data[1].properties){
            if (item.id == item_id) itemData = item
          }
          console.log('ItemDAta', itemData)
          const userID = data[0].user.id
          const filteredMsg = data[2].messages.filter(msg => msg.item_id == itemData.id)
          console.log('Filtered MSG', filteredMsg);
          moreInfo(data[0].user, itemData, filteredMsg);
        });
      }
      window.addMoreInfo = addMoreInfo;
  
  });