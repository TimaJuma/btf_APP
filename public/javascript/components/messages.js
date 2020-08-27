$(() => {
  console.log('content loaded from messages.js');
  $(document).on('click', '.like-btn', function() {
    const button = $(this);
    console.log('this button pressed', button.val());
    getAllMessages()
    .then(returned => {
      const filtered_msg = returned.messages.filter(msg => msg['item_id'] == 22)
      console.log('filtered_msg', filtered_msg) 
    })
  });




  $(document).on('click', '.btn-send', function(event) {
    event.preventDefault();
    const button = $(this);
    let text_msg = $('.send_message');
    const msgBox = document.querySelector('.msg-itself');
    console.log('btn-send button pressed', button.val(), text_msg.val(), button.data().item);
 
  addNewMessage({text_body: text_msg.val(), reciever_id: button.val(), item_id: button.data().item}) 
  .then(getAllMessages)
  .then(getAllMessages)
  .then(res => { 
    console.log('res messages ALL:' , res.messages[0])

      if (res.messages[0].reciever_id == button.val()) {
        const div = document.createElement('div')
        let time = res.messages[0].message_date
        let newTime = new Date(time).toLocaleString('en-US');
        div.classList.add("msg-to")
        let rightMsg = 
        `

        <div class="msg-to-text">${res.messages[0].message}</div>
        <span class="time">${newTime}</span>

        `;
      div.innerHTML = rightMsg;
      msgBox.prepend(div)
      }
      else {
        const div = document.createElement('div')
        div.classList.add("msg-from")
        let leftMsg = 
        `
            <div class="msg-from-text">${res.messages[0].message}</div>
            <span class="time">${newTime}</span>
       
        `;
        div.innerHTML = leftMsg;
        msgBox.prepend(div);
      }
  })

  text_msg.val("");

  });

});