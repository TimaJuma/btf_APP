$(() => {
    const $moreContainer = $(`
    <div class="more_container">
    </div>
    `);
  
    window.$moreContainer = $moreContainer;
  
      function moreInfo(user, item, messages){
        let post_image;
        
        if (item.img_url) post_image = item.img_url;
        else post_image = "https://www.catster.com/wp-content/uploads/2016/10/perfect-cat-photos-Penny-600x600.jpg"

    let html = `
    <div class="more_info_box">
      <!-- info owner + pic  -->
      <div class="more_info_box-left">
      <img class="more_info-img" src="${post_image}" alt="${item.title}">
      <div class="dark-header"> <button class="like-btn" id="${user.id}" value="${user.id}" data-user_id="${user.id}"><span class="heart">&#9829;</span></button></div>
      <div class="more_info-price"><i class="fa fa-money" aria-hidden="true"></i> ${item.price / 100.0} CAD</div>
      <div class="more_info-city"><i class="fa fa-map-marker" aria-hidden="true"></i> ${item.city} </div>   
      
      <div class="owner">
      <h5>Owner: ${item.name} <span class="small_info"> ( <i class="fa fa-phone" aria-hidden="true"></i> ${item.tel}&nbsp;&nbsp;&nbsp;
      <i class="fa fa-envelope" aria-hidden="true"></i> ${item.email} ) </span></h5>
      
        
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
          <button class="btn-send" type="submit" data-item="${item.id}" value="${item.user_id}">&#8595;</button>
            <textarea rows="1" class="send_message" name="field3" placeholder="Message to ${item.name}"></textarea> 
            </div>
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
      if (message.sender_id !== user.id) {
        const div = document.createElement('div')
        // let name = item.name
        // let id = item.id
        let time = item.date_of_post
       
        let newTime = new Date(time).toLocaleString('en-US');
        div.classList.add("msg-from")
        let rightMsg = 
        `
        <span class="info-msg"><i class="fa fa-envelope" aria-hidden="true"></i> ${message.email} &nbsp; <i class="fa fa-phone" aria-hidden="true"></i> ${message.tel}</span>
        <span class="name-msg"> ~ ${message.name}</span> 
        <div class="msg-from-text">${message.message}</div>
        <span class="time">${newTime}</span>
        
  

        `;
      div.innerHTML = rightMsg;
      msgBox.append(div)
      }
      else {
        const div = document.createElement('div')
        let time = item.date_of_post
        let name = item.name
        let newTime = new Date(time).toLocaleString('en-US');
        div.classList.add("msg-to")
        let leftMsg = 
        `
            <div class="msg-to-text">${message.message}</div>
            <span class="time">${newTime}</span>
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
          const userID = data[0].user.id
          const filteredMsg = data[2].messages.filter(msg => msg.item_id == itemData.id)
          moreInfo(data[0].user, itemData, filteredMsg);
        });
      }
      window.addMoreInfo = addMoreInfo;


  
  });